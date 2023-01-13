import React from 'react'
import c from "./ProductInfo.module.css"
import { FiChevronLeft } from "react-icons/fi"
import { CgClose } from "react-icons/cg"
import { useDispatch } from 'react-redux'

const ProductInfo = ({ pizzaData, callback }) => {
    const dispatch = useDispatch()

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
                    <button onClick={() =>
                        dispatch({
                            type: "ADD_TO_CART",
                            data: pizzaData
                        })}
                    >Savatga qo'shish</button>
                </div>
                <div className={c.close_btn} onClick={() => callback(false)}>
                    <CgClose />
                </div>
            </div>
        </div>
    )
}

export default ProductInfo