import {useEffect, useState} from "react";

import "../assets/css/component/scroll-top.css"

const ScrollTop = () => {
    const [showButton , setShowButton] = useState(false)

    const scrollInit = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const handleShowButton = () => {
        if (window.scrollY > 500) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleShowButton);
        return () => {
            window.removeEventListener("scroll", handleShowButton);
        };
    }, []);

    return (
        <div className={`scroll-top-wrap ${ showButton ? "is-show" : ""}`}>
            <button type="button" onClick={scrollInit}>
                Top
            </button>
        </div>
    )
}

export {ScrollTop}