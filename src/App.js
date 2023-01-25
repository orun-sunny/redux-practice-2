import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { auth } from './firebase/firebase.config';

function App() {
    console.log(process.env)
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
