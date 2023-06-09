import React, { createContext, useEffect, useState } from 'react';
import app from './Firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
export const AuthContext=createContext(null)
const Provider = ({children}) => {
    const auth=getAuth(app);
    const [user,setUser]=useState('')
    const [loading,setLoading]=useState(true)

    const signUpUser=(email,password)=>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password);
    }
  const loginUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  const googleProvider = new GoogleAuthProvider();
      const googleLogin=()=>{
        return signInWithPopup(auth,googleProvider)
     }
     useEffect(()=>{
      const unsubscribe= onAuthStateChanged(auth,currentUser=>{
       setUser(currentUser);
       console.log('auth state changed',currentUser)
      setLoading(false);
       })
        return ()=> {unsubscribe()}
   },[])
   const logOut=()=>{
      return signOut(auth)
 }
  const authInfo={
    user,
    signUpUser,
    loginUser,
    googleLogin,
    logOut,
    loading
  }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default Provider;