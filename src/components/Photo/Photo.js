import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText } from 'reactstrap';
import './Photo.css';

class Photo extends Component {

  onClick = (url) => {
    window.open(url, '_blank');
  }

  render() {
    const photo = this.props.photo;
    return (
      <Card key={photo.id} className="mb-3 text-center">
        <CardImg 
          onClick={() => this.onClick(photo.pageURL)} 
          top 
          width="250px" 
          height="250px" 
          src={photo.webformatURL}
        />
        <CardBody>
          <CardText>{photo.user}</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default Photo;
