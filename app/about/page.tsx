import Image from "next/image";
import Header from "../header";

export default function About() {
  return (
 <div>
    <Header/>   
    
    <div className="pageContent">

      <div className="flex">
        <div className="aboutBlock flex-column flex-1 m-10">
          
          <Image src="/tegan.jpg" height={200} width={200} alt="Image of the founder Tegan" className="rounded-full"/>
          
          <div className="mt-3">
            Tegan Sinclair
          </div>

          <div className="text-gray-400">
            Brow and Lash Artist
          </div>
          
        </div>
        <div className="flex-3 flex items-center">
          <div>
        Hi, I'm Tegan!

        Since beginning my career in 2017, I've specialised in creating soft, natural brows and lash lifts tailored to suit your unique features. With experience in both New Zealand and Australia, I've had the opportunity to learn from some of the best artists in the industry.

        I'm now based in Singleton, NSW, and can't wait to welcome you and help you feel your most confident.
       
          </div>
          </div>
      
      </div>
    </div>
  </div>
  );
}
