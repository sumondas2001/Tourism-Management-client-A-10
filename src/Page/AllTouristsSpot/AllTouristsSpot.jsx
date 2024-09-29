import { useLoaderData } from "react-router-dom";
import TouristsSpot from "../../Components/TouristsSpot/TouristsSpot";


const AllTouristsSpot = () => {
     const allTouristsSpots = useLoaderData();


     return (
          <div>


               <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  gap-x-6 mx-6">
                    {
                         allTouristsSpots?.map(spot =>
                              <TouristsSpot key={spot._id} spot={spot}>

                              </TouristsSpot>)
                    }
               </div>
          </div>
     );
};

export default AllTouristsSpot;