
import React from 'react';
import './style/index.css';
import {BiSearchAlt2,BiBell} from 'react-icons/bi'
const SearchBarContainer = () => {
    return (
    <div className='ufa '>
      <div className="searchbar-container">
        <BiSearchAlt2 color=' #f79009' size={20} className='icon'/>
        <input
          type="text"
          className='search'
          placeholder="Buscar comunidad, departamento o monicipio"
        />
      </div>
      <img src='./assets/uwu.png' className='notification'/>
    </div>
    )
  }
  
  export default SearchBarContainer