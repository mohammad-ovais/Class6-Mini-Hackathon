import Image from "next/image" 
import Alto1 from "../Image/Alto1.png"
 import Link from "next/link"

 export default function Alto (){
    return(
      
     <div className=" bg-slate-100 flex flex-col items-center space-y-2">


        <div className="py-6 font-semibold text-2xl text-blue-950">Suzuki Alto 2024 Price in Pakistan, Images,Reviews & Specs</div> 

        <Image src={Alto1} alt="Alto1" width="250" height="250"/>

       <div className="flex flex-row space-x-4">
       <button className="py-2 px-3 rounded-md bg-blue-800 text-white text-sm ">Book a test drive</button>
       <button className="py-2 px-3 rounded-md bg-white text-blue-800 text-sm border border-blue-800">Request Bank Finance</button>
       <button className="py-2 px-3 rounded-md bg-white text-blue-800 text-sm border border-blue-800">Visit Place</button>
       <button className="py-2 px-3 rounded-md bg-white text-blue-800 text-sm border border-blue-800">Car Inspection</button>
         </div>

       <div className="py-6 text-xl"> Vehicle Description</div>

         <div className="flex flex-row space-x-48 text-xs">
          <div>MILAGE(KM/LITRE)</div>
          <div>Transmission </div>
          <div> Fuel </div> 
          <div>Engine</div>
         </div>

           <div className="flex flex-row font-medium space-x-24 text-xl" >
            <div>18 to 22</div>
            <div> Automatic & Manual</div> 
            <div> Petrol</div> 
            <div>658cc</div>
           </div> 

            <div className="flex flex-row text-green-700 space-x-2">
              <div>PKR</div> <div className="text-2xl">23.3-30.5 lacs</div>
            </div>
           
        <button className="py-2 px-6 rounded-md bg-blue-800 text-white ">
          <Link href="payment">Make Payment</Link></button>
           

         <br/>


     </div>
    )
  }