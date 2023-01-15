import "./index.css"

const Overlay = ({callback, confirmation, combo}) => {
    return (
        <div className="overlay" onClick={() => callback(false)} style={confirmation || combo ? {zIndex : "5"} : null}></div>
    )
}

export default Overlay