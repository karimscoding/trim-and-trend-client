import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Home />
    </>
  );
}

export default App;
