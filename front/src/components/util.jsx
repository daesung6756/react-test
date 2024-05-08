

const Util = (props) => {
    return (
        <ul className={`util-list ${props.resizeClass ?  props.resizeClass : ""}`}>
            <li><a href="front/src/components/util.jsx">UTIL 1</a></li>
            <li><a href="front/src/components/util.jsx">UTIL 2</a></li>
            <li><a href="front/src/components/util.jsx">UTIL 3</a></li>
        </ul>
    )
}
export default Util