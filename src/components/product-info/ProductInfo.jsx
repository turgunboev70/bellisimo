import React from 'react'
import c from "./ProductInfo.module.css"
import { FiChevronLeft } from "react-icons/fi"

const ProductInfo = ({ pizzaData, callback }) => {
    return (
        <div className={c.productInfo}>
            <button className={c.info_close} onClick={() => callback(false)}>
                <FiChevronLeft />
            </button>
            <div className={c.info_image}>
                <img src={pizzaData?.image} alt="" />
            </div>
            <div className={c.info_text}>
                <div className={c.info_wrapper}>
                    <div className={c.info_title}>{pizzaData?.title}</div>
                    <p className={c.info_desc}>
                        {pizzaData?.description}
                    </p>
                </div>
                <div className={c.info_btn}>
                    <span>{`${pizzaData?.price} $`}</span>
                    <button>Savatga qo'shish</button>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo