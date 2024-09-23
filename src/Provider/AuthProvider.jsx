import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, GithubAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.confige";





export const AuthContext = createContext(null);

const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
     const [user, setuser] = useState(null);

     // Google Login
     const googleLogin = () => {
          return signInWithPopup(auth, GoogleProvider)
     };

     // create user
     const createUser = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password);
     };
     // github login
     const gitHubLogin = () => {
          return signInWithPopup(auth, GithubProvider);
     };
     // Login User email and password

     const loginUser = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password)
     }

     const authInfo = {
          user,
          googleLogin,
          createUser,
          gitHubLogin,
          loginUser

     }
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;

AuthProvider.propTypes = {
     // You can declare that a prop is a specific JS primitive. By default, these
     // are all optional.
     children: PropTypes.node,

}