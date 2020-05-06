import React from 'react'
const imagePlaceHolder = require('../../../images/200x200.png');

const cardParent = {
    paddingLeft: '50px',
    paddingRight: '50px',
    marginTop: '10px',
    marginBottom: '10px'
}

const cardedStyle = {
    color: 'white',
    border: 'white',
    borderStyle: 'solid',
    borderRadius: '20px',
    borderWidth: '2px'
}

const favImageStyle = {
    width: '200px',
    borderRadius: '20px',
    margin: '0 auto',
    marginTop: '20px'
}

const favNameStyle = {
    margin: '0 auto',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}


function UserFavorites() {
    return (
        <div className="row">

            {/* User of the Day */}
            <div className="col-lg-4 user-of-the-day" style={cardParent}>
                <div className="row carded" style={cardedStyle}>
                    
                    <div className="card-body text-center">
                        <div className="col-sm-12">
                            <h3>User Favorite</h3>
                        </div> 
                        <div className="row">
                            <p className="col-sm-6  " style={favNameStyle}>
                                {/* Insert data here from API. Current text is just placeholder */}
                                'User's Github Name'
                            </p>
                            <div className="col-sm-6" style={favImageStyle}>
                            <img className="card-img" src={imagePlaceHolder} alt="user-week"  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* User of the Week */}
            <div className="col-lg-4 user-of-the-week" style={cardParent}>
                <div className="row carded" style={cardedStyle}>
                    
                    <div className="card-body text-center">
                        <div className="col-sm-12">
                            <h3>User Favorite</h3>
                        </div> 
                        <div className="row">
                            <p className="col-sm-6  " style={favNameStyle}>
                                {/* Insert data here from API. Current text is just placeholder */}
                                'User's Github Name'
                            </p>
                            <div className="col-sm-6" style={favImageStyle}>
                            <img className="card-img" src={imagePlaceHolder} alt="user-week"  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* User of the Month */}
            <div className="col-lg-4 user-of-the-month" style={cardParent}>
                <div className="row carded" style={cardedStyle}>
                    
                    <div className="card-body text-center">
                        <div className="col-sm-12">
                            <h3>User Favorite</h3>
                        </div> 
                        <div className="row">
                            <p className="col-sm-6  " style={favNameStyle}>
                                {/* Insert data here from API. Current text is just placeholder */}
                                'User's Github Name'
                            </p>
                            <div className="col-sm-6" style={favImageStyle}>
                            <img className="card-img" src={imagePlaceHolder} alt="user-week"  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserFavorites;