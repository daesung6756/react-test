import {NavLink} from 'react-router-dom'

const Util = (props) => {
    return (
        <ul className={`util-list ${props.resizeClass ?  props.resizeClass : ""}`}>
            <li><NavLink to="/login">로그인</NavLink></li>
            <li><a href="front/src/components/util.jsx">UTIL 2</a></li>
            <li><a href="front/src/components/util.jsx">UTIL 3</a></li>
        </ul>
    )
}
export default Util