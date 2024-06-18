import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import img5 from "../assets/img5.png";

function Team() {
  return (
    <>
      <div className="flex pl-24 gap-4 py-24">
        <div>
          <div className="text-4xl font-bold flex-1">Meet Our Professional Team</div>
          <div className="py-8">
            Dedicated experts committed to your success. We deliver tailored,
            innovative solutions. Meet the faces behind our exceptional service.
          </div>
          <div className="flex text-right text-4xl gap-2">
            <div className="hover:text-orange-500">
              <FaArrowCircleLeft />
            </div>
            <div className="hover:text-orange-500">
              <FaArrowCircleRight />
            </div>
          </div>
        </div>
        <div><img src={img5} alt="" style={{ width: "500px", height: "400px" }}/></div>
        <div><img src={img5} alt="" style={{ width: "500px", height: "400px" }}/></div>
        <div><img src={img5} alt="" style={{ width: "500px", height: "400px" }}/></div>
        <div><img src={img5} alt="" style={{ width: "500px", height: "400px" }}/></div>
      </div>
    </>
  );
}
export default Team;
