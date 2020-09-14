import React from 'react'


function Cart(props) {
    return (
        <div className="col">
            <div class="card">
                <div class="card-body list-group-item-secondary">
                    <div onClick={props.checkValue()} onChange={props.amountProduct()}>Subtotal ({props.amountTotal} item) : {Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(props.value)}</div>
                </div>
            </div>

            {props.cart.map(item =>
                <ul class="list-group list-inline">
                    <li class="list-inline-item ">
                        <img src={item.image} class="card-img w-100" />
                        <h5 class="card-title list-inline-item">{item.name}</h5>
                        <p class="card-text ">price : {Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(item.price)}</p>
                        <button type="button" class="btn btn-sm btn-outline-info list-inline-item" onClick={() => props.minusAmount(item.id)} disabled={item.amount == 1 ? true : null}>-</button>
                        <p class="card-text list-inline-item">Qty : {item.amount}</p>
                        <button type="button" class="btn btn-sm btn-outline-info list-inline-item" onClick={() => props.plusAmount(item.id)}>+</button>
                        <br />
                        <button type="button" class="btn btn-sm btn-danger" onClick={() => props.deleteItem(item.id)}>Delete</button>
                    </li>
                    <br />
                    <br />
                </ul>
            )
            }
        </div>
    )
}

export default Cart
