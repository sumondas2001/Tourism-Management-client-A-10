import { Link } from "react-router-dom";


const Footer = () => {
     return (
          <div className="mt-10 bg-cyan-400 py-10">
               <div className=" flex gap-x-6 items-center justify-center">
                    <Link to={'/'}>
                         <img className="size-20 " src={'https://i.postimg.cc/7hPq3Wmg/travelling.png'} alt="" />
                    </Link>
                    <h1 className="md:text-2xl text-xl font-semibold text-slate-900">Tourism Management</h1>
               </div>

               <div className="flex md:justify-evenly px-4 gap-6 mt-4">
                    <div>

                         <h1 className="text-xl font-bold text-red-600 mb-4">Services</h1>

                         <div className="text-black">
                              <h1 className="text-base font-medium">Event Management</h1>
                              <h1 className="text-base font-medium">Customer Support: 24/7</h1>
                              <h1 className="text-base font-medium">Tour Packages</h1>
                              <h1 className="text-base font-medium">Transportation</h1>
                              <h1 className="text-base font-medium">Accommodation Booking</h1>
                         </div>
                    </div>
                    <div>

                         <h1 className="text-xl font-bold text-red-600 mb-4">Destinations</h1>

                         <div className="text-black">
                              <Link>
                                   <h1 className="text-base font-medium">Bangladesh</h1>
                              </Link>
                              <Link>
                                   <h1 className="text-base font-medium">Thailand</h1>
                              </Link>
                              <Link>
                                   <h1 className="text-base font-medium">Indonesia</h1>
                              </Link>
                              <Link>
                                   <h1 className="text-base font-medium">Malaysia</h1>
                              </Link>
                              <Link>
                                   <h1 className="text-base font-medium">Vietnam</h1>
                              </Link>
                              <Link>
                                   <h1 className="text-base font-medium">Cambodia</h1>
                              </Link>
                         </div>
                    </div>
                    <div>

                         <h1 className="text-xl font-bold text-red-600 mb-4">Information</h1>




                         <div className="text-black">
                              <h1 className="text-base font-medium">Miles</h1>
                              <h1 className="text-base font-medium">About US</h1>
                              <h1 className="text-base font-medium">Online Query</h1>
                              <h1 className="text-base font-medium">
                                   Become Partner</h1>
                              <h1 className="text-base font-medium">Terms and Condition</h1>

                         </div>
                    </div>
               </div>


          </div >
     );
};

export default Footer;