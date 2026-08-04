"use client";

import { useState } from "react";
import Header from "../header";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSend() {
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const error = await response.json().catch(() => null);
        setStatus(error?.error || "Failed to send message.");
      } else {
        setStatus("Message sent successfully.");
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
        <p>If you want to activate the contact action, click the button below.</p>
        <button type="button" onClick={handleSend} disabled={loading}>
          {loading ? "Sending..." : "Send Contact Request"}
        </button>
        {status ? <p>{status}</p> : null}
      </div>
    </div>
  );
}
