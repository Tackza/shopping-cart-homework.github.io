import React from 'react'


function Cart(props) {



    return (
        <div>
            <p>test</p>
            {props.cart.map(item =>
                <ul>
                    <li key={item.id}><img src={item.image} style={{ width: "40px" }} /></li>
                    <li>{item.name}</li>
                    <li>{item.price}</li>
                    <li><button onClick={() => props.minusAmount(item.id)} disabled={item.amount == 1 ? true : null}>-</button></li>
                    <li>{item.amount}</li>
                    <li><button onClick={() => props.plusAmount(item.id)}>+</button></li>
                    <li><button onClick={() => props.deleteItem(item.id)}>Delete</button></li>
                </ul>
            )}
            <div onClick={props.checkValue()}>{props.value}</div>
            
            {/* {props.cart.forEach(item => {
                            value += (item.price * item.amount)
                        })} */}



        </div>
    )
}

export default Cart
