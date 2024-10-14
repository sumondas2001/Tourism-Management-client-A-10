import { useLoaderData } from "react-router-dom";
import TouristsSpot from "../../Components/TouristsSpot/TouristsSpot";
import { useState } from "react";


const AllTouristsSpot = () => {
     const allTouristsSpots = useLoaderData();
     const [sort, setSort] = useState(allTouristsSpots);


     const handleAll = () => {
          const copy = [...allTouristsSpots];

          setSort(copy)
     }
     const handelLowToHigh = () => {
          const copy = [...allTouristsSpots];
          const lowToHigh = copy.sort((a, b) => a.averageCost - b.averageCost);
          setSort(lowToHigh)
     }
     const handleHighToLow = () => {
          const copy = [...allTouristsSpots];
          const highToLow = copy.sort((a, b) => b.averageCost - a.averageCost);
          setSort(highToLow)
     }


     return (
          <div>
               <ul className="menu bg-base-200 text- rounded-box w-32">


                    <details open>
                         <summary>Parent</summary>
                         <ul>
                              <li onClick={handleAll}><a>All</a></li>
                              <li onClick={handelLowToHigh}><a>Low to High</a></li>
                              <li onClick={handleHighToLow}><a> High to Low</a></li>

                         </ul>
                    </details>


               </ul>

               <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  gap-x-6 mx-6">
                    {
                         sort?.map(spot =>
                              <TouristsSpot key={spot._id} spot={spot}>

                              </TouristsSpot>)
                    }
               </div>
          </div >
     );
};

export default AllTouristsSpot;