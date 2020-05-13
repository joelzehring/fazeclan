import React from 'react'
import { Link } from 'react-router-dom'
import './NewFooter.css'

export default function NewFooter() {
    return (
        <div>
            <footer className={"footer"}>Created by <Link to="route" target="_blank" onClick={(event) => {event.preventDefault(); window.open('https://github.com/acarrillo2019');}}>Alfred </Link> | <Link to="route" target="_blank" onClick={(event) => {event.preventDefault(); window.open('https://github.com/joelzehring');}}>Joel </Link> | <Link to="route" target="_blank" onClick={(event) => {event.preventDefault(); window.open('https://github.com/kimberlycase91');}}>Kimberly </Link> | <Link to="route" target="_blank" onClick={(event) => {event.preventDefault(); window.open('https://github.com/phil4lif');}}>Phil  </Link> | <Link to="route" target="_blank" onClick={(event) => {event.preventDefault(); window.open('https://github.com/sharkrachel');}}>Rachel</Link></footer>
        </div>
    )
}
