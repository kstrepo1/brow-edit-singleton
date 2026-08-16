import Image from "next/image";
import Header from "../header";
import Footer from "../footer";

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
            Hi, I'm Tegan. Since 2017, I've dedicated my craft to creating soft, natural brows and lash lifts designed to enhance your unique features rather than overpower them. After years of refining my techniques alongside leading artists across Australia and New Zealand, I've brought that experience home to Singleton, NSW. Whether you're after effortless everyday definition or a subtle lift, my focus is always on gentle, tailored artistry that leaves you feeling effortlessly confident.
          </div>
        </div>  

      </div>
      <div>
        See some of my work below
      </div>
    </div>
    <Footer/>
  </div>
  );
}
