"use client";

import { usePathname } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";


export default function Footer() {
  const pathname = usePathname();

  return (
  <>
  <div className="footerBar">
  <div className="mx-auto flex max-w-[800px] flex-col gap-6 p-5 md:flex-row">
    
    {/* Left Column */}
    <div className="flex flex-3 flex-col items-center text-center md:items-start md:text-left">
      <div className="font-semibold text-s ">The Brow Edit Studio</div>
      <div className="text-xs">ABN: 25 522 140 582</div>
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
