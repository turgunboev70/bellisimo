import React, { useState } from 'react'
import c from "./Header.module.css"
import { CgMenu } from "react-icons/cg"
import { FiShoppingCart, FiPhoneCall } from "react-icons/fi"
import logo from "../../assets/images/logo-winter.svg"
import halal from "../../assets/images/halal.webp"
import { FaStar } from "react-icons/fa"

const Header = () => {
    const [delivery, setDelivery] = useState(true)

    return (
        <header className={c.header}>
            <div className="container">

                <div className={c.header_wrapper}>
                    <div className={c.header_hamburger}>
                        <CgMenu />
                    </div>
                    <div className={c.header_order}>
                        <div className={c.deliver_order} onClick={() => setDelivery(true)} style={delivery ? { backgroundColor: "#fff", boxShadow: "0px 3px 6px 1px #bcc5c2" } : { backgroundColor: "transparent", color: "#828282" }}>Yetkazib berish</div>
                        <div className={c.deliver_order} onClick={() => setDelivery(false)} style={!delivery ? { backgroundColor: "#fff", boxShadow: "0px 3px 6px 1px #bcc5c2" } : { backgroundColor: "transparent", color: "#828282" }}>Olib ketish</div>
                    </div>
                    <div className={c.header_cart}>
                        <FiShoppingCart />
                        <span>0</span>
                    </div>
                </div>
                <div className={c.header_desktop}>
                    <div className={c.header_logo}>
                        <a href="/">
                            <img src={logo} alt="loading..." />
                        </a>
                    </div>
                    <div className={c.header_location}>
                        <h3 className={c.header_city}>Shahar:
                            <span>Toshkent</span>
                        </h3>
                        <div className={c.header_rating}>
                            <FaStar className={c.header_ratingIcon} />
                            <h3>4.72/5</h3>
                        </div>
                    </div>
                    <div className={c.header_call}>
                        <div className={c.header_number}>
                            <FiPhoneCall className={c.header_callIcon} />
                            <span>1174</span>
                        </div>
                        <div className={c.header_guaranteeText}>
                            45 daqiqada tekin yetkazib beramiz yoki pitsa bepul
                        </div>
                    </div>
                    <div className={c.header_halal}>
                        <img src={halal} alt="loading..." />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header