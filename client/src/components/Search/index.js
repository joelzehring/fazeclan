import React from "react"



function Search(props) {
  
  const buttonStyle = {
    backgroundColor: 'white',
    boxShadow: '1px 1px 1px 1px rgb(0, 0, 0, 0.2)',
    color: 'rgb(63,81,181)',
    border: "none"
  }

  return (
    <form className="">
      <input name="search" className="form-control mr-sm-2" type="search" value={ props.search }  onChange={ props.handleChange }placeholder="GitHub Username" aria-label="Search"/>
      <button style={buttonStyle} onClick={props.handleSubmit} className="btn btn-outline-dark my-2 my-sm-0" type="submit">Submit</button>
    </form>
  )
}

export default Search