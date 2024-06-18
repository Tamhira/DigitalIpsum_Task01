import React from "react";

function Service() {
  return (
    <>
      <div className="text-4xl font-bold text-center py-8">Our Services</div>

      <div className="flex px-24 gap-4 pb-4">
        <div className="bg-white flex-1 hover:bg-orange-500 rounded-md px-4 py-8 hover:text-white">
          <div className="text-3xl font-semibold">iOS Development</div>
          <div className="py-6">
            Boost business growth with our high performance iOS apps. Expert
            design, seamless functionality, ongoing support.
          </div>
          <div className="border-2 border-black w-[100px] text-center py-2 rounded-md bg-white text-black">
            Get Started
          </div>
        </div>
        <div className="bg-white flex-1 hover:bg-orange-500 rounded-md px-4 py-8 hover:text-white">
          <div className="text-3xl font-semibold">Website Development</div>
          <div className="py-6">
            Elevate your online presence with our tailored website development.
            We craft responsive sites that capture your brand essence, engaging
            your audience effortlessly.
          </div>
          <div className="border-2 border-black w-[100px] text-center py-2 rounded-md bg-white text-black">
            Get Started
          </div>
        </div>
      </div>

      <div className="flex px-24 gap-4 pb-4">
        <div className="bg-white flex-1 hover:bg-orange-500 rounded-md px-4 py-8 hover:text-white">
          <div className="text-3xl font-semibold">UI UX Designer</div>
          <div className="py-6">
            Elevate your digital presence with our UI/UX design. We create
            stunning interfaces that enhance user experiences across platforms,
            driving business success.
          </div>
          <div className="border-2 border-black w-[100px] text-center py-2 rounded-md bg-white text-black">
            Get Started
          </div>
        </div>
        <div className="bg-white flex-1 hover:bg-orange-500 rounded-md px-4 py-8 hover:text-white">
          <div className="text-3xl font-semibold">Android Development</div>
          <div className="py-6">
            Drive business growth with our high-quality Android apps. Expert
            design, smooth functionality, continuous support.
          </div>
          <div className="border-2 border-black w-[100px] text-center py-2 rounded-md bg-white text-black">
            Get Started
          </div>
        </div>
      </div>

      <div className="flex px-24 gap-4">
        <div className="bg-white flex-1 hover:bg-orange-500 rounded-md px-4 py-8 hover:text-white">
          <div className="text-3xl font-semibold">Branding</div>
          <div className="py-6">
            Craft a standout brand with us. From logo design to strategy, we
            create memorable identities that resonate. Partner with us for
            lasting impressions.
          </div>
          <div className="border-2 border-black w-[100px] text-center py-2 rounded-md bg-white text-black">
            Get Started
          </div>
        </div>
        <div className="bg-white flex-1 hover:bg-orange-500 rounded-md px-4 py-8 hover:text-white">
          <div className="text-3xl font-semibold">Illustration</div>
          <div className="py-6">
            Elevate your visuals with our professional illustration services.
            Stand out and communicate effectively. Partner with us for
            creativity and impact.
          </div>
          <div className="border-2 border-black w-[100px] text-center py-2 rounded-md bg-white text-black">
            Get Started
          </div>
        </div>
      </div>

      <div className="bg-[#27272F] px-24 text-white my-20 py-10">
        <section className="grid grid-cols-4 mx-auto container max-sm:grid-cols-1">
          <div className="flex items-center justify-center gap-3">
            <div className="py-5">
              <div className="text-5xl font-medium text-center pb-4">12+</div>
              <div>Years of Experience</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="py-5">
              <div className="text-5xl font-medium text-center pb-4">238</div>
              <div>World Wide Clients</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="py-5">
              <div className="text-5xl font-medium text-center pb-4">1.2K</div>
              <div>Projects Completed</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="py-5">
              <div className="text-5xl font-medium text-center pb-4">10+</div>
              <div>Trusted Company</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Service;
