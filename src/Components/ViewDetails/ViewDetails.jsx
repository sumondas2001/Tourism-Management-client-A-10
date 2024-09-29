import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const ViewDetails = () => {
     const touristsSpot = useLoaderData();
     const { photoUrl, touristsSpotName, countryName, location, shortDescription, averageCost, seasonality, travelTime, totalVisitorsPerYear } = touristsSpot;

     const handelBookingNow = () => {
          Swal.fire({
               title: "Good job!",
               text: "Your Booking Successfully !",
               icon: "success"
          });
     }

     return (

          <div className="mt-10 md:mx-6 mx-3  py-6 md:px-6 px-4 rounded-xl">
               <div className="  lg:flex lg:gap-10  gap-4 ">
                    <div>
                         <img className="lg:max-w-4xl rounded-t-xl" src={photoUrl} alt="" />
                    </div>
                    <div className="flex flex-col justify-between py-10">
                         <div className="md:mt-4">
                              <h1 className="lg:text-xl text-lg mb-2 font-semibold">Name: <span className="text-red-500  font-black">{touristsSpotName}</span></h1>

                              <h1 className="lg:text-xl mb-2 font-semibold">Country : <span className="text-red-500  font-black">{countryName}</span></h1>

                              <h4 className="lg:text-xl mb-2 font-semibold">location : <span className="text-red-500  font-black">{location}</span></h4>
                              <div className="md:flex flex gap-4 lg:flex-col md:gap-4 lg:gap-0">
                                   <h2 className="lg:text-xl mb-2 font-semibold">Average Cost : <span className="text-red-500  font-black">{averageCost} $</span></h2>
                                   <h2 className="lg:text-xl mb-2 font-semibold">Seasonal : <span className="text-red-500  font-black">{seasonality}</span></h2>
                              </div>
                              <div className="md:flex  lg:flex-col md:gap-4 lg:gap-0 md:mb-6">
                                   <h4 className="lg:text-xl mb-2 font-semibold">Travel Time : <span className="text-red-500  font-black">{travelTime}</span></h4>
                                   <h4 className="lg:text-xl mb-2 font-semibold">Total Visitors Per Year : <span className="text-red-500  font-black ">{totalVisitorsPerYear}</span></h4>
                              </div>

                         </div>

                         <div>
                              <button onClick={handelBookingNow} className="btn hover:bg-cyan-600  bg-cyan-400 w-full ">Booking Now</button>
                         </div>

                    </div>
               </div>

               <div className="mt-6">
                    <h1 className="text-xl mb-6 font-semibold underline">Description</h1>
                    <p>{shortDescription}</p>
               </div>
          </div>
     );
};

export default ViewDetails;