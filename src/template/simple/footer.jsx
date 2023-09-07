import { useState } from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import {faYoutube, faInstagram, faFacebook, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../assets/css/template/footer.css'

library.add(faYoutube, faInstagram, faFacebook, faTwitter)

const Footer  = () => {
    return (
        <div className="footer">
            <div className="inner">
                <div className="left">
                    <p>서울시 강동구 천호동</p>
                    <p>Tel : 02) 000-0000</p>
                </div>
                <div className="right">
                    <ul className="social-list">
                        <li><a href=""><FontAwesomeIcon icon={faYoutube} size="2x"/></a></li>
                        <li><a href=""><FontAwesomeIcon icon={faInstagram} size="2x"/></a></li>
                        <li><a href=""><FontAwesomeIcon icon={faFacebook} size="2x"/></a></li>
                        <li><a href=""><FontAwesomeIcon icon={faTwitter} size="2x"/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer