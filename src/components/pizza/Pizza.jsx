import React, { useState } from 'react'
import c from "./Pizza.module.css"
import data from "../../dummy-files/pizza.json"
import ProductInfo from '../product-info/ProductInfo'
import Overlay from '../../utils'

const Pizza = () => {

    const [productInfoActive, setProductInfoActive] = useState(false)
    const [pizzaData, setPizzaData] = useState(null)

    if (productInfoActive) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "auto"
    }

    return (
        <>
            <div className="container">
                <div className={c.pizza}>
                    <div className={c.pizza_text}>Pitsa</div>
                    <div className={c.pizza_wrapper}>
                        {data.map(pizza =>
                            <>
                                <div className={c.pizza_box} onClick={() => {
                                    setProductInfoActive(true)
                                    setPizzaData(pizza)
                                }}>
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
                            </>
                        )}
                    </div>
                </div>
            </div>
            {productInfoActive && <ProductInfo pizzaData={pizzaData} callback={setProductInfoActive}/>}
            {productInfoActive && <Overlay callback={setProductInfoActive}/>}
        </>
    )
}

export default Pizza