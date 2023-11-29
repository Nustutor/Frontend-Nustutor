import React from 'react'
import Toggle from './toggle'
import InputField from './inputField'
import ProtectedField from './protectedField'

const login = () => {
  return (
    <div className="w-[1440px] h-[900px] relative overflow-hidden bg-[#fffefc]">
  <div className="w-[737px] h-[825px]">
    <div className="w-[737px] h-[825px] absolute left-[40.5px] top-[37.5px] rounded-[29px] bg-gradient-to-b from-[#977644]/[0.35] to-black/[0.35]" />
    <div className="w-[476px] h-[82px]">
      <div className="flex flex-col justify-start items-start absolute left-[110px] top-[709px] gap-4">
        <p className="flex-grow-0 flex-shrink-0 w-[172px] text-[32px] font-bold text-left text-white">
          Nustutor
        </p>
        <p className="flex-grow-0 flex-shrink-0 w-[476px] text-2xl text-left text-white">
          Tutoring app for students, by students
        </p>
      </div>
    </div>
  </div>
  <div className="w-[454px] h-[573px]">
    <div className="w-[329px] h-[107px]">
        <Toggle/>
      <p className="absolute left-[1028px] top-[145px] text-base font-medium text-left text-black">
        Welcome to Nustutor
      </p>
    </div>
    <div className="w-[99px] h-3.5 cursor-pointer">
      <p className="absolute left-[1213px] top-[627px] text-xs font-light text-left text-black">
        Forgot Password ?
      </p>
    </div>
    <div className="flex flex-col justify-start items-center absolute left-[889px] top-[304px] gap-16">
      <div className="flex-grow-0 flex-shrink-0 w-[454px] h-[301px]">
        <InputField label={"Username"} directive={"Enter your Username"}/>
        <div className="w-[435px] h-[90px]">
            <ProtectedField label={"Password"} directive={"Enter your Password"}/>
        </div>
        <p className="w-[454px] h-[49px] absolute left-0 top-0 text-base text-center text-[#5b5b5b]">
          Tutoring app for students, by students.
        </p>
      </div>
      <div className="flex-grow-0 flex-shrink-0 w-[232px] h-[49px]">
        <div className="w-[232px] h-[49px] absolute left-[110.5px] top-[364.5px] rounded-[36px] bg-[#9e896a]" />
        <p className="absolute left-[205px] top-[378px] text-base text-left text-white">Login</p>
      </div>
    </div>
  </div>
  <img
    src="/onboarding.png"
    className="w-[691px] h-[553px] absolute left-[63px] top-[118px] object-contain"
  />
  <div className="flex justify-start items-center absolute left-[1227px] top-9 gap-3">
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
        id="mask0_162_726"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={30}
        height={34}
      >
        <path
          d="M12.0589 1.44621C13.8053 0.437935 15.9569 0.437934 17.7033 1.44621L26.94 6.77901C28.6864 7.78728 29.7622 9.65065 29.7622 11.6672V22.3328C29.7622 24.3494 28.6864 26.2127 26.94 27.221L17.7033 32.5538C15.9569 33.5621 13.8053 33.5621 12.0589 32.5538L2.8222 27.221C1.07582 26.2127 0 24.3494 0 22.3328V11.6672C0 9.65065 1.07582 7.78729 2.8222 6.77901L12.0589 1.44621Z"
          fill="#C4C4C4"
        />
      </mask>
      <g mask="url(#mask0_162_726)">
        <path
          d="M14.877 -0.46402L31.1888 8.95362L22.9339 13.3984L19.5242 11.5385L16.4244 11.8485L8.67499 9.0587L6.81512 11.5385L5.88519 12.7784L4.02533 11.5385L-1.43487 8.95362L14.877 -0.46402Z"
          fill="url(#paint0_linear_162_726)"
        />
        <path
          d="M-0.128662 9.08696L6.19923 12.1555L9.91896 21.1449L9.91896 21.4549L11.1589 23.0048L16.7385 27.3444L14.8805 35.0835L-0.128663 26.418L-0.128662 9.08696Z"
          fill="url(#paint1_linear_162_726)"
        />
        <path
          d="M19.8341 21.4544L23.8638 12.775L29.886 9.08883L29.886 26.4199L14.8769 35.0854L14.5645 27.344L19.8341 21.4544Z"
          fill="url(#paint2_linear_162_726)"
        />
        <path
          d="M14.8763 6.58273C12.3115 6.58273 9.9741 7.55621 8.21323 9.15381L9.6428 21.4615C10.0337 21.642 12.2759 22.3916 12.7065 22.3916H15.8062C16.3541 22.3916 20.1459 21.2238 20.1459 21.7716L19.8359 20.4696C19.8359 21.0175 19.3919 21.4615 18.844 21.4615H10.9086C10.3608 21.4615 9.91667 21.0175 9.91667 20.4696V15.6676C9.91667 15.237 9.82323 14.8116 9.6428 14.4205L8.21323 9.15381C6.61563 10.9146 4.95703 13.9372 4.95703 16.502C4.95703 21.9803 9.39799 26.4213 14.8763 26.4213C20.3546 26.4213 24.7956 21.9803 24.7956 16.502C24.7956 11.0237 20.3546 6.58273 14.8763 6.58273Z"
          fill="url(#paint3_linear_162_726)"
        />
        <path
          d="M13.0393 10.7229C13.2583 10.6384 13.4926 10.6052 13.7246 10.6259C13.9565 10.6466 14.18 10.7206 14.3781 10.8422C14.5761 10.9639 14.7436 11.1301 14.8678 11.3282C14.9921 11.5264 15.0697 11.7512 15.095 11.9858C15.2751 13.6757 14.8956 15.3867 14.016 16.8504C13.1364 18.314 11.8066 19.4474 10.2352 20.0727L9.1231 17.1973C10.0618 16.8234 10.8568 16.1474 11.3846 15.2744C11.9124 14.4014 12.1433 13.3804 12.0415 12.3701C12.0044 12.0252 12.0821 11.6758 12.2624 11.3774C12.4427 11.079 12.7152 10.8486 13.0367 10.7228L13.0393 10.7229Z"
          fill="#9C5AFF"
        />
        <path
          d="M13.0266 10.7276C12.6467 10.8789 12.3394 11.1761 12.1723 11.5538C12.0052 11.9315 11.9919 12.3587 12.1354 12.7416L15.3855 21.4085C15.5291 21.7913 15.8178 22.0984 16.1879 22.2621C16.5581 22.4259 16.9794 22.433 17.3594 22.2819V22.2819C17.5475 22.207 17.7199 22.0956 17.8665 21.9538C18.0131 21.8121 18.1312 21.6429 18.214 21.4558C18.2967 21.2688 18.3426 21.0676 18.3488 20.8637C18.3551 20.6599 18.3217 20.4574 18.2505 20.2678L15.0005 11.601C14.9294 11.4113 14.822 11.2383 14.6844 11.0918C14.5467 10.9452 14.3815 10.828 14.1982 10.7469C14.0149 10.6658 13.817 10.6224 13.616 10.619C13.415 10.6157 13.2147 10.6526 13.0266 10.7276Z"
          fill="#9C5AFF"
        />
        <path
          d="M17.3449 22.2842C17.126 22.3688 16.8918 22.402 16.6598 22.3814C16.4279 22.3608 16.2045 22.2868 16.0064 22.1652C15.8084 22.0436 15.6409 21.8774 15.5167 21.6794C15.3925 21.4813 15.3148 21.2565 15.2895 21.022C15.1096 19.3321 15.4891 17.621 16.3686 16.1573C17.2481 14.6936 18.5778 13.5601 20.1491 12.9345L21.2612 15.811C20.3225 16.1848 19.5275 16.8608 18.9997 17.7338C18.4719 18.6068 18.241 19.6278 18.3428 20.6381C18.3794 20.9832 18.3011 21.3325 18.1203 21.6307C17.9396 21.9289 17.6667 22.1589 17.3449 22.2842V22.2842Z"
          fill="#9C5AFF"
        />
      </g>
      <defs>
        <lineargradient
          id="paint0_linear_162_726"
          x1="14.5646"
          y1="0.999291"
          x2="14.282"
          y2="12.3216"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#4E00D3" />
          <stop offset={1} stop-color="#7A36F0" />
        </lineargradient>
        <lineargradient
          id="paint1_linear_162_726"
          x1="14.8786"
          y1="23.9347"
          x2="5.90296"
          y2="13.173"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5508D8" />
          <stop offset={1} stop-color="#7935EF" />
        </lineargradient>
        <lineargradient
          id="paint2_linear_162_726"
          x1="14.8744"
          y1="25.1741"
          x2="23.4474"
          y2="13.715"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5205D6" />
          <stop offset={1} stop-color="#7A35F0" />
        </lineargradient>
        <lineargradient
          id="paint3_linear_162_726"
          x1="14.8763"
          y1="6.58273"
          x2="14.8763"
          y2="26.4213"
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
</div>
  )
}

export default login