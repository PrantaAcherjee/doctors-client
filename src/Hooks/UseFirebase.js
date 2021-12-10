import { useEffect, useState } from 'react';
import initializeFirebasae from '../Pages/Login/Firebase/Firebase.init';
import { getAuth, createUserWithEmailAndPassword ,signOut,onAuthStateChanged,signInWithEmailAndPassword ,  signInWithPopup,GoogleAuthProvider,updateProfile,getIdToken} from "firebase/auth";

initializeFirebasae()

const UseFirebase = () => {
    const [user,setUser]=useState({});
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState('');
    const [admin,setAdmin]=useState(false);
    const [token,setToken]=useState("");

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

          //save user to the database
          saveUser(email,name,'POST');
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
// admin secure panel
    useEffect(()=>{
      fetch(`https://floating-reaches-07420.herokuapp.com/users/${user.email}`)
      .then(res=>res.json())
      .then(data=>setAdmin(data.admin))
    },[user.email])

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
        const destination=location?.state?.from ||'/';
        history.replace(destination);
        setError(''); 
        const user = result.user;
        saveUser(user.email,user.displayName,'PUT');
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
     getIdToken(user)
     .then(idToken=>{
       setToken(idToken);
     })
      } 
    else {
     setUser({})
    }
    setIsLoading(false);
    });
    return ()=>unsubscribed;
    },[auth])

//save user to data base
    const saveUser=(email,displayName,method)=>{
      const user={email,displayName};
      fetch('https://floating-reaches-07420.herokuapp.com/users',{
        method:method,
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
      })
      .then()

    }

    return  {
        user,
        admin,
        token,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        error,
        signInWithGoogle,
        saveUser,
    }
};

export default UseFirebase;