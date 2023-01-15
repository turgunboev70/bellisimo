import React from 'react'
import c from "./ComboOption.module.css"
import data from "../../dummy-files/discount-option.json"

const ComboOption = ({ firstPizza, secondPizza, id, callback }) => {
    return (
        <div className={c.combo_option}>
            <h2>Pizza</h2>
            <div className={c.option}>
                {data.map((pizza) =>
                    <div key={pizza.id} className={c.pizza_box} onClick={() => {
                        id === 1 ? firstPizza(pizza) : secondPizza(pizza)
                        callback(false)
                    }}>
                        <img src={pizza.image} alt="loading..." width={157} height={157} />
                        <h2>{pizza.title}</h2>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ComboOption