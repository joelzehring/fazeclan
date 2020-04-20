import React from 'react'

const activeUserStyle = {
    color: 'white',
    border: 'white',
    borderStyle: 'solid',
    borderRadius: '20px',
    borderWidth: '2px',
    marginTop: '50px',
    padding: '50px'
}


 function ActiveUser() {
    return (
        
            <div className="row" style={activeUserStyle}>
                <div className="col-sm-3">
            <h3>YourName</h3>
            <h2>Rank: 1000</h2>
            <h4>***</h4>
            </div>
            <div className="col-sm-3">
            <img src="http://lorempixel.com/200/200" alt="Placeholder Pic"/>
            </div>
            </div>
        
    )
}
export default ActiveUser;