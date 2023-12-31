"use client"
import React, { useState } from 'react'
import CTA from './cta';
import {useRouter} from 'next/navigation'
import Loader from '../loader';

let uuid: string | null, token: string | null;
  if (typeof window !== 'undefined') {
    uuid = localStorage.getItem('userID');
    token = localStorage.getItem('token');
  }

const SignupHook = () => {

  const [loading, setLoading] = useState(false);

  const router = useRouter();
  
  const signupClick = () => {
    setLoading(true);
    setTimeout(() => {
      if (uuid && token){
        router.push('/home')
      }
      else{
    router.push('/onboarding/signup')
      }
    }, 1000);
  }
  return (
    <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0  overflow-hidden gap-2.5 py-24 bg-gray-50">
  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[1280px]">
    <div>{loading && <Loader LoaderText={'Loading'} />}
    <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[640px] relative gap-6"
    onClick = {signupClick}>
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[640px] text-4xl font-bold text-center text-[#111928]">
        Start for free trial today
      </p>
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[640px] text-xl text-center text-gray-500">
        Nustutor is completely free, as long as @momin.ahmed agrees :){" "}
      </p>
    <CTA/>
    </div>
    </div>
  </div>
</div>
  )
}

export default SignupHook;