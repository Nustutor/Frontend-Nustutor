import React from 'react'
import Sidebar from './sidebar'
import Searchbar from '../hero_home/searchbar'
import Banners from './banners'
import QuickActions from './quickActions'
import Offers from './gigs'
import RecentActivity from './recentActivity'

const TutorDashboard = ({Username}) => {
  return (
    <div>
      <div className="flex flex-col justify-start items-center gap-8 p-8 bg-white md:hidden">
  <div className="flex flex-col justify-start items-center self-stretch gap-6 pt-5">
    <Searchbar/>
    <Banners title="Tutor"/>
    <Offers OfferText={'Active Classes'}/>
  </div>
  <div className="flex flex-col justify-start items-center gap-9 px-6 py-8 bg-white shadow-md">
    <div className="flex justify-between items-center self-stretch gap-2">
      <p className="text-base font-medium text-left capitalize text-[#202020]">
        Your Profile
      </p>
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
      >
        <path
          d="M11.667 4.16667C11.667 3.25 10.917 2.5 10.0003 2.5C9.08366 2.5 8.33366 3.25 8.33366 4.16667C8.33366 5.08333 9.08366 5.83333 10.0003 5.83333C10.917 5.83333 11.667 5.08333 11.667 4.16667Z"
          stroke="#202020"
          stroke-width="1.5"
        />
        <path
          d="M11.667 15.8332C11.667 14.9165 10.917 14.1665 10.0003 14.1665C9.08366 14.1665 8.33366 14.9165 8.33366 15.8332C8.33366 16.7498 9.08366 17.4998 10.0003 17.4998C10.917 17.4998 11.667 16.7498 11.667 15.8332Z"
          stroke="#202020"
          stroke-width="1.5"
        />
        <path
          d="M11.667 10.0002C11.667 9.0835 10.917 8.3335 10.0003 8.3335C9.08366 8.3335 8.33366 9.0835 8.33366 10.0002C8.33366 10.9168 9.08366 11.6668 10.0003 11.6668C10.917 11.6668 11.667 10.9168 11.667 10.0002Z"
          stroke="#202020"
          stroke-width="1.5"
        />
      </svg>
    </div>
    <div className="flex flex-col justify-center items-center gap-4 px-5">
      <svg
        width={100}
        height={100}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-20 h-20"
      >
        <path
            d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50ZM7.35402 50C7.35402 73.5527 26.4473 92.646 50 92.646C73.5527 92.646 92.646 73.5527 92.646 50C92.646 26.4473 73.5527 7.35402 50 7.35402C26.4473 7.35402 7.35402 26.4473 7.35402 50Z"
            fill="#CCCCCC"
            fill-opacity="0.3"
          />
          <path
            d="M92.2571 68.9779C94.1096 69.8098 96.2996 68.9861 96.9933 67.0775C100.817 56.5572 101.01 45.0181 97.4784 34.3218C93.5606 22.4578 85.3431 12.4904 74.4437 6.3823C63.5444 0.274224 50.7532 -1.5319 38.5888 1.31957C27.6217 3.89038 17.8806 10.0791 10.9032 18.8319C9.63738 20.4198 10.078 22.7178 11.7546 23.8636C13.4313 25.0094 15.7075 24.5671 16.9934 22.9953C22.9191 15.7523 31.0898 10.6308 40.2671 8.4795C50.6424 6.04743 61.5523 7.58791 70.8485 12.7976C80.1448 18.0073 87.1537 26.5087 90.4952 36.6278C93.4509 45.5785 93.3477 55.2211 90.263 64.0562C89.5936 65.9735 90.4046 68.1459 92.2571 68.9779Z"
            fill="#702DFF"
          />
      </svg>
      <div className="flex flex-col justify-start items-center gap-1.5">
        <p className="text-base font-medium text-center capitalize text-[#202020]">
          Good Morning {Username}
        </p>
        <p className="text-xs font-medium text-center capitalize text-[#7e7e7e]">
          Continue your journey and achieve your target
        </p>
      </div>
      <div className="flex justify-center items-center gap-6">
        <div className="flex justify-center items-center p-3 rounded-full border border-[#9e9e9e]">
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
          >
            <path
                  d="M8.01339 1.93994C5.80673 1.93994 4.01339 3.73327 4.01339 5.93994V7.86661C4.01339 8.27328 3.84006 8.89327 3.63339 9.23994L2.86673 10.5133C2.39339 11.2999 2.72006 12.1733 3.58673 12.4666C6.46006 13.4266 9.56006 13.4266 12.4334 12.4666C13.2401 12.1999 13.5934 11.2466 13.1534 10.5133L12.3867 9.23994C12.1867 8.89327 12.0134 8.27328 12.0134 7.86661V5.93994C12.0134 3.73994 10.2134 1.93994 8.01339 1.93994Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit={10}
                  stroke-linecap="round"
                />
                <path
                  d="M9.24694 2.13346C9.04027 2.07346 8.82694 2.02679 8.60694 2.00012C7.96694 1.92012 7.35361 1.96679 6.78027 2.13346C6.97361 1.64012 7.45361 1.29346 8.01361 1.29346C8.57361 1.29346 9.05361 1.64012 9.24694 2.13346Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit={10}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.0137 12.7065C10.0137 13.8065 9.11367 14.7065 8.01367 14.7065C7.467 14.7065 6.96034 14.4799 6.60034 14.1199C6.24034 13.7599 6.01367 13.2532 6.01367 12.7065"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit={10}
                />
          </svg>
        </div>
        <div className="flex justify-center items-center p-3 rounded-full border border-[#9e9e9e]">
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
          >
            <path
                  d="M8.01339 1.93994C5.80673 1.93994 4.01339 3.73327 4.01339 5.93994V7.86661C4.01339 8.27328 3.84006 8.89327 3.63339 9.23994L2.86673 10.5133C2.39339 11.2999 2.72006 12.1733 3.58673 12.4666C6.46006 13.4266 9.56006 13.4266 12.4334 12.4666C13.2401 12.1999 13.5934 11.2466 13.1534 10.5133L12.3867 9.23994C12.1867 8.89327 12.0134 8.27328 12.0134 7.86661V5.93994C12.0134 3.73994 10.2134 1.93994 8.01339 1.93994Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit={10}
                  stroke-linecap="round"
                />
                <path
                  d="M9.24694 2.13346C9.04027 2.07346 8.82694 2.02679 8.60694 2.00012C7.96694 1.92012 7.35361 1.96679 6.78027 2.13346C6.97361 1.64012 7.45361 1.29346 8.01361 1.29346C8.57361 1.29346 9.05361 1.64012 9.24694 2.13346Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit={10}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.0137 12.7065C10.0137 13.8065 9.11367 14.7065 8.01367 14.7065C7.467 14.7065 6.96034 14.4799 6.60034 14.1199C6.24034 13.7599 6.01367 13.2532 6.01367 12.7065"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit={10}
                />
          </svg>
        </div><div className="flex justify-center items-center p-3 rounded-full border border-[#9e9e9e]">
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
          >
            <path
                  d="M8.01339 1.93994C5.80673 1.93994 4.01339 3.73327 4.01339 5.93994V7.86661C4.01339 8.27328 3.84006 8.89327 3.63339 9.23994L2.86673 10.5133C2.39339 11.2999 2.72006 12.1733 3.58673 12.4666C6.46006 13.4266 9.56006 13.4266 12.4334 12.4666C13.2401 12.1999 13.5934 11.2466 13.1534 10.5133L12.3867 9.23994C12.1867 8.89327 12.0134 8.27328 12.0134 7.86661V5.93994C12.0134 3.73994 10.2134 1.93994 8.01339 1.93994Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit={10}
                  stroke-linecap="round"
                />
                <path
                  d="M9.24694 2.13346C9.04027 2.07346 8.82694 2.02679 8.60694 2.00012C7.96694 1.92012 7.35361 1.96679 6.78027 2.13346C6.97361 1.64012 7.45361 1.29346 8.01361 1.29346C8.57361 1.29346 9.05361 1.64012 9.24694 2.13346Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit={10}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.0137 12.7065C10.0137 13.8065 9.11367 14.7065 8.01367 14.7065C7.467 14.7065 6.96034 14.4799 6.60034 14.1199C6.24034 13.7599 6.01367 13.2532 6.01367 12.7065"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit={10}
                />
          </svg>
        </div>
      </div>
    </div>
    <div className="flex justify-center items-end w-full h-[116px] gap-3">
      {/* SVG elements */}
    </div>
  </div>
</div>

    <div className="hidden md:flex justify-start items-center  h-[1514px] gap-8 bg-white">
        <Sidebar/>
  <div className="flex flex-col justify-start items-center self-stretch flex-grow relative gap-6 pt-5">
    <Searchbar/>
    <Banners title="Tutor"/>
    <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-[13px]">
        <QuickActions Content={undefined}/>
        <QuickActions Content={undefined}/>
        <QuickActions Content={undefined}/>
    </div>
    <Offers OfferText={'Active Classes'}/>
  </div>
  <div
    className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-9 px-6 py-8 bg-white"
    style={{ boxShadow: "0px 14px 42px 0 rgba(8,15,52,0.06)" }}
  >
    <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[94px] h-5 text-base font-medium text-left capitalize text-[#202020]">
        Your Profie
      </p>
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M11.667 4.16667C11.667 3.25 10.917 2.5 10.0003 2.5C9.08366 2.5 8.33366 3.25 8.33366 4.16667C8.33366 5.08333 9.08366 5.83333 10.0003 5.83333C10.917 5.83333 11.667 5.08333 11.667 4.16667Z"
          stroke="#202020"
          stroke-width="1.5"
        />
        <path
          d="M11.667 15.8332C11.667 14.9165 10.917 14.1665 10.0003 14.1665C9.08366 14.1665 8.33366 14.9165 8.33366 15.8332C8.33366 16.7498 9.08366 17.4998 10.0003 17.4998C10.917 17.4998 11.667 16.7498 11.667 15.8332Z"
          stroke="#202020"
          stroke-width="1.5"
        />
        <path
          d="M11.667 10.0002C11.667 9.0835 10.917 8.3335 10.0003 8.3335C9.08366 8.3335 8.33366 9.0835 8.33366 10.0002C8.33366 10.9168 9.08366 11.6668 10.0003 11.6668C10.917 11.6668 11.667 10.9168 11.667 10.0002Z"
          stroke="#202020"
          stroke-width="1.5"
        />
      </svg>
    </div>
    <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-4 px-5">
      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative">
        <svg
          width={100}
          height={100}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-[100px] h-[100px]"
          preserveAspectRatio="none"
        >
          <path
            d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50ZM7.35402 50C7.35402 73.5527 26.4473 92.646 50 92.646C73.5527 92.646 92.646 73.5527 92.646 50C92.646 26.4473 73.5527 7.35402 50 7.35402C26.4473 7.35402 7.35402 26.4473 7.35402 50Z"
            fill="#CCCCCC"
            fill-opacity="0.3"
          />
          <path
            d="M92.2571 68.9779C94.1096 69.8098 96.2996 68.9861 96.9933 67.0775C100.817 56.5572 101.01 45.0181 97.4784 34.3218C93.5606 22.4578 85.3431 12.4904 74.4437 6.3823C63.5444 0.274224 50.7532 -1.5319 38.5888 1.31957C27.6217 3.89038 17.8806 10.0791 10.9032 18.8319C9.63738 20.4198 10.078 22.7178 11.7546 23.8636C13.4313 25.0094 15.7075 24.5671 16.9934 22.9953C22.9191 15.7523 31.0898 10.6308 40.2671 8.4795C50.6424 6.04743 61.5523 7.58791 70.8485 12.7976C80.1448 18.0073 87.1537 26.5087 90.4952 36.6278C93.4509 45.5785 93.3477 55.2211 90.263 64.0562C89.5936 65.9735 90.4046 68.1459 92.2571 68.9779Z"
            fill="#702DFF"
          />
        </svg>
      </div>
      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-1.5">
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[168px] text-base font-medium text-center capitalize text-[#202020]">
          good Morning {Username}
        </p>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[168px] text-xs font-medium text-center capitalize text-[#7e7e7e]">
          continue your journey and achieve Your Target
        </p>
      </div>
      <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-6">
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-[100px]">
          <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 gap-6">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-3 rounded-[50px] border border-[#9e9e9e]">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M8.01339 1.93994C5.80673 1.93994 4.01339 3.73327 4.01339 5.93994V7.86661C4.01339 8.27328 3.84006 8.89327 3.63339 9.23994L2.86673 10.5133C2.39339 11.2999 2.72006 12.1733 3.58673 12.4666C6.46006 13.4266 9.56006 13.4266 12.4334 12.4666C13.2401 12.1999 13.5934 11.2466 13.1534 10.5133L12.3867 9.23994C12.1867 8.89327 12.0134 8.27328 12.0134 7.86661V5.93994C12.0134 3.73994 10.2134 1.93994 8.01339 1.93994Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit={10}
                  stroke-linecap="round"
                />
                <path
                  d="M9.24694 2.13346C9.04027 2.07346 8.82694 2.02679 8.60694 2.00012C7.96694 1.92012 7.35361 1.96679 6.78027 2.13346C6.97361 1.64012 7.45361 1.29346 8.01361 1.29346C8.57361 1.29346 9.05361 1.64012 9.24694 2.13346Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit={10}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.0137 12.7065C10.0137 13.8065 9.11367 14.7065 8.01367 14.7065C7.467 14.7065 6.96034 14.4799 6.60034 14.1199C6.24034 13.7599 6.01367 13.2532 6.01367 12.7065"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit={10}
                />
              </svg>
            </div>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-3 rounded-[50px] border border-[#9e9e9e]">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M5.99967 14.6668H9.99967C13.333 14.6668 14.6663 13.3335 14.6663 10.0002V6.00016C14.6663 2.66683 13.333 1.3335 9.99967 1.3335H5.99967C2.66634 1.3335 1.33301 2.66683 1.33301 6.00016V10.0002C1.33301 13.3335 2.66634 14.6668 5.99967 14.6668Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.33301 8.66682H3.83967C4.34634 8.66682 4.80634 8.95349 5.03301 9.40682L5.62634 10.6002C5.99967 11.3335 6.66634 11.3335 6.82634 11.3335H9.17968C9.68634 11.3335 10.1463 11.0468 10.373 10.5935L10.9663 9.40016C11.193 8.94682 11.653 8.66016 12.1597 8.66016H14.653"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-3 rounded-[50px] border border-[#9e9e9e]">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M5.99967 14.6668H9.99967C13.333 14.6668 14.6663 13.3335 14.6663 10.0002V6.00016C14.6663 2.66683 13.333 1.3335 9.99967 1.3335H5.99967C2.66634 1.3335 1.33301 2.66683 1.33301 6.00016V10.0002C1.33301 13.3335 2.66634 14.6668 5.99967 14.6668Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.33301 8.66682H3.83967C4.34634 8.66682 4.80634 8.95349 5.03301 9.40682L5.62634 10.6002C5.99967 11.3335 6.66634 11.3335 6.82634 11.3335H9.17968C9.68634 11.3335 10.1463 11.0468 10.373 10.5935L10.9663 9.40016C11.193 8.94682 11.653 8.66016 12.1597 8.66016H14.653"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center items-end flex-grow-0 flex-shrink-0 w-[204px] h-[116px] relative gap-3">
      <div className="flex-grow h-[40.02px]">
        <div className="w-[31.2px] h-[18.56px] absolute left-[-0.5px] top-[96.94px] bg-[#962dff]" />
        <div className="w-[31.2px] h-[9.28px] absolute left-[-0.5px] top-[87.66px] bg-[#c893fd]" />
        <div className="w-[31.2px] h-[7.49px] absolute left-[-0.5px] top-[80.17px] bg-[#e0c6fd]" />
        <div className="w-[31.2px] h-[4.69px] absolute left-[-0.5px] top-[75.48px] rounded-tl rounded-tr bg-[#f0e5fc]" />
      </div>
      <div className="flex-grow h-[71.7px]">
        <div className="w-[31.2px] h-[31.15px] absolute left-[42.7px] top-[84.35px] bg-[#962dff]" />
        <div className="w-[31.2px] h-[15.13px] absolute left-[42.7px] top-[69.22px] bg-[#c893fd]" />
        <div className="w-[31.2px] h-[17.15px] absolute left-[42.7px] top-[52.07px] bg-[#e0c6fd]" />
        <div className="w-[31.2px] h-[8.28px] absolute left-[42.7px] top-[43.8px] rounded-tl rounded-tr bg-[#f0e5fc]" />
      </div>
      <div className="flex-grow h-[91.27px]">
        <div className="w-[31.2px] h-[40.21px] absolute left-[85.9px] top-[75.29px] bg-[#962dff]" />
        <div className="w-[31.2px] h-[18.67px] absolute left-[85.9px] top-[56.63px] bg-[#c893fd]" />
        <div className="w-[31.2px] h-[21.01px] absolute left-[85.9px] top-[35.62px] bg-[#e0c6fd]" />
        <div className="w-[31.2px] h-[11.39px] absolute left-[85.9px] top-[24.23px] rounded-tl rounded-tr bg-[#f0e5fc]" />
      </div>
      <div className="flex-grow h-[108.19px]">
        <div className="w-[31.2px] h-[46.75px] absolute left-[129.1px] top-[68.75px] bg-[#962dff]" />
        <div className="w-[31.2px] h-[23.85px] absolute left-[129.1px] top-[44.9px] bg-[#c893fd]" />
        <div className="w-[31.2px] h-[26.2px] absolute left-[129.1px] top-[18.71px] bg-[#e0c6fd]" />
        <div className="w-[31.2px] h-[11.39px] absolute left-[129.1px] top-[7.31px] rounded-tl rounded-tr bg-[#f0e5fc]" />
      </div>
      <div className="flex-grow h-[94.96px]">
        <div className="w-[31.2px] h-[42.12px] absolute left-[172.3px] top-[73.38px] bg-[#962dff]" />
        <div className="w-[31.2px] h-[20.29px] absolute left-[172.3px] top-[53.09px] bg-[#c893fd]" />
        <div className="w-[31.2px] h-[21.2px] absolute left-[172.3px] top-[31.89px] bg-[#e0c6fd]" />
        <div className="w-[31.2px] h-[11.35px] absolute left-[172.3px] top-[20.54px] rounded-tl rounded-tr bg-[#f0e5fc]" />
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default TutorDashboard;