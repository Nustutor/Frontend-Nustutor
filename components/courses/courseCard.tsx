"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Loader from '../loader';

const CourseCard = ({ img, category, title, description, suid }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  let uuid: string | null, token: string | null;
  if (typeof window !== 'undefined') {
    uuid = localStorage.getItem('userID');
    token = localStorage.getItem('token');
  }

  const handleEnrollClick = () => {
    console.log('finalfoo', suid);
    setLoading(true);
    // Store suid in local storage
    localStorage.setItem('selectedSuid', suid);
    console.log('finalfoo2', localStorage.getItem('selectedSuid'));

    setTimeout(() => {
      if (uuid && token) {
        router.push(`/home/${title}+${category}`);
      } else {
        router.push('onboarding/login');
      }
    }, 1000);
  };


  return (
    <div className="flex flex-col justify-start items-start flex-grow relative gap-6 rounded-[5px] bg-[#f7f7f7]">
            <img
              src={img}
              className="self-stretch flex-grow-0 flex-shrink-0 h-[300px] object-none"
            />
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6 px-4 pb-6">
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[382px] relative gap-2">
                <div className="flex justify-end items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                  <p className="flex-grow w-[326px] text-sm font-semibold text-left text-black">
                    {category}
                  </p>
                  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1">
                    <svg
                      width={20}
                      height={19}
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                    <p className="flex-grow-0 flex-shrink-0 w-5 h-6 text-sm font-semibold text-right text-black">
                      5.0
                    </p>
                  </div>
                </div>
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[382px] text-2xl font-bold text-left text-black">
                  {title}
                </p>
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[382px] text-base text-left text-black">
                    {description}
                </p>
              </div>
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[382px] gap-4">
                <div>{loading && <Loader LoaderText={'Loading'} />}
                <button
                  onClick={handleEnrollClick}
                  className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-5 py-2 rounded-[5px] border border-black text-base text-left text-black cursor-pointer"
                >
                  Enroll Now
                </button>
              </div>
              </div>
            </div>
          </div>
  )
}

export default CourseCard;