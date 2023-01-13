import React from 'react'
import c from "./Template.module.css"

const Template = ({ title, description, price, image}) => {
  return (
    <div className={c.product_box}>
        <img src={image} alt="" />
        <h3 className={c.product_title}>
            {title}
        </h3>
        <p className={c.product_desc}>{description}</p>
        <button className={c.product_price}>{`${price} $`}</button>
    </div>
  )
}

export default Template