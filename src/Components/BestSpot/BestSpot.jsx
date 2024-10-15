

const BestSpot = () => {

     return (

          <div className="mt-16">
               <h1 className="text-2xl font-semibold text-center mb-10">Our Most Popular Spot</h1>
               <div className="grid md:grid-cols-6  gap-6">

                    <div className="col-span-4 ">
                         <img className="h-72 rounded-2xl  object-cover w-full " src="https://i.ibb.co.com/CHdfnzz/nopparuj-lamaikul-l-Ar6o-Op-Xv-A-unsplash.jpg" alt="Image 1" />
                    </div>
                    <div className="col-span-2">
                         <img className="h-72 w-full rounded-2xl  " src="https://i.ibb.co.com/c6m3gSd/pexels-allphoto-bangkok-1628521-3226403.jpg" alt="Image 2" />
                    </div>
                    <div className="col-span-2 ">
                         <img src="https://i.ibb.co.com/QX57qTg/deer-3673017-1280.jpg" className=" h-72 w-full rounded-2xl " alt="Image 3" />
                    </div>
                    <div className="col-span-4">
                         <img className=" h-72 w-full object-cover rounded-2xl " src="https://i.ibb.co.com/sm30PJz/fahim-muntashir-Yx4j-Rc-Vhp-X8-unsplash.jpg" alt="Image 4" />
                    </div>




               </div >
          </div>

     );
};

export default BestSpot;