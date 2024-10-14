import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; // ES6

const CountriesSpot = ({ country }) => {
     const { photoUrl, touristsSpotName, averageCost, seasonality, _id, countryName, location, shortDescription, } = country;
     // console.log(country)

     const description = shortDescription.slice(0, 160);
     return (
          <div className=" mt-10 card shadow-2xl ">
               <img className=" h-64 rounded-t-xl" src={photoUrl} alt="" />
               <div className="px-4">
                    <h1 className="text-lg font-bold  mt-4 "> Spot Name : <span className="font-semibold text-red-600">{touristsSpotName}</span></h1>
                    <h1 className="text-lg font-bold  mt-1 ">countryName :  <span className="font-semibold text-red-600">  {countryName}</span></h1>
                    <div className="flex lg:gap-10 md:gap-4 gap-4 mt-1">
                         <h3 className="text-lg font-semibold ">Price :  <span className="text-red-600 font-semibold text-lg"> {averageCost} $ </span> </h3>
                         <h3 className="md:text-sm lg:text-lg text-lg font-semibold"> location : <span className=" font-semibold text-red-600 text-lg">{location}</span></h3>
                    </div>

                    <p className="text-lg font-semibold mt-1">season : <span className="text-red-600 font-semibold text-lg">{seasonality}</span></p>
                    <p className="text-sm font-medium mt-2">{description}</p>
                    <Link to={`/viewDetails/${_id}`}>
                         <button className="btn w-full mt-4 mb-6 bg-cyan-400 hover:bg-cyan-600 font-semibold text-black"> View Details</button>
                    </Link>
               </div>
          </div>
     );
};

export default CountriesSpot;

CountriesSpot.propTypes = {

     country: PropTypes.node,

}