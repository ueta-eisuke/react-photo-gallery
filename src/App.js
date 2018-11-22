import React, { Component } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {

  // test2

  constructor(props) {
    super(props);
    this.state = { route: 'home' };
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  }

  render() {
    return (
      <div className="app">
        <Header />
        { this.state.route === 'gallery' ?
          <Gallery /> :
          <Home onRouteChange={this.onRouteChange} />
        }
        <Footer />
      </div>
    );
  }
}

export default App;
