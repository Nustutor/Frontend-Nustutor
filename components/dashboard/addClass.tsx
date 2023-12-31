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
import { Input } from 'postcss';
import SuccessModal from './successModal';
const endpoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT


const AddClass = () => {
  
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [selectedSubjectIndex, setSelectedSubjectIndex] = useState(null);
  let uuid: string | null, token: string | null;
  if (typeof window !== 'undefined') {
    uuid = localStorage.getItem('userID');
    token = localStorage.getItem('token');
  }
  const [selectedOptions, setSelectedOptions] = useState({
    suid: '',
    // multipuleStudents: '',
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
      // multipuleStudents: formData.multipleStudents || '',
    });
  }, [formData]);

  const handleDropdownSelect = (dropdownName, value, index) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [dropdownName]: value,
    }));

    setFormData((prevData) => ({
      ...prevData,
      [dropdownName]: value,
    }));

    setSelectedSubjectIndex(index); // Save the selected subject index
  };

  const [subjectsids, setSubjectsids] = useState([]);
  const [namesArray, setNamesArray] = useState([]);

  useEffect(() => {
    const SubjectData = async () => {
      try {
        const response = await fetch(`${endpoint}/subject/subject_names`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'uuid': `${uuid}`,
            // Include any additional headers if needed
          },
        });// Replace with the actual endpoint
        if (response.ok) {
          const data = await response.json();
          console.log("data here", data);
          // Assuming the API response structure is { results: [...] }
          const namesArray = data.results.map(item => item.name);
          setNamesArray(namesArray)
          console.log("Subjects are",namesArray)
          const subjectIDs = data.results.map(item => item.suid);
          setSubjectsids(subjectIDs);
          console.log("suids are",subjectIDs)
        } else {
          console.error('Error fetching subjects:', response.statusText);
        }
      } catch (error) {
        console.error('Unexpected error:', error);
      }
    };

    SubjectData();


  }, []); 


  const handleAddClass = async () => {
    console.log(token,'sep',uuid);
    const { suid, title, description, rate, multipleStudents, availableTimeslots } = formData;
    let tuid = localStorage.getItem('tuid'); // Replace with the actual tuid

    try {
      const response = await fetch(`${endpoint}/class/addclass/${tuid}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'uuid': `${uuid}`,
          // Add any other headers if needed
        },
        body: JSON.stringify({
          suid,
          title,
          description,
          rate,
          multipleStudents,
          availableTimeslots: availableTimeslots.split(',').map(Number), // Assuming timeslots are comma-separated integers
        }),
      });

      if (response.ok) {
        console.log('Class added successfully');
        setIsSuccessModalOpen(true); 
        // Handle success, e.g., show a success message or redirect
      } else {
        console.log('time slot is',availableTimeslots.split(',').map(Number));
        const errorData = await response.json();
        console.error('Error adding class:', errorData.message);
        // Handle error, e.g., show an error message to the user
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      // Handle unexpected errors
    }
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
    {/* <ul>
        {subjects.map((subject) => (
          <li key={subject.suid}>
            {subject.name} - {subject.code} - {subject.degree}
          </li>
        ))}
      </ul> */}
    <div className='p-4'/>
    <div className='flex flex-col flex-grow-0 flex-shrink-0 '>
      <form>
      <Dropdown
  title="Choose the most relevant subject to your class"
  options={subjectsids}
  selectedOption={selectedOptions.suid}
  onSelect={(value) => handleDropdownSelect('suid', value, namesArray.indexOf(value))}
/>
<InputField label={'Multiple Students'} 
    directive={'Enter your Course Title'} 
    input={'boolean'} 
    inputValue={formData.multipleStudents} 
    onChange={(e) => handleInputChange('multipleStudents', e.target.value)}/>
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
    <InputField label={'Available Timeslots'} 
    directive={'Enter your available timeslots'} 
    input={'array'} 
    inputValue={formData.availableTimeslots} 
    onChange={(e) => handleInputChange('availableTimeslots', e.target.value)} />
      </form>
      <div className='p-4'/>
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-24">
  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[179px] relative overflow-hidden gap-2 px-6 py-3.5 rounded-lg bg-[#1a56db] cursor-pointer"
  onClick={handleAddClass}>
    <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
      Add Course
    </p>
  </div>
  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-6 py-3.5 rounded-lg bg-[#bb421c] cursor-pointer">
    <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
      Back
    </p>
  </div>
</div>
    </div>
  </div>
  </div>
  <UserPanel Username={undefined}/>
  {isSuccessModalOpen && <SuccessModal onClose={() => setIsSuccessModalOpen(false)} />}
</div>
  )
}

export default AddClass;