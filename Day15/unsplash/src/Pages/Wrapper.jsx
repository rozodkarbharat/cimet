import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Wrapper = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Navbar />
      <div className="relative h-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Wrapper;
