"use client";

import { sendGTMEvent } from "@next/third-parties/google";

export default function Footer() {
  return (
    <>
      <div className="footerBar">
        <div className="mx-auto flex max-w-[800px] flex-col gap-6 p-5 md:flex-row">
          {/* Left Column */}
          <div className="flex flex-3 flex-col items-center text-center md:items-start md:text-left">
            <div className="font-semibold text-s ">The Brow Edit Studio</div>
            
            <div className=" text-xs leading-relaxed">
              <a
                href="tel:0421197333"
                className="hover:underline text-xs"
                onClick={() => sendGTMEvent({ event: "buttonClicked", value: "call" })}
              >0421 197 333</a>
              <br/>
              84 John St,<br />
              Singleton NSW 2330
              <br />
              <a
                href="https://www.google.com/maps/dir//The+Brow+Edit,+84+John+St,+Singleton+NSW+2330/@-37.7950689,144.8841253,2711m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x6b0cb172a7519155:0x3932ac5aef96eb4!2m2!1d151.1657893!2d-32.5663148"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:opacity-80  text-xs hover:underline"
                onClick={() => sendGTMEvent({ event: "buttonClicked", value: "getDirections" })}
              >
                Get Directions
              </a>
              <div className="text-xs">ABN: 25 522 140 582</div>
            </div>

            {/* Social Links */}
            <div className="mt-3 flex items-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61580806370131"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="hover:opacity-70"
                onClick={() => sendGTMEvent({ event: "buttonClicked", value: "facebook" })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.775-1.63 1.57v1.88h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/thebrowedit.bytegan/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="hover:opacity-70"
                onClick={() => sendGTMEvent({ event: "buttonClicked", value: "instagram" })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.67 1.07-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.38-2.13C21.32 1.35 20.65.94 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.41-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-3 flex-col items-center justify-start text-center md:items-end md:text-right">
            <a href="/terms-and-conditions" className="text-sm hover:underline">Terms & Conditions</a>
            <a href="/privacy" className="mt-1 text-sm hover:underline">Privacy Policy</a>
          </div>

        </div>
      </div>
    </>
  );
}
