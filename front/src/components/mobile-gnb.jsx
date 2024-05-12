import {NavLink} from 'react-router-dom'

import '../assets/css/component/mobile-gnb.css'

import xCrossWhiteIcon from "../assets/images/icons/svg/icon-circle-cross-white.svg"

const MobileGnb = ({resizeClass, getNavStatus}) => {

    const mobileGnbClose = () => {
        getNavStatus(false)
    }

    return (
        <>
            <div className={`mobile-gnb ${resizeClass ? resizeClass : "" }`}>
                <div className="btn-wrap"><button type="button" onClick={mobileGnbClose}><img src={xCrossWhiteIcon} alt={"close"}/></button></div>
                <ul className={`gnb-list`}>
                    <li><NavLink to="/" className={({ isActive }) => (isActive ? "is-active" : "")}>Home</NavLink></li>
                    <li><NavLink to="/experience" className={({ isActive }) => (isActive ? "is-active" : "")}>Experience</NavLink></li>
                    <li><NavLink to="/favorite" className={({ isActive }) => (isActive ? "is-active" : "")}>Favorite</NavLink></li>
                    <li><NavLink to="/history" className={({ isActive }) => (isActive ? "is-active" : "")}>History</NavLink></li>
                </ul>
            </div>
        </>
    )
}

export {MobileGnb}