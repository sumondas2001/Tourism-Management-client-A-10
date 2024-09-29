import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const UpDate = () => {
     const sportData = useLoaderData();

     const { photoUrl, touristsSpotName, countryName, location, userEmail, shortDescription, averageCost, seasonality, travelTime, totalVisitorsPerYear, userName, _id } = sportData;


     const handelUpdate = (event) => {
          event.preventDefault();
          const from = event.target;
          const photoUrl = from.photoUrl.value;
          const touristsSpotName = from.touristsSpotName.value;
          const countryName = from.countryName.value;
          const location = from.location.value;
          const userEmail = from.userEmail.value;
          const shortDescription = from.shortDescription.value;
          const averageCost = from.averageCost.value;
          const seasonality = from.seasonality.value;
          const travelTime = from.travelTime.value;
          const totalVisitorsPerYear = from.totalVisitorsPerYear.value;
          const userName = from.userName.value;

          const upDateFrom = { photoUrl, touristsSpotName, countryName, location, userEmail, shortDescription, averageCost, seasonality, travelTime, totalVisitorsPerYear, userName }


          fetch(`http://localhost:5000/upDate/${_id}`, {
               method: "PUT",
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(upDateFrom)
          })
               .then(res => res.json())
               .then(data => {
                    if (data.modifiedCount > 0) {
                         Swal.fire({
                              title: "Good job!",
                              text: "Tourists Sport Up Date Successfully!",
                              icon: "success"
                         });
                    }
               })


     }
     return (
          <div>

               <div className="text-center m-6">
                    <i className="text-3xl font-bold text-cyan-500 ">Up date Tourists Sport </i>
               </div>
               <form onSubmit={handelUpdate} className="md:max-w-6xl mx-auto">
                    <div className="w-full grid grid-cols-2 px-4 gap-x-6 ">
                         <div className="">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Image</span>
                                   </label>
                                   <input type="text" defaultValue={photoUrl} name="photoUrl" placeholder="Photo Url" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Tourists spot name</span>
                                   </label>
                                   <input type="text" defaultValue={touristsSpotName} name="touristsSpotName" placeholder="tourists spot name" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Country Name </span>
                                   </label>
                                   <input type="text" defaultValue={countryName} name="countryName" placeholder="Country Name" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Location</span>
                                   </label>
                                   <input type="text" name="location" defaultValue={location} placeholder="Location" className="input input-bordered" required />
                              </div>

                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">User Email</span>
                                   </label>
                                   <input type="email" defaultValue={userEmail} name="userEmail" placeholder="User Email" className="input input-bordered" required />
                              </div>

                              <div className="form-control mb-10 ">
                                   <label className="label">
                                        <span className="label-text">Short description</span>
                                   </label>
                                   <input type="text" defaultValue={shortDescription} name="shortDescription" placeholder="Short description" className="input input-bordered h-28" required />
                              </div>
                         </div>
                         <div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Average Cost</span>
                                   </label>
                                   <input type="text" defaultValue={averageCost} name="averageCost" placeholder="Average Cost" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Seasonality</span>
                                   </label>
                                   <input type="text" defaultValue={seasonality} name="seasonality" placeholder="Seasonality" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Travel Time</span>
                                   </label>
                                   <input type="text" defaultValue={travelTime} name="travelTime" placeholder="Travel Time" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Total Visitors Per Year</span>
                                   </label>
                                   <input type="text" defaultValue={totalVisitorsPerYear} name="totalVisitorsPerYear" placeholder="Total Visitors Per Year" className="input input-bordered" required />
                              </div>

                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">User Name</span>
                                   </label>
                                   <input type="text" defaultValue={userName} name="userName" placeholder="User Name" className="input input-bordered" required />
                              </div>


                         </div>
                    </div>



                    <div className="mb-10 mx-3">
                         <button className="w-full btn bg-cyan-500 hover:bg-cyan-600 font-bold text-black" >UpDate Tourists Spot</button>
                    </div>



               </form>
          </div >
     );
};

export default UpDate;