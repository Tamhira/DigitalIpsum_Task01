import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";

function Home() {
  return (
    <>
      <div className="flex py-10 px-14">
        <div className="flex-1 text-5xl font-bold px-10">
          Transforming Ideas into Digital Success with
          <span className="text-orange-500">Creativity</span> and
          <span className="text-orange-500">Expertise</span>
        </div>
        <div className="flex-1">
          <div className="text-lg pr-8">
            At our digital agency, we turn your ideas into success with creative
            and expert solutions. From web development to digital marketing and
            branding, we help you achieve your business goals. Discover the
            power of our innovative strategies.
          </div>
          <div className="flex mt-4 gap-20">
            <div className="bg-orange-500 border-2 border-black text-white px-6 py-2 rounded-md font-semibold">
              Get Started
            </div>
            <div className="flex gap-4">
              <div className="text-4xl">
                <FaRegArrowAltCircleRight />
              </div>
              <div className="text-lg font-semibold mt-1">View Portfolio</div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-24">
        <img
          src={img1}
          alt=""
          style={{ width: "100%", height: "50%" }}
          className="rounded-md"
        />
      </div>

      <div className="flex justify-between px-24 py-12">
        <div>
          <img src={img2} alt="" style={{ height: "25px" }} />
        </div>
        <div>
          <img src={img2} alt="" style={{ height: "25px" }} />
        </div>
        <div>
          <img src={img2} alt="" style={{ height: "25px" }} />
        </div>
        <div>
          <img src={img2} alt="" style={{ height: "25px" }} />
        </div>
        <div>
          <img src={img2} alt="" style={{ height: "25px" }} />
        </div>
        <div>
          <img src={img2} alt="" style={{ height: "25px" }} />
        </div>
      </div>
    </>
  );
}
export default Home;
