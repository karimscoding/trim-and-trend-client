import { Toaster } from 'react-hot-toast';
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";

export default function App() {
  return (
    <main className="w-[1280px] mx-auto">
      <RouterProvider router={router} />
      <Toaster/>
    </main>
  );
}
