import React, { useState } from 'react'
import c from "./ComboSet.module.css"
import { FiChevronRight } from "react-icons/fi"

const ComboSet = ({ title, description, price, image }) => {
    const [firstDiscountBox, setFirstDiscountBox] = useState(false)
    const [secondDiscountBox, setSecondDiscountBox] = useState(false)
    const [allItems, setAllItems] = useState(null)

    return (
        <div className={c.combot_set}>
            <div className={c.combo_wrapper}>
                <div className={c.set_image}>
                    <img src={image} alt="loading..." />
                    <div className={c.set_text}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                </div>
                <div className={c.set_menu}>
                    <div>
                        <div className={c.set_box} onClick={() => setFirstDiscountBox(true)}>
                            <div className={c.set_right}>
                                <h4>Pizza 1</h4>
                                <p>Tanlash</p>
                            </div>
                            <span>
                                <FiChevronRight />
                            </span>
                        </div>
                        <div className={c.set_box} onClick={() => setSecondDiscountBox(true)}>
                            <div className={c.set_right}>
                                <h4>Pizza 1</h4>
                                <p>Tanlash</p>
                            </div>
                            <span>
                                <FiChevronRight />
                            </span>
                        </div>
                    </div>
                    <div className={c.set_btn}>
                        <div className={c.set_price}>
                            <p>Umumiy narx</p>
                            <span>{`${price} $`}</span>
                        </div>
                        <button>Qo'shish</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComboSet