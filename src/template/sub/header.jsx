import { useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import Gnb from '../../components/gnb.jsx'
import Util from '../../components/util.jsx'
import '../../assets/css/template/header.css'
import logoImg from '../../assets/images/logo/logo_w.png'
import hamBtnWhiteIcon from "../../assets/images/icons/icon-ham-btn-w.png";
import moreBtnWhiteIcon from "../../assets/images/icons/icon-more-btn-w.png";
import hamBtnBlackIcon from "../../assets/images/icons/icon-ham-btn-b.png";
import moreBtnBlackIcon from "../../assets/images/icons/icon-more-btn-b.png";

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [resizeWidth, setResizeWidth] = useState(window.innerWidth);
    const [mobileNavStatus , setMobileNavStatus] = useState(false);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    const handleResize = () => {
        const windowWidth = window.innerWidth
        setResizeWidth(windowWidth)
    }

    const mobileClickEvent = () => {
        mobileNavStatus ? setMobileNavStatus(false) : setMobileNavStatus(true)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize)
        };
    }, []);

    return (
        <div className={`header sub ${scrollPosition > 50 ? "is-fixed move-in" : ""}`}>
            <div className="inner">
                <div className="left">
                    <h1><Link to="/" title="현재창이동"><img src={logoImg} /></Link></h1>
                </div>
                <div className="center">
                    <Gnb resizeClass={`${ 1023  > resizeWidth ? "is-mobile" : "" } ${mobileNavStatus ? "is-show" : ""}`}/>
                </div>
                <div className="right">
                    <Util resizeClass={`${ 1023  > resizeWidth ? "is-mobile" : "" } `}/>
                    <span className={`m-btn-group ${ 1023  > resizeWidth ? "is-mobile" : "" }`}>
                        <button type="button" onClick={mobileClickEvent}><img src={`${scrollPosition > 50}` ? hamBtnWhiteIcon : hamBtnBlackIcon} alt="navigation" /></button>
                        <button type="button" ><img src={`${scrollPosition > 50}` ? moreBtnWhiteIcon : moreBtnBlackIcon} alt="navigation" /></button>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header;