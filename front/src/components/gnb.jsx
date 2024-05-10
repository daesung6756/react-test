import {NavLink} from 'react-router-dom'

const Gnb = (props) => {
    return (
        <>
            <ul className={`gnb-list ${props.resizeClass ?  props.resizeClass : ""}`}>
                <li><NavLink to="/" className={({ isActive }) => (isActive ? "is-active" : "")}>Home</NavLink></li>
                <li><NavLink to="/experience" className={({ isActive }) => (isActive ? "is-active" : "")}>Experience</NavLink></li>
                <li><NavLink to="/favorite" className={({ isActive }) => (isActive ? "is-active" : "")}>Favorite</NavLink></li>
                <li><NavLink to="/history" className={({ isActive }) => (isActive ? "is-active" : "")}>History</NavLink></li>
            </ul>
        </>
    )
}

export default Gnb