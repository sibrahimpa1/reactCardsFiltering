import React, { Component } from 'react'
import './search.css'

export const Search = (props) => {
  return(
    <div className="input-container">
      <input 
        type="search" 
        placeholder="Search for monsters.." 
        onChange={e => props.filterMonsters(e.target.value)}
      />
    </div>
  )
}

