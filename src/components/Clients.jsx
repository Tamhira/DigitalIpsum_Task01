import React from "react";
import { FaStar } from "react-icons/fa";
import img4 from "../assets/img4.png";

function Clients() {
  return (
    <>
      <div className="flex px-24 pb-8">
        <div className="text-4xl font-bold flex-1">
          What our Client’s Say About Us
        </div>
        <div className="text-right">
          <div className="border-2 border-black font-semibold px-3 rounded-md text-center py-2 hover:bg-orange-500 hover:text-white">
            View All Testimony
          </div>
        </div>
      </div>

      <div className="flex gap-8 px-24 justify-between">
        <div className="bg-white px-8 py-10">
          <div className="flex pb-4 text-2xl">
            <div className="text-yellow-400">
              <FaStar />
            </div>
            <div className="text-yellow-400">
              <FaStar />
            </div>
            <div className="text-yellow-400">
              <FaStar />
            </div>
            <div className="text-yellow-400">
              <FaStar />
            </div>
            <div className="text-yellow-400">
              <FaStar />
            </div>
          </div>
          <div className="text-3xl font-semibold">Everything Great</div>
          <div className="py-4">
            Working with this digital agency has been a game-changer for our
            business. Their innovative solutions and creative approach have
            significantly boosted our online presence & engagement. Highly
            recommend!
          </div>
          <div className="flex pt-4 gap-4">
            <div className="w-1/4">
              {" "}
              <img src={img4} alt="" className="rounded-full" />
            </div>
            <div className="w-3/4">
              <div className="font-semibold text-lg">Sarah Tamara</div>
              <div>Marketing Director</div>
            </div>
          </div>
        </div>

        <div className="bg-white px-8 py-10">
          <div className="flex pb-4 text-2xl">
            <div className="text-yellow-400">
              <FaStar />
            </div>
            <div className="text-yellow-400">
              <FaStar />
            </div>
            <div className="text-yellow-400">
              <FaStar />
            </div>
            <div className="text-yellow-400">
              <FaStar />
            </div>
            <div className="text-yellow-400">
              <FaStar />
            </div>
          </div>
          <div className="text-3xl font-semibold">WOW!</div>
          <div className="py-4">
            The team at this digital agency exceeded our expectations. They
            delivered a stunning website that truly captures our brand essence
            and functionality that our users love. Their support and expertise
            are unmatched.
          </div>
          <div className="flex pt-4 gap-4">
            <div className="w-1/4">
              {" "}
              <img src={img4} alt="" className="rounded-full" />
            </div>
            <div className="w-3/4">
              <div className="font-semibold text-lg">David Romero</div>
              <div>CEO Uyekuyek</div>
            </div>
          </div>
        </div>

        <div className="bg-white px-8 py-10">
          <div className="flex pb-4 text-2xl">
            <div className="text-yellow-400">
              <FaStar />
            </div>
            <div className="text-yellow-400">
              <FaStar />
            </div>
            <div className="text-yellow-400">
              <FaStar />
            </div>
            <div className="text-yellow-400">
              <FaStar />
            </div>
            <div className="text-yellow-400">
              <FaStar />
            </div>
          </div>
          <div className="text-3xl font-semibold">Great Team!</div>
          <div className="py-4">
            Our collaboration with this digital agency was seamless and
            effective. They brought our vision to life with their expert design
            and development skills, resulting in a user-friendly app that our
            customers rave about.
          </div>
          <div className="flex pt-4 gap-4">
            <div className="w-1/4">
              {" "}
              <img src={img4} alt="" className="rounded-full" />
            </div>
            <div className="w-3/4">
              <div className="font-semibold text-lg">Emily Lawson</div>
              <div>Product Manager</div>
            </div>
          </div>
        </div>

        <div className="bg-white px-8 py-10">
          <div className="flex pb-4 text-2xl">
            <div className="text-yellow-400">
              <FaStar />
            </div>
            <div className="text-yellow-400">
              <FaStar />
            </div>
            <div className="text-yellow-400">
              <FaStar />
            </div>
            <div className="text-yellow-400">
              <FaStar />
            </div>
            <div className="text-yellow-400">
              <FaStar />
            </div>
          </div>
          <div className="text-3xl font-semibold">Phenomenal</div>
          <div className="py-4">
            This digital agency is phenomenal! Their branding services helped us
            create a strong, memorable identity that resonates with our
            audience. Their strategic solutions have driven real business
            growth.
          </div>
          <div className="flex pt-4 gap-4">
            <div className="w-1/4">
              {" "}
              <img src={img4} alt="" className="rounded-full" />
            </div>
            <div className="w-3/4">
              <div className="font-semibold text-lg">Mark Suffalo</div>
              <div>Brand Manager</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Clients;
