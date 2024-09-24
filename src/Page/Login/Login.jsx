import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";


const Login = () => {
     const { googleLogin, gitHubLogin, loginUser } = useContext(AuthContext)


     const handelLogin = (event) => {
          event.preventDefault();
          const from = event.target;
          const email = from.email.value;
          const password = from.password.value;

          // Login user email and password

          loginUser(email, password)
               .then(result => {
                    console.log(result.user)
                    toast.success('Login Successfully');
                    from.reset();

               })
               .catch(error => {

                    const errorMessage = error.message;
                    toast.error(errorMessage);

               })
     };
     // google login
     const handelGoogleLogin = () => {
          googleLogin()
               .then((result) => {
                    toast.success('Login Successfully');
                    console.log(result.user)

               })
               .catch(error => {

                    const errorMessage = error.message;
                    toast.error(errorMessage);

               })
     };
     // GitHub Login 

     const handelGitHubLogin = () => {
          gitHubLogin()
               .then((result) => {
                    toast.success('Login Successfully');
                    console.log(result.user)

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
                         <h1 className="text-4xl font-bold text-cyan-500 mb-4 text-center">Login now!</h1>

                         <img className="w-[570px] " src="https://i.ibb.co.com/4Jr5z8c/10780544-19199509.jpg" alt="" />

                    </div>
                    <div className="card bg-base-100 w-screen max-w-sm shrink-0 shadow-2xl">
                         <form onSubmit={handelLogin}
                              className="card-body">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Email</span>
                                   </label>
                                   <input type="email" name="email" placeholder="email" className="input input-bordered" required />
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
                                   <p className="font-medium">New here?</p>

                                   <Link to={'/register'}>
                                        <p className="hover:font-bold font-semibold hover:underline text-cyan-500 hover:text-cyan-400">
                                             Create an account</p>
                                   </Link>

                              </div>
                              <div className="form-control mt-6">

                                   <button className="btn bg-cyan-400 hover:bg-cyan-600 text-black font-semibold">Login</button>

                              </div>
                         </form>
                         <div className="text-center mb-4 ">
                              <button onClick={handelGoogleLogin} className="btn mr-4 btn-outline btn-accent hover:bg-cyan-600 font-semibold">Google</button>
                              <button onClick={handelGitHubLogin} className="btn  btn-outline btn-primary font-semibold ml-4">GitHub</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Login;