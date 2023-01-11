import React from 'react'
import c from "./Footer.module.css"
import data from "../../dummy-files/footer.json"

const Footer = () => {
    return (
        <footer className={c.footer}>
            <div className="container">
                <div className={c.footer_wrapper}>
                    {data.map(({ text, inner, images }) =>
                        <div className={c.footer_box}>
                            <h2>{text}</h2>
                            <ul className={c.footer_list}>
                                {inner ?
                                    inner.map(text =>
                                        <li className={c.footer_inner}>
                                            {text}
                                        </li>
                                    )
                                    :
                                    images.map(({image, logo}) => 
                                        <li className={c.footer_image}>
                                            <img src={image} alt="" style={logo ? {width : "80px", height : "23px"} : {width : "40px", height : "53px"}}/>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    )}
                </div>
                <div className={c.footer_bottom}>

                </div>
            </div>
        </footer>
    )
}

export default Footer