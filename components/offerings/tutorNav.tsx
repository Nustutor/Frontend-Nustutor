'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const TutorNav = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/home')

  }
  return (
    <div className="flex flex-col justify-start items-start w-[1280px] absolute left-20 top-0 py-6">
    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-8">
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
        <svg
          width={30}
          height={34}
          viewBox="0 0 30 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-[29.76px] h-[32.62px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <mask
            id="mask0_377_1818"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={30}
            height={34}
          >
            <path
              d="M12.0589 1.42613C13.8053 0.417854 15.9569 0.417853 17.7033 1.42613L26.94 6.75893C28.6864 7.7672 29.7622 9.63057 29.7622 11.6471V22.3127C29.7622 24.3293 28.6864 26.1926 26.94 27.2009L17.7033 32.5337C15.9569 33.542 13.8053 33.542 12.0589 32.5337L2.8222 27.2009C1.07582 26.1926 0 24.3293 0 22.3127V11.6471C0 9.63057 1.07582 7.7672 2.8222 6.75893L12.0589 1.42613Z"
              fill="#C4C4C4"
            />
          </mask>
          <g mask="url(#mask0_377_1818)">
            <path
              d="M14.877 -0.483887L31.1888 8.93375L22.9339 13.3785L19.5242 11.5186L16.4244 11.8286L8.67499 9.03883L6.81512 11.5186L5.88519 12.7586L4.02533 11.5186L-1.43487 8.93375L14.877 -0.483887Z"
              fill="url(#paint0_linear_377_1818)"
            />
            <path
              d="M-0.128906 9.06675L6.19899 12.1353L9.91871 21.1247L9.91871 21.4347L11.1586 22.9845L16.7382 27.3242L14.8802 35.0633L-0.128907 26.3978L-0.128906 9.06675Z"
              fill="url(#paint1_linear_377_1818)"
            />
            <path
              d="M19.8341 21.4342L23.8638 12.7549L29.886 9.06866L29.886 26.3997L14.8769 35.0652L14.5645 27.3238L19.8341 21.4342Z"
              fill="url(#paint2_linear_377_1818)"
            />
            <path
              d="M14.8763 6.5625C12.3115 6.5625 9.9741 7.53598 8.21323 9.13358L9.6428 21.4413C10.0337 21.6217 12.2759 22.3713 12.7065 22.3713H15.8062C16.3541 22.3713 20.1459 21.2035 20.1459 21.7514L19.8359 20.4494C19.8359 20.9972 19.3919 21.4413 18.844 21.4413H10.9086C10.3608 21.4413 9.91667 20.9972 9.91667 20.4494V15.6474C9.91667 15.2168 9.82323 14.7913 9.6428 14.4003L8.21323 9.13358C6.61563 10.8943 4.95703 13.9169 4.95703 16.4818C4.95703 21.9601 9.39799 26.401 14.8763 26.401C20.3546 26.401 24.7956 21.9601 24.7956 16.4818C24.7956 11.0035 20.3546 6.5625 14.8763 6.5625Z"
              fill="url(#paint3_linear_377_1818)"
            />
            <path
              d="M13.0393 10.7029C13.2583 10.6184 13.4926 10.5852 13.7246 10.6059C13.9565 10.6266 14.18 10.7006 14.3781 10.8223C14.5761 10.9439 14.7436 11.1101 14.8678 11.3083C14.9921 11.5064 15.0697 11.7312 15.095 11.9658C15.2751 13.6557 14.8956 15.3667 14.016 16.8304C13.1364 18.294 11.8066 19.4274 10.2352 20.0527L9.1231 17.1773C10.0618 16.8034 10.8568 16.1274 11.3846 15.2545C11.9124 14.3815 12.1433 13.3604 12.0415 12.3501C12.0044 12.0052 12.0821 11.6558 12.2624 11.3574C12.4427 11.059 12.7152 10.8286 13.0367 10.7028L13.0393 10.7029Z"
              fill="#9C5AFF"
            />
            <path
              d="M13.0263 10.7074C12.6465 10.8588 12.3392 11.156 12.1721 11.5336C12.005 11.9113 11.9917 12.3386 12.1352 12.7215L15.3852 21.3883C15.5289 21.7712 15.8175 22.0782 16.1877 22.242C16.5578 22.4058 16.9792 22.4129 17.3591 22.2617V22.2617C17.5473 22.1869 17.7196 22.0754 17.8663 21.9337C18.0129 21.7919 18.131 21.6227 18.2137 21.4357C18.2965 21.2486 18.3423 21.0474 18.3486 20.8436C18.3548 20.6398 18.3214 20.4373 18.2503 20.2477L15.0002 11.5808C14.9292 11.3912 14.8218 11.2182 14.6841 11.0716C14.5465 10.9251 14.3813 10.8079 14.1979 10.7268C14.0146 10.6457 13.8168 10.6022 13.6158 10.5989C13.4147 10.5956 13.2144 10.6325 13.0263 10.7074Z"
              fill="#9C5AFF"
            />
            <path
              d="M17.3452 22.2641C17.1263 22.3487 16.892 22.3819 16.6601 22.3613C16.4282 22.3407 16.2047 22.2667 16.0067 22.1451C15.8086 22.0235 15.6411 21.8573 15.5169 21.6593C15.3927 21.4612 15.315 21.2364 15.2897 21.0019C15.1098 19.312 15.4894 17.6009 16.3689 16.1372C17.2484 14.6735 18.5781 13.54 20.1493 12.9144L21.2614 15.7908C20.3228 16.1647 19.5277 16.8407 18.9999 17.7137C18.4722 18.5867 18.2412 19.6077 18.3431 20.618C18.3796 20.9631 18.3013 21.3124 18.1206 21.6106C17.9398 21.9088 17.6669 22.1388 17.3452 22.2641V22.2641Z"
              fill="#9C5AFF"
            />
          </g>
          <defs>
            <lineargradient
              id="paint0_linear_377_1818"
              x1="14.5646"
              y1="0.979424"
              x2="14.282"
              y2="12.3017"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4E00D3" />
              <stop offset={1} stop-color="#7A36F0" />
            </lineargradient>
            <lineargradient
              id="paint1_linear_377_1818"
              x1="14.8783"
              y1="23.9145"
              x2="5.90272"
              y2="13.1528"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5508D8" />
              <stop offset={1} stop-color="#7935EF" />
            </lineargradient>
            <lineargradient
              id="paint2_linear_377_1818"
              x1="14.8744"
              y1="25.154"
              x2="23.4474"
              y2="13.6948"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5205D6" />
              <stop offset={1} stop-color="#7A35F0" />
            </lineargradient>
            <lineargradient
              id="paint3_linear_377_1818"
              x1="14.8763"
              y1="6.5625"
              x2="14.8763"
              y2="26.401"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7935EF" />
              <stop offset={1} stop-color="#6117E0" />
            </lineargradient>
          </defs>
        </svg>
        <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-[#111928]">
          Nustutor
        </p>
      </div>
      <div className="flex justify-start items-center flex-grow gap-8">
        <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative">
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-[#111928]">
            Home
          </p>
        </div>
        <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative">
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-[#111928]">
            Features
          </p>
        </div>
        <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative">
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-[#111928]">
            About Us
          </p>
        </div>
        <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative">
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-[#111928]">
            Contact
          </p>
        </div>
      </div>
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-4">
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 p-1">
          <img
            src="/profile.png"
            className="flex-grow-0 flex-shrink-0 w-[37px] h-[39px] rounded-[9099px] object-none"
          />
        </div>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden px-3 py-2 rounded-lg bg-[#5508d8] cursor-pointer"
        onClick={handleClick}>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-white">
            Switch to Learning
          </p>
        </div>
      </div>
    </div>
  </div> 
  )
}

export default TutorNav;