"use client";

import { useEffect, useRef } from "react";

export default function TimelyButton() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");

    script.id = "timelyScript";
    script.src =
      "https://book.gettimely.com/widget/book-button-v1.5.js";

    containerRef.current.appendChild(script);

    script.onload = () => {
      new (window as any).timelyButton("thebrowedit1", {
        style: "dark",
      });
    };

    return () => {
      // Clean up when navigating away
      script.remove();
    };
  }, []);

  return <div ref={containerRef} />;
}