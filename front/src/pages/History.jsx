import {useEffect, useState} from "react";

import '../assets/css/pages/history.css'

import visualImage from "../assets/images/visual/history-visual01.jpg";
import axios from "axios";

const History = () =>{
    const [historyList ,setHistoryList] = useState(null)
    const [scrollPosition, setScrollPosition ] = useState(0);
    const [scrollPersonTop, setScrollPersonTop ] = useState("-80px");

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
        setScrollPersonTop(position - 369)
    };

    useEffect(() => {
        async function getHistoryList() {
            try {
                const response = await axios.get('/api/v1/resource/history');
                setHistoryList(response.data);
            } catch (err) {
                console.log(err)
            }
        }
        getHistoryList()

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return(
        <>
            <main className="container history sub">
                <div className="content">

                    <section className="section visual-area">
                        <div className="bg" style={{backgroundImage:`url(${visualImage})`}}></div>
                        <div className="inner">
                            <h3 className="title center">History</h3>
                            <p className="desc">{`2013~${new Date().getFullYear()} (${new Date().getFullYear() - 2013}년차)`}</p>
                        </div>
                    </section>

                    <section className="section history-wrap">
                        <div className="inner">
                            <div className="history-list-wrap">
                                <span className="person" style={ scrollPosition > 369 ? {top:scrollPersonTop + 70}: {top: "-80px"}}></span>
                                <ul className="history-list">
                                {
                                    historyList !== null ?
                                    historyList.map((item)=> {
                                        return(
                                            <li key={item.years}>
                                                <p className="years">{item.years}</p>
                                                    {
                                                        item.projects.length > 0 ?
                                                            item.projects.map((project) => {
                                                                return(
                                                                    <dl key={project.id}>
                                                                        <dt>
                                                                            <p className="month">{project.month}</p>
                                                                        </dt>
                                                                        <dd>
                                                                            {
                                                                                project.title ?
                                                                                    <p className="title">{project.title}</p>
                                                                                    : false
                                                                            }
                                                                            {
                                                                                project.src.length > 0 ?
                                                                                    <div className="pic">
                                                                                        {
                                                                                            project.src.map((pic)=> {
                                                                                                return(
                                                                                                    <img key={pic} src={pic}/>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </div>
                                                                                : false
                                                                            }
                                                                            {
                                                                                project.lists.length > 0 ?
                                                                                <ul className="work-list">
                                                                                    {
                                                                                        project.lists.map((list)=> {
                                                                                            return (
                                                                                                <li key={list}>{list}</li>
                                                                                            )
                                                                                        })

                                                                                    }
                                                                                </ul>
                                                                                : false
                                                                            }
                                                                        </dd>
                                                                    </dl>
                                                                )
                                                            }) : false
                                                    }
                                            </li>
                                        )
                                    })
                                    : false
                                }
                            </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default History