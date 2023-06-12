import React, { createContext, useEffect, useState } from 'react';
import app from './Firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from 'axios';

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
 const updateUserProfile=(name,photo)=>{
      return  updateProfile(auth.currentUser,{
         displayName: name, photoURL: photo
       })
      
     }
     useEffect(()=>{
      const unsubscribe= onAuthStateChanged(auth,currentUser=>{
       setUser(currentUser);
       console.log('auth state changed',currentUser)
       if(currentUser){
        axios.post('http://localhost:5000/jwt',{ email: currentUser.email})
            .then(data=>{
                console.log(data.data.token);
                localStorage.setItem('access-token', data.data.token)
                setLoading(false)

            })
    
    }
    else{
        localStorage.removeItem('access-token')
    }
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
    updateUserProfile,
    loading
  }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default Provider;