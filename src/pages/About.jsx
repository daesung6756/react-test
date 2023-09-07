

import {Tabs} from "../components/Tabs/Tabs.jsx";

import visualImage01 from '../assets/images/visual/about-visual-01.jpg'
import visualTextImage01 from '../assets/images/txt/about-visual-text.png'
import historyBg5 from '../assets/images/visual/history-bg5.png'
import historyBg4 from '../assets/images/visual/history-bg4.png'
import historyBg3 from '../assets/images/visual/history-bg3.png'
import historyBg2 from '../assets/images/visual/history-bg2.png'
import historyBg1 from '../assets/images/visual/history-bg1.png'

import '../assets/css/pages/about.css'


const About = () => {
    const historyCategory5 = [
        {
            years: "2023",
            items: [
                {
                    month:"03.01",
                    title:"조직개편",
                    titleStrong:true,
                    desc:"기획처/기획팀 → 기획평가팀, 기획예산팀"
                },
                {
                    month:"02.01",
                    title:"조직개편",
                    desc:"직속기구/자산관리위원회 신설"
                },
                {
                    month:"01.01",
                    title:"조직개편",
                    desc:"교육혁신처/교육혁신지원팀 신설, 평가인증팀 → 평가팀"
                },
            ]
        },
        {
            years: "2022",
            items: [
                {
                    month:"12.01",
                    title:"",
                    desc:"sdsdsdsd"
                },
            ]
        }
    ]

    return (
        <>
            <main className="container about">
                <div className="content">

                    <div className="visual-area">
                        <div className="bg" style={{backgroundImage:`url(${visualImage01})`}}></div>
                        <div className="inner">
                            <h3 className="title">대학 소개</h3>
                            <div className="pic"><img src={visualTextImage01} /></div>
                        </div>
                    </div>

                    <section className="section history-tab">
                        <div className="inner">
                            <h3 className="title">연혁</h3>
                            <Tabs>
                                <div label="2020-Present">
                                    <div><img src={historyBg5} /></div>

                                    <div className="history-group">
                                        {
                                            historyCategory5.map((category,index) => {
                                                return (
                                                    <div className="history" key={index}>
                                                        <span className="years">{category.years}</span>
                                                        {
                                                            category.items.map((issue)=> {
                                                                return (
                                                                    <dl>
                                                                        <dt>{issue.month}</dt>
                                                                        <dd>
                                                                            {
                                                                                issue.title.length > 0 ? <h4 className={issue.titleStrong ? "strong" : ""}>{issue.title}</h4> : null
                                                                            }
                                                                            <p>{issue.desc}</p>
                                                                        </dd>
                                                                    </dl>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                </div>
                                <div label="2010~2019">
                                    <div><img src={historyBg4} /></div>
                                </div>
                                <div label="2000~2009">
                                    <div><img src={historyBg3} /></div>
                                </div>
                                <div label="1990~1999">
                                    <div><img src={historyBg2} /></div>
                                </div>
                                <div label="1960~1989">
                                    <div><img src={historyBg1} /></div>
                                </div>
                            </Tabs>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

const history1 = () => {
    return(
        <div>컨텐츠입니다.</div>
    )
}


export default About