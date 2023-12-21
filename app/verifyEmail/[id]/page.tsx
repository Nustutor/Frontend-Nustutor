'use client'

import Verified from '@/components/onboarding/success'
import { usePathname } from 'next/navigation';
import React from 'react'

const Redirect = () => {
    

    const code = usePathname().split('/verifyEmail/')[1];
  return (
    <Verified emailVerificationCode={code}/>
  )
}

export default Redirect;