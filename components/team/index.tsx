import React from "react";
import Member from "./member";

const Team = () => {
  return (
    <div
      className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0  overflow-hidden gap-2.5 pb-24 bg-white"
      id="aboutus"
    >
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 pb-12 md:pb-24 bg-white md:hidden">
    <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-10 md:gap-20 px-6 md:px-16 py-14 md:py-28 bg-[#f7f7f7]">
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-full md:w-[768px] gap-4">
        <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-3xl md:text-5xl font-bold text-center text-black">
            Our team
          </p>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-base md:text-lg text-center text-black">
          Tech trailblazers shaping tomorrow's solutions.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-full md:w-[1280px] gap-8 md:gap-24">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8 md:gap-16">
        <Member
  img="./muz.png"
  role="Frontend Developer & Database Engineer"
  name="Muzamil Kaleem"
/>
<Member
  img="./hadi.jpg"
  role="Team Lead & Lead Backend Developer"
  name="Hadi Khan"
/>
<Member
  img="./aman.png"
  role="Lead Frontend Developer & UI/UX Designer"
  name="Syed Aman Hussain"
/>
        </div>
      </div>
    </div>
  </div>
      <div className="hidden md:flex flex-col justify-start items-center flex-grow-0 flex-shrink-0  overflow-hidden gap-20 px-16 py-28 bg-[#f7f7f7]">
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[768px] gap-4">
          <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-6">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[768px] text-5xl font-bold text-center text-black">
              Our team
            </p>
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[768px] text-lg text-center text-black">
            Programming visionaries, forging the path to technological brilliance.{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[1280px] gap-24">
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-16">
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-12">
              <Member
                img="./muz.png"
                role="Frontend Developer & Database Engineer"
                name="Muzamil Kaleem"
              />
              <Member
                img="./hadi.jpg"
                role="Team Lead & Lead Backend Developer"
                name="Hadi Khan"
              />
              <Member
                img="./aman.png"
                role="Lead Frontend Developer & UI/UX Designer"
                name="Syed Aman Hussain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
