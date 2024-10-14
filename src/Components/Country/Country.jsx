import PropTypes from 'prop-types'; // ES6
import { Link } from 'react-router-dom';

const Country = ({ country }) => {
     const { photoUrl, country_Name, short_description } = country

     return (

          <Link to={`/country/${country_Name}`} className=' mt-10 card shadow-2xl'>
               <img className=" h-64 rounded-t-xl" src={photoUrl} alt="" />
               <div className="mt-4 px-4 mb-4">
                    <h1 className="text-lg mb-4 font-bold  mt-4 ">Country Name : <span className="font-semibold text-red-600">  {country_Name}</span></h1>
                    <p className="text-sm font-medium">{short_description.slice(0, 180)}</p>
               </div>
          </Link>
     );
};

export default Country;

Country.propTypes = {

     country: PropTypes.node,

}