"use client"

import React from 'react'
import {useRouter} from 'next/navigation'
export const FooterBottom = () => {

  const router = useRouter();
  const githubClick = () => {
    router.push("https://github.com/Nustutor")
  }
  return (
    <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-96 relative gap-5">
  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
    <svg
      width={31}
      height={34}
      viewBox="0 0 31 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-grow-0 flex-shrink-0 w-[29.76px] h-[32.62px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <mask
        id="mask0_108_2935"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={31}
        height={34}
      >
        <path
          d="M12.6778 1.44615C14.4242 0.437874 16.5758 0.437872 18.3222 1.44615L27.5589 6.77895C29.3053 7.78722 30.3811 9.65059 30.3811 11.6671V22.3327C30.3811 24.3493 29.3053 26.2127 27.5589 27.2209L18.3222 32.5537C16.5758 33.562 14.4242 33.562 12.6778 32.5537L3.4411 27.2209C1.69471 26.2127 0.618896 24.3493 0.618896 22.3327V11.6671C0.618896 9.65059 1.69471 7.78722 3.44109 6.77895L12.6778 1.44615Z"
          fill="#C4C4C4"
        />
      </mask>
      <g mask="url(#mask0_108_2935)">
        <path
          d="M15.4957 -0.463867L31.8076 8.95377L23.5527 13.3985L20.143 11.5387L17.0432 11.8486L9.29376 9.05885L7.4339 11.5387L6.50397 12.7786L4.6441 11.5387L-0.816097 8.95377L15.4957 -0.463867Z"
          fill="url(#paint0_linear_108_2935)"
        />
        <path
          d="M0.490356 9.08677L6.81825 12.1554L10.538 21.1447L10.538 21.4547L11.7779 23.0046L17.3575 27.3443L15.4995 35.0833L0.490356 26.4178L0.490356 9.08677Z"
          fill="url(#paint1_linear_108_2935)"
        />
        <path
          d="M20.453 21.4543L24.4827 12.7749L30.5049 9.08868L30.5049 26.4197L15.4957 35.0852L15.1833 27.3438L20.453 21.4543Z"
          fill="url(#paint2_linear_108_2935)"
        />
        <path
          d="M15.4951 6.58252C12.9303 6.58252 10.5929 7.556 8.83201 9.15359L10.2616 21.4613C10.6525 21.6418 12.8946 22.3914 13.3252 22.3914H16.425C16.9729 22.3914 20.7647 21.2236 20.7647 21.7714L20.4547 20.4694C20.4547 21.0172 20.0106 21.4613 19.4628 21.4613H11.5274C10.9795 21.4613 10.5354 21.0172 10.5354 20.4694V15.6674C10.5354 15.2368 10.442 14.8113 10.2616 14.4203L8.83201 9.15359C7.23441 10.9144 5.57581 13.937 5.57581 16.5018C5.57581 21.9801 10.0168 26.4211 15.4951 26.4211C20.9734 26.4211 25.4144 21.9801 25.4144 16.5018C25.4144 11.0235 20.9734 6.58252 15.4951 6.58252Z"
          fill="url(#paint3_linear_108_2935)"
        />
        <path
          d="M13.6582 10.7229C13.8772 10.6384 14.1115 10.6053 14.3435 10.6259C14.5754 10.6466 14.7989 10.7206 14.997 10.8423C15.195 10.964 15.3625 11.1302 15.4867 11.3283C15.611 11.5264 15.6886 11.7512 15.7139 11.9858C15.894 13.6757 15.5145 15.3867 14.6349 16.8504C13.7553 18.314 12.4255 19.4474 10.8541 20.0727L9.742 17.1973C10.6807 16.8235 11.4757 16.1475 12.0035 15.2745C12.5313 14.4015 12.7622 13.3804 12.6604 12.3702C12.6233 12.0252 12.701 11.6758 12.8813 11.3774C13.0616 11.079 13.3341 10.8486 13.6556 10.7229L13.6582 10.7229Z"
          fill="#9C5AFF"
        />
        <path
          d="M13.6455 10.7275C13.2656 10.8788 12.9583 11.176 12.7912 11.5537C12.6241 11.9313 12.6108 12.3586 12.7543 12.7415L16.0043 21.4083C16.148 21.7912 16.4367 22.0982 16.8068 22.262C17.177 22.4258 17.5983 22.4329 17.9783 22.2817C18.1664 22.2069 18.3388 22.0954 18.4854 21.9537C18.632 21.812 18.7501 21.6427 18.8329 21.4557C18.9156 21.2687 18.9614 21.0675 18.9677 20.8636C18.974 20.6598 18.9406 20.4573 18.8694 20.2677L15.6194 11.6009C15.5483 11.4112 15.4409 11.2382 15.3033 11.0916C15.1656 10.9451 15.0004 10.8279 14.8171 10.7468C14.6338 10.6657 14.4359 10.6222 14.2349 10.6189C14.0339 10.6156 13.8336 10.6525 13.6455 10.7275Z"
          fill="#9C5AFF"
        />
        <path
          d="M17.964 22.2841C17.7451 22.3687 17.5108 22.4019 17.2789 22.3813C17.047 22.3607 16.8235 22.2867 16.6254 22.1651C16.4274 22.0435 16.2599 21.8774 16.1357 21.6793C16.0115 21.4812 15.9338 21.2564 15.9085 21.0219C15.7286 19.332 16.1082 17.621 16.9877 16.1573C17.8672 14.6935 19.1968 13.56 20.7681 12.9344L21.8802 15.8109C20.9416 16.1847 20.1465 16.8607 19.6187 17.7337C19.0909 18.6067 18.86 19.6277 18.9619 20.638C18.9984 20.9831 18.9201 21.3324 18.7393 21.6306C18.5586 21.9288 18.2857 22.1588 17.964 22.2841Z"
          fill="#9C5AFF"
        />
      </g>
      <defs>
        <lineargradient
          id="paint0_linear_108_2935"
          x1="15.1833"
          y1="0.999443"
          x2="14.9008"
          y2="12.3218"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#4E00D3" />
          <stop offset={1} stop-color="#7A36F0" />
        </lineargradient>
        <lineargradient
          id="paint1_linear_108_2935"
          x1="15.4976"
          y1="23.9345"
          x2="6.52198"
          y2="13.1728"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5508D8" />
          <stop offset={1} stop-color="#7935EF" />
        </lineargradient>
        <lineargradient
          id="paint2_linear_108_2935"
          x1="15.4933"
          y1="25.174"
          x2="24.0663"
          y2="13.7149"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5205D6" />
          <stop offset={1} stop-color="#7A35F0" />
        </lineargradient>
        <lineargradient
          id="paint3_linear_108_2935"
          x1="15.4951"
          y1="6.58252"
          x2="15.4951"
          y2="26.4211"
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
  <p className="self-stretch flex-grow-0 flex-shrink-0 w-96 text-base text-center text-gray-500">
    © 2023 Nustutor, Inc. All rights reserved.
  </p>
  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-5">
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
      preserveAspectRatio="none"
      onClick = {githubClick}
    >
      <path
        d="M8.80078 16.7109C8.80078 16.6406 8.73047 16.5703 8.625 16.5703C8.51953 16.5703 8.44922 16.6406 8.44922 16.7109C8.44922 16.7812 8.51953 16.8516 8.625 16.8164C8.73047 16.8164 8.80078 16.7812 8.80078 16.7109ZM7.71094 16.5352C7.71094 16.6055 7.78125 16.7109 7.88672 16.7109C7.95703 16.7461 8.0625 16.7109 8.09766 16.6406C8.09766 16.5703 8.0625 16.5 7.95703 16.4648C7.85156 16.4297 7.74609 16.4648 7.71094 16.5352ZM9.29297 16.5C9.1875 16.5 9.11719 16.5703 9.11719 16.6758C9.11719 16.7461 9.22266 16.7812 9.32812 16.7461C9.43359 16.7109 9.50391 16.6758 9.46875 16.6055C9.46875 16.5352 9.36328 16.4648 9.29297 16.5ZM11.5781 3C6.72656 3 3 6.72656 3 11.5781C3 15.4805 5.42578 18.8203 8.94141 20.0156C9.39844 20.0859 9.53906 19.8047 9.53906 19.5938C9.53906 19.3477 9.53906 18.1523 9.53906 17.4141C9.53906 17.4141 7.07812 17.9414 6.55078 16.3594C6.55078 16.3594 6.16406 15.3398 5.60156 15.0938C5.60156 15.0938 4.79297 14.5312 5.63672 14.5312C5.63672 14.5312 6.51562 14.6016 7.00781 15.4453C7.78125 16.8164 9.04688 16.4297 9.57422 16.1836C9.64453 15.6211 9.85547 15.2344 10.1367 14.9883C8.16797 14.7773 6.16406 14.4961 6.16406 11.1211C6.16406 10.1367 6.44531 9.67969 7.00781 9.04688C6.90234 8.80078 6.62109 7.88672 7.11328 6.65625C7.81641 6.44531 9.53906 7.60547 9.53906 7.60547C10.2422 7.39453 10.9805 7.32422 11.7188 7.32422C12.4922 7.32422 13.2305 7.39453 13.9336 7.60547C13.9336 7.60547 15.6211 6.41016 16.3594 6.65625C16.8516 7.88672 16.5352 8.80078 16.4648 9.04688C17.0273 9.67969 17.3789 10.1367 17.3789 11.1211C17.3789 14.4961 15.3047 14.7773 13.3359 14.9883C13.6523 15.2695 13.9336 15.7969 13.9336 16.6406C13.9336 17.8008 13.8984 19.2773 13.8984 19.5586C13.8984 19.8047 14.0742 20.0859 14.5312 19.9805C18.0469 18.8203 20.4375 15.4805 20.4375 11.5781C20.4375 6.72656 16.4648 3 11.5781 3ZM6.41016 15.1289C6.33984 15.1641 6.375 15.2695 6.41016 15.3398C6.48047 15.375 6.55078 15.4102 6.62109 15.375C6.65625 15.3398 6.65625 15.2344 6.58594 15.1641C6.51562 15.1289 6.44531 15.0938 6.41016 15.1289ZM6.02344 14.8477C5.98828 14.918 6.02344 14.9531 6.09375 14.9883C6.16406 15.0234 6.23438 15.0234 6.26953 14.9531C6.26953 14.918 6.23438 14.8828 6.16406 14.8477C6.09375 14.8125 6.05859 14.8125 6.02344 14.8477ZM7.14844 16.1133C7.11328 16.1484 7.11328 16.2539 7.21875 16.3242C7.28906 16.3945 7.39453 16.4297 7.42969 16.3594C7.46484 16.3242 7.46484 16.2188 7.39453 16.1484C7.32422 16.0781 7.21875 16.043 7.14844 16.1133ZM6.76172 15.5859C6.69141 15.6211 6.69141 15.7266 6.76172 15.7969C6.83203 15.8672 6.90234 15.9023 6.97266 15.8672C7.00781 15.832 7.00781 15.7266 6.97266 15.6562C6.90234 15.5859 6.83203 15.5508 6.76172 15.5859Z"
        fill="#9CA3AF"
      />
    </svg>
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
      preserveAspectRatio="none"
    >
      <path
        d="M19.1367 8.62109C19.8398 8.09375 20.4727 7.46094 20.9648 6.72266C20.332 7.00391 19.5938 7.21484 18.8555 7.28516C19.6289 6.82812 20.1914 6.125 20.4727 5.24609C19.7695 5.66797 18.9609 5.98438 18.1523 6.16016C17.4492 5.42188 16.5 5 15.4453 5C13.4062 5 11.7539 6.65234 11.7539 8.69141C11.7539 8.97266 11.7891 9.25391 11.8594 9.53516C8.80078 9.35938 6.05859 7.88281 4.23047 5.66797C3.91406 6.19531 3.73828 6.82812 3.73828 7.53125C3.73828 8.79688 4.37109 9.92188 5.39062 10.5898C4.79297 10.5547 4.19531 10.4141 3.70312 10.1328V10.168C3.70312 11.9609 4.96875 13.4375 6.65625 13.7891C6.375 13.8594 6.02344 13.9297 5.70703 13.9297C5.46094 13.9297 5.25 13.8945 5.00391 13.8594C5.46094 15.3359 6.83203 16.3906 8.44922 16.4258C7.18359 17.4102 5.60156 18.0078 3.87891 18.0078C3.5625 18.0078 3.28125 17.9727 3 17.9375C4.61719 18.9922 6.55078 19.5898 8.66016 19.5898C15.4453 19.5898 19.1367 14 19.1367 9.11328C19.1367 8.9375 19.1367 8.79688 19.1367 8.62109Z"
        fill="#9CA3AF"
      />
    </svg>
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
      preserveAspectRatio="none"
    >
      <path
        d="M11.7188 3C6.90234 3 3 6.9375 3 11.7188C3 16.5352 6.90234 20.4375 11.7188 20.4375C16.5 20.4375 20.4375 16.5352 20.4375 11.7188C20.4375 6.9375 16.5 3 11.7188 3ZM17.4492 7.04297C18.5039 8.30859 19.1367 9.92578 19.1367 11.6836C18.8906 11.6133 16.4297 11.1211 13.9688 11.4375C13.7578 10.9453 13.582 10.5234 13.3008 9.96094C16.0781 8.83594 17.3086 7.25391 17.4492 7.04297ZM16.6406 6.16406C16.5 6.375 15.375 7.88672 12.7383 8.87109C11.5078 6.62109 10.1719 4.79297 9.96094 4.51172C12.3164 3.94922 14.8125 4.54688 16.6406 6.16406ZM8.51953 5.00391C8.73047 5.28516 10.0664 7.11328 11.2969 9.32812C7.81641 10.2422 4.75781 10.2422 4.40625 10.207C4.89844 7.92188 6.44531 5.98828 8.51953 5.00391ZM4.26562 11.7539C4.26562 11.6836 4.26562 11.6133 4.26562 11.5078C4.58203 11.543 8.20312 11.5781 11.8945 10.4531C12.1406 10.875 12.3164 11.2969 12.5273 11.7188C9.82031 12.4922 7.35938 14.6719 6.16406 16.7109C4.96875 15.4102 4.26562 13.6523 4.26562 11.7539ZM7.11328 17.625C7.92188 16.043 10.0312 13.9688 13.0195 12.9492C14.0742 15.6562 14.4961 17.9414 14.6016 18.6094C12.2109 19.6289 9.32812 19.3477 7.11328 17.625ZM15.8672 17.9062C15.7969 17.4844 15.375 15.3047 14.4258 12.5977C16.7461 12.2461 18.7852 12.8438 19.0664 12.9141C18.7148 14.9883 17.5195 16.7812 15.8672 17.9062Z"
        fill="#9CA3AF"
      />
    </svg>
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
      preserveAspectRatio="none"
    >
      <path
        d="M16.0352 13.125L16.5273 9.89062H13.3984V7.78125C13.3984 6.86719 13.8203 6.02344 15.2266 6.02344H16.668V3.24609C16.668 3.24609 15.3672 3 14.1367 3C11.5703 3 9.88281 4.58203 9.88281 7.39453V9.89062H7V13.125H9.88281V21H13.3984V13.125H16.0352Z"
        fill="#9CA3AF"
      />
    </svg>
  </div>
</div>
  )
}

export default FooterBottom;
