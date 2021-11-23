import React, { useEffect, useState } from 'react';
import initializeFirebasae from '../Pages/Login/Firebase/Firebase.init';
import { getAuth, createUserWithEmailAndPassword ,signOut,onAuthStateChanged,signInWithEmailAndPassword ,  signInWithPopup,GoogleAuthProvider,updateProfile} from "firebase/auth";

initializeFirebasae()

const UseFirebase = () => {
    const [user,setUser]=useState({});
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState('');

    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    const registerUser=(email,password,name,history)=>{
      setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        const newUser={email,displayName:name};
        setUser(newUser);
          setError('')
          //send name to firebase after creation
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
             
          }).catch((error) => {
             
          });
          history.replace('/')

;          })
          .catch((error) => {
            setError(error.message)
          
          })
          .finally(()=>setIsLoading(false));  

    }

    const logOut=()=>{
      setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
           .finally(()=>{
             setIsLoading(false);
           })
    }

    const loginUser=(email,password,location,history)=>{
         setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const destination=location?.state?.from ||'/';
          history.replace(destination);
          setError('');
    })
          .catch((error) => {
          setError(error.message);                  
        })
        .finally(()=>{
        setIsLoading(false);
  })
    }

    const signInWithGoogle=(location,history)=>{
      setIsLoading(true);
      signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        setError(''); 
        const user = result.user;
        // ...
      }).catch((error) => {
        setError(error.message);
      })
      .finally(()=>setIsLoading(false));


    }

    // observer user state
    useEffect(()=>{

  const unsubscribed=onAuthStateChanged(auth, (user) => {
  if (user) {
     setUser(user);
      } 

  else {
     setUser({})
  }
  setIsLoading(false);
});
    return ()=>unsubscribed;
    },[])

    return  {
        user,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        error,
        signInWithGoogle,
       
    }
};

export default UseFirebase;