'use client'

import React from 'react'
import Sidebar from './sidebar';
import UserPanel from './userpanel';
import InputField from '../onboarding/inputField';
import Dropdown from '../onboarding/dropdown';
import { useState } from 'react';

const AddClass = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    Subject: '',
    MultipuleStudents: '',
  });
  function handleDropdownSelect(arg0: string, value: any) {
    throw new Error('Function not implemented.');
  }

  return (
<div className="flex justify-start items-center  h-[1514px] gap-8 bg-white">
        <Sidebar/>
        <div className="w-[944px] h-[1240px] relative overflow-hidden">
  <div className="flex flex-col justify-center items-center  top-5 gap-2.5 p-2.5">
    <p className="flex-grow-0 flex-shrink-0 text-5xl font-bold text-center text-black">
      Add a Class
    </p>
    <div className='p-4'/>
    <div className='flex flex-col flex-grow-0 flex-shrink-0 '>
    <Dropdown
        title="Subject"
        options={['SEECS', 'SMME', 'S3H', 'NBS', 'SCME', 'IGIS', 'SADA']}
        selectedOption={selectedOptions.Subject}
        onSelect={(value) => handleDropdownSelect('Subject', value)}
      />
    <InputField label={'Title'} directive={'Enter your Course Title'} input={undefined} inputValue={undefined} onChange={undefined} required={undefined}/>
    <InputField label={'Description'} directive={'Enter your Course Description'} input={undefined} inputValue={undefined} onChange={undefined} required={undefined}/>
    <InputField label={'Offering Rate per hour'} directive={'Enter your offering rate per hour'} input={undefined} inputValue={undefined} onChange={undefined} required={undefined}/>
    <InputField label={'Time Slot'} directive={undefined} input={undefined} inputValue={undefined} onChange={undefined} required={undefined}/>
    <Dropdown
        title="Multuple Students"
        options={['SEECS', 'SMME', 'S3H', 'NBS', 'SCME', 'IGIS', 'SADA']}
        selectedOption={selectedOptions.MultipuleStudents}
        onSelect={(value) => handleDropdownSelect('Multuple Students', value)}
      />
      <div className='p-4'/>
    </div>
  </div>
  </div>
  <UserPanel/>
</div>
  )
}

export default AddClass;