import React from 'react'
import c from "./Template.module.css"

const Template = ({id, title, description, price, image}) => {
  return (
    <div className={c.product_box} key={id}>
        <img src={image} alt="" />
        <h1 className={c.product_title}>
            {title}
        </h1>
        <p className={c.product_desc}>{description}</p>
        <button className={c.product_price}>{price}</button>
    </div>
  )
}

export default Template