'use client'

import React from 'react'
import Sidebar from './sidebar';
import UserPanel from './userpanel';
import InputField from '../onboarding/inputField';
import Dropdown from '../onboarding/dropdown';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import TimePicker from './TimePicker';

const AddClass = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    suid: '',
    multipuleStudents: '',
  });
  const [formData, setFormData] = useState({
    suid: '',
    title: '',
    description: '',
    rate: '',
    multipleStudents: '',
    availableTimeslots: ''
  });

  const handleInputChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  useEffect(() => {
    setSelectedOptions({
      suid: formData.suid || '',
      multipuleStudents: formData.multipleStudents || '',
    });
  }, [formData]);

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

  console.log(formData)

  return (
<div className="flex justify-start items-center gap-8 bg-white">
        <Sidebar/>
        <div className="w-[944px] h-[1240px] relative overflow-hidden">
  <div className="flex flex-col justify-center items-center  top-5 gap-2.5 p-10">
    <p className="flex-grow-0 flex-shrink-0 text-5xl font-bold text-center text-black">
      Add a Class
    </p>
    <div className='p-4'/>
    <div className='flex flex-col flex-grow-0 flex-shrink-0 '>
      <form>
    <Dropdown
        title="Choose the most relevant subject to your class"
        options={['SEECS', 'SMME', 'S3H', 'NBS', 'SCME', 'IGIS', 'SADA']}
        selectedOption={selectedOptions.suid}
        onSelect={(value) => handleDropdownSelect('suid', value)}
      />
    <InputField label={'Title'} 
    directive={'Enter your Course Title'} 
    input={'text'} 
    inputValue={formData.title} 
    onChange={(e) => handleInputChange('title', e.target.value)}/>
    <InputField label={'Description'} 
    directive={'Enter your Course Description'} 
    input={'text'} 
    inputValue={formData.description} 
    onChange={(e) => handleInputChange('description', e.target.value)} />
    <InputField label={'Offering Rate per hour'} 
    directive={'Enter your offering rate per hour'} 
    input={'number'} 
    inputValue={formData.rate} 
    onChange={(e) => handleInputChange('rate', e.target.value)} />
    <TimePicker label={'Select available time slots for your class'} 
    input={'text'} 
    inputValue={'formData.availableTimeslots'} 
    onChange={(e) => handleInputChange('availableTimeslots', e.target.value)}/>
    <Dropdown
        title="Do you wish to have multuple students"
        options={['Yes', 'No']}
        selectedOption={selectedOptions.multipuleStudents}
        onSelect={(value) => handleDropdownSelect('multipleStudents', value)}
      />
      </form>
      <div className='p-4'/>
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-24">
  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[179px] relative overflow-hidden gap-2 px-6 py-3.5 rounded-lg bg-[#1a56db] cursor-pointer">
    <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
      Add Course
    </p>
  </div>
  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-6 py-3.5 rounded-lg bg-[#bb421c] cursor-pointer">
    <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
      Discard Course
    </p>
  </div>
</div>
    </div>
  </div>
  </div>
  <UserPanel/>
</div>
  )
}

export default AddClass;