import React, { useState } from 'react'
import c from "./Footer.module.css"
import data from "../../dummy-files/footer.json"
import { FaInstagram, FaLinkedin, FaTelegramPlane } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className={c.footer}>
            <div className="container">
                <div className={c.footer_wrapper}>
                    {data.map(({ text, inner, images }, index) =>
                        <div className={c.footer_box} key={index}>
                            <h2>{text}</h2>
                            <ul className={c.footer_list}>
                                {inner ?
                                    inner.map((text, index) =>
                                        <li className={c.footer_inner} key={index}>
                                            {text}
                                        </li>
                                    )
                                    :
                                    images.map(({ image, logo }, index) =>
                                        <li className={c.footer_image} key={index}>
                                            <img src={image} alt="" style={logo ? { width: "80px", height: "23px" } : { width: "40px", height: "53px" }} />
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    )}
                </div>
                <div className={c.footer_bottom}>
                    <div className={c.footer_icon}>
                        <a href="https://www.instagram.com/bellissimouz/" target={'blank'}>
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/in/hikmatillo-turg-unboyev-322337254/">
                            <FaLinkedin />
                        </a>
                        <a href="https://t.me/turgunboev_70">
                            <FaTelegramPlane />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer