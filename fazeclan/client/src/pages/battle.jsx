import React, { Component } from 'react';
import '../App.css';
import Wrapper from '../components/Layout/Wrapper'

class Battle extends Component {
  render() {
    return (
        <Wrapper>
          <div className="container">
            <div>Hello</div>
          </div>
          { console.log('gitbattle') }
        </Wrapper>
    );
  }
}

export default Battle;
