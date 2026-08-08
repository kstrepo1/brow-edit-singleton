"use client";

import { FormEvent, useState } from "react";
import Header from "../header";

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
    }
  }

  return (
    <div>
      <Header />
      <div className="pageContent">
        <h1>Contact Us</h1>
        <p>Please complete the form below and include either a contact number or email address so we can get back to you.</p>
        <form onSubmit={handleSubmit} className="contactForm min-w-100">
          <label >
            Name: 
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              placeholder=""
              className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 dark:bg-white/5 dark:outline-white/10 dark:focus-within:outline-indigo-500"/>
          </label>
          <label>
            Contact Number: 
            <input
              type="tel"
              value={contactNumber}
              onChange={(event) => setContactNumber(event.target.value)}
              placeholder="04......"
              className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 dark:bg-white/5 dark:outline-white/10 dark:focus-within:outline-indigo-500"/>
          </label>
          <label>
            Email Address: 
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email address"
              className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 dark:bg-white/5 dark:outline-white/10 dark:focus-within:outline-indigo-500"/>
          </label>
          <label>
            Message*
            <br/>
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
              placeholder="Your message"
              rows={3}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                  />
          </label>
          <br/>
          <button type="submit" disabled={loading} className="border-0.5 border-gray-100 p-2">
          
            {loading ? "Sending... " : "Send Contact Request "}
          </button>
        </form>
        {status ? <p>{status}</p> : null}
      </div>
    </div>
  );
}
