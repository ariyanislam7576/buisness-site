import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
const initApp = () =>{
    initializeApp(firebaseConfig);
}
export default initApp