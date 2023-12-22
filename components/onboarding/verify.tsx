'use client'
import { useRouter } from 'next/navigation'

import React from 'react'

const Verify = () => {
    const router = useRouter();
  return (
    <div className="w-full h-[900px] relative overflow-hidden bg-white">
  <div className="flex flex-col justify-start items-center absolute left-[515px] top-[75px] gap-16">
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
          id="mask0_343_1806"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={30}
          height={34}
        >
          <path
            d="M12.178 1.44664C13.9244 0.438362 16.076 0.438361 17.8224 1.44663L27.0591 6.77944C28.8055 7.78771 29.8813 9.65108 29.8813 11.6676V22.3332C29.8813 24.3498 28.8055 26.2131 27.0591 27.2214L17.8224 32.5542C16.076 33.5625 13.9244 33.5625 12.178 32.5542L2.94134 27.2214C1.19496 26.2131 0.119141 24.3498 0.119141 22.3332V11.6676C0.119141 9.65108 1.19496 7.78771 2.94134 6.77944L12.178 1.44664Z"
            fill="#C4C4C4"
          />
        </mask>
        <g mask="url(#mask0_343_1806)">
          <path
            d="M14.9961 -0.463867L31.3079 8.95377L23.0531 13.3985L19.6433 11.5387L16.5436 11.8486L8.79413 9.05885L6.93426 11.5387L6.00433 12.7786L4.14447 11.5387L-1.31573 8.95377L14.9961 -0.463867Z"
            fill="url(#paint0_linear_343_1806)"
          />
          <path
            d="M-0.00976564 9.08775L6.31813 12.1563L10.0379 21.1457L10.0379 21.4557L11.2778 23.0055L16.8574 27.3452L14.9994 35.0843L-0.00976602 26.4188L-0.00976564 9.08775Z"
            fill="url(#paint1_linear_343_1806)"
          />
          <path
            d="M19.9532 21.4552L23.9829 12.7759L30.0051 9.08966L30.0051 26.4207L14.996 35.0862L14.6836 27.3448L19.9532 21.4552Z"
            fill="url(#paint2_linear_343_1806)"
          />
          <path
            d="M14.9954 6.58301C12.4306 6.58301 10.0932 7.55649 8.33237 9.15408L9.76194 21.4618C10.1529 21.6422 12.395 22.3918 12.8256 22.3918H15.9254C16.4732 22.3918 20.2651 21.2241 20.2651 21.7719L19.9551 20.4699C19.9551 21.0177 19.511 21.4618 18.9632 21.4618H11.0277C10.4799 21.4618 10.0358 21.0177 10.0358 20.4699V15.6679C10.0358 15.2373 9.94237 14.8118 9.76194 14.4208L8.33237 9.15408C6.73477 10.9149 5.07617 13.9375 5.07617 16.5023C5.07617 21.9806 9.51713 26.4216 14.9954 26.4216C20.4738 26.4216 24.9147 21.9806 24.9147 16.5023C24.9147 11.024 20.4738 6.58301 14.9954 6.58301Z"
            fill="url(#paint3_linear_343_1806)"
          />
          <path
            d="M13.1585 10.7229C13.3774 10.6384 13.6118 10.6053 13.8437 10.6259C14.0757 10.6466 14.2991 10.7206 14.4972 10.8423C14.6953 10.964 14.8628 11.1302 14.987 11.3283C15.1112 11.5264 15.1889 11.7512 15.2141 11.9858C15.3942 13.6757 15.0147 15.3867 14.1351 16.8504C13.2556 18.314 11.9257 19.4474 10.3543 20.0727L9.24224 17.1973C10.1809 16.8235 10.976 16.1475 11.5037 15.2745C12.0315 14.4015 12.2625 13.3804 12.1606 12.3702C12.1235 12.0252 12.2013 11.6758 12.3815 11.3774C12.5618 11.079 12.8343 10.8486 13.1558 10.7229L13.1585 10.7229Z"
            fill="#9C5AFF"
          />
          <path
            d="M13.1455 10.728C12.7656 10.8793 12.4583 11.1765 12.2912 11.5542C12.1241 11.9318 12.1108 12.3591 12.2543 12.742L15.5043 21.4088C15.648 21.7917 15.9367 22.0987 16.3068 22.2625C16.677 22.4263 17.0983 22.4334 17.4783 22.2822V22.2822C17.6664 22.2074 17.8388 22.0959 17.9854 21.9542C18.132 21.8124 18.2501 21.6432 18.3329 21.4562C18.4156 21.2691 18.4614 21.068 18.4677 20.8641C18.474 20.6603 18.4406 20.4578 18.3694 20.2682L15.1194 11.6013C15.0483 11.4117 14.9409 11.2387 14.8033 11.0921C14.6656 10.9456 14.5004 10.8284 14.3171 10.7473C14.1338 10.6662 13.9359 10.6227 13.7349 10.6194C13.5339 10.6161 13.3336 10.653 13.1455 10.728Z"
            fill="#9C5AFF"
          />
          <path
            d="M17.4643 22.2846C17.2454 22.3692 17.0111 22.4024 16.7792 22.3818C16.5473 22.3612 16.3239 22.2872 16.1258 22.1656C15.9277 22.044 15.7603 21.8778 15.6361 21.6798C15.5118 21.4817 15.4342 21.2569 15.4089 21.0224C15.229 19.3325 15.6085 17.6214 16.488 16.1577C17.3675 14.694 18.6972 13.5605 20.2685 12.9349L21.3806 15.8114C20.4419 16.1852 19.6469 16.8612 19.1191 17.7342C18.5913 18.6072 18.3604 19.6282 18.4622 20.6385C18.4988 20.9836 18.4205 21.3329 18.2397 21.6311C18.0589 21.9293 17.7861 22.1593 17.4643 22.2846V22.2846Z"
            fill="#9C5AFF"
          />
        </g>
        <defs>
          <lineargradient
            id="paint0_linear_343_1806"
            x1="14.6837"
            y1="0.999443"
            x2="14.4011"
            y2="12.3218"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4E00D3" />
            <stop offset={1} stop-color="#7A36F0" />
          </lineargradient>
          <lineargradient
            id="paint1_linear_343_1806"
            x1="14.9975"
            y1="23.9355"
            x2="6.02186"
            y2="13.1738"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#5508D8" />
            <stop offset={1} stop-color="#7935EF" />
          </lineargradient>
          <lineargradient
            id="paint2_linear_343_1806"
            x1="14.9936"
            y1="25.175"
            x2="23.5665"
            y2="13.7158"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#5205D6" />
            <stop offset={1} stop-color="#7A35F0" />
          </lineargradient>
          <lineargradient
            id="paint3_linear_343_1806"
            x1="14.9954"
            y1="6.58301"
            x2="14.9954"
            y2="26.4216"
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
    <img
      src="/email-messaging-on-computer-screen.png"
      className="flex-grow-0 flex-shrink-0 w-[293px] h-[259px] object-contain"
    />
    <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-8">
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-4">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative">
          <p className="flex-grow-0 flex-shrink-0 text-3xl font-bold text-left text-black">
            Verify your Email
          </p>
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative">
          <p className="flex-grow-0 flex-shrink-0 w-[411px] text-lg text-center text-[#8692a6]">
            An email is sent to your inbox, please verify your account to login.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Verify;