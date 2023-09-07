import {Link} from "react-router-dom";
import {useState} from "react";

import '../assets/css/component/window-popup.css'

const WindowPopup = (props) => {
    const [isActive, setIsActive] = useState(props.popupData.open)

    function popupClose () {
        setIsActive(() => false)
    }

    return(
        <div className={`window-popup-wrap ${isActive ? "is-show":""}`} style={{top:props.popupData.top,left:props.popupData.left}}>
            <div className="popup-inner">
                <div className="body">
                    <Link to={props.popupData.link}>
                        <img src={props.popupData.image} alt={props.popupData.alt}/>
                    </Link>
                </div>
                <div className="foot">
                    <div className="foot-inner">
                        <span className="checkbox">
                            <input type="checkbox" id={`toDayNotOpen${props.popupData.id}`} name={`toDayNotOpen${props.popupData.id}`} />
                            <label htmlFor={`toDayNotOpen${props.popupData.id}`}>오늘하루 열지 않기</label>
                        </span>
                        <button type="button" onClick={() => popupClose()}>닫기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WindowPopup