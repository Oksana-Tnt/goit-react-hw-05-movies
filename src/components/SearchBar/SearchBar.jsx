import React, { useState } from 'react';
import { FcSearch } from 'react-icons/fc';


const SearchBar = ({searchParams}) => {

    const handleChange = ({ target: { value } }) => {
      searchParams({'query': value});
      };
      const onSubmit=(e)=>{
        e.preventDefault();
      }

  return (
    <form className="d-flex mt-2" role="search" onSubmit={onSubmit}>
    <input
      className="form-control me-2"
      type="search"
      placeholder="search"
      area-label="search"
      onChange={handleChange}
    />
    <button className="btn btn-outline-success" type="submit">
      <FcSearch />
    </button>
  </form>
);
  
}

export default SearchBar;