import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useState } from "react";
import toast from "react-hot-toast";


const Register = () => {
     const { createUser, userUpdateProfile } = useContext(AuthContext);
     const [error, setError] = useState(null);

     const handelRegister = (event) => {
          event.preventDefault();
          const from = event.target;

          const name = from.name.value;
          const email = from.email.value;
          const password = from.password.value;
          const photoUrl = from.photoUrl.value;
          const login = { name, email, password, photoUrl };
          console.log(login);




          if (!/^(?=.*?[A-Z])(?=.*?[a-z]).{6,}$/.test(password)) {

               return setError('Minimum six characters, at least one uppercase letter, ')
          }

          createUser(email, password)
               .then(() => {
                    toast.success("Register Successfully");
                    from.reset();
                    // user Update Profile
                    userUpdateProfile(name, photoUrl)

               })
               .catch(error => {

                    const errorMessage = error.message;

                    toast.error(errorMessage);

               })
     }
     return (
          <div className="hero bg-base-200 ">
               <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                         <h1 className="text-4xl font-bold text-cyan-500 mb-4 text-center">Register now!</h1>

                         <img className="w-[570px]  " src="https://i.ibb.co.com/jgspV9x/10780544-19199509-removebg.png" alt="" />

                    </div>
                    <div className="card bg-base-100 w-screen max-w-sm shrink-0 shadow-2xl">
                         <form onSubmit={handelRegister}
                              className="card-body">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Name</span>
                                   </label>
                                   <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Email</span>
                                   </label>
                                   <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Photo Url</span>
                                   </label>
                                   <input type="text" name="photoUrl" placeholder="photo Url" className="input input-bordered" />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Password</span>
                                   </label>
                                   <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                   <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                   </label>
                              </div>

                              <div className="flex justify-between">
                                   <p className="font-medium">Have An Account ?</p>

                                   <Link to={'/login'}>
                                        <p className="hover:font-bold font-semibold hover:underline text-cyan-500 hover:text-cyan-400">

                                             Please Login</p>
                                   </Link>

                              </div>
                              <div>
                                   <span className="text-red-600 text-xs">{error}</span>
                              </div>
                              <div className="form-control mt-6">

                                   <button className="btn bg-cyan-400 hover:bg-cyan-600 text-black font-semibold">Register</button>

                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default Register;