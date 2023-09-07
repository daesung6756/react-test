import {Link, NavLink} from 'react-router-dom'

const Gnb = () => {
    return (
        <>
            <ul className="gnb-list">
                <li><NavLink to="/" className={({ isActive }) => (isActive ? "is-active" : "")}>Home</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => (isActive ? "is-active" : "")}>대학소개</NavLink></li>
                <li><NavLink to="/support" className={({ isActive }) => (isActive ? "is-active" : "")}>학생지원</NavLink></li>
                <li><NavLink to="/admission" className={({ isActive }) => (isActive ? "is-active" : "")}>입학</NavLink></li>
                <li><NavLink to="/department-info" className={({ isActive }) => (isActive ? "is-active" : "")}>대학</NavLink></li>
                <li><NavLink to="/graduate-school" className={({ isActive }) => (isActive ? "is-active" : "")}>대학원</NavLink></li>
                <li><NavLink to="/tr" className={({ isActive }) => (isActive ? "is-active" : "")}>신학/연구</NavLink></li>
                <li><NavLink to="/news" className={({ isActive }) => (isActive ? "is-active" : "")}>경일소식</NavLink></li>
            </ul>
        </>
    )
}

export default Gnb