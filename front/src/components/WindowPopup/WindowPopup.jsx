import {useEffect, useState} from "react";
import './WindowPopup..css'

const WindowPopup = (props) => {
    const [isActive, setIsActive] = useState(props.status)

    useEffect(()=>{
        checkPopupClose() ? setIsActive(false) : setIsActive(true);
    },[])

     function closePopup (expireDays){
        let expire = new Date();
        expire.setTime(expire.getTime() + (expireDays * 24 * 60 * 60 * 1000));
        localStorage.setItem("popupNoShow", expire.getTime());
    }

    function checkPopupClose() {
        const expireDay = localStorage.getItem("popupNoShow");
        let today = new Date();

        if(today.getTime() > expireDay) {
            return false;
        } else {
            return true;
        }
    }

    function closePopupToday () {
        closePopup(1)
        setIsActive(false)
    }


    return(
        <div className={`window-popup-wrap ${isActive ? "is-show":""}`} style={{top:props.top,left:props.left}}>
            <div className="popup-inner">
                <div className="body">
                    {props.children}
                </div>
                <div className="foot">
                    <div className="foot-inner">
                                    <span className="checkbox">
                                        <input type="checkbox" id={props.id} name={props.id} onClick={() => closePopupToday()}/>
                                        <label htmlFor={props.id} >오늘하루 열지 않기</label>
                                    </span>
                        <button type="button" onClick={() => setIsActive(false)}>닫기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export {WindowPopup}