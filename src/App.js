import React, { useState } from 'react';
import Cart from './component/Cart';


function App() {
  const [cart, setCart] = useState([])
  const [value, setValue] = useState(0)
  const [notebook] = useState(
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
        image: "https://www.lenovo.com/medias/37-lenovo-thinkbook-15-hero.png?context=bWFzdGVyfHJvb3R8OTM5ODl8aW1hZ2UvcG5nfGg1NC9oNTIvMTA2NzQ5NDE3ODgxOTAucG5nfGM0NDY0YjA2OTE3YmM2ZDljMGZlNDFhZjBiOWFkMTZmZDZjOTkwZjUzNTgyMjIzNDRmMmFiOTk4MjM4YmJhYTI",
        price: 23000,
        name: "HP",
        amount: 1,

      }
    ]

  )



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


  return (
    <div className="App">
      {notebook.map(item =>
        <ul>
          <img src={item.image} style={{ width: "100px" }} />
          <li>{item.price}</li>
          <li>{item.name}</li>
          <button onClick={() => addCart(item.id)}>Add to Cart</button>
        </ul>
      )}
      <Cart
        addCart={addCart}
        cart={cart}
        value={value}
        plusAmount={plusAmount}
        minusAmount={minusAmount}
        deleteItem={deleteItem}
        checkValue={checkValue}
      />

    </div>
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

