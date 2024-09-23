import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, GithubAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../firebase/firebase.confige";





export const AuthContext = createContext(null);

const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);

     // Google Login
     const googleLogin = () => {
          return signInWithPopup(auth, GoogleProvider);

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
     };

     //  User Log Out 

     const logOut = () => {
          return signOut(auth)

     }

     // on Auth State Changed

     useEffect(() => {
          onAuthStateChanged(auth, (currentUser) => {
               setUser(currentUser);
          })
     }, [])

     const authInfo = {
          user,
          googleLogin,
          createUser,
          gitHubLogin,
          loginUser,
          logOut


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