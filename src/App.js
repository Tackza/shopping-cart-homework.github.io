import React, { useState } from 'react';
import Cart from './component/Cart';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './component/Header';
import Carousel from './component/Carousel/CarouselProduct';
import CarouselProduct from './component/Carousel/CarouselProduct';
import { Button, Card, CardDeck, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import './App.css'
import { MDBView } from 'mdbreact';



function App() {
  const [cart, setCart] = useState([])
  const [amountTotal, setAmountTotal] = useState(0)
  const [value, setValue] = useState(0)
  const [notebook, setNotebook] = useState(
    [
      {
        id: 1,
        image: "https://cf.shopee.co.th/file/e273ae9bb461a8d4469c86921e9b52ec",
        price: 20000,
        name: "Macbook",
        amount: 1,
        detail: "APPLE MACBOOK PRO 13.3-INCH WITH TOUCH BAR: I5/2.4GHZ QC/8GB/512GB/SPACE"

      }, {
        id: 2,
        image: "https://cf.shopee.co.th/file/cef1425da945b2b0128ddebed6c53a38",
        price: 22000,
        name: "Asus",
        amount: 1,
        detail: "Asus Notebook ROG Zephyrus G14 GA401II-HE105T White (A)",
        discount: 30,


      }, {
        id: 3,
        image: "https://cf.shopee.co.th/file/1721fdf1a127540e94a7f4f36d660440",
        price: 23000,
        name: "HP",
        amount: 1,
        detail: "HP Notebook Pavilion 15-cs3147TX Silver",
        discount: 19,


      }
      , {
        id: 4,
        image: "https://cf.shopee.co.th/file/dee416ef9d48c04bc02313f7efdc8f65",
        price: 29900,
        name: "lenovo",
        amount: 1,
        detail: "Lenovo Notebook LEGION5 15ARH05-82B50045TA Black (A)",
        discount: 10,


      }
      , {
        id: 5,
        image: "https://cf.shopee.co.th/file/98ccb8a84db0db24141a4396fa2a59ed",
        price: 29900,
        name: "Msi",
        amount: 1,
        detail: "MSI Notebook GL65 Leopard 10SCSR-058TH Black"


      }
      , {
        id: 6,
        image: "https://cf.shopee.co.th/file/89dffaea332d8a6713fb76fc431f5aa2",
        price: 22990,
        name: "Acer",
        amount: 1,
        detail: "Acer Notebook SWIFT SF514-54GT-5680 White",
        discount: 25,


      }
    ]

  )
  const [first] = useState([
    {
      id: 1,
      image: "https://cf.shopee.co.th/file/e273ae9bb461a8d4469c86921e9b52ec",
      price: 20000,
      name: "Macbook",
      amount: 1,

    }, {
      id: 2,
      image: "https://cf.shopee.co.th/file/cef1425da945b2b0128ddebed6c53a38",
      price: 22000,
      name: "Asus",
      amount: 1,

    }, {
      id: 3,
      image: "https://cf.shopee.co.th/file/1721fdf1a127540e94a7f4f36d660440",
      price: 23000,
      name: "HP",
      amount: 1,

    }
    , {
      id: 4,
      image: "https://cf.shopee.co.th/file/dee416ef9d48c04bc02313f7efdc8f65",
      price: 29900,
      name: "Lenovo",
      amount: 1,

    }
    , {
      id: 5,
      image: "https://cf.shopee.co.th/file/98ccb8a84db0db24141a4396fa2a59ed",
      price: 29900,
      name: "Msi",
      amount: 1,

    }
    , {
      id: 6,
      image: "https://cf.shopee.co.th/file/89dffaea332d8a6713fb76fc431f5aa2",
      price: 22990,
      name: "Acer",
      amount: 1,

    }
  ])



  const addCart = (id) => {
    const targetProduct = notebook.filter(item => item.id === id)
    const test = [...cart].filter(item => item.name === targetProduct[0].name)
    console.log(test)
    console.log(test.length)
    if (test.length > 0) {
      checkProductName(test, cart, id, setCart, targetProduct);
    } else {
      setCart([...cart, targetProduct[0]])
    }

  }

  const plusAmount = (id) => {
    const targetChange = [...cart]
    const targetProduct = targetChange.findIndex(item => item.id === id)
    targetChange[targetProduct].amount = targetChange[targetProduct].amount + 1
    setCart(targetChange)
  }

  const minusAmount = (id) => {
    const targetChange = [...cart]
    const targetProduct = targetChange.findIndex(item => item.id === id)
    targetChange[targetProduct].amount = targetChange[targetProduct].amount - 1
    setCart(targetChange)
  }

  const deleteItem = (id) => {
    const targetChange = [...cart]
    const targetProduct = targetChange.filter(item => item.id !== id)
    setCart(targetProduct)
  }

  const checkValue = () => {
    const newArray = [...cart]
    const targetProduct = newArray.map(item => item.amount * item.price)
    const result = targetProduct.reduce((sum, number) => {
      return sum + number
    }, 0)
    setValue(result)
  }

  const selectProduct = (value) => {
    setNotebook(first)
    const targetProduct = first.filter(item => item.name === value)
    setNotebook(targetProduct)
  }
  const firstAllProduct = () => {
    setNotebook(first)
  }

  const amountProduct = () => {
    const newArray = [...cart]
    const targetProduct = newArray.map(item => item.amount)
    const countProduct = targetProduct.reduce((sum, number) => {
      return sum + number
    }, 0)
    setAmountTotal(countProduct)
  }


  return (
    <div class="container-fluid">
      <div className="row">
        <div className="col">
          <Header />
          <CarouselProduct />
          {/* <nav class="navbar navbar-expand-md navbar-light bg-light">
            <a class="navbar-brand" type="button" onClick={firstAllProduct}>Tack IT</a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select Product
        </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" value="Macbook" onClick={() => selectProduct("Macbook")}>Macbook</a>
                    <a class="dropdown-item" value="Asus" onClick={() => selectProduct("Asus")}>Asus</a>
                    <a class="dropdown-item" value="Msi" onClick={() => selectProduct("Msi")}>Msi</a>
                    <a class="dropdown-item" value="Acer" onClick={() => selectProduct("Acer")}>Acer</a>
                    <a class="dropdown-item" value="Hp" onClick={() => selectProduct("HP")}>Hp</a>
                    <a class="dropdown-item" value="Lenovo" onClick={() => selectProduct("Lenovo")}>Lenovo</a>
                  </div>
                </li>

              </ul>

            </div>
          </nav> */}
        </div>
      </div>
      <br />


      {/* ================= Recomment ============== */}

      <Row className="text-recommend">
        <Col>Recomment</Col>
      </Row>


      {/* ================= Product card ============== */}

      <Row className="justify-content-md-center">
        <Col >
          <CardDeck>
            {notebook.map(item =>
              <Col md={3}>
                <Card>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body className="card-body-product">
                    <Row>
                      <Col>
                        <Card.Title>{item.name}</Card.Title>
                      </Col>
                      <Col>
                        <OverlayTrigger
                          overlay={
                            <Tooltip >
                              <img src="https://www.bnn.in.th/pub/media//amasty/webp/amasty/shopby/option_images/Kbank_2x_6.webp" />
                            </Tooltip>
                          }
                        >
                          <div class="text-right" variant="secondary">ผ่อนชำระ</div>
                        </OverlayTrigger>
                      </Col>
                    </Row>

                    <Row >
                      <Col >
                        <Card.Text className="detail-product">
                          <b>{item.detail}</b>
                        </Card.Text>
                      </Col>
                    </Row>
                    <Row className="text-order-price">
                      <Col className="order-now">
                        Order Now
                      </Col>
                      <Col className="price">
                        <div class="text-right">Price</div>
                        <div class="text-right price-product">{Intl.NumberFormat().format(item.price)}.-</div>
                        <div class="text-right" >
                          <Row className="discount-product">
                            <Col>
                              {item.discount ? <s>{Intl.NumberFormat().format(Math.ceil(item.price + (item.price * (item.discount) / 100)))}</s> : item.discount}
                            </Col>
                            <Col>
                              {item.discount ? `-${item.discount}%` : item.discount}
                            </Col>
                          </Row>
                        </div>



                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <Button size="lg" variant="danger" block onClick={() => addCart(item.id)}>Add to Cart</Button>
                  </Card.Footer>
                </Card>
              </Col>
            )}
          </CardDeck>
        </Col>
        {/* <Cart
          addCart={addCart}
          cart={cart}
          value={value}
          plusAmount={plusAmount}
          minusAmount={minusAmount}
          deleteItem={deleteItem}
          checkValue={checkValue}
          amountTotal={amountTotal}
          amountProduct={amountProduct}
        /> */}

      </Row>
    </div >
  );
}

export default App;

function checkProductName(test, cart, id, setCart, targetProduct) {
  if (test) {
    const targetChange = [...cart];
    const targetProduct = targetChange.findIndex(item => item.id === id);
    targetChange[targetProduct].amount = targetChange[targetProduct].amount + 1;
    setCart(targetChange);
  }
  else {
    setCart([...cart, targetProduct[0]]);
  }
}

