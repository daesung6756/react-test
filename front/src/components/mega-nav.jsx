import { useState } from "react";

const MegaNav = () => {
    const [megaNavList, setMegaNavList] = useState([
        {
            title: "test",
            list: [
                {
                    name:"test1",
                    src:""
                },
                {
                    name:"test2",
                    src:""
                },

            ]
        },

    ])
    return (
        <div className="mega-nav-wrap">
            {
                megaNavList.map((group, index)=> {
                    return(
                        <div className="nav-group" key={index}>
                            <strong className="nav-title">{group.title}</strong>
                            {
                                group.list.map((item, idx)=>{
                                    return(
                                        <ul className="nav-list">
                                            <li key={idx}>
                                                <link to={item.src}>{item.name}</link>
                                            </li>
                                        </ul>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MegaNav