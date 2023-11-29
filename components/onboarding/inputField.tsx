import React from 'react'

const InputField = ({label,directive}) => {
  return (
    <div className="w-[435px] h-[90px]">
    <div className="w-[435px] h-[54px] absolute left-[-0.5px] top-[126.5px] rounded-[40px] bg-white border border-[#9e896a]" />
    <p className="absolute left-0 top-[91px] text-base text-left text-black">{label}</p>
    <p className="absolute left-[31px] top-[145px] text-[15px] font-light text-left text-[#acacac]">
      {directive}
    </p>
  </div>
  )
}

export default InputField;