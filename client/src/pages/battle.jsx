import React, { Component, Fragment } from 'react';
import '../App.css';
import { AuthContext } from "../contexts/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Card } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import Search from '../../src/components/Search';
import API from '../utils/api';




class Battle extends Component {

  state = {
    search: "",
    secondPlayer: {},
    winner: {}
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ winner: {} })
    this.setState({ secondPlayer: {} })
    API.getGraphQL(this.state.search)
      .then((result) => {

        this.setState({
          secondPlayer: result.data.data.user
        })
        console.log(this.state.secondPlayer);
      })
      
  }

  battle = (event) => {
  event.preventDefault();
  if (this.context.userProfile.contributionsCollection.totalCommitContributions > this.state.secondPlayer.contributionsCollection.totalCommitContributions) {
    this.setState({ winner: this.context.userProfile });
  }
  else {
    this.setState({ winner: this.state.secondPlayer});
  }
  }

  render() {
    return (
      <AuthContext.Consumer>


        {(context) => {
          const { userProfile } = context;

          return (

            <div className="container fluid">
              <Fragment>

                {/* User Card */}
                <Grid container spacing={6}>
                  <Grid item xs={12} sm={4} lg={4}>
                    <Card className="card-box border-0 card-shadow-first p-4 mb-4">
                      <div className="d-flex align-items-center">
                        <div className="d-40 rounded-circle bg-first text-white text-center font-size-lg mr-3 text-center d-flex align-items-center pt-3 justify-content-center">
                          <FontAwesomeIcon icon={['far', 'keyboard']} />
                        </div>
                        <div className="profile-pic-holder" >
                          <img className='card-img' src={userProfile.avatarUrl} alt="Profile pic" />
                        </div>
                      </div>
                      <div className="text-black-50"><h2>{userProfile.name}</h2></div>
                      <div className="display-3 text-center line-height-sm text-second text-center d-flex align-items-center pt-3 justify-content-center">
                        <FontAwesomeIcon
                          icon={['fas', 'arrow-down']}
                          className="font-size-sm text-danger mr-2"
                        />
                    {/* Total Commits: {userProfile.contributionsCollection && userProfile.contributionsCollection.totalCommitContributions} */}
                      </div>
                      <div className="text-black-50 text-center opacity-6 pt-3">
                        <b>Fighter One</b>
                      </div>
                    </Card>
                  </Grid>


                  {/* Github User */}
                  {(this.state.secondPlayer.avatarUrl) ?
                  <Grid item xs={12} sm={4} lg={4}>
                    <Card className="card-box border-0 card-shadow-first p-4 mb-4">
                      <div className="d-flex align-items-center">
                        <div className="d-40 rounded-circle bg-first text-white text-center font-size-lg mr-3 text-center d-flex align-items-center pt-3 justify-content-center">
                          <FontAwesomeIcon icon={['far', 'keyboard']} />
                        </div>
                        <div className="profile-pic-holder" >
                          <img className='card-img' src={(this.state.secondPlayer != null) ? this.state.secondPlayer.avatarUrl : "User not found"} alt="Profile pic" />
                        </div>
                      </div>
                      <div className="text-black-50"><h2>{(this.state.secondPlayer != null) ? this.state.secondPlayer.name : ""}</h2></div>
                      <div className="display-3 text-center line-height-sm text-second text-center d-flex align-items-center pt-3 justify-content-center">
                        <FontAwesomeIcon
                          icon={['fas', 'arrow-down']}
                          className="font-size-sm text-danger mr-2"
                        />
                    {/* Total Commits: {(this.state.secondPlayer) ? this.state.secondPlayer.contributionsCollection && this.state.secondPlayer.contributionsCollection.totalCommitContributions : ""} */}
                      </div>
                      <div className="text-black-50 text-center opacity-6 pt-3">
                        <b>Fighter Two</b>
                      </div>
                    </Card>
                  <button type="submit" className="btn btn-outline-dark my-2 my-sm-0" onClick={this.battle}>Battle</button>
                  </Grid> : <div></div>}

                  {/*Winner Card */}
                  {(this.state.winner.avatarUrl) ? 
                  <Grid item xs={12} sm={4} lg={4}>
                    <Card className="card-box border-0 card-shadow-first p-4 mb-4">
                      <div className="d-flex align-items-center">
                        <div className="d-40 rounded-circle bg-first text-white text-center font-size-lg mr-3 text-center d-flex align-items-center pt-3 justify-content-center">
                          <FontAwesomeIcon icon={['far', 'keyboard']} />
                        </div>
                        <div className="profile-pic-holder" >
                          <img className='card-img' src={this.state.winner.avatarUrl} alt="Profile pic" />
                        </div>
                      </div>
                      <div className="text-black-50"><h2>{this.state.winner.name}</h2></div>
                      <div className="display-3 text-center line-height-sm text-second text-center d-flex align-items-center pt-3 justify-content-center">
                        <FontAwesomeIcon
                          icon={['fas', 'arrow-down']}
                          className="font-size-sm text-danger mr-2"
                        />
                    Total Commits: {this.state.winner.contributionsCollection && this.state.winner.contributionsCollection.totalCommitContributions}
                      </div>
                      <div className="text-black-50 text-center opacity-6 pt-3">
                        <b>WINNER</b>
                      </div>
                    </Card>
                  </Grid> : <div></div>}
                </Grid>

                <Grid container spacing={6}>
                  <h2>Compare your stats to another Github user:</h2>
                  <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} search={this.state.search} />
                </Grid>
              </Fragment>
            </div>
          );
        }}
      </AuthContext.Consumer>

    )

  }
}

export default Battle;

Battle.contextType = AuthContext;
