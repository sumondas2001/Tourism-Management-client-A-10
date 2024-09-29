import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, GithubAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.confige";





export const AuthContext = createContext(null);

const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

     // Google Login
     const googleLogin = () => {
          setLoading(true);
          return signInWithPopup(auth, GoogleProvider);

     };

     // create user
     const createUser = (email, password) => {
          setLoading(true);
          return createUserWithEmailAndPassword(auth, email, password);
     };
     // github login
     const gitHubLogin = () => {
          setLoading(true);
          return signInWithPopup(auth, GithubProvider);
     };
     // Login User email and password

     const loginUser = (email, password) => {
          setLoading(true);
          return signInWithEmailAndPassword(auth, email, password)
     };

     //  User Log Out 

     const logOut = () => {
          setLoading(true);
          return signOut(auth)

     };

     //user update Profile
     const userUpdateProfile = (name, photoUrl) => {
          updateProfile(auth.currentUser, {
               displayName: name,
               photoURL: photoUrl
          })
               .then()
               .catch()
     }

     // on Auth State Changed

     useEffect(() => {
          onAuthStateChanged(auth, (currentUser) => {
               setUser(currentUser);
               setLoading(false);
          })
     }, [])

     const authInfo = {
          user,
          googleLogin,
          createUser,
          gitHubLogin,
          loginUser,
          logOut,
          loading,
          userUpdateProfile


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