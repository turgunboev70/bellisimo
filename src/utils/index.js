import "./index.css"

const Overlay = ({callback, confirmation}) => {
    return (
        <div className="overlay" onClick={() => callback(false)} style={confirmation ? {zIndex : "5"} : null}></div>
    )
}

export default Overlay