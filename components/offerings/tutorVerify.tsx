'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const TutorVerify = () => {
  const endpoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT
  const router = useRouter();
  const [whatsappNumber, setWhatsappNumber] = useState('');

  const handleClick = async () => {
    const tuid = localStorage.getItem('tuid');
    const uuid = localStorage.getItem('userID');
    const token = localStorage.getItem('token');


    try {
      console.log(`${uuid}`)
      console.log(`${tuid}`)
      console.log(`Bearer ${token}`)
      // Get stored uid and token from localStorage

      // Check if uid and token are available
      if (!uuid || !token) {
        console.error('Missing uid or token');
        return;
      }


      // Make the POST request
      const response = await fetch(`${endpoint}/tutor/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'uuid': `${uuid}`,
        },
      });

      const response2 = await fetch(`${endpoint}/tutor/addsociallink`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
          'uuid': `${uuid}`,
        },
        body: JSON.stringify({
          tuid: tuid,
          link: whatsappNumber,
          platform: "WhatsApp",
        }),
      });

      if (response2.ok) {
        console.log('Tutor link added successfully');
      } else {
        console.error('Error adding tutor link:', response2.statusText);
        // Handle the error as needed
      }

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        console.log('Tutor account created successfully');
        // Redirect to the tutor page or handle the success as needed
        router.push(`/tutor/${tuid}`);
      } else {
        console.error('Error creating tutor account:', response.statusText);
        // Handle the error as needed
      }


      setWhatsappNumber('');
    } catch (error) {
      console.error('Error creating tutor account:', error.message);
      // Handle the error as needed
    }
  };

  const handleChange = (event) => {
    setWhatsappNumber(event.target.value);
  };

  return (
    <div>
  <div className="flex flex-col justify-start items-center absolute left-0 top-[89px] gap-16 pb-16">
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
              id="mask0_377_2015"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={94}
              height={104}
            >
              <path
                d="M38.0865 2.38838C43.6022 -0.796123 50.3978 -0.796127 55.9135 2.38837L85.0864 19.2313C90.6022 22.4158 94 28.301 94 34.67V68.356C94 74.725 90.6022 80.6102 85.0865 83.7947L55.9135 100.638C50.3978 103.822 43.6022 103.822 38.0865 100.638L8.91355 83.7947C3.39783 80.6102 0 74.725 0 68.356V34.6701C0 28.3011 3.39782 22.4159 8.91354 19.2314L38.0865 2.38838Z"
                fill="#C4C4C4"
              />
            </mask>
            <g mask="url(#mask0_377_2015)">
              <path
                d="M46.9873 -3.64502L98.5061 26.0994L72.4343 40.1376L61.665 34.2634L51.8748 35.2425L27.3992 26.4313L21.5251 34.2634L18.588 38.1795L12.7138 34.2634L-4.53149 26.0994L46.9873 -3.64502Z"
                fill="url(#paint0_linear_377_2015)"
              />
              <path
                d="M-0.405273 26.5209L19.5806 36.2127L31.3288 64.6043L31.3288 65.5834L35.2449 70.4785L52.8673 84.1848L46.9991 108.628L-0.405275 81.2588L-0.405273 26.5209Z"
                fill="url(#paint1_linear_377_2015)"
              />
              <path
                d="M62.6434 65.5813L75.3707 38.1687L94.3911 26.5262L94.3911 81.2641L46.9867 108.633L46 84.1827L62.6434 65.5813Z"
                fill="url(#paint2_linear_377_2015)"
              />
              <path
                d="M46.985 18.6118C38.8843 18.6118 31.502 21.6864 25.9405 26.7322L30.4556 65.6046C31.6903 66.1745 38.7718 68.542 40.1318 68.542H49.9221C51.6523 68.542 63.6284 64.8537 63.6284 66.584L62.6494 62.4717C62.6494 64.202 61.2468 65.6046 59.5165 65.6046H34.4535C32.7232 65.6046 31.3206 64.202 31.3206 62.4717V47.3052C31.3206 45.9452 31.0255 44.6015 30.4556 43.3665L25.9405 26.7322C20.8947 32.2934 15.6562 41.8399 15.6562 49.9406C15.6562 67.2431 29.6824 81.2693 46.985 81.2693C64.2875 81.2693 78.3137 67.2431 78.3137 49.9406C78.3137 32.638 64.2875 18.6118 46.985 18.6118Z"
                fill="url(#paint3_linear_377_2015)"
              />
              <path
                d="M41.1825 31.6881C41.8741 31.4212 42.6142 31.3165 43.3468 31.3818C44.0794 31.4471 44.7852 31.6807 45.4108 32.0651C46.0364 32.4494 46.5654 32.9743 46.9577 33.6C47.35 34.2258 47.5953 34.9359 47.6751 35.6767C48.244 41.0141 47.0453 46.4182 44.2672 51.0409C41.4892 55.6637 37.289 59.2434 32.326 61.2181L28.8137 52.1366C31.7783 50.9559 34.2894 48.8208 35.9563 46.0636C37.6233 43.3064 38.3526 40.0815 38.0309 36.8907C37.9137 35.8011 38.1593 34.6977 38.7287 33.7552C39.2981 32.8127 40.1587 32.0852 41.1742 31.6879L41.1825 31.6881Z"
                fill="#9C5AFF"
              />
              <path
                d="M41.1419 31.7031C39.9422 32.1811 38.9717 33.1197 38.444 34.3125C37.9162 35.5054 37.8742 36.8548 38.3274 38.0642L48.5922 65.4373C49.046 66.6464 49.9576 67.6162 51.1267 68.1335C52.2957 68.6507 53.6266 68.6732 54.8265 68.1958V68.1958C55.4209 67.9594 55.9651 67.6074 56.4283 67.1597C56.8914 66.7121 57.2643 66.1776 57.5257 65.5868C57.7871 64.9961 57.9318 64.3607 57.9516 63.7168C57.9714 63.073 57.8659 62.4335 57.6411 61.8347L47.3763 34.4616C47.1519 33.8626 46.8127 33.3161 46.3779 32.8533C45.9431 32.3905 45.4213 32.0204 44.8423 31.7642C44.2634 31.508 43.6386 31.3708 43.0036 31.3603C42.3687 31.3498 41.7361 31.4663 41.1419 31.7031Z"
                fill="#9C5AFF"
              />
              <path
                d="M54.782 68.203C54.0906 68.4701 53.3507 68.575 52.6182 68.5099C51.8858 68.4448 51.18 68.2113 50.5545 67.8272C49.9289 67.443 49.4 66.9183 49.0077 66.2927C48.6153 65.6672 48.37 64.9572 48.2902 64.2165C47.7219 58.8791 48.9207 53.475 51.6985 48.8521C54.4763 44.2292 58.6759 40.6489 63.6385 38.673L67.151 47.7581C64.1864 48.9388 61.6753 51.0738 60.0083 53.8311C58.3414 56.5883 57.612 59.8131 57.9337 63.004C58.0492 64.0939 57.8019 65.1972 57.231 66.139C56.6601 67.0808 55.7982 67.8072 54.782 68.203V68.203Z"
                fill="#9C5AFF"
              />
            </g>
            <defs>
              <lineargradient
                id="paint0_linear_377_2015"
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
                id="paint1_linear_377_2015"
                x1="46.9932"
                y1="73.4156"
                x2="18.6448"
                y2="39.4262"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5508D8" />
                <stop offset={1} stop-color="#7935EF" />
              </lineargradient>
              <lineargradient
                id="paint2_linear_377_2015"
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
                id="paint3_linear_377_2015"
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
          Welcome Tutor!
        </p>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[736px] text-xl text-center text-gray-500">
          By continuing, you agree to the Nustutor privacy policy &amp; terms of service.
        </p>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center gap-4">
      <input
        type="text"
        value={whatsappNumber}
        onChange={handleChange}
        placeholder="Enter WhatsApp Number"
        className="px-4 py-2 border border-gray-300 rounded-md"
      />
      <div
        className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden px-6 py-3.5 rounded-lg bg-[#17c817] cursor-pointer"
        onClick={handleClick}
      >
        <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-white">
          Start Tutoring
        </p>
      </div>
    </div>
  </div>
  <div className="flex flex-col justify-start items-center w-[1440px] absolute left-0 top-[783px] bg-white">
    <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[1280px] gap-16 py-16">
      <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-44 relative gap-4">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-44 text-sm font-semibold text-left uppercase text-[#111928]">
            COMPANY
          </p>
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative">
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-gray-500">About</p>
            </div>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative">
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-gray-500">Blog</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-44 relative gap-4">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-44 text-sm font-semibold text-left uppercase text-[#111928]">
            Help and support
          </p>
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative">
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-gray-500">
                Contact Us
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-44 relative gap-4">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-44 text-sm font-semibold text-left uppercase text-[#111928]">
            LEGAL
          </p>
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative">
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-gray-500">
                Privacy Policy
              </p>
            </div>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative">
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-gray-500">
                Terms &amp; Conditions
              </p>
            </div>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative">
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-gray-500">EULA</p>
            </div>
          </div>
        </div>
      </div>
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
              id="mask0_377_2055"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={31}
              height={34}
            >
              <path
                d="M12.678 1.44615C14.4244 0.437874 16.576 0.437873 18.3224 1.44615L27.5591 6.77895C29.3055 7.78722 30.3813 9.65059 30.3813 11.6671V22.3327C30.3813 24.3493 29.3055 26.2127 27.5591 27.2209L18.3224 32.5537C16.576 33.562 14.4244 33.562 12.678 32.5537L3.44134 27.2209C1.69496 26.2127 0.619141 24.3493 0.619141 22.3327V11.6671C0.619141 9.65059 1.69496 7.78722 3.44134 6.77895L12.678 1.44615Z"
                fill="#C4C4C4"
              />
            </mask>
            <g mask="url(#mask0_377_2055)">
              <path
                d="M15.4961 -0.463867L31.8079 8.95377L23.5531 13.3985L20.1433 11.5387L17.0436 11.8486L9.29413 9.05885L7.43426 11.5387L6.50433 12.7786L4.64447 11.5387L-0.81573 8.95377L15.4961 -0.463867Z"
                fill="url(#paint0_linear_377_2055)"
              />
              <path
                d="M0.490234 9.08677L6.81813 12.1554L10.5379 21.1447L10.5379 21.4547L11.7778 23.0046L17.3574 27.3443L15.4994 35.0833L0.490234 26.4178L0.490234 9.08677Z"
                fill="url(#paint1_linear_377_2055)"
              />
              <path
                d="M20.4532 21.4543L24.4829 12.7749L30.5051 9.08868L30.5051 26.4197L15.496 35.0852L15.1836 27.3438L20.4532 21.4543Z"
                fill="url(#paint2_linear_377_2055)"
              />
              <path
                d="M15.4954 6.58252C12.9306 6.58252 10.5932 7.556 8.83237 9.1536L10.2619 21.4613C10.6529 21.6418 12.895 22.3914 13.3256 22.3914H16.4254C16.9732 22.3914 20.7651 21.2236 20.7651 21.7714L20.4551 20.4694C20.4551 21.0172 20.011 21.4613 19.4632 21.4613H11.5277C10.9799 21.4613 10.5358 21.0172 10.5358 20.4694V15.6674C10.5358 15.2368 10.4424 14.8113 10.2619 14.4203L8.83237 9.1536C7.23477 10.9144 5.57617 13.937 5.57617 16.5018C5.57617 21.9801 10.0171 26.4211 15.4954 26.4211C20.9738 26.4211 25.4147 21.9801 25.4147 16.5018C25.4147 11.0235 20.9738 6.58252 15.4954 6.58252Z"
                fill="url(#paint3_linear_377_2055)"
              />
              <path
                d="M13.6585 10.7229C13.8774 10.6384 14.1118 10.6053 14.3437 10.6259C14.5757 10.6466 14.7991 10.7206 14.9972 10.8423C15.1953 10.964 15.3628 11.1302 15.487 11.3283C15.6112 11.5264 15.6889 11.7512 15.7141 11.9858C15.8942 13.6757 15.5147 15.3867 14.6351 16.8504C13.7556 18.314 12.4257 19.4474 10.8543 20.0727L9.74224 17.1973C10.6809 16.8235 11.476 16.1475 12.0037 15.2745C12.5315 14.4015 12.7625 13.3804 12.6606 12.3702C12.6235 12.0252 12.7013 11.6758 12.8815 11.3774C13.0618 11.079 13.3343 10.8486 13.6558 10.7229L13.6585 10.7229Z"
                fill="#9C5AFF"
              />
              <path
                d="M13.6455 10.7275C13.2656 10.8788 12.9583 11.176 12.7912 11.5537C12.6241 11.9313 12.6108 12.3586 12.7543 12.7415L16.0043 21.4083C16.148 21.7912 16.4367 22.0982 16.8068 22.262C17.177 22.4258 17.5983 22.4329 17.9783 22.2817V22.2817C18.1664 22.2069 18.3388 22.0954 18.4854 21.9537C18.632 21.812 18.7501 21.6427 18.8329 21.4557C18.9156 21.2687 18.9614 21.0675 18.9677 20.8636C18.974 20.6598 18.9406 20.4573 18.8694 20.2677L15.6194 11.6009C15.5483 11.4112 15.4409 11.2382 15.3033 11.0916C15.1656 10.9451 15.0004 10.8279 14.8171 10.7468C14.6338 10.6657 14.4359 10.6222 14.2349 10.6189C14.0339 10.6156 13.8336 10.6525 13.6455 10.7275Z"
                fill="#9C5AFF"
              />
              <path
                d="M17.9643 22.2841C17.7454 22.3687 17.5111 22.4019 17.2792 22.3813C17.0473 22.3607 16.8239 22.2867 16.6258 22.1651C16.4277 22.0435 16.2603 21.8774 16.1361 21.6793C16.0118 21.4812 15.9342 21.2564 15.9089 21.0219C15.729 19.332 16.1085 17.621 16.988 16.1573C17.8675 14.6935 19.1972 13.56 20.7685 12.9344L21.8806 15.8109C20.9419 16.1847 20.1469 16.8607 19.6191 17.7337C19.0913 18.6067 18.8604 19.6277 18.9622 20.638C18.9988 20.9831 18.9205 21.3324 18.7397 21.6306C18.5589 21.9288 18.2861 22.1588 17.9643 22.2841V22.2841Z"
                fill="#9C5AFF"
              />
            </g>
            <defs>
              <lineargradient
                id="paint0_linear_377_2055"
                x1="15.1837"
                y1="0.999443"
                x2="14.9011"
                y2="12.3218"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4E00D3" />
                <stop offset={1} stop-color="#7A36F0" />
              </lineargradient>
              <lineargradient
                id="paint1_linear_377_2055"
                x1="15.4975"
                y1="23.9345"
                x2="6.52186"
                y2="13.1728"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5508D8" />
                <stop offset={1} stop-color="#7935EF" />
              </lineargradient>
              <lineargradient
                id="paint2_linear_377_2055"
                x1="15.4936"
                y1="25.174"
                x2="24.0665"
                y2="13.7149"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5205D6" />
                <stop offset={1} stop-color="#7A35F0" />
              </lineargradient>
              <lineargradient
                id="paint3_linear_377_2055"
                x1="15.4954"
                y1="6.58252"
                x2="15.4954"
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
    </div>
  </div>
  </div>
  )
}

export default TutorVerify;