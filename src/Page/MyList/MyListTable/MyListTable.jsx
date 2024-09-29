
import PropTypes from 'prop-types'; // ES6
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const MyListTable = ({ spot, item, setItem }) => {

     const { photoUrl, touristsSpotName, countryName, location, seasonality, _id } = spot;


     const handelDelete = (_id) => {


          const swalWithBootstrapButtons = Swal.mixin({
               customClass: {
                    confirmButton: "btn btn-success",
                    cancelButton: "btn btn-danger"
               },
               buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
               title: "Are you sure?",
               text: "You won't be able to revert this!",
               icon: "warning",
               showCancelButton: true,
               confirmButtonText: "Yes, delete it!",
               cancelButtonText: "No, cancel!",
               reverseButtons: true
          }).then((result) => {
               if (result.isConfirmed) {

                    fetch(`http://localhost:5000/myList/${_id}`, {
                         method: 'DELETE'
                    })
                         .then(res => res.json())
                         .then(data => {
                              if (data.deletedCount > 0) {
                                   swalWithBootstrapButtons.fire({
                                        title: "Deleted!",
                                        text: "Your Listed sport  has been deleted.",
                                        icon: "success"
                                   });
                                   const remaining = item.filter(soprt => soprt._id !== _id);
                                   setItem(remaining)
                              }
                              console.log(data)
                         })


               } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
               ) {
                    swalWithBootstrapButtons.fire({
                         title: "Cancelled",
                         text: "Your imaginary file is safe :)",
                         icon: "error"
                    });
               }
          });


          // 
     };

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
                                        <Link to={`/upDate/${_id}`}>
                                             <button className="btn  bg-emerald-400 hover:bg-emerald-500 text-black">Update</button>
                                        </Link>
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
     spot: PropTypes.object,

}