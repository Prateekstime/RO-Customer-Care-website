import { useState } from "react";
import logo from "../../assets/logo.png";
import { LuMapPin } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { HiOutlineBell } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import RequestForm from "../../pages/RequestForm";
const Header = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className="flex border-b-2 shadow-xl border-gray-600 md:p-3 justify-between">
      <div className=" ">
        <nav className="flex text-[#263138]  font-semibold items-center space-x-10 md:p-1">
          <NavLink to="/">
            <img
              className="md:h-[40px] md:w-[150px]  cursor-pointer"
              src={logo}
            />
          </NavLink>
          <NavLink
            to="/services"
            className="text-[17px] cursor-pointer hover:text-gray-500"
          >
            Services
          </NavLink>
          <NavLink
            to={"/products"}
            className="text-[17px] cursor-pointer hover:text-gray-500"
          >
            Products
          </NavLink>

          <button
            onClick={() => setIsFormOpen(true)}
            className="text-[17px] cursor-pointer hover:text-gray-500"
          >
            Service Request
          </button>
        </nav>
        {/* Service Request Form Overlay */}
        {isFormOpen && <RequestForm onClose={() => setIsFormOpen(false)} />}
      </div>

      <div className="flex space-x-3">
        {/* Location Input */}
        <div className="relative flex items-center w-full max-w-xs">
          <span className="absolute left-3 text-gray-500 text-lg">
            <LuMapPin />
          </span>
          <input
            type="text"
            className="w-full p-3 pl-10 rounded-md border border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-700"
            placeholder="Location"
          />
        </div>

        {/* Search Input */}
        <div className="relative flex items-center w-full max-w-xs">
          <span className="absolute left-3 text-gray-500 text-lg">
            <CiSearch />
          </span>
          <input
            type="text"
            className="w-full p-3 pl-10 rounded-md border border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-700"
            placeholder="Search for 'Services'"
          />
        </div>
      </div>

      <div className="flex items-center text-2xl space-x-6">
        {/* <p className="cursor-pointer text-[#7EC1B1] font-semibold hover:text-gray-500 text-sm">Login</p> */}
        <p className="cursor-pointer hover:text-gray-500">
          <HiOutlineBell />
        </p>
        <p className="cursor-pointer hover:text-gray-500">
          <NavLink to={"/cart"}>
            {" "}
            <LuShoppingCart />
          </NavLink>
        </p>

        <NavLink to={"/profile"}>
          <p className="cursor-pointer hover:text-gray-500">
            <FiUser />
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
