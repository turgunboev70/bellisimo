import React, { useState } from 'react'
import ProductInfo from '../product-info/ProductInfo'
import c from "../pizza/Pizza.module.css"
import Overlay from "../../utils/index"

const PizzaTemplate = ({ pizza }) => {
    const [productInfoActive, setProductInfoActive] = useState(false)
    
    return (
        <>
            <div className={c.pizza_box} onClick={() => setProductInfoActive(true)}>
                <div className={c.pizza_img}>
                    <img src={pizza.image} alt="loading..." />
                </div>
                <div className={c.pizza_desc}>
                    <div className={c.pizza_title}>
                        <h3 className={c.pizza_name}>{pizza.title}</h3>
                        <p>{pizza.description}</p>
                    </div>
                    <button className={c.pizza_price}>
                        {`${pizza.price} $`}
                    </button>
                </div>
            </div>
            {productInfoActive && <ProductInfo pizzaData={pizza} callback={setProductInfoActive}/>}
            {productInfoActive && <Overlay callback={setProductInfoActive}/>}
        </>
    )
}

export default PizzaTemplate