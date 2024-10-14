import { useLoaderData } from "react-router-dom";
import CountriesSpot from "../CountriesSpot/CountriesSpot";


const CountrySpot = () => {
     const country = useLoaderData();

     return (
          <div>
               <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  gap-x-6 mx-6">
                    {
                         country.map(country => <CountriesSpot key={country._id} country={country}></CountriesSpot>)
                    }
               </div>
          </div>
     );
};

export default CountrySpot;