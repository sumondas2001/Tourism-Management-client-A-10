import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; // ES6

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const TouristsSpot = ({ spot }) => {
     useEffect(() => {
          AOS.init();
     }, [])

     const { photoUrl, touristsSpotName, averageCost, seasonality, travelTime, totalVisitorsPerYear, _id } = spot;


     return (
          <div data-aos="zoom-in" className=" mt-10 card shadow-2xl ">
               <img className=" h-64 rounded-t-xl" src={photoUrl} alt="" />
               <div className="px-4">
                    <h1 className="text-lg font-bold  mt-4 "> Spot Name : <span className="font-semibold text-red-600">{touristsSpotName}</span></h1>
                    <div className="flex lg:gap-10 md:gap-4 gap-4 mt-1">
                         <h3 className="text-lg font-semibold ">Price :  <span className="text-red-600 font-semibold text-lg"> {averageCost} $ </span> </h3>
                         <h3 className="md:text-sm lg:text-lg text-lg font-semibold"> Visitors Per Year: <span className=" font-semibold text-red-600 text-lg">{totalVisitorsPerYear}</span></h3>
                    </div>
                    <p className="text-lg font-semibold mt-1"> Travel Time: <span className="text-red-600 font-semibold text-lg">{travelTime} Days</span></p>
                    <p className="text-lg font-semibold mt-1">season : <span className="text-red-600 font-semibold text-lg">{seasonality}</span></p>
                    <Link to={`/viewDetails/${_id}`}>
                         <button className="btn w-full mt-4 mb-6 bg-cyan-400 hover:bg-cyan-600 font-semibold text-black"> View Details</button>
                    </Link>
               </div>
          </div>
     );
};

export default TouristsSpot;


TouristsSpot.propTypes = {

     spot: PropTypes.object,

}