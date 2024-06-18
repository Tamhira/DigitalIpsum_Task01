import React from "react";
import { FaCheck } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import img3 from "../assets/img3.png";

function Plans() {
  return (
    <>
      <div className="text-4xl font-bold text-center pt-8 pb-14">
        Choose Plans That Fit You Best
      </div>

      <div className="flex gap-8 px-24 justify-between">
        <div className="bg-white px-8 py-10" style={{ width: "450px" }} >
          <div className="text-3xl font-semibold">Starter</div>
          <div className="py-4">Great for small projects</div>
          <div className="text-5xl font-bold pt-8">$1,500</div>
          <div>per month</div>
          {/* <br className="font-bold" style={{ height: "25px" , width:"500px"}}/> */}
          <div className="pb-4 pt-14 text-lg font-semibold">
            What's Include:
          </div>
          <div className="flex gap-4 pb-2">
            <div className="pt-1">
              <FaCheck />
            </div>
            <div>UI UX Design</div>
          </div>
          <div className="flex gap-4 pb-2">
            <div className="pt-1">
              <FaCheck />
            </div>
            <div>Least Research Method</div>
          </div>
          <div className="flex gap-4 pb-2">
            <div className="pt-1">
              <FaCheck />
            </div>
            <div>Full Stack Development</div>
          </div>
          <div className="flex gap-4 pb-2">
            <div className="pt-1">
              <FaCheck />
            </div>
            <div>Meeting 30 min biweekly</div>
          </div>
          <div className="pt-14 text-lg font-semibold pb-4">Team:</div>
          <div className="flex gap-4 pb-2">
            <div className="pt-2">
              <GoDotFill />
            </div>
            <div>1 UI Designer working with 2 Developers</div>
          </div>
          <div className="border-2 border-black font-semibold px-3 py-2 rounded-md w-1/2 text-center mt-8 hover:bg-orange-500 hover:text-white">
            Get Starter Plan
          </div>
        </div>

        <div className="bg-white px-8 py-10" style={{ width: "450px" }}>
          <div className="text-3xl font-semibold">Professional</div>
          <div className="py-4">Great for medium projects</div>
          <div className="text-5xl font-bold pt-8">$2,500</div>
          <div>per month</div>
          {/* <br className="font-bold" style={{ height: "25px" , width:"500px"}}/> */}
          <div className="pb-4 pt-14 text-lg font-semibold">
            What's Include:
          </div>
          <div className="flex gap-4 pb-2">
            <div className="pt-1">
              <FaCheck />
            </div>
            <div>Everything on Started</div>
          </div>
          <div className="flex gap-4 pb-2">
            <div className="pt-1">
              <FaCheck />
            </div>
            <div>Full Research Method</div>
          </div>
          <div className="flex gap-4 pb-2">
            <div className="pt-1">
              <FaCheck />
            </div>
            <div>Guaranteed</div>
          </div>
          <div className="flex gap-4 pb-2">
            <div className="pt-1">
              <FaCheck />
            </div>
            <div>Meeting 30 min once a week</div>
          </div>
          <div className="pt-14 text-lg font-semibold pb-4">Team:</div>
          <div className="flex gap-4 pb-2">
            <div className="pt-2">
              <GoDotFill />
            </div>
            <div>2 UI Designer working with 2 Developers</div>
          </div>
          <div className="border-2 border-black font-semibold px-3 py-2 rounded-md w-2/3 text-center mt-8 hover:bg-orange-500 hover:text-white">
            Get Professional Plan
          </div>
        </div>
        
        <div className="bg-white px-8 py-10" style={{ width: "450px" }}>
          <div className="text-3xl font-semibold">Enterprise</div>
          <div className="py-4">Great for big projects</div>
          <div className="text-5xl font-bold pt-8">$4,000</div>
          <div>per month</div>
          {/* <br className="font-bold" style={{ height: "25px" , width:"500px"}}/> */}
          <div className="pb-4 pt-14 text-lg font-semibold">
            What's Include:
          </div>
          <div className="flex gap-4 pb-2">
            <div className="pt-1">
              <FaCheck />
            </div>
            <div>Everything on Professional</div>
          </div>
          <div className="flex gap-4 pb-2">
            <div className="pt-1">
              <FaCheck />
            </div>
            <div>Free Illustration</div>
          </div>
          <div className="flex gap-4 pb-2">
            <div className="pt-1">
              <FaCheck />
            </div>
            <div>Dedicated team</div>
          </div>
          <div className="flex gap-4 pb-2">
            <div className="pt-1">
              <FaCheck />
            </div>
            <div>Meeting 30 min everyday</div>
          </div>
          <div className="pt-14 text-lg font-semibold pb-4">Team:</div>
          <div className="flex gap-4 pb-2">
            <div className="pt-2">
              <GoDotFill />
            </div>
            <div>2 UI Designer working with 4 Developers</div>
          </div>
          <div className="border-2 border-black font-semibold px-3 py-2 rounded-md w-1/2 text-center mt-8 hover:bg-orange-500 hover:text-white">
            Talk to our Team
          </div>
        </div>
      </div>

      <div className="bg-[#27272F] px-24 text-white my-20 py-10 flex">
        <div className="w-1/2 text-5xl font-bold p-28">Our Team Help Craft Your Product Perfectly </div>
        <div className="w-1/2 flex justify-center p-14 "><img src={img3} alt="" className="rounded-md"/></div>
      </div>
    </>
  );
}
export default Plans;
