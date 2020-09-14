import React, { useState } from 'react';
import Cart from './component/Cart';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './component/Header';
import Carousel from './component/Carousel/CarouselProduct';
import CarouselProduct from './component/Carousel/CarouselProduct';
import { Card, CardDeck } from 'react-bootstrap';



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
        name: "lenovo",
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
          <nav class="navbar navbar-expand-md navbar-light bg-light">
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
          </nav>
        </div>
      </div>
      <br />




      <div className="row">
        <div className="col-lg-9 col-md-5">
          {/* <div className="row justify-content-around">
            {notebook.map(item =>
              <div className="col-lg-4">
                <div class="card">
                  <img src={item.image} class="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(item.price)}</p>
                    <button type="button" class="btn btn-success" onClick={() => addCart(item.id)}>Add to Cart</button>
                  </div>
                </div>
                <br />
              </div>
            )}
          </div> */}

          <CardDeck>
            {notebook.map(item =>
              <Card>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
      </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            )}
          </CardDeck>
        </div>
        <Cart
          addCart={addCart}
          cart={cart}
          value={value}
          plusAmount={plusAmount}
          minusAmount={minusAmount}
          deleteItem={deleteItem}
          checkValue={checkValue}
          amountTotal={amountTotal}
          amountProduct={amountProduct}
        />

      </div>
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

