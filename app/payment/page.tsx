import Link from "next/link"
export default function Payment(){
    return (
        <div>
            <div className="bg-slate-200 ">
            <h1 className="text-center font-semibold text-3xl py-10 uppercase ">
                Enter Your Details
            </h1>
            <div>
                <form className=" mt-10 flex gap-5 justify-center items-center flex-col border ">

                <input type="name" className="p-2 w-2/5 border border-blue-300"
                    placeholder="Enter Your Name"/>
            
                   <input type="email" className="p-2 w-2/5 border border-blue-300"
                    placeholder="Enter Your Email"/>


                   <input type="password" className="p-2 w-2/5 border border-blue-300"
                    placeholder="Enter Your Password "/>


                   <input type="card number" className="p-2 w-2/5 border border-blue-300"
                    placeholder="Enter Your Card Number"/>


                   <input type="adress" className="p-2 w-2/5 border border-blue-300"
                    placeholder="Enter Your Adress "/>

              <button className="py-3 px-9 bg-blue-900 text-white rounded-md my-8  ">
                <Link href="thank-you" >Place Your Order</Link>
                </button>

                </form>

              </div> 
            </div>
        </div>

    )
}