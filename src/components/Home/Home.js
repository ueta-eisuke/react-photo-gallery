import React, { Component } from 'react';
import { Button, Container } from 'reactstrap';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Container className="text-center text-white">
          <h1>MUST WATCH</h1>
          <p>There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...</p>
          <Button 
            color="default"
            className="btn-ghost btn-white mt-5"
            onClick={() => this.props.onRouteChange('gallery')}
          >
            More Detail
          </Button>
        </Container>
      </div>
    );
  }
}

export default Home;
