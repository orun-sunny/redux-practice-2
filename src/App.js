import { onAuthStateChanged } from "firebase/auth";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import auth from "../src/firebase/firebase.config";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "./features/auth/authSlice";
import { Toaster } from 'react-hot-toast';


function App() {
    const {isLoading} = useSelector((state)=>state.auth);
    console.log(isLoading)
    const dispatch=useDispatch();
   useEffect(()=>{
       onAuthStateChanged(auth,(user)=>{
           if(user){
               console.log(user)
               dispatch(setUser(user.email));

           }
       });

   },[]);


  return (
    <>
        <Toaster/>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
