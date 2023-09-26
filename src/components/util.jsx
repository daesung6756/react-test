

const Util = (props) => {
    return (
        <ul className={`util-list ${props.resizeClass ?  props.resizeClass : ""}`}>
            <li><a href="">UTIL 1</a></li>
            <li><a href="">UTIL 2</a></li>
            <li><a href="">UTIL 3</a></li>
        </ul>
    )
}
export default Util