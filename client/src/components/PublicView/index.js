import React from 'react'
import './PublicView.css'

export default function PublicView() {
    return (
        <div className='bg'>
            <div>
            <div className='titlediv'>
            <h1 className='titlestyle'>Git<span className='clubstyle'>Club</span></h1>
            <h2 className='descstyle'>An app for GitHub users that provides insight and data on their activity in a fun social environment.</h2>
            <a href={"http://localhost:3001/auth/github"}>
            <img src="/assets/images/githubsignonbutton.png" /></a>
            </div>
        </div>       
        </div> 
    )
}
