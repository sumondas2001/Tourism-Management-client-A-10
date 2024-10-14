import { useEffect, useState } from "react";
import Country from "../Country/Country";



const Countries = () => {
     const [countries, setCountries] = useState([]);

     useEffect(() => {

          fetch('http://localhost:5000/countries')
               .then(res => res.json())
               .then(data => setCountries(data))
     }, [])
     return (
          <div >
               <h1 className="text-xl text-center font-semibold underline mt-10">Most Popular Countries</h1>
               <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  gap-x-6 mx-6">
                    {
                         countries.map(country => (
                              <Country key={country._id} country={country} />
                         ))
                    }
               </div>
          </div>
     );
};

export default Countries;