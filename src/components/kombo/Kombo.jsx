import React from 'react'
import c from "./Kombo.module.css"
import data from "../../dummy-files/kombo.json"
import Template from '../product-template/Template';

const Kombo = () => {

  return (
    <div className={c.kombo}>
        <div className={c.kombo_category}>Kombo</div>
        <div className={c.kombo_wrapper}>
            {data.map(({id, title, description, image, price}) => 
                <Template key={id} title={title} description={description} image={image} price={price} />
            )}
        </div>
    </div>
  )
}

export default Kombo