import React, {useRef} from 'react'
import c from "./FixedNavbar.module.css"
import logo from "../../assets/images/icon.webp"

const Catalog = () => {
    const logoVisible = useRef()
    const fixedCatalog = useRef()
    window.addEventListener("scroll", function() {
        fixedCatalog?.current?.classList.toggle(`${c.sticky}`, this.window.scrollY > 230)
    })

    return (
        <div className={c.catalog} ref={fixedCatalog}>
            <div className="container">
                <div className={c.catalog_wrapper}>
                    <div className={c.catalog_logo} ref={logoVisible}>
                        <img src={logo} alt="loading..." />
                    </div>
                    <div className={c.fixed_cart}>
                        <div className={c.cart_box}>
                            Savatchada 
                            <span> | 0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalog