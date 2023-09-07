import {useRef, useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import Gnb from '../../components/gnb.jsx'
import Util from '../../components/util.jsx'
import '../../assets/css/template/header.css'
import logoImg from '../../assets/images/logo/logo_w.png'

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`header ${scrollPosition > 50 ? "is-fixed move-in" : ""}`}>
            <div className="inner">
                <div className="left">
                    <h1><Link to="/" title="현재창이동"><img src={logoImg} /></Link></h1>
                </div>
                <div className="center">
                    <Gnb/>
                </div>
                <div className="right">
                    <Util />
                </div>
            </div>
        </div>
    )
}

export default Header;