import React from 'react';

const FilterCafes = ({ onSubwayChange }) => {
  const subways = [
    { name: "Все", code: "All" },
    { name: "Арбатская", code: "Arbat" },
    { name: "Александровский сад", code: "Alexanders Garden" },
    { name: "Московская", code: "Moscow" },
    { name: "Парк Культуры", code: "Culture" },
    { name: "Театральная", code: "Theater" },
  ];

  return (
    <div className="controls">
      <select 
        name="subway" 
        id="subway" 
        onChange={(e) => onSubwayChange(e.target.value)}
      >
        {subways.map((subway) => (
          <option key={subway.code} value={subway.code}>
            {subway.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterCafes;
