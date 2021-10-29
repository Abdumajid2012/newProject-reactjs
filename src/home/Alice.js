import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import image1 from "./freestocks-Y9mWkERHYCU-unsplash.jpg";
import image2 from "./jackson-so-_t-l5FFH8VA-unsplash.jpg";
import image from "./markus-spiske-MI9-PY5cyNs-unsplash.jpg";
import image3 from "./nathan-dumlao-EdULZpOKsUE-unsplash.jpg";
import image4 from "./nick-karvounis-TkZYCXmrKK4-unsplash.jpg";
import image5 from "./oziel-gomez-L8-0SAy-aoQ-unsplash.jpg";
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Container, Col, Row
  } from 'reactstrap';





const handleDragStart = (e) => e.preventDefault();

const items = [
    <img className="img" src={image3} onDragStart={handleDragStart} />,
  <img className="img" src={image1} onDragStart={handleDragStart} />,
  <img className="img" src={image2} onDragStart={handleDragStart} />,
  <img className="img" src={image4} onDragStart={handleDragStart} />,
  <img className="img" src={image5} onDragStart={handleDragStart} />,
  <img className="img" src={image} onDragStart={handleDragStart} />
];


const Alice = () => {


    return (
        <div>
             <AliceCarousel autoPlay={true} autoPlayInterval={5000} mouseTracking items={items} />

             {/* cardlatr */}
             <Container >
        <Row>
            <Col md="4">
            <CardDeck>
      <Card className="flex">
        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardDeck>
            </Col>
            <Col md="4">
            <CardDeck>
      <Card className="flex">
        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardDeck>
            </Col>
            <Col md="4">
            <CardDeck>
      <Card className="flex">
        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardDeck>
            </Col>
        </Row>
      </Container>

        </div>
    );
};


export default Alice;