import React from 'react'
import c from "./Pizza.module.css"
import data from "../../dummy-files/pizza.json"

const Pizza = () => {
    return (
        <div className="container">
            <div className={c.pizza}>
                <div className={c.pizza_text}>Pitsa</div>
                <div className={c.pizza_wrapper}>
                    {data.map(pizza =>
                        <div className={c.pizza_box}>
                            <div className={c.pizza_img}>
                                <img src={pizza.image} alt="loading..."/>
                            </div>
                            <div className={c.pizza_desc}>
                                <div className={c.pizza_title}>
                                    <h3>{pizza.title}</h3>
                                    <p>{pizza.description}</p>
                                </div>
                                <button className={c.pizza_price}>
                                    {`${pizza.price} $`}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Pizza