import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import image1 from "./maxresdefault.jpg";
import image2 from "./jackson-so-_t-l5FFH8VA-unsplash.jpg";
import image from "./markus-spiske-MI9-PY5cyNs-unsplash.jpg";
import image3 from "./css06.jpg";
import image4 from "./nick-karvounis-TkZYCXmrKK4-unsplash.jpg";
import image5 from "./html.jpg";
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
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>HTML - Hyper Text Markup Language (Gipermatnli belgilanishlar tili) deb nomlanadi.
            HTML dasturlash tili bo`lmagani uchun ham uning kodlariga buyruq emas, belgilanish sifatida qaraladi.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardDeck>
            </Col>
            <Col md="4">
            <CardDeck>
      <Card className="flex">
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>CSS (Cascading Steyle Sheets - sahifaning pog`onali shamoyili) - bu obyektlarga bezak va jilo berishga mo`ljallangan .
            CSS dan foydalaning tezkorlikni oshirishda ham  katta ro`l o`ynaydi.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardDeck>
            </Col>
            <Col md="4">
            <CardDeck>
      <Card className="flex">
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>JavaScript - dunyodagi eng ommalop va juda keng tatbiq etiladigan web dasturlash tilidir.
            JavaScript tilida tuzilgan dasturlar HTML hujjatining ichiga joylashtirilib ular bilan birga uzatiladi. 
          </CardText>
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