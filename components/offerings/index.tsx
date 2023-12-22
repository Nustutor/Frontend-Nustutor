import React from 'react'

const Offering = ({subject,title,description,rate,tutorName,tutorAbout}) => {
  return (
    <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-32">
  <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-16">
    <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[884px] gap-[115px]">
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[828px] relative gap-16">
        <img
          src="/courseoffercover.png"
          className="flex-grow-0 flex-shrink-0 w-[1280px] h-[309px] rounded-xl object-none"
        />
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[249px] h-[39px] relative gap-2.5 p-3 rounded-2xl bg-[#702dff]/20">
          <p className="flex-grow-0 flex-shrink-0 text-base text-left uppercase text-[#702dff]">
            {subject}
          </p>
        </div>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-16">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-8">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-6">
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-6">
                <p className="flex-grow-0 flex-shrink-0 w-[612px] text-5xl font-bold text-center text-black">
                  {title}
                </p>
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[612px] relative">
                  <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-black">
                    {description}
                  </p>
                </div>
                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                  <p className="flex-grow w-[612px] text-2xl font-semibold text-center capitalize text-[#202020]/80">
                    Starts from pKR {rate} per hour
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-6">
            <div className="flex-grow-0 flex-shrink-0 w-32 h-32">
              <img
                src="/tutorpfp.png"
                className="w-32 h-32 absolute left-[-0.5px] top-[-0.5px] rounded-[999px] object-none"
              />
            </div>
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1 bg-white">
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[183px] text-2xl font-medium text-left capitalize text-[#202020]">
                {tutorName}
              </p>
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[183px] text-base text-left capitalize text-[#202020]">
                {tutorAbout}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2">
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-8">
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[225px] h-[65px] relative overflow-hidden gap-2 px-6 py-3.5 rounded-lg bg-[#1a56db]">
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
            Add Course
          </p>
        </div>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[225px] h-[65px] relative overflow-hidden gap-2 px-6 py-3.5 rounded-lg bg-[#bb421c]">
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
            Discard Course
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Offering;