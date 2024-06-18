import React from "react";
import { MdAttachEmail } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import { VscFeedback } from "react-icons/vsc";

function HowItWorks() {
  return (
    <>
      <div className="mx-24 my-24 bg-[#F5EEEC]">
        <div className="text-4xl font-bold text-center py-14">How It Works</div>

        <div className="flex px-24 justify-between pt-10 pb-24 gap-14">
          <div>
            <div className="text-6xl flex justify-center text-orange-500">
              <MdAttachEmail />
            </div>
            <div className="font-semibold text-center py-4 text-2xl">Send your request to us</div>
            <div className="text-center">Craft a standout brand with us. From logo design to strategy, </div>
          </div>
          <div>
            <div className="text-6xl flex justify-center text-orange-500">
              <FaDownload />
            </div>
            <div className="font-semibold text-center py-4 text-2xl">Get your product</div>
            <div className="text-center">Craft a standout brand with us. From logo design to strategy, </div>
          </div>
          <div>
            <div className="text-6xl flex justify-center text-orange-500">
              <VscFeedback />
            </div>
            <div className="font-semibold text-center py-4 text-2xl">Give us feedback</div>
            <div className="text-center">Craft a standout brand with us. From logo design to strategy, </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HowItWorks;
