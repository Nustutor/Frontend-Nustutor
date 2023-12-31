"use client"
import React from 'react'
import {useRouter} from 'next/navigation'

const CategoryCard = ({CourseName,TutorNumber}) => {

  const router = useRouter();

  const handleClick = () => {
    router.push(`/courses/${CourseName}`)
  }
  return (
    <div className="flex justify-start items-center flex-grow gap-8 p-4 rounded-[5px] bg-[#f7f7f7] cursor-pointer"
    onClick = {handleClick}>
  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-[34px] rounded-[5px] bg-white">
    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-8 h-8"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M14.3331 30.0001H17.6931C18.9731 30.0001 19.7998 29.0934 19.5598 27.9867L19.0131 25.5735H13.0131L12.4664 27.9867C12.2264 29.0267 13.1331 30.0001 14.3331 30.0001Z"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.0134 25.5602L21.3201 23.5069C22.6134 22.3602 22.6667 21.5601 21.6401 20.2668L17.5734 15.1069C16.7201 14.0269 15.3201 14.0269 14.4667 15.1069L10.4001 20.2668C9.37341 21.5601 9.3734 22.4002 10.7201 23.5069L13.0267 25.5602"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.0137 14.8269V18.2003"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.693 6.66675H15.3597C14.6264 6.66675 14.0264 6.06675 14.0264 5.33341V4.00008C14.0264 3.26675 14.6264 2.66675 15.3597 2.66675H16.693C17.4264 2.66675 18.0264 3.26675 18.0264 4.00008V5.33341C18.0264 6.06675 17.4264 6.66675 16.693 6.66675Z"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.3597 18.8934H5.69303C6.42637 18.8934 7.02637 18.2934 7.02637 17.5601V16.2267C7.02637 15.4934 6.42637 14.8933 5.69303 14.8933H4.3597C3.62637 14.8933 3.02637 15.4934 3.02637 16.2267V17.5601C3.02637 18.2934 3.62637 18.8934 4.3597 18.8934Z"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M27.6393 18.8934H26.306C25.5727 18.8934 24.9727 18.2934 24.9727 17.5601V16.2267C24.9727 15.4934 25.5727 14.8933 26.306 14.8933H27.6393C28.3727 14.8933 28.9727 15.4934 28.9727 16.2267V17.5601C28.9727 18.2934 28.3727 18.8934 27.6393 18.8934Z"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.0267 4.74683C8.94667 5.34683 5 9.65347 5 14.8935"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M26.9997 14.8935C26.9997 9.66681 23.0797 5.37349 18.0264 4.74683"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
  <div className="flex flex-col justify-start items-start flex-grow gap-6">
    <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-4">
      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative">
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[246.67px] text-xl font-semibold text-left text-black">
          {CourseName}
        </p>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[246.67px] text-lg text-left text-black">
          {TutorNumber} Available Courses
        </p>
      </div>
    </div>
  </div>
</div>
  )
}

export default CategoryCard;