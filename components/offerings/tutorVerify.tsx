'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Footer from '../footer'

const TutorVerify = () => {
  const endpoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT
  const router = useRouter();
  const [whatsappNumber, setWhatsappNumber] = useState('');

  const handleClick = async () => {
    const uuid = localStorage.getItem('userID');
    const token = localStorage.getItem('token');

    try {
      console.log(`${uuid}`)
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

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        console.log('Tutor account created successfully');
        const tuid = localStorage.getItem('tuid');

        const response3 = await fetch(`${endpoint}/tutor/tutorview/gettutor/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'uuid': `${uuid}`,
            // Include any additional headers if needed
          },
        });
  
        if (response3.ok) {
          const tutorAccountData = await response3.json();
          // Assuming you have a tutor ID in the response, use it in the route
          const tutorId = tutorAccountData[0].tuid;
          localStorage.setItem('tuid', tutorAccountData[0].tuid);
          console.log('tutor id is',localStorage.getItem('tuid'));
          // Redirect to the tutor page or handle the success as needed
        const requestBody = {
          tuid: tutorId,
          link: whatsappNumber,
          platform: "WhatsApp",
        };
        console.log("requestBody",requestBody);
        const response2 = await fetch(`${endpoint}/tutor/addsociallink`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`,
            'uuid': `${uuid}`,
          },
          body: JSON.stringify(requestBody),
        });
  
        if (response2.ok) {
          console.log('Tutor link added successfully');

          
          console.log("tuid",tuid);
        } else {
          console.error('Error adding tutor link:', response2.statusText);
          // Handle the error as needed
        }
          router.push(`/tutor/${tutorId}`);
        } else {
          console.error('Error fetching tutor account data:', response3.statusText);
          router.push('/home');
        }
        
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
      <div className="flex flex-col justify-start items-center gap-8 pb-16 pt-[89px] md:hidden">
  <div className="flex flex-col justify-start items-start w-full max-w-[100%] overflow-hidden gap-2.5 px-4 md:px-[352px] py-16 bg-white">
    <div className="flex flex-col justify-start items-start w-full relative gap-6">
      <div className="flex justify-center items-center w-full relative overflow-hidden md:pl-[325px]">
        <svg
          width={94}
          height={104}
          viewBox="0 0 94 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[94px] h-[103.03px]"
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
      <p className="w-full text-4xl md:text-6xl font-black text-center text-[#111928]">
        Welcome Tutor!
      </p>
      <p className="w-full text-lg md:text-xl text-center text-gray-500">
        By continuing, you agree to the Nustutor privacy policy & terms of service.
      </p>
    </div>
  </div>
  <div className="flex flex-col justify-center items-center gap-4 w-full max-w-[100%]">
    <input
      type="text"
      value={whatsappNumber}
      onChange={handleChange}
      placeholder="Enter WhatsApp Number"
      className="w-[350px] px-4 py-2 border border-gray-300 rounded-md"
    />
    <div
      className="flex justify-center items-center w-[300px] relative overflow-hidden px-6 py-3.5 rounded-lg bg-[#17c817] cursor-pointer"
      onClick={handleClick}
    >
      <p className="w-full text-base font-medium text-white text-center">
        Start Tutoring
      </p>
    </div>
  </div>
</div>

    <div>
  <div className="hidden md:flex flex-col justify-start items-center absolute left-0 top-[89px] gap-16 pb-16">
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
  <Footer/>
    
  </div>
  </div>
  </div>
  )
}

export default TutorVerify;