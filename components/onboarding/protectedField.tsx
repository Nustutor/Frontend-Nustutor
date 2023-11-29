import React from 'react'

const ProtectedField = ({label,directive}) => {
  return (
    <div>
  <div className="w-[435px] h-[90px]">
    <div className="w-[435px] h-[54px] absolute left-[-0.5px] top-[246.5px] rounded-[40px] bg-white border border-[#9e896a]" />
    <p className="absolute left-0 top-[211px] text-base text-left text-black">{label}</p>
    <p className="absolute left-[31px] top-[265px] text-[15px] font-light text-left text-[#acacac]">
      {directive}
    </p>
  </div>
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[18px] h-[18px] absolute left-[389px] top-[265px]"
    preserveAspectRatio="none"
  >
    <g clip-path="url(#clip0_146_820)">
      <path
        d="M8.86304 6.14929L11.4397 8.72598L11.452 8.59101C11.452 7.23721 10.3518 6.13702 8.99801 6.13702L8.86304 6.14929Z"
        fill="black"
      />
      <path
        d="M8.99795 4.50093C11.2556 4.50093 13.0879 6.33326 13.0879 8.59092C13.0879 9.11853 12.9816 9.6216 12.7976 10.0838L15.1902 12.4764C16.4254 11.4457 17.3988 10.1124 18 8.59092C16.5808 4.99994 13.092 2.45596 8.99798 2.45596C7.85278 2.45596 6.75669 2.66044 5.73828 3.02854L7.50515 4.79131C7.96727 4.61136 8.47034 4.50093 8.99795 4.50093Z"
        fill="black"
      />
      <path
        d="M0.817983 2.27202L2.68301 4.13706L3.05521 4.50926C1.70552 5.56447 0.638037 6.96735 0 8.59104C1.41515 12.182 4.90798 14.726 8.99797 14.726C10.2659 14.726 11.4765 14.4806 12.5849 14.0348L12.9326 14.3825L15.317 16.771L16.36 15.7321L1.86093 1.22908L0.817983 2.27202ZM5.34153 6.79146L6.60533 8.05527C6.56852 8.23115 6.54398 8.40699 6.54398 8.59104C6.54398 9.94484 7.64417 11.045 8.99797 11.045C9.18202 11.045 9.3579 11.0205 9.52968 10.9837L10.7935 12.2475C10.2495 12.5174 9.64421 12.681 8.99797 12.681C6.7403 12.681 4.90798 10.8487 4.90798 8.59104C4.90798 7.94484 5.07159 7.33951 5.34153 6.79146Z"
        fill="black"
      />
    </g>
    <defs>
      <clippath id="clip0_146_820">
        <rect width={18} height={18} fill="white" />
      </clippath>
    </defs>
  </svg>
</div>
  )
}

export default ProtectedField