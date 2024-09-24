

const AddTouristsSpot = () => {

     return (
          <div>
               <div className="text-center m-6">
                    <i className="text-3xl font-bold text-cyan-500 ">Add Tourists Sport </i>
               </div>
               <form className="md:max-w-6xl mx-auto">
                    <div className="w-full grid grid-cols-2 px-4  gap-x-6 ">
                         <div className="">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Image</span>
                                   </label>
                                   <input type="text" name="photoUrl" placeholder="Photo Url" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Tourists spot name</span>
                                   </label>
                                   <input type="text" name="touristsSpotName" placeholder="tourists spot name" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Country Name </span>
                                   </label>
                                   <input type="text" name="countryName" placeholder="Country Name" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Location</span>
                                   </label>
                                   <input type="text" name="Location" placeholder="Location" className="input input-bordered" required />
                              </div>
                         </div>
                         <div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Average Cost</span>
                                   </label>
                                   <input type="text" name="averageCost" placeholder="Average Cost" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Seasonality</span>
                                   </label>
                                   <input type="text" name="seasonality" placeholder="Seasonality" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Travel Time</span>
                                   </label>
                                   <input type="text" name="travelTime" placeholder="Travel Time" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Total Visitors Per Year</span>
                                   </label>
                                   <input type="text" name="totalVisitorsPerYear" placeholder="Total Visitors Per Year" className="input input-bordered" required />
                              </div>

                         </div>
                    </div>

                    <div className="form-control mb-10 px-4 ">
                         <label className="label">
                              <span className="label-text">Short description</span>
                         </label>
                         <input type="text" name="shortDescription" placeholder="Short description" className="input input-bordered" required />
                    </div>


                    <div className="mb-10 mx-3">
                         <button className="w-full btn bg-cyan-500 hover:bg-cyan-600 font-bold text-black" >Add Tourists Spot</button>
                    </div>



               </form>
          </div >
     );
};

export default AddTouristsSpot;