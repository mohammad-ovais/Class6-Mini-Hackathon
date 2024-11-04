import Link from "next/link"
function Navbar(){
    return(
      <div className="bg-blue-950 text-white w">

        <div className="flex justify-between mx-5 pt-3 text-xs">
         <div> Download App Via SMS</div>
            <div className="flex justify-end space-x-2">
            <div>sign Up</div>
            <div>Sign In</div>
            </div>
        </div>

        
            <div className="flex justify-evenly py-4 space-x-6">
              <div className="pr-20">LOGO</div>
              <Link href="/"> <div>Home</div></Link>
              <div>Used Cars</div>
               <div>New Cars</div>
               <div>Bikes</div>
               <div> Auto Store</div>
               <div>Videos</div> 
               <div>Forums</div>
               <div>Blog</div>
               <div>More</div> 
               <button className="py-1 px-5 rounded-md bg-red-600 text-white">Post an Ad</button>
            </div>

       </div>
       
      
    )
}
export default Navbar