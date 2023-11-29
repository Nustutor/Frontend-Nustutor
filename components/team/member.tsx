import React from 'react'

const Member = ({img,role,name}) => {
  return (
    <div className="flex flex-col justify-start items-center flex-grow relative gap-6">
            <img
              src={img}
              className="flex-grow-0 flex-shrink-0 w-20 h-20 object-cover"
            />
            <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-4">
              <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[394.67px] text-xl font-semibold text-center text-black">
                  {name}
                </p>
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[394.67px] text-lg text-center text-black">
                  {role}
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3.5">
              <svg
                width={25}
                height={24}
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none"
                cursor={"pointer"}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.33337 3H19.3334C20.438 3 21.3334 3.89543 21.3334 5V19C21.3334 20.1046 20.438 21 19.3334 21H5.33337C4.2288 21 3.33337 20.1046 3.33337 19V5C3.33337 3.89543 4.2288 3 5.33337 3ZM8.33337 18C8.60951 18 8.83337 17.7761 8.83337 17.5V10.5C8.83337 10.2239 8.60951 10 8.33337 10H6.83337C6.55723 10 6.33337 10.2239 6.33337 10.5V17.5C6.33337 17.7761 6.55723 18 6.83337 18H8.33337ZM7.58337 9C6.75494 9 6.08337 8.32843 6.08337 7.5C6.08337 6.67157 6.75494 6 7.58337 6C8.4118 6 9.08337 6.67157 9.08337 7.5C9.08337 8.32843 8.4118 9 7.58337 9ZM17.8334 18C18.1095 18 18.3334 17.7761 18.3334 17.5V12.9C18.3659 11.3108 17.191 9.95452 15.6134 9.76C14.5104 9.65925 13.4417 10.1744 12.8334 11.1V10.5C12.8334 10.2239 12.6095 10 12.3334 10H10.8334C10.5573 10 10.3334 10.2239 10.3334 10.5V17.5C10.3334 17.7761 10.5573 18 10.8334 18H12.3334C12.6095 18 12.8334 17.7761 12.8334 17.5V13.75C12.8334 12.9216 13.505 12.25 14.3334 12.25C15.1618 12.25 15.8334 12.9216 15.8334 13.75V17.5C15.8334 17.7761 16.0573 18 16.3334 18H17.8334Z"
                  fill="black"
                />
              </svg>
              <svg
                width={25}
                height={24}
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none"
                cursor={"pointer"}
              >
                <path
                  d="M21.3062 6.7174C20.8418 7.33692 20.2804 7.87733 19.6437 8.31776C19.6437 8.47959 19.6437 8.64142 19.6437 8.81225C19.6488 11.7511 18.4749 14.5691 16.3852 16.6345C14.2954 18.6999 11.4646 19.8399 8.52743 19.7989C6.82937 19.8046 5.15305 19.4169 3.6298 18.6661C3.54766 18.6302 3.49469 18.549 3.495 18.4593V18.3604C3.495 18.2313 3.59961 18.1267 3.72865 18.1267C5.3978 18.0716 7.0074 17.4929 8.32972 16.4724C6.81891 16.4419 5.45957 15.5469 4.83398 14.1707C4.80239 14.0956 4.81222 14.0093 4.85995 13.9432C4.90767 13.8771 4.98638 13.8407 5.06763 13.8471C5.5268 13.8932 5.99056 13.8505 6.43358 13.7212C4.76577 13.375 3.51259 11.9904 3.33324 10.2957C3.32687 10.2144 3.3633 10.1357 3.42938 10.0879C3.49545 10.0402 3.58162 10.0303 3.65676 10.062C4.10432 10.2595 4.58747 10.3635 5.07662 10.3676C3.61522 9.40846 2.98399 7.58405 3.53993 5.92622C3.59732 5.76513 3.73519 5.64612 3.90288 5.61294C4.07056 5.57975 4.24334 5.63728 4.3577 5.76439C6.32977 7.86325 9.03942 9.11396 11.9153 9.25279C11.8417 8.95885 11.8055 8.65676 11.8075 8.35372C11.8344 6.76472 12.8176 5.34921 14.2968 4.76987C15.7759 4.19054 17.4583 4.56203 18.5564 5.71044C19.3048 5.56785 20.0284 5.31645 20.7041 4.96421C20.7536 4.93331 20.8164 4.93331 20.8659 4.96421C20.8968 5.01373 20.8968 5.07652 20.8659 5.12604C20.5386 5.87552 19.9857 6.50412 19.2843 6.92419C19.8985 6.85296 20.5019 6.70807 21.0816 6.49264C21.1304 6.45942 21.1945 6.45942 21.2433 6.49264C21.2842 6.51134 21.3148 6.54711 21.3269 6.59042C21.339 6.63373 21.3314 6.68018 21.3062 6.7174Z"
                  fill="black"
                />
              </svg>
              <svg
                width={25}
                height={24}
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none"
                cursor={"pointer"}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.3334 3C7.36482 3 3.33337 7.03145 3.33337 12C3.33337 16.9686 7.36482 21 12.3334 21C17.2922 21 21.3334 16.9686 21.3334 12C21.3334 7.03145 17.2922 3 12.3334 3ZM18.2781 7.14859C19.3518 8.45662 19.9961 10.1258 20.0156 11.9317C19.7618 11.8829 17.2238 11.3655 14.6664 11.6876C14.6078 11.5607 14.559 11.4241 14.5004 11.2874C14.3442 10.9165 14.1686 10.5358 13.9928 10.1746C16.8236 9.0228 18.1121 7.36334 18.2781 7.14859ZM12.3334 4.32755C14.2857 4.32755 16.072 5.05966 17.4289 6.26031C17.2922 6.45553 16.1306 8.00759 13.3974 9.03253C12.1382 6.71909 10.7423 4.82538 10.5276 4.53254C11.1034 4.39588 11.7087 4.32755 12.3334 4.32755ZM9.06333 5.04989C9.26831 5.32321 10.6349 7.22668 11.9137 9.49131C8.32144 10.448 5.14899 10.4284 4.80734 10.4284C5.30517 8.04664 6.9158 6.06507 9.06333 5.04989ZM4.6414 12.0098C4.6414 11.9317 4.6414 11.8536 4.6414 11.7755C4.97328 11.7852 8.70213 11.8341 12.5384 10.6822C12.7629 11.1117 12.9679 11.551 13.1631 11.9902C13.0655 12.0195 12.9581 12.0488 12.8605 12.0781C8.89736 13.3568 6.7889 16.8514 6.6132 17.1442C5.39302 15.7874 4.6414 13.9816 4.6414 12.0098ZM12.3334 19.692C10.5568 19.692 8.91689 19.0868 7.61862 18.0716C7.75528 17.7885 9.31708 14.782 13.6512 13.269C13.6707 13.2592 13.6805 13.2592 13.7 13.2495C14.7835 16.051 15.2228 18.4034 15.3399 19.077C14.4126 19.4772 13.3974 19.692 12.3334 19.692ZM16.6186 18.3742C16.5406 17.9056 16.1306 15.6605 15.1251 12.898C17.5362 12.5173 19.6447 13.1421 19.9083 13.23C19.5764 15.3677 18.3464 17.2126 16.6186 18.3742Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
  )
}

export default Member;