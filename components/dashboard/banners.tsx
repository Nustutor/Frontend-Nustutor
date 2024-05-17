import React from 'react'

const Banners = ({title}) => {
  return (
    <div>
      <div className="w-full relative overflow-hidden bg-[#702dff] md:hidden">
  <div className="w-full h-[calc(100vw * 181 / 880)] rounded-[calc(100vw * 20 / 880)]">
    <svg
      width={80}
      height={80}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[calc(100vw * 722 / 880)] top-[calc(100vw * 11 / 880)]"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M40 0C40 0 42.207 20.5997 50.8036 29.1964C59.4003 37.793 80 40 80 40C80 40 59.4003 42.207 50.8036 50.8036C42.207 59.4003 40 80 40 80C40 80 37.793 59.4003 29.1964 50.8036C20.5997 42.207 0 40 0 40C0 40 20.5997 37.793 29.1964 29.1964C37.793 20.5997 40 0 40 0Z"
        fill="white"
        fillOpacity="0.25"
      />
    </svg>
    {/* Other SVG elements */}
  </div>
  <div className="w-full h-[calc(100vw * 141 / 880)] absolute left-0 top-0 flex flex-col justify-start items-start gap-[calc(100vw * 4 / 880)] p-[calc(100vw * 4 / 880)]">
    <p className="text-xs text-left uppercase text-white">
      {title} dashboard
    </p>
    <p className="text-2xl font-semibold text-left text-white">
      <span className="text-2xl font-semibold text-left text-white">
        Solidify your concepts &amp; exams
      </span>
      <br />
      <span className="text-2xl font-semibold text-left text-white">
        with expert tutoring.
      </span>
    </p>
    <div className="flex justify-start items-center h-[calc(100vw * 9 / 880)] gap-[calc(100vw * 3 / 880)] px-[calc(100vw * 3 / 880)] py-[calc(100vw * 2 / 880)] rounded-[calc(100vw * 40 / 880)] bg-[#202020]">
      <p className="text-xs font-medium text-right text-white">
        Start Learning
      </p>
      <div className="w-[calc(100vw * 5 / 880)] h-[calc(100vw * 5 / 880)] relative p-[calc(100vw * 1.5 / 880)] rounded-[calc(100vw * 50 / 880)] bg-white">
        <svg
          width={8}
          height={8}
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="self-stretch flex-grow relative"
          preserveAspectRatio="none"
        >
          <path
            d="M1.33301 4.00013V2.81346C1.33301 1.34013 2.37634 0.736794 3.65301 1.47346L4.68301 2.06679L5.71301 2.66013C6.98967 3.39679 6.98967 4.60346 5.71301 5.34013L4.68301 5.93346L3.65301 6.52679C2.37634 7.26346 1.33301 6.66013 1.33301 5.18679V4.00013Z"
            stroke="#202020"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
</div>


    <div className="hidden md:block w-[880px] h-[181px] relative overflow-hidden rounded-[20px] bg-[#702dff]">
  <svg
    width={80}
    height={80}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[722px] top-11"
    preserveAspectRatio="xMidYMid meet"
  >
    <path
      d="M40 0C40 0 42.207 20.5997 50.8036 29.1964C59.4003 37.793 80 40 80 40C80 40 59.4003 42.207 50.8036 50.8036C42.207 59.4003 40 80 40 80C40 80 37.793 59.4003 29.1964 50.8036C20.5997 42.207 0 40 0 40C0 40 20.5997 37.793 29.1964 29.1964C37.793 20.5997 40 0 40 0Z"
      fill="white"
      fill-opacity="0.25"
    />
  </svg>
  <svg
    width={80}
    height={80}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[792px] top-[92px]"
    preserveAspectRatio="xMidYMid meet"
  >
    <path
      d="M40 0C40 0 42.207 20.5997 50.8036 29.1964C59.4003 37.793 80 40 80 40C80 40 59.4003 42.207 50.8036 50.8036C42.207 59.4003 40 80 40 80C40 80 37.793 59.4003 29.1964 50.8036C20.5997 42.207 0 40 0 40C0 40 20.5997 37.793 29.1964 29.1964C37.793 20.5997 40 0 40 0Z"
      fill="white"
      fill-opacity="0.1"
    />
  </svg>
  <svg
    width={80}
    height={59}
    viewBox="0 0 80 59"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[651px] top-[121px]"
    preserveAspectRatio="xMidYMid meet"
  >
    <path
      d="M40 0C40 0 42.207 30.3846 50.8036 43.0646C59.4003 55.7447 80 59 80 59C80 59 59.4003 62.2553 50.8036 74.9354C42.207 87.6154 40 118 40 118C40 118 37.793 87.6154 29.1964 74.9354C20.5997 62.2553 0 59 0 59C0 59 20.5997 55.7447 29.1964 43.0646C37.793 30.3846 40 0 40 0Z"
      fill="white"
      fill-opacity="0.1"
    />
  </svg>
  <svg
    width={61}
    height={59}
    viewBox="0 0 61 59"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[792px] top-[-60px]"
    preserveAspectRatio="xMidYMid meet"
  >
    <path
      d="M30.5 -59C30.5 -59 32.1828 -28.6154 38.7378 -15.9354C45.2927 -3.25534 61 -2.6226e-06 61 -2.6226e-06C61 -2.6226e-06 45.2927 3.25534 38.7378 15.9354C32.1828 28.6154 30.5 59 30.5 59C30.5 59 28.8172 28.6154 22.2622 15.9354C15.7073 3.25534 0 -2.6226e-06 0 -2.6226e-06C0 -2.6226e-06 15.7073 -3.25534 22.2622 -15.9354C28.8172 -28.6154 30.5 -59 30.5 -59Z"
      fill="white"
      fill-opacity="0.1"
    />
  </svg>
  <svg
    width={61}
    height={60}
    viewBox="0 0 61 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[661px] top-[19px]"
    preserveAspectRatio="xMidYMid meet"
  >
    <path
      d="M30.5 0C30.5 0 32.1828 15.4498 38.7378 21.8973C45.2927 28.3447 61 30 61 30C61 30 45.2927 31.6553 38.7378 38.1027C32.1828 44.5502 30.5 60 30.5 60C30.5 60 28.8172 44.5502 22.2622 38.1027C15.7073 31.6553 0 30 0 30C0 30 15.7073 28.3447 22.2622 21.8973C28.8172 15.4498 30.5 0 30.5 0Z"
      fill="white"
      fill-opacity="0.1"
    />
  </svg>
  <div className="w-[363px] h-[141px]">
    <div className="flex flex-col justify-start items-start absolute left-0 top-0 gap-4 p-4">
      <p className="flex-grow-0 flex-shrink-0 text-xs text-left uppercase text-white">
        {title} dashboard
      </p>
      <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-white">
        <span className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-white">
          Solidify your concepts &amp; exams
        </span>
        <br />
        <span className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-white">
          with expert tutoring.
        </span>
      </p>
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 h-9 relative gap-3 px-3 py-2 rounded-[40px] bg-[#202020]">
        <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-right text-white">
          Start Learning
        </p>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-5 h-5 relative gap-2.5 p-1.5 rounded-[50px] bg-white">
          <svg
            width={8}
            height={8}
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="self-stretch flex-grow relative"
            preserveAspectRatio="none"
          >
            <path
              d="M1.33301 4.00013V2.81346C1.33301 1.34013 2.37634 0.736794 3.65301 1.47346L4.68301 2.06679L5.71301 2.66013C6.98967 3.39679 6.98967 4.60346 5.71301 5.34013L4.68301 5.93346L3.65301 6.52679C2.37634 7.26346 1.33301 6.66013 1.33301 5.18679V4.00013Z"
              stroke="#202020"
              stroke-miterlimit={10}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Banners;