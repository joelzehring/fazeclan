import React from 'react'
import FormModal from '../UserForm/FormModal'
const activeUserStyle = {
    color: 'white',
    border: 'white',
    borderStyle: 'solid',
    borderRadius: '20px',
    borderWidth: '2px',
    padding: '50px',
    marginTop: '50px',
    marginLeft: '20px',
    marginRight: '20px',
    marginBottom: '10px'
}


 function ActiveUser() {
    return (
            
            <div className="row active-user" style={activeUserStyle}>
                <div className="col-sm-9">
                    <h2>YourName</h2>
                    <h3>Rank: 1000</h3>
                    <h4>***</h4>
                </div>
                <div className="col-sm-3 float-sm-right">
                    <img src="http://lorempixel.com/200/200" alt="Placeholder Pic"/>
                </div>
                <br />
                <FormModal />
            </div>
        
    )
}
export default ActiveUser;