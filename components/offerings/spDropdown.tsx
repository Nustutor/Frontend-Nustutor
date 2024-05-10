// Dropdown.js

import React from 'react';

const SpDropdown = ({ title, options, onSelect, selectedOption }) => {
  return (
    <div className="dropdown-container">
      <label htmlFor="timeDropdown" className="dropdown-label">
        {title}
      </label>
      <br /> {/* New line */}
      <select
        id="timeDropdown"
        value={selectedOption}
        onChange={(e) => onSelect(e.target.value)}
        className="dropdown-select"
      >
        <option value="">Select a time</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SpDropdown;
