import PropTypes from 'prop-types'; // ES6


const MyListTable = ({ spot }) => {
     const { photoUrl, touristsSpotName, countryName, location, seasonality, _id } = spot;


     const handelDelete = (_id) => {
          console.log('delete ', _id)
     };
     const handelUpdate = (_id) => {
          console.log('Update ', _id)
     }
     return (
          <div >
               <div className="overflow-x-auto border">
                    <table className="table">

                         <thead>
                              <tr>

                                   <th>Name/Country</th>
                                   <th>Location/seasonal</th>
                                   <th>UpDate</th>
                                   <th>Delete</th>
                              </tr>
                         </thead>
                         <tbody>

                              <tr className=''>


                                   <td>
                                        <div className="flex items-center gap-3">
                                             <div className="avatar">
                                                  <div className="mask mask-squircle h-20 w-20">
                                                       <img
                                                            src={photoUrl} />
                                                  </div>
                                             </div>
                                             <div>
                                                  <div className="font-bold">{touristsSpotName}</div>
                                                  <div className="text-sm opacity-50">{countryName}</div>
                                             </div>
                                        </div>
                                   </td>


                                   <td>
                                        Location:  {location}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">seasonal:  {seasonality}</span>
                                   </td>


                                   <th>
                                        <button onClick={() => handelUpdate(_id)} className="btn  bg-emerald-400 hover:bg-emerald-500 text-black">Update</button>
                                   </th>
                                   <th>
                                        <button onClick={() => handelDelete(_id)} className="btn bg-red-700 hover:bg-red-500 text-black">Delete</button>
                                   </th>


                              </tr>

                         </tbody>

                    </table>
               </div>
          </div >
     );
};

export default MyListTable;

MyListTable.propTypes = {
     spot: PropTypes.object
}