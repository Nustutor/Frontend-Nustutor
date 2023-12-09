import React from 'react'

const RecentActivity = () => {
  return (
    <div className="flex flex-col justify-start items-center self-stretch flex-grow gap-5">
  <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
    <p className="self-stretch flex-grow w-[841px] h-[19px] text-base font-medium text-left capitalize text-[#202020]">
      Recent Tutoring
    </p>
    <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 relative gap-3">
      <p className="flex-grow-0 flex-shrink-0 text-xs text-right capitalize text-[#36c]">See All</p>
    </div>
  </div>
  <div
    className="flex flex-col justify-start items-center self-stretch flex-grow gap-6 px-6 py-5 rounded-tl-xl rounded-tr-xl bg-white"
    style={{ boxShadow: "0px 14px 42px 0 rgba(8,15,52,0.06)" }}
  >
    <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-14">
      <p className="flex-grow w-[263.5px] text-[8px] font-semibold text-left uppercase text-[#3f3f3f]">
        instructor name &amp; date
      </p>
      <p className="flex-grow-0 flex-shrink-0 text-[8px] font-semibold text-center uppercase text-[#3f3f3f]">
        COURSE TYPE
      </p>
      <p className="flex-grow w-[263.5px] text-[8px] font-semibold text-center uppercase text-[#3f3f3f]">
        COURSE TITLE
      </p>
      <p className="flex-grow-0 flex-shrink-0 w-20 text-[8px] font-semibold text-center uppercase text-[#3f3f3f]">
        ACTIONS
      </p>
    </div>
    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-14">
      <div className="flex justify-center items-center flex-grow relative gap-2">
        <div className="flex-grow-0 flex-shrink-0 w-6 h-6">
          <div className="absolute left-[-0.5px] top-[4.5px]" />
          <img
            src="prashant-(502)-2-2.png"
            className="w-6 h-6 absolute left-[-0.5px] top-[4.5px] rounded-[999px] object-none"
          />
        </div>
        <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[214.5px] text-sm font-medium text-left capitalize text-[#202020]">
            Tutor 1
          </p>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[214.5px] text-[11px] text-left capitalize text-[#5f5f5f]">
            25/2/2023
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[15px] relative gap-2.5 p-3 rounded-lg bg-[#702dff]/20">
        <p className="flex-grow-0 flex-shrink-0 text-[10px] text-left uppercase text-[#702dff]">
          MATH-101
        </p>
      </div>
      <p className="flex-grow w-[246.5px] text-xs text-center capitalize text-[#202020]">
        Calculus-1: Entire Course
      </p>
      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[15px] relative gap-2.5 p-3 rounded-lg bg-[#36c]/20">
        <p className="flex-grow-0 flex-shrink-0 text-[10px] text-left uppercase text-[#36c]">
          SHOW DETAILS
        </p>
      </div>
    </div>
    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-14">
      <div className="flex justify-center items-center flex-grow relative gap-2">
        <div className="flex-grow-0 flex-shrink-0 w-6 h-6">
          <div className="absolute left-[-0.5px] top-[4.5px]" />
          <img
            src="prashant-(502)-2.png"
            className="w-6 h-[25px] absolute left-[-0.5px] top-[3.5px] rounded-[999px] object-none"
          />
        </div>
        <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[214.5px] text-sm font-medium text-left capitalize text-[#202020]">
            Tutor 2
          </p>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[214.5px] text-[11px] text-left capitalize text-[#5f5f5f]">
            25/2/2023
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[15px] relative gap-2.5 p-3 rounded-lg bg-[#702dff]/20">
        <p className="flex-grow-0 flex-shrink-0 text-[10px] text-left uppercase text-[#702dff]">
          MATH-101
        </p>
      </div>
      <p className="flex-grow w-[246.5px] text-xs text-center capitalize text-[#202020]">
        Calculus-1: Entire Course
      </p>
      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[15px] relative gap-2.5 p-3 rounded-lg bg-[#36c]/20">
        <p className="flex-grow-0 flex-shrink-0 text-[10px] text-left uppercase text-[#36c]">
          SHOW DETAILS
        </p>
      </div>
    </div>
  </div>
</div>
  )
}

export default RecentActivity