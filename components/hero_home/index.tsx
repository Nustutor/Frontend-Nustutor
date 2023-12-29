import React from 'react'
import Searchbar from './searchbar';

const Hero = ({Username}: {Username: any}) => {
  
  return (
    <div className="flex flex-col justify-start items-center relative gap-16 pb-16">
  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 px-[352px] py-16 bg-white">
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[736px] relative gap-6">
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[734px] relative overflow-hidden pl-[325px]">
        <svg
          width={94}
          height={104}
          viewBox="0 0 94 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-[94px] h-[103.03px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <mask
            id="mask0_191_1058"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={94}
            height={104}
          >
            <path
              d="M38.0865 2.38838C43.6022 -0.796123 50.3978 -0.796127 55.9135 2.38837L85.0864 19.2313C90.6022 22.4158 94 28.301 94 34.67V68.356C94 74.725 90.6022 80.6102 85.0865 83.7947L55.9135 100.638C50.3978 103.822 43.6022 103.822 38.0865 100.638L8.91355 83.7947C3.39783 80.6102 0 74.725 0 68.356V34.6701C0 28.3011 3.39782 22.4158 8.91354 19.2313L38.0865 2.38838Z"
              fill="#C4C4C4"
            />
          </mask>
          <g mask="url(#mask0_191_1058)">
            <path
              d="M46.9873 -3.64502L98.5061 26.0994L72.4343 40.1376L61.665 34.2634L51.8748 35.2425L27.3992 26.4313L21.5251 34.2634L18.588 38.1795L12.7138 34.2634L-4.53149 26.0994L46.9873 -3.64502Z"
              fill="url(#paint0_linear_191_1058)"
            />
            <path
              d="M-0.405273 26.5212L19.5806 36.2129L31.3288 64.6046L31.3288 65.5836L35.2449 70.4787L52.8673 84.185L46.9991 108.628L-0.405275 81.259L-0.405273 26.5212Z"
              fill="url(#paint1_linear_191_1058)"
            />
            <path
              d="M62.6434 65.5813L75.3707 38.1687L94.3911 26.5262L94.3911 81.2641L46.9867 108.633L46 84.1827L62.6434 65.5813Z"
              fill="url(#paint2_linear_191_1058)"
            />
            <path
              d="M46.985 18.6118C38.8843 18.6118 31.502 21.6864 25.9405 26.7322L30.4556 65.6046C31.6903 66.1745 38.7718 68.542 40.1318 68.542H49.9221C51.6523 68.542 63.6284 64.8537 63.6284 66.584L62.6494 62.4717C62.6494 64.202 61.2468 65.6046 59.5165 65.6046H34.4535C32.7232 65.6046 31.3206 64.202 31.3206 62.4717V47.3052C31.3206 45.9452 31.0255 44.6015 30.4556 43.3665L25.9405 26.7322C20.8947 32.2934 15.6562 41.8399 15.6562 49.9406C15.6562 67.2431 29.6824 81.2693 46.985 81.2693C64.2875 81.2693 78.3137 67.2431 78.3137 49.9406C78.3137 32.638 64.2875 18.6118 46.985 18.6118Z"
              fill="url(#paint3_linear_191_1058)"
            />
            <path
              d="M41.1825 31.6879C41.8741 31.421 42.6142 31.3162 43.3468 31.3815C44.0794 31.4468 44.7852 31.6805 45.4108 32.0648C46.0364 32.4491 46.5654 32.9741 46.9577 33.5998C47.35 34.2255 47.5953 34.9357 47.6751 35.6765C48.244 41.0138 47.0453 46.418 44.2672 51.0407C41.4892 55.6635 37.289 59.2431 32.326 61.2179L28.8137 52.1363C31.7783 50.9556 34.2894 48.8206 35.9563 46.0633C37.6233 43.3061 38.3526 40.0813 38.0309 36.8905C37.9137 35.8009 38.1593 34.6974 38.7287 33.7549C39.2981 32.8125 40.1587 32.0849 41.1742 31.6877L41.1825 31.6879Z"
              fill="#9C5AFF"
            />
            <path
              d="M41.1419 31.7026C39.9422 32.1806 38.9717 33.1192 38.444 34.3121C37.9162 35.5049 37.8742 36.8543 38.3274 38.0637L48.5922 65.4368C49.046 66.6459 49.9576 67.6157 51.1267 68.133C52.2957 68.6503 53.6266 68.6727 54.8265 68.1953C55.4209 67.9589 55.9651 67.6069 56.4283 67.1592C56.8914 66.7116 57.2643 66.1771 57.5257 65.5864C57.7871 64.9956 57.9318 64.3602 57.9516 63.7164C57.9714 63.0725 57.8659 62.433 57.6411 61.8342L47.3763 34.4611C47.1519 33.8621 46.8127 33.3156 46.3779 32.8528C45.9431 32.39 45.4213 32.0199 44.8423 31.7637C44.2634 31.5076 43.6386 31.3703 43.0036 31.3598C42.3687 31.3493 41.7361 31.4658 41.1419 31.7026Z"
              fill="#9C5AFF"
            />
            <path
              d="M54.782 68.2028C54.0906 68.4698 53.3507 68.5748 52.6182 68.5097C51.8858 68.4446 51.18 68.2111 50.5545 67.8269C49.9289 67.4428 49.4 66.9181 49.0077 66.2925C48.6153 65.6669 48.37 64.9569 48.2902 64.2163C47.7219 58.8788 48.9207 53.4748 51.6985 48.8518C54.4763 44.2289 58.6759 40.6487 63.6385 38.6728L67.151 47.7578C64.1864 48.9386 61.6753 51.0736 60.0083 53.8308C58.3414 56.5881 57.612 59.8129 57.9337 63.0037C58.0492 64.0937 57.8019 65.197 57.231 66.1388C56.6601 67.0805 55.7982 67.8069 54.782 68.2028Z"
              fill="#9C5AFF"
            />
          </g>
          <defs>
            <lineargradient
              id="paint0_linear_191_1058"
              x1="46.0006"
              y1="0.976658"
              x2="45.1082"
              y2="36.7367"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4E00D3" />
              <stop offset={1} stop-color="#7A36F0" />
            </lineargradient>
            <lineargradient
              id="paint1_linear_191_1058"
              x1="46.9932"
              y1="73.4158"
              x2="18.6448"
              y2="39.4264"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5508D8" />
              <stop offset={1} stop-color="#7935EF" />
            </lineargradient>
            <lineargradient
              id="paint2_linear_191_1058"
              x1="46.979"
              y1="77.3296"
              x2="74.0556"
              y2="41.1374"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5205D6" />
              <stop offset={1} stop-color="#7A35F0" />
            </lineargradient>
            <lineargradient
              id="paint3_linear_191_1058"
              x1="46.985"
              y1="18.6118"
              x2="46.985"
              y2="81.2693"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7935EF" />
              <stop offset={1} stop-color="#6117E0" />
            </lineargradient>
          </defs>
        </svg>
      </div>
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[736px] text-6xl font-black text-center text-[#111928]">
        <span className="self-stretch flex-grow-0 flex-shrink-0 w-[736px] text-6xl font-black text-center text-[#111928]">
          Welcome to Nustutor,
        </span>
        <br />
        <span className="self-stretch flex-grow-0 flex-shrink-0 w-[736px] text-6xl font-black text-center text-[#111928]">
          {Username}
        </span>
      </p>
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[736px] text-xl text-left text-gray-500">
        Explore our offerings suited to your degree program &amp; started learning today!{" "}
      </p>
    </div>
  </div>
<Searchbar/>
</div>
  )
}

export default Hero;