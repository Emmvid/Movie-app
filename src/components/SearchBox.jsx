import React from 'react'
import './searchbox.css'

const Searchbox = (props) => {
  return (
    <div>
        <input 
        className="form-control"
        value={props.value} 
        onChange={(event) => props.setSearchValue(event.target.value)} 
        placeholder='Type to search'  />
    </div>
  )
}

export default Searchbox