'use client'

import React, { useState } from 'react';

const ToggleComponent = () => {
  const [activeTab, setActiveTab] = useState('login');

  const toggleTab = () => {
    setActiveTab((prevTab) => (prevTab === 'login' ? 'signup' : 'login'));
  };

  return (
    <div className="flex">
      <button
        className={`px-4 py-2 rounded ${
          activeTab === 'login'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-300 text-gray-700'
        }`}
        onClick={toggleTab}
      >
        Login
      </button>
      <button
        className={`px-4 py-2 rounded ${
          activeTab === 'signup'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-300 text-gray-700'
        }`}
        onClick={toggleTab}
      >
        Signup
      </button>
    </div>
  );
};

export default ToggleComponent;
