import React, { useState } from 'react'
import ComboSet from '../kombo-set/ComboSet'
import c from "./Template.module.css"

const Template = ({ title, description, price, image, count}) => {

  const [komboSetActive, setKomboSetActive] = useState(false)

  if(komboSetActive) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }

  return (
    <>
    <div className={c.product_box} onClick={() => setKomboSetActive(true)}>
        <img src={image} alt="" />
        <h3 className={c.product_title}>
            {title}
        </h3>
        <p className={c.product_desc}>{description}</p>
        <button className={c.product_price}>{`${price} $`}</button>
    </div>
    {komboSetActive && <ComboSet title={title} description={description} price={price} image={image} count={count} callback={setKomboSetActive}/>}
    </>
  )
}

export default Template