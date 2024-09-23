import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.confige";





export const AuthContext = createContext(null);

const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
     const [user, setuser] = useState(null);

     // Google Login
     const googleLogin = () => {
          return signInWithPopup(auth, provider)
     };

     // create user
     const createUser = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password);
     };
     // github login

     const authInfo = {
          user,
          googleLogin,
          createUser

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