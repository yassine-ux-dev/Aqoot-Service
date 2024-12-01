
import "./Header.css";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header flex items-center justify-between w-full p-2 bg-gradient-to-r from-white via-blue-200 to-white">
      

      <div className="flex items-center">
        <div className="p-2 bg-white rounded-full">
        <img src={Logo} alt="" className="logo" />
        </div>
      </div>
      <nav className="flex items-center justify-center p-2 bg-white rounded-full shadow-md">
        <a href="#" className="px-4 py-2 text-sm font-semibold text-gray-800" prefetch={false}/>
          Home
        
        <a href="#" className="px-4 py-2 text-sm font-semibold text-gray-800" prefetch={false}/>
          Programs
        
        <a href="#" className="px-4 py-2 text-sm font-semibold text-gray-800" prefetch={false}/>
          Why us
        
        <a href="#" className="px-4 py-2 text-sm font-semibold text-gray-800" prefetch={false}/>
          Plans
        
        <a href="#" className="px-4 py-2 text-sm font-semibold text-gray-800" prefetch={false}/>
          Testimonials
        
      </nav>
    </div>
    
  );
};

export default Header;
