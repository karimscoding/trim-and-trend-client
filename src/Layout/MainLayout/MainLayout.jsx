import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

export default function MainLayout() {
  return (
    <div className="w-[1080px] mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
