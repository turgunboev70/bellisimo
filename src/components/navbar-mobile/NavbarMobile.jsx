import React, { useState } from 'react'
import c from "./NavbarMobile.module.css"
import { FiChevronDown, FiPhoneCall } from "react-icons/fi"
import { CgClose } from "react-icons/cg"

const NavbarMobile = ({callback, headerCity}) => {
    const [cityListActive, setCityListActive] = useState(false)
    const [cityName, setCityName] = useState("" || "Toshkent")
    const cities = ["Qo'qon", "Samarqand", "Buxoro", "Qarshi", "Farg'ona", "Sirdaryo", "Namangan"]

    return (
        <div className={c.navbar}>
            <div className={c.navbar_wrapper}>
                <div className={c.navbar_region} onClick={() => setCityListActive(!cityListActive)}>
                    <h2>{cityName}</h2>
                    <FiChevronDown />
                </div>
                <ul className={c.navbar_list} style={cityListActive ? { display: "flex" } : { display: "none" }}>
                    {cities.map((city, index) =>
                        <li key={index} className={c.navbar_item} onClick={() => {
                            setCityListActive(false)
                            setCityName(city)
                            headerCity(city)
                        }}>{city}</li>
                    )}
                </ul>
                <div className={c.navbar_call}>
                    <a href="tel: +998 94 124 55 59">
                        <FiPhoneCall className={c.call_text} />
                        <span className={c.call_text}>Bizga qo'ng'iroq qilish</span>
                    </a>
                </div>
                <button className={c.navbar_close} onClick={() => callback(false)}>
                    <CgClose />
                </button>
            </div>
        </div>
    )
}

export default NavbarMobile