
import React, { useState, useEffect } from 'react';
import FilterCafes from './FilterCafes.jsx';

const CafesTable = () => {
  const [cafes, setCafes] = useState([]);
  const [filteredCafes, setFilteredCafes] = useState([]);
  const [selectedSubway, setSelectedSubway] = useState('All');

  useEffect(() => {
    fetch('/cafes')
      .then(response => response.json())
      .then(data => {
        setCafes(data.cafes);
        setFilteredCafes(data.cafes);
      })
      .catch(error => console.error('Error fetching cafes:', error));
  }, []);

  useEffect(() => {
    if (selectedSubway === 'All') {
      setFilteredCafes(cafes);
    } else {
      setFilteredCafes(cafes.filter(cafe => cafe.subwayCode === selectedSubway));
    }
  }, [selectedSubway, cafes]);

  const handleSubwayChange = (subway) => {
    setSelectedSubway(subway);
  };

  return (
    <div id="container" className="container m-3">
      <div className="cafesTable">
        <FilterCafes onSubwayChange={handleSubwayChange} />
        <ul className="cardsList">
          {filteredCafes.map((cafe) => (
            <li key={cafe.id} className="card">
              <img 
                src={cafe.img || 'https://via.placeholder.com/150'} 
                alt="" 
              />
              <h2>{cafe.name}</h2>
              <p>{cafe.desc}</p>
              <p>{cafe.address}</p>
              <p>Subway: {cafe.subwayCode}</p>
              <p>{cafe.workTime}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CafesTable;