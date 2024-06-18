import React from "react";
import logo from "../assets/logo.png";
import { FaAngleDown } from "react-icons/fa";

function Navigation() {
  return (
    <>
      <div className="flex justify-between items-center px-20 py-4">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="max-sm:hidden flex lg:gap-12 gap-4 text-sm items-center">
          <div className="font-medium">Services</div>
          <div className="font-medium">Featured Project</div>
          <div className="font-medium">What People Say</div>
          <div className="font-medium">Pricing</div>
        </div>
        <div className="flex lg:gap-12">
          <div className="flex">
            <div className="font-semibold">ENG</div>
            <div className="pt-1 pl-1">
              <FaAngleDown />
            </div>
          </div>
          <div className="border-2 border-black font-semibold px-3 py-1 rounded-md ">
            Sign In
          </div>
        </div>
      </div>
    </>
  );
}
export default Navigation;
