import React from 'react'

function Header() {
    return (
        <header>
            <h1>Github Club</h1>
            <form>
            <input type="text" name="searchusers" placeholder="search users"></input>
            <input type="submit"></input>
            </form>
        </header>
    )
}


export default Header