import Image from "next/image";
import Header from "./header";

export default function Home() {
  return (
    <div>
      <Header/>

      <div className="pageContent">
        <Image
        src="/banner.png"
        height={300}
        width={800}
        alt="A 3 split banner showing the practice chair in a warm and inviting environment, a fresh brow and lash treatment, and a photo of the founder, Tegan"
        
        />
        <div className="textBlock">
          <h2>The Brow Edit specialises in custom brows and lash lifts, completely tailored to you.</h2>
          

          Founded by Tegan, we are an inclusive space where everyone is welcome. Our goal is to make you feel confident, comfortable, and beautiful every time you visit.

          With 8 years of experience across New Zealand and Australia, we're excited to now be in Singleton, located inside the beautiful Haus of Artistry.

          We can't wait to meet you soon!
        </div>
      </div>
    </div>

     
  );
}
