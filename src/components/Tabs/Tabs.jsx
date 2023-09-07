import {useEffect, useState} from "react";
import './Tabs.css'

const Tabs = ({children}) => {
    const [activeTab,setActiveTab] = useState(children[0].props.label)
    const handleClick = (e, newActiveTab) => {
        e.preventDefault()
        setActiveTab(newActiveTab)
    }
    return (
        <div className={`tabs`}>
            <ul className={`tab-control`}>
                {
                    children.map((btn)=> {
                        return <li className={btn.props.label === activeTab ? "is-active":""} key={btn.props.label}><a href="#" onClick={(e)=> handleClick(e,btn.props.label)}>{btn.props.label}</a></li>
                    })
                }
            </ul>
            <div className={`tab-container`}>
                {
                    children.map((panel)=>{
                        return <div className={`tab-content ${panel.props.label === activeTab ? "is-show" : ""}`} key={panel.props.label}>{panel.props.children}</div>
                    })
                }
            </div>
        </div>
    )
}

export { Tabs }