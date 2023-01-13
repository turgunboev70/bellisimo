import React from 'react'
import c from "./Kombo.module.css"
import data from "../../dummy-files/kombo.json"
import Template from '../combo-template/Template';

const Kombo = () => {

  return (
    <div className="container">
      <div className={c.kombo}>
        <h2 className={c.kombo_category}>Kombo</h2>
        <div className={c.kombo_wrapper}>
          {data.map(({ title, description, image, price }, index) =>
            <Template key={index} title={title} description={description} image={image} price={price} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Kombo