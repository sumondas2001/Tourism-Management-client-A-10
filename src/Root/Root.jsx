import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";


const Root = () => {
     return (
          <div className="font-aleo ">
               <Navbar></Navbar>


               <div className="">
                    <Outlet></Outlet>
               </div>
               <Toaster />

          </div>
     );
};

export default Root;