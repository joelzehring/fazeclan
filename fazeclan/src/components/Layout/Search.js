import React from "react"


const searchButtonStyle = {
  color: 'white'
}

function Search() {
  return (
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
    </form>
  )
}

export default Search