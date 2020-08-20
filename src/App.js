import React, { useState } from 'react';
import Cart from './component/Cart';


function App() {
  const [notebook, setNotebook] = useState(
    [{
      image: "https://cf.shopee.co.th/file/e273ae9bb461a8d4469c86921e9b52ec",
      price: 20000,
      name: "Macbook",
      id: 1
    }, {
      image: "https://cf.shopee.co.th/file/cef1425da945b2b0128ddebed6c53a38",
      price: 22000,
      name: "Asus",
      id: 2
    }, {
      image: "https://cf.shopee.co.th/file/1721fdf1a127540e94a7f4f36d660440",
      price: 23000,
      name: "HP",
      id: 3
    }])

  const [state, setState] = useState()

  const addCart = (id) = {
    console.log(id)
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
      <Cart addCart={addCart} item={item} />
    </div>
  );
}

export default App;
