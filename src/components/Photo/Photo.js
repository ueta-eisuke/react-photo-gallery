import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import './Photo.css';

const MAX_TEXT_SIZE = 20;

class Photo extends Component {

  onClick = (url) => {
    window.open(url, '_blank');
  }

  ajustText = (text) => {
    return text.length > MAX_TEXT_SIZE ? 
      text.substring(0, MAX_TEXT_SIZE - 1) : text;
  }

  render() {
    const photo = this.props.photo;
    const tags = photo.tags.length > MAX_TEXT_SIZE ? 
      photo.tags.substring(0, MAX_TEXT_SIZE - 1) : photo.tags;

    return (
      <Card key={photo.id} className="mb-3">
        <CardImg 
          onClick={() => this.onClick(photo.pageURL)} 
          top 
          width="250px" 
          height="250px" 
          src={photo.webformatURL}
        />
        <CardBody>
          <CardTitle>{photo.user}</CardTitle>
          <CardText>{tags}</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default Photo;
