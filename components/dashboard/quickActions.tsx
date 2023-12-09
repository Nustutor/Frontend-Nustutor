import React from 'react'

const QuickActions = ({Content}) => {
  return (
    <div
  className="flex justify-center items-center flex-grow relative gap-[17px] p-3 rounded-xl bg-white"
  style={{ boxShadow: "0px 14px 42px 0 rgba(8,15,52,0.06)" }}
>
  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-3 rounded-[50px] bg-[#702dff]/20">
    <svg
      width={17}
      height={16}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M8.8464 1.93994C6.63973 1.93994 4.8464 3.73327 4.8464 5.93994V7.86661C4.8464 8.27328 4.67307 8.89327 4.4664 9.23994L3.69973 10.5133C3.2264 11.2999 3.55307 12.1733 4.41973 12.4666C7.29307 13.4266 10.3931 13.4266 13.2664 12.4666C14.0731 12.1999 14.4264 11.2466 13.9864 10.5133L13.2197 9.23994C13.0197 8.89327 12.8464 8.27328 12.8464 7.86661V5.93994C12.8464 3.73994 11.0464 1.93994 8.8464 1.93994Z"
        stroke="#702DFF"
        stroke-width="1.5"
        stroke-miterlimit={10}
        stroke-linecap="round"
      />
      <path
        d="M10.0799 2.13346C9.87328 2.07346 9.65995 2.02679 9.43995 2.00012C8.79995 1.92012 8.18661 1.96679 7.61328 2.13346C7.80661 1.64012 8.28661 1.29346 8.84661 1.29346C9.40661 1.29346 9.88661 1.64012 10.0799 2.13346Z"
        stroke="#702DFF"
        stroke-width="1.5"
        stroke-miterlimit={10}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.8467 12.7065C10.8467 13.8065 9.94668 14.7065 8.84668 14.7065C8.30001 14.7065 7.79335 14.4799 7.43335 14.1199C7.07335 13.7599 6.84668 13.2532 6.84668 12.7065"
        stroke="#702DFF"
        stroke-width="1.5"
        stroke-miterlimit={10}
      />
    </svg>
  </div>
  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[97px] text-xs text-left text-[#5f5f5f]">
      Notification
    </p>
    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[97px] text-xs font-semibold text-left text-[#202020]">
      {Content}
    </p>
  </div>
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
    preserveAspectRatio="none"
  >
    <path
      d="M14.833 5C14.833 3.9 13.933 3 12.833 3C11.733 3 10.833 3.9 10.833 5C10.833 6.1 11.733 7 12.833 7C13.933 7 14.833 6.1 14.833 5Z"
      stroke="#7E7E7E"
      stroke-width="1.5"
    />
    <path
      d="M14.833 19C14.833 17.9 13.933 17 12.833 17C11.733 17 10.833 17.9 10.833 19C10.833 20.1 11.733 21 12.833 21C13.933 21 14.833 20.1 14.833 19Z"
      stroke="#7E7E7E"
      stroke-width="1.5"
    />
    <path
      d="M14.833 12C14.833 10.9 13.933 10 12.833 10C11.733 10 10.833 10.9 10.833 12C10.833 13.1 11.733 14 12.833 14C13.933 14 14.833 13.1 14.833 12Z"
      stroke="#7E7E7E"
      stroke-width="1.5"
    />
  </svg>
</div>
  )
}

export default QuickActions