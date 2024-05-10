import { useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import Gnb from '../../components/gnb.jsx'
import Util from '../../components/util.jsx'
import {MobileGnb} from "../../components/mobile-gnb.jsx";
import '../../assets/css/template/header.css'
import logoImg from '../../assets/images/logo/logo_w.png'
import hamBtnWhiteIcon from "../../assets/images/icons/icon-ham-btn-w.png";
import moreBtnWhiteIcon from "../../assets/images/icons/icon-more-btn-w.png";

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

        const resizeTiming = setTimeout(() => {
            setMobileNavStatus(false)

            clearTimeout(resizeTiming)
        },300);

    }
    const getNavStatus = (mobileNavStatus) => {
        setMobileNavStatus(mobileNavStatus)
    }

    const mobileGnbOpenEvent = () => {
        mobileNavStatus ?
            setMobileNavStatus(false)
            : setMobileNavStatus(true)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize)
        };
    }, []);

    return (
        <>
            <MobileGnb resizeClass={`${ resizeWidth ? "is-mobile" : "" } ${mobileNavStatus ? "is-show" : ""}`} getNavStatus={getNavStatus} />

            <header className={`header sub ${scrollPosition > 50 ? "is-fixed move-in" : ""}`}>
                <div className="inner">
                    <div className="left">
                        <button type="button" onClick={mobileGnbOpenEvent}><img src={ hamBtnWhiteIcon } alt="navigation" /></button>
                        <h1><Link to="/" title="현재창이동"><img src={logoImg} /></Link></h1>
                    </div>
                  {/*  <div className="center">
                        <Gnb resizeClass={`${ 1023  > resizeWidth ? "is-mobile" : "" }`}/>
                    </div>
                    <div className="right">
                        <Util resizeClass={`${ 1023  > resizeWidth ? "is-mobile" : "" } `}/>
                        <span className={`m-btn-group ${ 1023  > resizeWidth ? "is-mobile" : "" }`}>

                            <button type="button" ><img src={ moreBtnWhiteIcon } alt="navigation" /></button>
                        </span>
                    </div>*/}
                </div>
            </header>
        </>
    )
}

export default Header;