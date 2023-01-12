import "./index.css"

const Overlay = ({callback}) => {
    return (
        <div className="overlay" onClick={() => callback(false)}></div>
    )
}

export default Overlay