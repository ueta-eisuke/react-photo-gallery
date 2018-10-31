import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Footer extends Component {

  getYear = () =>  {
    return new Date().getFullYear();
  }

  render() {
    return (
      <footer 
        id="footer" 
        className='pt-3 text-center'>
        <Container>
          <Row>
            <Col>
              <p className="small">Kace Gallery created by kace, Copyright &copy; {this.getYear()}</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
