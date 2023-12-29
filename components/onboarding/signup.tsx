'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import InputField from './inputField'
import Dropdown from './dropdown'
import { useRouter } from 'next/navigation';
const endpoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT

const Signup = () => {

  const [degrees, setDegrees] = useState([]);

  useEffect(() => {

  const getAllDegrees = async () => {
    const response = await fetch(`${endpoint}/subject/degrees/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });  
  
    if (response.ok) {
      const degrees = await response.json();
      console.log("degreeFOO",degrees);
      setDegrees(degrees);
      return degrees;
    } else {
      console.error("No degree found");
    }
  };
  
  getAllDegrees();
  }, []);

  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    Department: '',
    Semester: '',
    Degree: ''
  });

  const handleInputChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };
  

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    Department: '',
    Semester: '',
    Degree: '',
  });

  const openModal = () => {
    setIsModalOpen(true);
    // Initialize dropdown values when opening the modal
    setSelectedOptions({
      Department: formData.Department || '',
      Semester: formData.Semester || '',
      Degree: formData.Degree || '', 
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDropdownSelect = (dropdownName, value) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [dropdownName]: value,
    }));

    setFormData((prevData) => ({
      ...prevData,
      [dropdownName]: value,
    }));
  };


    const handleSignup = async () => {
      console.log('handleSignup function called');
      try {
        const formDataToSend = {
          email: formData.email,
          password: formData.password,
          fullname: formData.fullName, // Assuming fullName is the user's first name
          semester: formData.Semester,
          degree: formData.Degree,
          dept: formData.Department,
          bio: '', // You can add bio if it's part of your form
        };
        console.log('formDataToSend:', formDataToSend);
        // Make API call to the backend
        const response = await fetch(`${endpoint}/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formDataToSend),
        });
    
        // Handle the response from the API
        if (response.ok) {
          // Successful signup
          const responseData = await response.json();
          console.log('Signup successful:', responseData);
          // redirect to home page
          router.push('/verifyEmail');
        } else {
          // Error during signup
          const errorData = await response.json();
          console.error('Error during signup:', errorData);
        }
      } catch (error) {
        console.error('Error during signup:', error);
      }
  }

  const backClick = () => {
    router.push('/')
  }

  // console.log("FOO",formData);

  return (
    <div className="w-[1440px] h-[900px] relative overflow-hidden bg-[#fffefc]">
  <div className="flex flex-col justify-start items-start absolute left-[45px] top-11 overflow-hidden gap-2.5 px-[19px] py-[75px] rounded-[32px] bg-[#1565d8]/90">
    <img
      src="/onboarding.png"
      className="flex-grow-0 flex-shrink-0 w-[691px] h-[553px] object-contain"
    />
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-4 pl-16">
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
        <p className="flex-grow-0 flex-shrink-0 w-[172px] text-[32px] font-bold text-left text-white">
          Nustutor
        </p>
      </div>
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
        <p className="flex-grow-0 flex-shrink-0 w-[476px] text-2xl text-left text-white">
          Tutoring app for students, by students
        </p>
      </div>
    </div>
  </div>
  <div className="flex flex-col justify-start items-center absolute left-[793px] top-[72px] gap-16">
    <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-8">
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-16">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[169px]">
          <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-[9px] cursor-pointer"
          onClick = {backClick}>
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
                d="M14.8627 3.225L13.3794 1.75L5.1377 10L13.3877 18.25L14.8627 16.775L8.0877 10L14.8627 3.225Z"
                fill="#8692A6"
              />
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#8692a6]">
              Back
            </p>
          </div>
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
                id="mask0_255_1636"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={30}
                height={34}
              >
                <path
                  d="M12.0589 1.44664C13.8053 0.438362 15.9569 0.438361 17.7033 1.44663L26.94 6.77944C28.6864 7.78771 29.7622 9.65108 29.7622 11.6676V22.3332C29.7622 24.3498 28.6864 26.2131 26.94 27.2214L17.7033 32.5542C15.9569 33.5625 13.8053 33.5625 12.0589 32.5542L2.8222 27.2214C1.07582 26.2131 0 24.3498 0 22.3332V11.6676C0 9.65108 1.07582 7.78771 2.8222 6.77944L12.0589 1.44664Z"
                  fill="#C4C4C4"
                />
              </mask>
              <g mask="url(#mask0_255_1636)">
                <path
                  d="M14.877 -0.463867L31.1888 8.95377L22.9339 13.3985L19.5242 11.5387L16.4244 11.8486L8.67499 9.05885L6.81512 11.5387L5.88519 12.7786L4.02533 11.5387L-1.43487 8.95377L14.877 -0.463867Z"
                  fill="url(#paint0_linear_255_1636)"
                />
                <path
                  d="M-0.128906 9.08775L6.19899 12.1563L9.91871 21.1457L9.91871 21.4557L11.1586 23.0055L16.7382 27.3452L14.8802 35.0843L-0.128907 26.4188L-0.128906 9.08775Z"
                  fill="url(#paint1_linear_255_1636)"
                />
                <path
                  d="M19.8341 21.4552L23.8638 12.7759L29.886 9.08966L29.886 26.4207L14.8769 35.0862L14.5645 27.3448L19.8341 21.4552Z"
                  fill="url(#paint2_linear_255_1636)"
                />
                <path
                  d="M14.8763 6.58301C12.3115 6.58301 9.9741 7.55649 8.21323 9.15408L9.6428 21.4618C10.0337 21.6422 12.2759 22.3918 12.7065 22.3918H15.8062C16.3541 22.3918 20.1459 21.2241 20.1459 21.7719L19.8359 20.4699C19.8359 21.0177 19.3919 21.4618 18.844 21.4618H10.9086C10.3608 21.4618 9.91667 21.0177 9.91667 20.4699V15.6679C9.91667 15.2373 9.82323 14.8118 9.6428 14.4208L8.21323 9.15408C6.61563 10.9149 4.95703 13.9375 4.95703 16.5023C4.95703 21.9806 9.39799 26.4216 14.8763 26.4216C20.3546 26.4216 24.7956 21.9806 24.7956 16.5023C24.7956 11.024 20.3546 6.58301 14.8763 6.58301Z"
                  fill="url(#paint3_linear_255_1636)"
                />
                <path
                  d="M13.0393 10.7229C13.2583 10.6384 13.4926 10.6053 13.7246 10.6259C13.9565 10.6466 14.18 10.7206 14.3781 10.8423C14.5761 10.964 14.7436 11.1302 14.8678 11.3283C14.9921 11.5264 15.0697 11.7512 15.095 11.9858C15.2751 13.6757 14.8956 15.3867 14.016 16.8504C13.1364 18.314 11.8066 19.4474 10.2352 20.0727L9.1231 17.1973C10.0618 16.8235 10.8568 16.1475 11.3846 15.2745C11.9124 14.4015 12.1433 13.3804 12.0415 12.3702C12.0044 12.0252 12.0821 11.6758 12.2624 11.3774C12.4427 11.079 12.7152 10.8486 13.0367 10.7229L13.0393 10.7229Z"
                  fill="#9C5AFF"
                />
                <path
                  d="M13.0263 10.728C12.6465 10.8793 12.3392 11.1765 12.1721 11.5542C12.005 11.9318 11.9917 12.3591 12.1352 12.742L15.3852 21.4088C15.5289 21.7917 15.8175 22.0987 16.1877 22.2625C16.5578 22.4263 16.9792 22.4334 17.3591 22.2822C17.5473 22.2074 17.7196 22.0959 17.8663 21.9542C18.0129 21.8124 18.131 21.6432 18.2137 21.4562C18.2965 21.2691 18.3423 21.068 18.3486 20.8641C18.3548 20.6603 18.3214 20.4578 18.2503 20.2682L15.0002 11.6013C14.9292 11.4117 14.8218 11.2387 14.6841 11.0921C14.5465 10.9456 14.3813 10.8284 14.1979 10.7473C14.0146 10.6662 13.8168 10.6227 13.6158 10.6194C13.4147 10.6161 13.2144 10.653 13.0263 10.728Z"
                  fill="#9C5AFF"
                />
                <path
                  d="M17.3452 22.2846C17.1263 22.3692 16.892 22.4024 16.6601 22.3818C16.4282 22.3612 16.2047 22.2872 16.0067 22.1656C15.8086 22.044 15.6411 21.8778 15.5169 21.6798C15.3927 21.4817 15.315 21.2569 15.2897 21.0224C15.1098 19.3325 15.4894 17.6214 16.3689 16.1577C17.2484 14.694 18.5781 13.5605 20.1493 12.9349L21.2614 15.8114C20.3228 16.1852 19.5277 16.8612 18.9999 17.7342C18.4722 18.6072 18.2412 19.6282 18.3431 20.6385C18.3796 20.9836 18.3013 21.3329 18.1206 21.6311C17.9398 21.9293 17.6669 22.1593 17.3452 22.2846Z"
                  fill="#9C5AFF"
                />
              </g>
              <defs>
                <lineargradient
                  id="paint0_linear_255_1636"
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
                  id="paint1_linear_255_1636"
                  x1="14.8783"
                  y1="23.9355"
                  x2="5.90272"
                  y2="13.1738"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#5508D8" />
                  <stop offset={1} stop-color="#7935EF" />
                </lineargradient>
                <lineargradient
                  id="paint2_linear_255_1636"
                  x1="14.8744"
                  y1="25.175"
                  x2="23.4474"
                  y2="13.7158"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#5205D6" />
                  <stop offset={1} stop-color="#7A35F0" />
                </lineargradient>
                <lineargradient
                  id="paint3_linear_255_1636"
                  x1="14.8763"
                  y1="6.58301"
                  x2="14.8763"
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
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-right text-[#bdbdbd]">
            STEP 01/03
          </p>
        </div>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-4">
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative">
            <p className="flex-grow-0 flex-shrink-0 text-3xl font-bold text-left text-black">
              Register Individual Account!
            </p>
          </div>
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative">
            <p className="flex-grow-0 flex-shrink-0 w-[411px] text-lg text-left text-[#8692a6]">
              For the purpose of industry regulation, your details are required.
            </p>
          </div>
        </div>
      </div>
      <form>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-6">
        <InputField label={"Full Name"}
              directive={"Enter your Full Name"}
              input="text"
              inputValue={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)} 
              required={'required'}              />
          <InputField
            label="Email"
            directive="Enter your Email"
            input="email"
            inputValue={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            required={'required'}
          />
          <InputField
            label="Password"
            directive="Enter your password"
            input="password"
            inputValue={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            required={'required'}
          />
          <InputField
            label="Confirm Password"
            directive="Re-enter your password"
            input="password"
            inputValue={formData.confirmPassword}
            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
            required={'required'}
          />
      </div>
      </form>
    </div>
    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-6 py-3.5 rounded-lg bg-[#1a56db] cursor-pointer"
    onClick={openModal}>
      <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">Signup</p>
      <svg
        width={25}
        height={24}
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <path
          d="M21.783 12.5341C21.8803 12.2789 21.9058 11.998 21.8561 11.7271C21.8064 11.4562 21.6839 11.2073 21.504 11.012L16.3608 5.42631C16.2422 5.29294 16.1003 5.18656 15.9434 5.11337C15.7866 5.04019 15.6178 5.00166 15.4471 5.00005C15.2764 4.99844 15.1071 5.03377 14.949 5.10399C14.791 5.1742 14.6475 5.27789 14.5267 5.409C14.406 5.54012 14.3105 5.69603 14.2459 5.86765C14.1812 6.03926 14.1487 6.22315 14.1502 6.40856C14.1517 6.59398 14.1871 6.77722 14.2545 6.94759C14.3219 7.11796 14.4199 7.27205 14.5427 7.40086L17.4923 10.6043H5.16665C4.82564 10.6043 4.49859 10.7514 4.25746 11.0133C4.01633 11.2752 3.88086 11.6303 3.88086 12.0007C3.88086 12.3711 4.01633 12.7262 4.25746 12.9881C4.49859 13.25 4.82564 13.3971 5.16665 13.3971H17.4923L14.544 16.5991C14.4212 16.728 14.3232 16.882 14.2558 17.0524C14.1884 17.2228 14.153 17.406 14.1515 17.5914C14.15 17.7769 14.1825 17.9607 14.2472 18.1324C14.3118 18.304 14.4073 18.4599 14.528 18.591C14.6488 18.7221 14.7923 18.8258 14.9503 18.896C15.1084 18.9662 15.2777 19.0016 15.4484 18.9999C15.6191 18.9983 15.7878 18.9598 15.9447 18.8866C16.1016 18.8134 16.2435 18.7071 16.3621 18.5737L21.5053 12.988C21.6244 12.858 21.7188 12.7038 21.783 12.5341Z"
          fill="white"
        />
      </svg>
    </div>
  </div>
  
{/* Modal */}
{isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    <div className="absolute inset-0 bg-black opacity-50" onClick={closeModal}></div>
    <div className="z-10 bg-white p-8 rounded-lg relative">
      {/* Close button */}
      <button
        className="absolute top-4 right-4 text-gray-600 cursor-pointer"
        onClick={closeModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Your dropdown components */}
      <Dropdown
        title="Department"
        options={['SEECS', 'SMME', 'S3H', 'NBS', 'SCME', 'IGIS', 'SADA']}
        selectedOption={selectedOptions.Department}
        onSelect={(value) => handleDropdownSelect('Department', value)}
      />
      <Dropdown
        title="Semester"
        options={['1', '2', '3', '4', '5', '6', '7', '8']}
        selectedOption={selectedOptions.Semester}
        onSelect={(value) => handleDropdownSelect('Semester', value)}
      />
      <Dropdown
        title="Degree Program"
        options={degrees.map((degree) => degree.degree)}
        selectedOption={selectedOptions.Degree}
        onSelect={(value) => handleDropdownSelect('Degree', value)}
      />

      {/* Sign Up button */}
      <button
  className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
  onClick={() => {
    console.log('Sign Up button clicked'); // Add this line
    handleSignup(); // Call your signup function here
  }}
>
  Sign Up
</button>
    </div>
  </div>
)}

</div>
  )
}

export default Signup;