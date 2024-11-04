import Image from "next/image"
import Link from "next/link"
import Corolla1 from "./Image/Corolla1.jpg"
import Alto1 from "./Image/Alto1.png"
import City1 from "./Image/City1.jpg"
import Cover1 from "./Image/Cover1.jpg"

export default function Home(){
  return(
    <div> 
         <div className="text-center font-bold text-xl mt-4">
         <h1> Sell Your Car on Pak Wheels and Get the Best Price</h1>
         </div>
     <br/>

      <div className="flex justify-evenly items-center">
        <div>
        <h1 className="font-semibold text-purple-950">Post Your Ad on PakWheels</h1>
        <br/> <div>Post Your Ad For Free in 3 Easy Steps</div>
              <div>Get Genuine offers from Verified Buyers</div> 
              <div>Sell Your car Fast at the Best Price</div><br/>
        <button className="py-2 px-6 rounded-md bg-red-600 text-white">Post Your Ad</button>
        </div>

         <h1 className="font-semibold"> OR</h1>

        <div>
          <h1 className="font-semibold text-purple-950">Try PakWheels Sell It For Me</h1>
          <br/> <div>Dedicated Sales Expert to sell Your Car</div>
                <div> We Bargain for you and share the Best offer</div> 
                <div>We ensure Safe & Secure Transaction</div><br/>
          <button className="py-2 px-6 rounded-md bg-blue-600 text-white" >Register Your Car</button>
      </div>

      </div> 
             <br/>


          <div className="px-20 py-4 bg-slate-100 ">
              <div className="flex justify-between">
               <div className="flex justify-start ml-20 font-semibold">Featured New Cars</div>
               <div className="flex justify-end text-xs mr-20">View All New Cars</div>
              </div>
                <br/> 

            <div className="flex flex-row justify-start ml-20 space-x-8">
              <div>Popular</div> 
              <div>Upcoming</div>
              <div>NewlyLaunched</div>
           </div> 


         <div className="flex flex-row py-2 px-20 justify-between">

              <div className="bg-white text-center"><Link href="/corolla">
     <Image src={Corolla1} alt="Corolla1" width={200} height={200} className="h-300 w-300 ml-6" />

                <div className="text-purple-800 font-semibold">Toyota Corolla</div>
                 <div className="text-green-400">PKR 59.7-75.5 lacs</div>
                 <div className="text-slate-500">623 Reviews</div>
                 </Link>
               </div>


              <div className="bg-white text-center"><Link href="/alto">
     <Image src={Alto1} alt="Alto1" width={200} height={200} className="h-300 w-300 ml-6" />
     
               <div className="text-purple-800 text-center">Suzuki Alto</div>
                 <div className="text-green-400">PKR 23.3-30.5 lacs</div>
                 <div className="text-slate-500">200 Reviews</div>
                 </Link>
             </div>

          <div className="bg-white text-center"><Link href="/city">
     <Image src={City1} alt="City1" width={200} height={200} className="h-300 w-300 ml-6" />
     
                 <div className="text-purple-800">Honda City</div>
                 <div className="text-green-400">PKR 46.5-58.5 lacs</div>
                 <div className="text-slate-500">456 Reviews</div>
                 </Link>
              </div>
             
      <div className="bg-white text-center"> <Link href="/civic">
     <Image src={Cover1} alt="Cover1" width={200} height={200} className="h-300 w-300 ml-6" />
     
                 <div className="text-purple-800">Honda Civic</div>
                 <div className="text-green-400">PKR 86.6-99.0 lacs</div>
                 <div className="text-slate-500">361 Reviews</div>
                 </Link>
              </div>
              <br/>
       </div>
       </div>



    </div>

  ) 
}
