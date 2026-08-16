import Image from "next/image";
import Header from "../header";

export default function About() {
  return (
 <div>
    <Header/>   
    
    <div className="pageContent">

      <div>
        <h3 className="text-3xl">Cancellation policy</h3>
Cancellations made within 24 hours of your scheduled appointment will result in a 50% charge of the scheduled service. Missed appointments (no-shows) will be charged 100% of the scheduled service. By making an online booking, you agree to these cancellation terms.
      </div>

    </div>
  </div>
  );
}
