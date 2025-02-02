import React from 'react'

const Search = ({link,setLink}) => {
  return (
    <div className='search'>
<div>
    <img src="./search.svg" alt="search.svg" />
    <input type="text" 
    placeholder='Search movi'
    value={link}
    onChange={(e)=>setLink(e.target.value)}
    
    />

   
</div>

      
    </div>
  )
}

export default Search;
