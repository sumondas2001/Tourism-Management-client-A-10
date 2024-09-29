import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../Components/Footer/Footer";


const Root = () => {
     return (
          <div className="font-aleo ">
               <Navbar></Navbar>


               <div className="">
                    <Outlet></Outlet>
               </div>
               <Footer></Footer>
               <Toaster />

          </div>
     );
};

export default Root;