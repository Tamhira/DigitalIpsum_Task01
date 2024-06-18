import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import img3 from "../assets/img3.png";

function Work() {
  return (
    <>
      <div className="flex px-24 pb-8">
        <div className="text-4xl font-bold flex-1">
          Work Crafted by Our Team
        </div>
        <div className="flex text-right text-3xl gap-2">
          <div>
            <FaArrowCircleLeft />
          </div>
          <div>
            <FaArrowCircleRight />
          </div>
        </div>
      </div>

      <div className="px-24 flex justify-between gap-4 pb-8">
        <div>
          <img src={img3} alt="" style={{ width: "100%", height: "200px" }} />
          <div className="py-4 text-2xl font-semibold">Banking Mobile App</div>
          <div>Craft a standout brand with us. From logo design to strategy, we create memorable identities that resonate</div>
        </div>
        <div>
          <img src={img3} alt="" style={{ width: "100%", height: "200px" }} />
          <div className="py-4 text-2xl font-semibold">Dashboard Design System</div>
          <div>Craft a standout brand with us. From logo design to strategy, we create memorable identities that resonate</div>
        </div>
        <div>
          <img src={img3} alt="" style={{ width: "100%", height: "200px" }} />
          <div className="py-4 text-2xl font-semibold">Investment Landing Page</div>
          <div>Craft a standout brand with us. From logo design to strategy, we create memorable identities that resonate</div>
        </div>
        <div>
          <img src={img3} alt="" style={{ width: "100%", height: "200px" }} />
          <div className="py-4 text-2xl font-semibold">Banking Mobile App</div>
          <div>Craft a standout brand with us. From logo design to strategy, we create memorable identities that resonate</div>
        </div>
      </div>
    </>
  );
}
export default Work;
