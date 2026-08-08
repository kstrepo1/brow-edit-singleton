"use client";

import { usePathname } from "next/navigation";


export default function Footer() {
  const pathname = usePathname();

  return (
  <>
    <div className="footerBar">

    </div>
  </>
  );
}
