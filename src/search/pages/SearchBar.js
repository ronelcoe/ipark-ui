import React, { useState } from 'react'

import './CenterPosition.css'

const SearchBar = () => {

  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return <div className='search-parking'>
    <input
      type="search"
      placeholder="Search here"
      onChange={handleChange}
      value={searchInput} />
  </div>


};

export default SearchBar;