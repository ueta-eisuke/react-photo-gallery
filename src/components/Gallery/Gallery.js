import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PhotoList from '../PhotoList/PhotoList';
import SearchBox from '../SearchBox/SearchBox';
import './Gallery.css';

class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = { photos: [] }
  }

  componentDidMount() {
    this.search('');
  }

  search = (keyword) => {
    const param = { method: 'GET' };
    const url = 'https://pixabay.com/api/?key=' + process.env.REACT_APP_DEV_API_KEY + '&q=' + encodeURIComponent(keyword.toLowerCase()) + '&image_type=photo&min_width=200&min_height=200';
    fetch(url, param)
      .then(response => response.json())
      .then(data => {
        if (data.hits.length > 0) {
          this.setState({ photos: data.hits });
        } else {
          this.setState({ photos: [] });
        }
      })
      .catch(console.log);
  }

  render() {
    return (
        <Container className="gallery-container">
          <Row className="mb-5">
            <Col md={{ size: 6, offset: 3 }}>
              <SearchBox search={this.search} />  
            </Col>
          </Row>
          <PhotoList photos={this.state.photos} />
        </Container>
    );
  }
}

export default Gallery;
