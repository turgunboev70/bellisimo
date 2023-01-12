import React from 'react'
import c from "./Cart.module.css"
import image from "../../assets/images/empty-cart-icon.svg"
import { useSelector } from 'react-redux'

const Cart = () => {
    const selector = useSelector(state => state)
    console.log(selector);
  return (
    <div className={c.cart}>
        <div className={c.cart_empty}>
            <img src={image} alt="loading..." />
            <h2>Hozircha sizning savatchangiz bo'sh 😕</h2>
            <button>Menyuni kurish</button>
        </div>
        <div className={c.cart_box}>
            hello
        </div>
    </div>
  )
}

export default Cart