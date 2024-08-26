import { IoMdCall } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";
import { IoIosHeart } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <footer className="pt-[90px] w-full bg-[#222222] text-white ">
     <div className="footer max-w-screen-xl lg:h-[350px] lg:w-[] mx-auto">
     <aside>
          <h6 className="footer-title text-2xl">CONTACT</h6>
          <div className="flex justify-center items-center gap-2 ">
            <IoLocationOutline className="text-lime-400 text-3xl"></IoLocationOutline>
            <a className="link link-hover">
              1247/Plot No. 39, 15th Phase, Colony, Kkatpally, Hyderabad
            </a>
          </div>
          <div className="flex justify-center items-center gap-2 ">
            <IoMdCall className="text-lime-400 text-3xl"></IoMdCall>
            (0800) 1234 567891
          </div>

          <div className="flex justify-center items-center gap-2 ">
            <RiMessage2Fill className="text-lime-400 text-3xl"></RiMessage2Fill>
            info@domainurl.com
          </div>
        </aside>
        <nav>
          <h6 className="footer-title text-2xl">OUR LINKS</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Team</a>
          <a className="link link-hover">Blog</a>
        </nav>
        <nav>
          <h6 className="footer-title text-2xl">OUR SERVICES</h6>
          <a className="link link-hover">Strategy & Research</a>
          <a className="link link-hover">Fast Delivery</a>
          <a className="link link-hover">Seat Reservation</a>
          <a className="link link-hover">Pickup In Store</a>
          <a className="link link-hover">Our Menu</a>
        </nav>
        <nav>
          <h6 className="footer-title text-2xl">HELP CENTER</h6>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Shop</a>
          <a className="link link-hover">Category Filter</a>
          <a className="link link-hover">Testimonials</a>
          <a className="link link-hover">Contact Us</a>
        </nav>
     </div>
     <div className="flex justify-between max-w-screen-xl mx-auto  border-t-2 border-[#393939] pb-8 pt-8">
        <h2 className="font-semibold text-[17px]">Copyright 2024 All rights reserved.</h2>
        <small className="flex justify-center items-center font-semibold text-[17px]">Crafted With  <IoIosHeart className="mx-2"></IoIosHeart>by <p className="text-lime-400 ml-2"> DesignZone</p></small>
      </div>
      </footer>
      
      <div className="flex justify-between relative bottom-56">
        <img src="https://swigo-fast-food-react.netlify.app/assets/pic5-MDm9nc9d.png" alt="" />
        <div className=" relative bottom-72">
        <img src="https://swigo-fast-food-react.netlify.app/assets/pic6-RNTjax7_.png" alt="" />
        </div>
      </div>
 
  
  
    </div>
  );
};

export default Footer;
