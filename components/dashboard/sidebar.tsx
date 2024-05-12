"use client"
import React from 'react'
import {useRouter} from 'next/navigation'

const endpoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT

const Sidebar = ({showLogo}) => {

  let uuid: string | null, token: string | null;
    if (typeof window !== 'undefined') {
      uuid = localStorage.getItem('userID');
      token = localStorage.getItem('token');
    }
  const router = useRouter()
  const homeClick = () => {
    router.push('/')
  }

  const handleLogout = async () => {
    try {
      const response = await fetch(`${endpoint}/user/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'uuid': `${uuid}`,
          // Include any additional headers if needed
        },
      });
      if (!response.ok) {
        throw new Error(`Error in response: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      console.log("logout",data);
    } catch (error) {
      console.error('Error logging out:', error);
    }

    localStorage.clear();
    router.push('/');
  }
  
  return (
    <div
  className="flex flex-col justify-between items-center self-stretch flex-grow-0 flex-shrink-0 w-60 p-8 bg-white"
  style={{ boxShadow: "0px 14px 42px 0 rgba(8,15,52,0.06)" }}
>
  <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[146px] gap-12">
    {showLogo && (
    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[146px] gap-[9px] cursor-pointer"
    onClick = {homeClick}>
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
            id="mask0_216_1361"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={30}
            height={34}
          >
            <path
              d="M12.0589 1.44615C13.8053 0.437874 15.9569 0.437872 17.7033 1.44615L26.94 6.77895C28.6864 7.78722 29.7622 9.65059 29.7622 11.6671V22.3327C29.7622 24.3493 28.6864 26.2127 26.94 27.2209L17.7033 32.5537C15.9569 33.562 13.8053 33.562 12.0589 32.5537L2.8222 27.2209C1.07582 26.2127 0 24.3493 0 22.3327V11.6671C0 9.65059 1.07582 7.78722 2.8222 6.77895L12.0589 1.44615Z"
              fill="#C4C4C4"
            />
          </mask>
          <g mask="url(#mask0_216_1361)">
            <path
              d="M14.877 -0.463867L31.1888 8.95377L22.9339 13.3985L19.5242 11.5387L16.4244 11.8486L8.67499 9.05885L6.81512 11.5387L5.88519 12.7786L4.02533 11.5387L-1.43487 8.95377L14.877 -0.463867Z"
              fill="url(#paint0_linear_216_1361)"
            />
            <path
              d="M-0.128906 9.08677L6.19899 12.1554L9.91871 21.1447L9.91871 21.4547L11.1586 23.0046L16.7382 27.3443L14.8802 35.0833L-0.128907 26.4178L-0.128906 9.08677Z"
              fill="url(#paint1_linear_216_1361)"
            />
            <path
              d="M19.8341 21.4543L23.8638 12.7749L29.886 9.08868L29.886 26.4197L14.8769 35.0852L14.5645 27.3438L19.8341 21.4543Z"
              fill="url(#paint2_linear_216_1361)"
            />
            <path
              d="M14.8763 6.58252C12.3115 6.58252 9.9741 7.556 8.21323 9.15359L9.6428 21.4613C10.0337 21.6418 12.2759 22.3914 12.7065 22.3914H15.8062C16.3541 22.3914 20.1459 21.2236 20.1459 21.7714L19.8359 20.4694C19.8359 21.0172 19.3919 21.4613 18.844 21.4613H10.9086C10.3608 21.4613 9.91667 21.0172 9.91667 20.4694V15.6674C9.91667 15.2368 9.82323 14.8113 9.6428 14.4203L8.21323 9.15359C6.61563 10.9144 4.95703 13.937 4.95703 16.5018C4.95703 21.9801 9.39799 26.4211 14.8763 26.4211C20.3546 26.4211 24.7956 21.9801 24.7956 16.5018C24.7956 11.0235 20.3546 6.58252 14.8763 6.58252Z"
              fill="url(#paint3_linear_216_1361)"
            />
            <path
              d="M13.0393 10.7229C13.2583 10.6384 13.4926 10.6053 13.7246 10.6259C13.9565 10.6466 14.18 10.7206 14.3781 10.8423C14.5761 10.964 14.7436 11.1302 14.8678 11.3283C14.9921 11.5264 15.0697 11.7512 15.095 11.9858C15.2751 13.6757 14.8956 15.3867 14.016 16.8504C13.1364 18.314 11.8066 19.4474 10.2352 20.0727L9.1231 17.1973C10.0618 16.8235 10.8568 16.1475 11.3846 15.2745C11.9124 14.4015 12.1433 13.3804 12.0415 12.3702C12.0044 12.0252 12.0821 11.6758 12.2624 11.3774C12.4427 11.079 12.7152 10.8486 13.0367 10.7229L13.0393 10.7229Z"
              fill="#9C5AFF"
            />
            <path
              d="M13.0263 10.7275C12.6465 10.8788 12.3392 11.176 12.1721 11.5537C12.005 11.9313 11.9917 12.3586 12.1352 12.7415L15.3852 21.4083C15.5289 21.7912 15.8175 22.0982 16.1877 22.262C16.5578 22.4258 16.9792 22.4329 17.3591 22.2817C17.5473 22.2069 17.7196 22.0954 17.8663 21.9537C18.0129 21.812 18.131 21.6427 18.2137 21.4557C18.2965 21.2687 18.3423 21.0675 18.3486 20.8636C18.3548 20.6598 18.3214 20.4573 18.2503 20.2677L15.0002 11.6009C14.9292 11.4112 14.8218 11.2382 14.6841 11.0916C14.5465 10.9451 14.3813 10.8279 14.1979 10.7468C14.0146 10.6657 13.8168 10.6222 13.6158 10.6189C13.4147 10.6156 13.2144 10.6525 13.0263 10.7275Z"
              fill="#9C5AFF"
            />
            <path
              d="M17.3452 22.2841C17.1263 22.3687 16.892 22.4019 16.6601 22.3813C16.4282 22.3607 16.2047 22.2867 16.0067 22.1651C15.8086 22.0435 15.6411 21.8774 15.5169 21.6793C15.3927 21.4812 15.315 21.2564 15.2897 21.0219C15.1098 19.332 15.4894 17.621 16.3689 16.1573C17.2484 14.6935 18.5781 13.56 20.1493 12.9344L21.2614 15.8109C20.3228 16.1847 19.5277 16.8607 18.9999 17.7337C18.4722 18.6067 18.2412 19.6277 18.3431 20.638C18.3796 20.9831 18.3013 21.3324 18.1206 21.6306C17.9398 21.9288 17.6669 22.1588 17.3452 22.2841Z"
              fill="#9C5AFF"
            />
          </g>
          <defs>
            <lineargradient
              id="paint0_linear_216_1361"
              x1="14.5646"
              y1="0.999443"
              x2="14.282"
              y2="12.3218"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4E00D3" />
              <stop offset={1} stop-color="#7A36F0" />
            </lineargradient>
            <lineargradient
              id="paint1_linear_216_1361"
              x1="14.8783"
              y1="23.9345"
              x2="5.90272"
              y2="13.1728"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5508D8" />
              <stop offset={1} stop-color="#7935EF" />
            </lineargradient>
            <lineargradient
              id="paint2_linear_216_1361"
              x1="14.8744"
              y1="25.174"
              x2="23.4474"
              y2="13.7149"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5205D6" />
              <stop offset={1} stop-color="#7A35F0" />
            </lineargradient>
            <lineargradient
              id="paint3_linear_216_1361"
              x1="14.8763"
              y1="6.58252"
              x2="14.8763"
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
    </div>)}
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
      <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 py-2">
        <p className="flex-grow w-[146px] text-base font-semibold text-left uppercase text-[#3f3f3f]">
          OVERVIEW
        </p>
      </div>
      <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-2">
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3 py-2 rounded-[40px] bg-white">
          <svg
            width={16}
            height={17}
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M8 12.5V10.5"
              stroke="#702DFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.71318 2.38023L2.09318 6.08023C1.57318 6.49356 1.23985 7.36689 1.35318 8.02023L2.23985 13.3269C2.39985 14.2736 3.30652 15.0402 4.26652 15.0402H11.7332C12.6865 15.0402 13.5999 14.2669 13.7599 13.3269L14.6465 8.02023C14.7532 7.36689 14.4199 6.49356 13.9065 6.08023L9.28652 2.38689C8.57318 1.81356 7.41985 1.81356 6.71318 2.38023Z"
              stroke="#702DFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="flex-grow w-[118px] text-base font-medium text-left text-[#702dff]">
            Dashboard
          </p>
        </div>
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3 py-2 rounded-[40px]">
          <svg
            width={16}
            height={17}
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
            preserveAspectRatio="none"
          >
            <path
              d="M8 1.8335V6.50016L9.33333 5.16683"
              stroke="#202020"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.00033 6.49984L6.66699 5.1665"
              stroke="#202020"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.32031 9.1665H4.26031C4.51365 9.1665 4.74031 9.3065 4.85365 9.53317L5.63365 11.0932C5.86031 11.5465 6.32031 11.8332 6.82698 11.8332H9.18031C9.68698 11.8332 10.147 11.5465 10.3736 11.0932L11.1536 9.53317C11.267 9.3065 11.5003 9.1665 11.747 9.1665H14.6536"
              stroke="#202020"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.66634 3.25342C2.30634 3.60008 1.33301 4.98675 1.33301 7.83342V10.5001C1.33301 13.8334 2.66634 15.1668 5.99967 15.1668H9.99967C13.333 15.1668 14.6663 13.8334 14.6663 10.5001V7.83342C14.6663 4.98675 13.693 3.60008 11.333 3.25342"
              stroke="#202020"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="flex-grow w-[118px] text-base font-medium text-left text-[#202020]">
            Inbox
          </p>
        </div>
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3 py-2 rounded-[40px]">
          <svg
            width={16}
            height={17}
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
            preserveAspectRatio="none"
          >
            <path
              d="M14.4468 10.0335L14.1802 13.3668C14.0802 14.3868 14.0002 15.1668 12.1935 15.1668H3.80684C2.00017 15.1668 1.92017 14.3868 1.82017 13.3668L1.5535 10.0335C1.50017 9.48016 1.6735 8.96683 1.98684 8.5735C1.9935 8.56683 1.9935 8.56683 2.00017 8.56016C2.36684 8.1135 2.92017 7.8335 3.54017 7.8335H12.4602C13.0802 7.8335 13.6268 8.1135 13.9868 8.54683C13.9935 8.5535 14.0002 8.56016 14.0002 8.56683C14.3268 8.96016 14.5068 9.4735 14.4468 10.0335Z"
              stroke="#202020"
              stroke-width="1.5"
              stroke-miterlimit={10}
            />
            <path
              d="M2.33301 8.12018V4.68685C2.33301 2.42018 2.89967 1.85352 5.16634 1.85352H6.01301C6.85967 1.85352 7.05301 2.10685 7.37301 2.53352L8.21967 3.66685C8.43301 3.94685 8.55967 4.12018 9.12634 4.12018H10.8263C13.093 4.12018 13.6597 4.68685 13.6597 6.95352V8.14685"
              stroke="#202020"
              stroke-width="1.5"
              stroke-miterlimit={10}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.28711 11.8335H9.71378"
              stroke="#202020"
              stroke-width="1.5"
              stroke-miterlimit={10}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="flex-grow w-[118px] text-base font-medium text-left text-[#202020]">
            Schedule
          </p>
        </div>
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3 py-2 rounded-[40px]">
          <svg
            width={16}
            height={17}
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
            preserveAspectRatio="none"
          >
            <path
              d="M8.24707 6.41992H11.7471"
              stroke="#202020"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.25293 6.41992L4.75293 6.91992L6.25293 5.41992"
              stroke="#202020"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.24707 11.0864H11.7471"
              stroke="#202020"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.25293 11.0864L4.75293 11.5864L6.25293 10.0864"
              stroke="#202020"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.99967 15.1668H9.99967C13.333 15.1668 14.6663 13.8335 14.6663 10.5002V6.50016C14.6663 3.16683 13.333 1.8335 9.99967 1.8335H5.99967C2.66634 1.8335 1.33301 3.16683 1.33301 6.50016V10.5002C1.33301 13.8335 2.66634 15.1668 5.99967 15.1668Z"
              stroke="#202020"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="flex-grow w-[118px] text-base font-medium text-left text-[#202020]">
            Sent Offers
          </p>
        </div>
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3 py-2 rounded-[40px]">
          <svg
            width={16}
            height={17}
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
            preserveAspectRatio="none"
          >
            <path
              d="M11.9997 5.2735C11.9597 5.26683 11.9131 5.26683 11.8731 5.2735C10.9531 5.24017 10.2197 4.48683 10.2197 3.5535C10.2197 2.60016 10.9864 1.8335 11.9397 1.8335C12.8931 1.8335 13.6597 2.60683 13.6597 3.5535C13.6531 4.48683 12.9197 5.24017 11.9997 5.2735Z"
              stroke="#202020"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.313 10.1269C12.2263 10.2803 13.233 10.1203 13.9396 9.64694C14.8796 9.02027 14.8796 7.9936 13.9396 7.36694C13.2263 6.8936 12.2063 6.7336 11.293 6.8936"
              stroke="#202020"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.98031 5.2735C4.02031 5.26683 4.06698 5.26683 4.10698 5.2735C5.02698 5.24017 5.76031 4.48683 5.76031 3.5535C5.76031 2.60016 4.99365 1.8335 4.04031 1.8335C3.08698 1.8335 2.32031 2.60683 2.32031 3.5535C2.32698 4.48683 3.06031 5.24017 3.98031 5.2735Z"
              stroke="#202020"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.66663 10.1269C3.75329 10.2803 2.74663 10.1203 2.03996 9.64694C1.09996 9.02027 1.09996 7.9936 2.03996 7.36694C2.75329 6.8936 3.77329 6.7336 4.68663 6.8936"
              stroke="#202020"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.0007 10.2535C7.9607 10.2468 7.91404 10.2468 7.87404 10.2535C6.95404 10.2201 6.2207 9.46681 6.2207 8.53348C6.2207 7.58014 6.98737 6.81348 7.9407 6.81348C8.89403 6.81348 9.6607 7.58681 9.6607 8.53348C9.65404 9.46681 8.9207 10.2268 8.0007 10.2535Z"
              stroke="#202020"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.06047 12.3532C5.12047 12.9799 5.12047 14.0066 6.06047 14.6332C7.12714 15.3466 8.8738 15.3466 9.94047 14.6332C10.8805 14.0066 10.8805 12.9799 9.94047 12.3532C8.88047 11.6466 7.12714 11.6466 6.06047 12.3532Z"
              stroke="#202020"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="flex-grow w-[118px] text-base font-medium text-left text-[#202020]">
            History
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[146px] gap-2.5">
    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3 py-2 rounded-[40px]">
      
    </div>
    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3 py-2 rounded-[40px]"
    onClick = {handleLogout}>
      <svg
        width={16}
        height={17}
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
        preserveAspectRatio="none"
      >
        <path
          d="M5.93359 5.54016C6.14026 3.14016 7.37359 2.16016 10.0736 2.16016H10.1603C13.1403 2.16016 14.3336 3.35349 14.3336 6.33349V10.6802C14.3336 13.6602 13.1403 14.8535 10.1603 14.8535H10.0736C7.39359 14.8535 6.16026 13.8868 5.94026 11.5268"
          stroke="#F13E3E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.99975 8.5H2.41309"
          stroke="#F13E3E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.90033 6.2666L1.66699 8.49994L3.90033 10.7333"
          stroke="#F13E3E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p className="flex-grow w-[118px] text-base font-medium text-left text-[#f13e3e] cursor-pointer">Logout</p>
    </div>
  </div>
</div>
  )
}

export default Sidebar;