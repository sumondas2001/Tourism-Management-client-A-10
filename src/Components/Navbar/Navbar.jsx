import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";


const Navbar = () => {
     const { user, logOut } = useContext(AuthContext);
     const [theme, setTheme] = useState('light');

     useEffect(() => {
          localStorage.setItem('theme', theme)
          const localTheme = localStorage.getItem('theme');

          document.querySelector('html').setAttribute('data-theme', localTheme)
     }, [theme])

     const handelToggle = e => {

          if (e.target.checked) {
               setTheme('night')
          } else {
               setTheme('light')
          }
     };

     // user Log Out 
     const handelLogOut = () => {
          console.log('delete')

          logOut()
               .then(() => {
                    toast.success("Log - Out Successful.");

               }).catch((error) => {
                    toast.error(error.message)
               });
     }




     const navLink = <>
          <li>
               <NavLink
                    to="/"
                    className={({ isActive, isPending, }) =>
                         isPending
                              ? "pending"
                              : isActive
                                   ? "text-cyan-600 border-b-2 font-semibold border-cyan-800"
                                   : "hover:border-cyan-800"
                    }
               >
                    <span className="text-black ">Home</span>
               </NavLink>
          </li>
          <li>
               <NavLink
                    to="/allTouristsSpot"
                    className={({ isActive, isPending }) =>
                         isPending
                              ? "pending"
                              : isActive
                                   ? "text-cyan-400 border-b-2 font-semibold border-cyan-300 "
                                   : "hover:text-cyan-400"
                    }
               >
                    <span className="text-black text-base">All Tourists Spot</span>
               </NavLink>
          </li>
          <li>
               <NavLink
                    to="/addTouristsSpot"
                    className={({ isActive, isPending }) =>
                         isPending
                              ? "pending"
                              : isActive
                                   ? "text-cyan-600 border-b-2 font-semibold border-cyan-800 "
                                   : "hover:text-cyan-800"
                    }
               >
                    <span className="text-black">Add Tourists Spot</span>
               </NavLink>
          </li>
          <li>
               <NavLink
                    to="/myList"
                    className={({ isActive, isPending }) =>
                         isPending
                              ? "pending"
                              : isActive
                                   ? "text-cyan-600 border-b-2 font-semibold border-cyan-800 "
                                   : "hover:text-cyan-800"
                    }
               >
                    <span className="text-black ">My List</span>
               </NavLink>
          </li>
     </>



     return (
          <div className="h-20">
               <div className=" shadow-2xl fixed w-full z-50 bg-[#cadbfa] ">
                    <div className="navbar py-3   md:max-w-[1300px] mx-auto">
                         <div className="navbar-start">
                              <div className="dropdown">
                                   <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                        <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5"
                                             fill="none"
                                             viewBox="0 0 24 24"
                                             stroke="currentColor">
                                             <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M4 6h16M4 12h8m-8 6h16" />
                                        </svg>
                                   </div>
                                   <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                                        {navLink}
                                   </ul>
                              </div>
                              <div className="md:size-12 size-10">
                                   <Link to={'/'}>
                                        <img src={'https://i.postimg.cc/7hPq3Wmg/travelling.png'} alt="" />
                                   </Link>
                              </div>
                         </div>
                         <div className="navbar-center hidden lg:flex">
                              <ul className="menu menu-horizontal px-1">
                                   {navLink}

                              </ul>
                         </div>





                         <div className="navbar-end gap-4">

                              {/* dark button*/}

                              <label className="swap swap-rotate">
                                   {/* this hidden checkbox controls the state */}
                                   <input type="checkbox"
                                        onChange={handelToggle}
                                        className="theme-controller" />

                                   {/* sun icon */}
                                   <svg
                                        className="swap-off h-10 text-black w-10 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        <path
                                             d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                   </svg>

                                   {/* moon icon */}
                                   <svg
                                        className="swap-on h-10 w-10 text-black fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        <path
                                             d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                   </svg>
                              </label>

                              {
                                   user ? <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                             <div className="w-10 rounded-full">
                                                  <img
                                                       alt="User Photo"
                                                       src={user ? user.photoURL : 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'} />
                                             </div>
                                        </div>
                                        <ul
                                             tabIndex={0}
                                             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52  p-2 shadow">
                                             <li >
                                                  <p className="text-base font-medium ">{user?.email}</p>
                                             </li>
                                             <li><a className="text-base font-medium">{user?.displayName || 'user name not found'}</a></li>
                                             <button
                                                  onClick={handelLogOut}
                                                  className="  p-2 w-full font-semibold rounded-lg mt-2 hover:bg-red-500 bg-red-600">LogOut</button>
                                        </ul>
                                   </div> : <div>
                                        <Link to={"/login"}>
                                             <button className="btn px-4 font-bold text-black hover:bg-cyan-600 py-2 bg-cyan-400">Login</button>

                                        </Link>
                                   </div>
                              }
                         </div>
                    </div>




               </div>
          </div >
     );
};

export default Navbar;