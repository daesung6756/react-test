import {useState} from "react";

import '../assets/css/component/modal-popup.css'
import crossIcon from '../assets/images/icons/icon-white-box-cross.png'

const ModalPopup = (props) => {
    const [isActive, setIsActive] = useState(props.popupData.open);
    const [isDimmed, setIsDimmed] = useState(props.popupData.dimmed);

    function popupClose (name) {
        setIsActive(() => false)
    }

    return(
        <div className={`popup-wrap ${isDimmed ? "is-dimmed" : ""} ${isActive ? `is-show`: ``}`} data-popup={props.popupData.name}>
            <div className="popup-inner">
                <div className="popup">
                    <div className="head">
                        <div className="head-inner">
                            <p className="title">{props.popupData.title}</p>
                            <button type="button" className="head-close-btn" data-popup-close={props.popupData.name} onClick={() => popupClose()}><i style={{backgroundImage:`url(${crossIcon})`}}><span className="blind">popup close</span></i></button>
                        </div>
                    </div>
                    <div className="body" dangerouslySetInnerHTML={{ __html: props.popupData.content }}></div>
                    <div className="foot">
                        <div className="foot-inner">
                            <button type="button" className="foot-cancel-btn" data-popup-close={props.popupData.name} onClick={() => popupClose()}><span className="blind">취소</span></button>
                            <button type="button" className="foot-apply-btn" data-popup-close={props.popupData.name} onClick={() => popupClose()}><span className="blind">확인</span></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ModalPopup