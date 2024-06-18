import React from "react";
import logo2 from "../assets/logo2.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";

function Footer() {
  return (
    <>
      <div className="bg-[#27272F] px-24 py-14 text-white ">
        <div className="flex justify-between gap-4">
          <div className="w-2/5 pr-8">
            <div>
              <img src={logo2} alt="" />
            </div>
            <div className="py-8">
              Transforming Ideas into Digital Excellence through Innovative
              Solutions and Unmatched Commitment to Your Success
            </div>
            <div className="py-4">Subscribe to our Newsletter</div>
            <div className="flex gap-2">
              <input
                type="email"
                name=""
                id=""
                placeholder="Type your email"
                className="rounded-md px-4"
              />
              <button className="bg-orange-500 px-3 py-2 rounded-md">
                Subscribe
              </button>
            </div>
          </div>
          <div className="w-1/5 ">
            <div className="font-semibold text-2xl">Company</div>
            <div className="py-4">About Us</div>
            <div className="pb-4">Pricing</div>
            <div className="pb-4">Career</div>
            <div className="pb-4">Contact Us</div>
          </div>
          <div className="w-1/5">
            <div className="font-semibold text-2xl">Support</div>
            <div className="py-4">Help</div>
            <div className="pb-4">Service</div>
            <div className="pb-4">News & Blog</div>
            <div className="pb-4">FAQ</div>
          </div>
          <div className="w-1/5">
            <div className="font-semibold text-2xl">Get In Touch</div>
            <div className="flex justify-between py-8">
              <div className="hover:text-orange-500 text-3xl">
                <FaXTwitter />
              </div>
              <div className="hover:text-orange-500 text-3xl">
                <FaFacebookF />
              </div>
              <div className="hover:text-orange-500 text-3xl">
                <TbBrandGithubFilled />
              </div>
              <div className="hover:text-orange-500 text-3xl">
                {" "}
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 bg-white h-[0.10rem] w-full" />
        <div className="flex justify-between">
            <div className="flex gap-20">
                <div>Terms of Use</div>
                <div>Cookies Policy</div>
                <div>Privacy Policy     </div>
            </div>
            <div className="">Copyright Xode 2024. All Right Reserved</div>
        </div>
      </div>
    </>
  );
}
export default Footer;
