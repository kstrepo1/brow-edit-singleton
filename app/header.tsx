import Image from "next/image";

export default function Header() {
  return (
    <main>
      <div className="headerBar">
        <div className="headerLinks ">
        <a className="headerLink" href="/">Home</a>
        <a className="headerLink" href="/about">About</a>
        <a className="headerLink" href="/book">Book</a>
        <a className="headerLink" href="/contact">Contact</a>
        <a className="headerLink" href="/treatments">Treatments</a>
        <a className="headerLink" href="/faq">FAQ</a>
      </div>
      </div>
    </main>
    
  );
}
