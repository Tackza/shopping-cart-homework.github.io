import React, { useState } from 'react'
import { Carousel, Col, Container, Nav, Row } from 'react-bootstrap'
import './carousel.css'
import Carousel1  from 'react-multi-carousel';
import WithStyles   from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function CarouselProduct() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    return (
        <Container fluid>
            <Row className="tab-bar" >
                <Col >
                    <Nav variant="pills" defaultActiveKey="/home" >
                        <Nav.Item>
                            <Nav.Link href="/home">หมวกหมู่สินค้า</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1" >Promotion</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Brand</Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                            <Nav.Link eventKey="link-3">Review</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col>
                    <Nav className="justify-content-end">
                        <Nav.Item >
                            <Nav.Link eventKey="link-4">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>

            {/*================= carousel ========================*/}
            <Row className="carousel-promotion">
                <Col>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://itcityonline.com/storage/home-hero/82eCcMgcnhAAySStPxzGpFqICksn8BvtS3wmrIMu.jpeg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://itcityonline.com/storage/home-hero/Sro9anGFKcGoBvtA9D7o07ynJxi1UB3EAS8rlXyM.jpeg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://itcityonline.com/storage/home-hero/ABNdYn0oArMsmyyhZAjztpadDiWbV96T8FT4ZnBV.jpeg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://itcityonline.com/storage/home-hero/d373AEMSLgNgybkVdiCbZvXCculcLWQf1wKXebke.jpeg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://itcityonline.com/storage/home-hero/fECCZdezSeFhnWkcjp6X4IEURGbGyDviAEmgfdx2.jpeg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>

                </Col>
            </Row>


            {/* ============= promotion =============== */}

            <Row className="pic-promotion justify-content-md-center">

                <Col xs={12} md={4}>
                    <img src="https://itcityonline.com/storage/home-search-categories/EfhIbdZdRkFRHzIyn96wmToENWJ2H5xfHlmDHgEo.jpeg" alt="test" />
                </Col>
                <Col xs={12} md={4}>
                    <img src="https://itcityonline.com/storage/home-search-categories/JoSM6hNFGJGT4t2DF1JRxQX4DAFaYOLiIp8HpbEr.jpeg" alt="test" />
                </Col>
                <Col xs={12} md={4}>
                    <img src="https://itcityonline.com/storage/home-search-categories/C3iLRESUGBD7ey63aPQio16xccLhhuAWgtNRxQHw.jpeg" alt="test" />
                </Col>

            </Row>

            {/* ================= carousel small ================== */}

           

        </Container>
    )
}

export default CarouselProduct
