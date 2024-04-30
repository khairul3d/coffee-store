import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";

const auth = getAuth(app);

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
        const [user, setUser] = useState(null)
        const [loading, setLoading] = useState(true)

        const creatUser = (email, password) => {
            setLoading(true)
           return createUserWithEmailAndPassword(auth, email, password)
        }

        const signInUser = (email, password) => {
            setLoading(true)
            return signInWithEmailAndPassword (auth, email, password)

        }
       
    const userInfo = {
      user, 
      loading,
      creatUser,
      signInUser

    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;