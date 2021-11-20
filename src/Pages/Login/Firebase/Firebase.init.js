import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const initializeFirebasae=()=>{
    initializeApp(firebaseConfig);
}
export default initializeFirebasae;
//added the initialize