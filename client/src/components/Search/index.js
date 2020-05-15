import React from "react"



function Search(props) {
  return (
    <form className="form-inline my-2 my-lg-0">
      <input name="search" className="form-control mr-sm-2" type="search" value={ props.search }  onChange={ props.handleChange }placeholder="Search" aria-label="Search"/>
      <button onClick={props.handleSubmit} className="btn btn-outline-light my-2 my-sm-0" type="submit">Enter a GitHub username</button>
    </form>
  )
}

export default Search