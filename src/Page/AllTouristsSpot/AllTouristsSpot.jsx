import { useLoaderData } from "react-router-dom";
import TouristsSpot from "../../Components/TouristsSpot/TouristsSpot";
import { useState } from "react";


const AllTouristsSpot = () => {
     const allTouristsSpots = useLoaderData();
     const [sort, setSort] = useState(allTouristsSpots);


     const handleDefault = () => {
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
               <ul className="menu bg-slate-600 text-white text- rounded-box w-52 my-6  mx-10">


                    <details open>
                         <summary>Parent</summary>
                         <ul>
                              <li onClick={handleDefault}><a>Default </a></li>
                              <li onClick={handelLowToHigh}><a>Price Low to High</a></li>
                              <li onClick={handleHighToLow}><a>Price High to Low</a></li>

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