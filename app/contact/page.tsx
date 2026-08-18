"use client";

import { FormEvent, useState } from "react";
import Script from "next/script";
import Header from "../header";
import ContactSplit from "./contactsplit";
import MapandNumber from "./mapandnumber";
import Footer from "../footer";
import { sendGTMEvent } from "@next/third-parties/google";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

type Grecaptcha = {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
};

async function getRecaptchaToken(action: string): Promise<string | null> {
  const grecaptcha = (window as unknown as { grecaptcha?: Grecaptcha }).grecaptcha;

  if (!RECAPTCHA_SITE_KEY || !grecaptcha) {
    return null;
  }

  return new Promise((resolve, reject) => {
    grecaptcha.ready(() => {
      grecaptcha
        .execute(RECAPTCHA_SITE_KEY, { action })
        .then(resolve)
        .catch(reject);
    });
  });
}

export default function Contact() {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);

    const trimmedName = name.trim();
    const trimmedMessage = message.trim();
    const trimmedContactNumber = contactNumber.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedMessage) {
      setStatus("Please enter your name and message.");
      return;
    }

    if (!trimmedContactNumber && !trimmedEmail) {
      setStatus("Please provide either a contact number or an email address.");
      return;
    }

    setLoading(true);

    try {
      let recaptchaToken: string | null = null;
      try {
        recaptchaToken = await getRecaptchaToken("contact_form");
      } catch {
        setStatus("Unable to verify you're not a robot. Please try again.");
        setLoading(false);
        return;
      }

      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          contactNumber: trimmedContactNumber,
          email: trimmedEmail,
          message: trimmedMessage,
          recaptchaToken,
        }),
      });

      if (!response.ok) {
        const errorResponse = await response.json().catch(() => null);
        setStatus(errorResponse?.error || "Failed to send message.");
      } else {
        setStatus("Message sent successfully.");
        setName("");
        setContactNumber("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      setStatus("Unable to send message. Please try again.");
    } finally {
      setLoading(false);
      sendGTMEvent({ event: 'buttonClicked', value: 'formsubmission' })
    }
  }

  return (
    <div>
      <Header />
      {RECAPTCHA_SITE_KEY ? (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      ) : null}
      <div className="pageContent px-4 py-6 sm:px-6 lg:px-8 ">
        <MapandNumber/>
        <div className="mt-3"/>
        <ContactSplit />

        <form
          onSubmit={handleSubmit}
          className="mt-4 flex w-full max-w-2xl flex-col gap-4 rounded-xl border border-gray-200 bg-white/80 p-4 shadow-sm sm:p-6 dark:border-white/10 dark:bg-white/5"
        >
          <label className="flex flex-col gap-2 text-sm font-medium">
            <span>Name</span>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              placeholder=""
              className="w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium">
            <span>Contact Number</span>
            <input
              type="tel"
              value={contactNumber}
              onChange={(event) => setContactNumber(event.target.value)}
              placeholder="04......"
              className="w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium">
            <span>Email Address</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email address"
              className="w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium">
            <span>Message</span>
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
              placeholder="Your message"
              rows={5}
              className="w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-[var(--linkcorecolor)] px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {loading ? "Sending..." : "Send Contact Request"}
          </button>
        </form>
        {status ? <p className="mt-4 w-full max-w-2xl text-sm text-center sm:text-left">{status}</p> : null}
        
      </div>
      <Footer/>
    </div>
  );
}
