import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

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
