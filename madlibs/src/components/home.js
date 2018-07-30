import React, { Component } from 'react';

import Header from './header';
import Card from './card';

class Home extends Component {
  render() {
    return (
      <div className="home">
        {Header() }
        <Card />
      </div>
    );
  }
}

//things to fix
//placeholder, gray and green number labels, generate labels, content labels, other shit, idk

export default Home;