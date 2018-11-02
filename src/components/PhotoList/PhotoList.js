import React from 'react';
import { Row, Col } from 'reactstrap';
import Photo from '../Photo/Photo';

const PhotoList = ({ photos }) =>  {

  const renderPhoto = (photo) => {
    return <Col key={photo.id} md="4"><Photo photo={photo} /></Col>;
  }

  return (
    <Row>
        { 
          photos.map((photo) => {
            return renderPhoto(photo);
          })
        }
    </Row>
  );
}

export default PhotoList;
