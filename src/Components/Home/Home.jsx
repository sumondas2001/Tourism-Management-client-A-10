import { useLoaderData } from "react-router-dom";
import Carousel from "../Carousel/Carousel";

import TouristsSpot from "../TouristsSpot/TouristsSpot";
import Countries from "../Countries/Countries";
import BestSpot from "../BestSpot/BestSpot";
import Booking from "../Booking/Booking";





const Home = () => {
     const data = useLoaderData();
     const touristsSports = data.slice(0, 6);
     // console.log(data)
     return (
          <div>

               <Carousel></Carousel>

               <div>
                    <h1 className="text-xl font-semibold mx-10 underline">Tourists Spots </h1>
                    <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  gap-x-6 mx-6">
                         {
                              touristsSports.map(spot => <TouristsSpot
                                   key={spot._id}
                                   spot={spot}

                              ></TouristsSpot>)
                         }
                    </div>
               </div>

               <Countries></Countries>
               <BestSpot />
               <Booking></Booking>

          </div>
     );
};

export default Home;