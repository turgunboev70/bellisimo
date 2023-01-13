import React, {useRef, useState} from 'react'
import c from "./FixedNavbar.module.css"
import logo from "../../assets/images/icon.webp"
import Cart from '../cart/Cart'
import { useSelector } from 'react-redux'
import Overlay from "../../utils/index"

const Catalog = () => {
    const selector = useSelector(state => state)
    const logoVisible = useRef()
    const fixedCatalog = useRef()
    const [cartActive, setCartActive] = useState(false)
    window.addEventListener("scroll", function() {
        fixedCatalog?.current?.classList.toggle(`${c.sticky}`, this.window.scrollY > 230)
    })

    if(cartActive) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "auto"
    }
    
    return (
        <>
        <div className={c.catalog} ref={fixedCatalog}>
            <div className="container">
                <div className={c.catalog_wrapper}>
                    <div className={c.catalog_logo} ref={logoVisible}>
                        <img src={logo} alt="loading..." />
                    </div>
                    <div className={c.fixed_cart}>
                        <div className={c.cart_box} onClick={() => setCartActive(true)}>
                            Savatchada 
                            <span> | {selector?.cart?.cart?.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {cartActive && <Cart callback={setCartActive}/>}
        {cartActive && <Overlay callback={setCartActive}/>}
        </>
    )
}

export default Catalog