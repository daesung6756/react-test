import {useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Titles} from "../components/Titles/index.jsx";
import {Card} from "../components/Card/index.jsx";

import '../assets/css/pages/experience.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';

import faSvelte from '../assets/images/logo/svelte-logo.jpg'
import faWebpack from '../assets/images/logo/webpack-logo.jpg'
import faJquery from '../assets/images/logo/jquery-logo.png'
import faVite from '../assets/images/logo/vite-logo.png'
import faTs from '../assets/images/logo/typescript-logo.jpg'
import faPhotoshop from '../assets/images/logo/photoshop-logo.jpg'
import faSalesforceLWC from '../assets/images/logo/salesforec-lwc-logo.png'
import faXD from '../assets/images/logo/xd-logo.jpg'
import faAEM from '../assets/images/logo/aem-logo.png'
import faTortoiseSVN from '../assets/images/logo/tortoise-svn-logo.png'
import faFirebase from '../assets/images/logo/firebase-logo.png'

//500 x 281
import caniuse from '../assets/images/useful/can-i-use.jpg'
import autoprefixer from '../assets/images/useful/autoprefixer.jpg'
import feroadmap from '../assets/images/useful/fe-road-map.jpg'
import npm from '../assets/images/useful/npm.jpg'
import statcounter from '../assets/images/useful/statcounter.jpg'
import myscreen from '../assets/images/useful/myscreen.jpg'
import aspectRatio from '../assets/images/useful/aspect-ratio.jpg'
import picsum from '../assets/images/useful/picsum.jpg'
import mockaroo from '../assets/images/useful/mockaroo.jpg'
import coolors from '../assets/images/useful/colors.jpg'

import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, EffectCoverflow } from 'swiper/modules';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChartSimple,faPause, faPlay, faCaravan, faCode, faHouseChimneyUser, faPlus, faCamera, faSyringe,faLink,faFont} from "@fortawesome/free-solid-svg-icons"
import {faJs, faCss3Alt, faNode, faReact, faGithub, faSass, faVuejs, faGulp,faSalesforce} from "@fortawesome/free-brands-svg-icons"
library.add(faPause, faPlay, faCaravan, faJs,faCss3Alt,faCode, faNode,faReact,faGithub, faSass, faVuejs, faGulp, faSalesforce,faHouseChimneyUser, faPlus, faCamera, faSyringe,faLink,faFont)

const Experience = () => {
    const visualSwiperDelay = 5000;
    const [visualSwiper, setVisualSwiper] = useState(null);
    let [isAutoplay, setIsAutoplay] = useState(true);
    let [isShowTiming, setIsShowTiming] = useState(null);


    const arrayRandomSort = (array) => {
        array.sort(() => Math.random() - 0.5);
    }
    const visualArray = [
        {
            title: "Javascript",
            desc: "const, let, var, =>, ${}",
            dir: "left",
            color:"#333",
            background:"#f4dd41",
            icon: `${faJs}`,
            iconColor:"#ffbb00"
        },
        {
            title: "Typescript",
            desc: "Boolean ,Number ,String ...",
            dir: "right",
            color:"#fff",
            background:"#3178c6",
            icon: faTs,
            iconColor:"#ffbb00"
        },
        {
            title: "CSS",
            desc: "display:flex, display:flex, display:flex",
            dir: "right",
            color:"#fff",
            background:"#0066e4",
            icon:faCss3Alt,
            iconColor:"#fff"

        },
        {
            title: "HTML",
            desc: "<div></div><div></div",
            dir: "center",
            color:"#fff",
            background:"#ff8a00",
            icon: faCode,
            iconColor:"#000"
        },
        {
            title: "Jquery",
            desc: "$().on.....",
            dir: "left",
            color:"#fff",
            background:"#0868ac",
            icon: faJquery,
            iconColor:"#000"
        },
        {
            title: "Node JS",
            desc: "npm run dev, npm run build",
            dir: "left",
            color:"#fff",
            background:"#026e00",
            icon:faNode,
            iconColor:"#fff"
        },
        {
            title : "React",
            desc : "useState",
            dir : "right",
            color :"#61dafb",
            background:"#282c34",
            icon : faReact,
            iconColor: "rgb(97, 218, 251)"
        },
        {
            title : "Vue",
            desc : "v-model,on,if,bind,html@....v-_-",
            dir : "center",
            color :"#000",
            background:"#f3daae",
            icon :faVuejs,
            iconColor:"#3fb27f"
        },
        {
            title : "Svelte",
            desc : ".svelte ........svt?",
            dir : "left",
            color :"#fff",
            background:"#fb4303",
            icon:faSvelte,
        },
        {
            title : "Salesforce LWC",
            desc : "lwc:if: ... lwc:else",
            dir : "right",
            color :"#fff",
            background:"#008fff",
            icon:faSalesforceLWC
        },
        {
            title : "Marketing Cloud Engagement",
            desc : "Salesforce B2C Solution / journey builder, web builder, email studio, cloud page ...",
            dir : "left",
            color :"#333",
            background :"#f49800",
            icon:faSalesforce,
            iconColor:"#fff"
        },
        {
            title : "Marketing Cloud Personalization",
            desc : "Salesforce B2C Solution / Web and App Analytics Platform, dynamic content, Segmentation, Campaign...",
            dir : "right",
            color :"#333",
            background:"#f49800",
            icon:faSalesforce,
            iconColor:"#fff"
        },
        {
            title : "Marketing Cloud Account Engagement (pardot)",
            desc : "Salesforce B2B Solution / Automate the customer journey, manage your prospects, Helps increase the effectiveness of marketing campaigns...",
            dir : "right",
            color :"#fff",
            icon :faSalesforce,
            "background":"#008fff",
            iconColor:"#fff"
        },
        {
            title : "GA4",
            desc : "Web and App Analytics Platform / behavioral data tracking ,Integrated analysis",
            dir : "center",
            color :"#333",
            icon :faChartSimple,
            "background":"#f49800",
            iconColor:"#fff"
        },
        {
            title : "Sales Cloud",
            desc : "Salesforce core cloud Solution / leads, account, opportunity, contact ....",
            dir : "center",
            color :"#fff",
            background :"#008fff",
            icon :faSalesforce,
            iconColor:"#fff"
        },
        {
            title : "Experience Cloud",
            desc : "community cloud Solution & builder,create micro-site",
            dir : "right",
            color :"#fff",
            background :"#008fff",
            icon :faSalesforce,
            iconColor:"#fff"
        },
        {
            title : "Gulp",
            desc : "gulp.task(('name')=>{}) .pipe().pipe().pipe()",
            dir : "right",
            color :"#fff",
            background:"#999",
            icon :faGulp,
            iconColor:"#d5504d"
        },
        {
            title : "Webpack",
            desc : "webpack.config.js....",
            dir : "center",
            color :"#fff",
            background:"#2b3a42",
            icon : faWebpack,
            iconColor:"#fff"
        },
        {
            title : "Vite",
            desc : "npm create vite@latest",
            dir : "right",
            color :"#fff",
            background:"#33373f",
            icon : faVite,
            iconColor:"#fff"
        },
        {
            title : "Github",
            desc : "pull commit push, pull commit push,pull commit push...",
            dir : "center",
            color :"#000",
            background:"#c6fff1",
            icon : faGithub,
            iconColor:"#000000"
        },
        {
            title : "Tortoise SVN",
            desc : "update commit, update commit, update commit...",
            dir : "left",
            color :"#000",
            background:"#c6fff1",
            icon : faTortoiseSVN
        },
        {
            title : "SCSS",
            desc : "$ __ & @",
            dir : "left",
            color :"#fff",
            background:"#cf649a",
            icon : faSass,
            iconColor:"#fff"
        },
        {
            title : "Photoshop",
            desc : "...psd",
            dir : "right",
            color :"#fff",
            background:"#11208d",
            icon : faPhotoshop,
            iconColor:"#fff"
        },
        {
            title : "XD",
            desc : "Design Prototype... search",
            dir : "left",
            color :"#fff",
            background:"#9807fd",
            icon : faXD,
            iconColor:"#fff"
        },
        {
            title : "AEM",
            desc : "Adobe Experience Manager",
            dir : "left",
            color :"#fff",
            background:"#251506",
            icon : faAEM,
            iconColor:"#fff"
        },
        {
            title : "Firebase",
            desc : "firebase deploy..",
            dir : "right",
            color :"#fff",
            background:"#251506",
            icon : faFirebase,
            iconColor:"#fff"
        }
    ]
    const usefulArray = [
        {
            background:caniuse,
            title: "Can i use?",
            desc:"웹 개발자들이 다양한 웹 브라우저에서 특정 기술이나 API의 지원 여부를 확인할 수 있도록 정보를 제공하는 사이트입니다.",
            link:"https://caniuse.com"
        },
        {
            background:autoprefixer,
            title:"Autoprefixer",
            desc:"웹사이트는 CSS 코드에 자동으로 벤더 프리픽스(vendor prefix)를 추가해주는 온라인 툴을 제공합니다.",
            link:"https://autoprefixer.github.io/"
        },
        {
            background:feroadmap,
            title:"Frontend Road Map",
            desc:"프론트엔드 개발자가 되기 위한 학습 경로와 필요한 기술, 도구들을 시각적으로 표현한 로드맵을 제공합니다.",
            link:"https://roadmap.sh/frontend"
        },
        {
            background:npm,
            title:"NPM",
            desc:"JavaScript 프로그래밍 언어용 패키지 관리자로, 개발자들이 자바스크립트 라이브러리와 도구를 공유하고 찾을 수 있게 해주는 웹사이트입니다. 이 사이트를 통해 개발자들은 필요한 코드 패키지를 검색, 다운로드, 업로드하며, 패키지 버전 관리와 종속성 관리를 할 수 있습니다.",
            link:"https://www.npmjs.com/"
        },
        {
            background:statcounter,
            title: "Statcounter",
            desc:"웹사이트 트래픽, 검색 엔진, 소셜 미디어, 운영 체제 등 다양한 카테고리에 대한 통계 정보를 제공하는 온라인 플랫폼입니다. 이 사이트를 통해 사용자는 다양한 웹 기술 통계와 시장 점유율에 대한 인사이트를 얻을 수 있습니다.",
            link:"https://gs.statcounter.com/"
        },
        {
            background:myscreen,
            title:"Myscreen",
            desc:"화면 해상도와 비율을 간편하게 확인할 수 있는 사이트로, 사용자의 현재 화면 크기를 한눈에 파악할 수 있습니다.",
            link:"https://myscreen.opendocs.co.kr/"
        },
        {
            background:aspectRatio,
            title:"aspect ratio",
            desc:"사용자가 가로 세로 비율(aspect ratio) 계산을 할 수 있게 도와주는 웹 툴입니다. 이 도구를 사용하여, 사용자는 원하는 가로 길이(width), 세로 길이(height), 또는 비율(aspect ratio)을 입력함으로써 다른 값들을 계산해볼 수 있습니다.",
            link:"https://andrew.hedges.name/experiments/aspect_ratio/"
        },
        {
            background:picsum,
            title:"Picsum",
            desc:"사용자가 필요한 크기와 형식으로 무작위 이미지를 제공하는 무료 이미지 소스 사이트입니다. 이 사이트는 API를 통해 개발자들이 프로젝트에 이미지를 쉽게 삽입할 수 있게 해줍니다.",
            link:"https://picsum.photos/"
        },
        {
            background:mockaroo,
            title:"Mockaroo",
            desc:"사용자가 원하는 형식과 규칙에 따라 맞춤형 가짜 데이터를 생성할 수 있는 온라인 서비스입니다. 이 도구는 개발자들이 테스트용 데이터를 쉽게 만들어내어 애플리케이션을 효율적으로 개발하고 테스트할 수 있게 도와줍니다.",
            link:"https://www.mockaroo.com/"
        },
        {
            background:coolors,
            title:"coolors",
            desc:"원하는 색상 조합을 찾아볼 수 있는 색상 팔레트 사이트입니다. 원하는 색상을 입력하면 해당 색상과 어울리는 색상을 추천해 줍니다. 또한, 색상 조합을 저장하고 공유할 수 있는 기능도 제공합니다.",
            link:"https://coolors.co/"
        }
    ]
    const extensionArray = [
        {
            title:"Pix to Pix",
            desc:"웹 페이지의 요소를 픽셀 단위로 정확하게 측정할 수 있는 도구입니다. 라인, 직선, 사각형, 원 등 다양한 도구를 제공합니다. 측정값을 복사하여 다른 문서에 붙여넣을 수 있습니다.웹 페이지의 스크린샷을 찍어 측정할 수도 있습니다.이 확장 프로그램을 사용하면 웹 페이지의 요소 크기, 간격, 마진, 패딩 등을 정확하게 측정할 수 있습니다. 이를 통해 웹 페이지의 디자인과 구현을 보다 세밀하게 조정할 수 있습니다.",
            link:"https://chrome.google.com/webstore/detail/pix-to-pix-pixel-perfect/binboaimbgchaamickjnhgjdccohndin",
            icon: faCamera
        },
        {
            title:"Smart Color Picker",
            desc:"웹에서 색상을 선택하고 복사할 수 있는 강력한 도구입니다. 이 확장은 마우스로 색상을 선택하거나 색상환을 사용하여 색상을 선택할 수 있으며, 색상 조합을 생성하거나 색상 코드를 다양한 형식으로 복사할 수 있습니다. 이 확장은 웹 디자이너, 웹 개발자, 디자이너, 아티스트 등 누구나 사용할 수 있습니다.사용하기 쉽습니다. 마우스로 색상을 선택하거나 색상환을 사용하여 원하는 색상을 쉽게 선택할 수 있습니다. 다양한 기능을 제공합니다. 마우스로 색상을 선택할 수 있을 뿐만 아니라 색상환을 사용하여 색상을 선택하고, 색상 조합을 생성하고, 색상 코드를 다양한 형식으로 복사할 수 있습니다. 무료로 사용할 수 있습니다. 이 확장은 누구나 무료로 사용할 수 있습니다.",
            link:"https://chrome.google.com/webstore/detail/smart-color-picker/ilifjbbjhbgkhgabebllmlcldfdgopfl",
            icon:faSyringe
        },
        {
            title:"whatFont",
            desc:"웹페이지 상의 텍스트에 사용된 글꼴을 쉽게 확인할 수 있게 도와줍니다. 사용자는 페이지 내의 텍스트 위로 마우스를 올리기만 하면 해당 텍스트의 글꼴 정보를 볼 수 있습니다.",
            link:"https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm?hl=ko",
            icon: faFont
        },
    ]

    arrayRandomSort(visualArray)
    arrayRandomSort(usefulArray)
    arrayRandomSort(extensionArray)


    const [visualObjects] = useState(visualArray)
    const [usefulObjects ] = useState(usefulArray);
    const [extensionObjects] = useState(extensionArray)


    const heroSwiperToggleAnimation = () => {
        setIsShowTiming(true)
        const time = setTimeout(() => {
            setIsShowTiming(false)
            clearTimeout(time)
        },3000)
    }
    const heroSwiperToggleAutoplay = () => {
        visualSwiper.autoplay.running ?  visualSwiper.autoplay.stop() : visualSwiper.autoplay.start()
        setIsAutoplay(visualSwiper.autoplay.running)
        heroSwiperToggleAnimation()
    };


    return (
        <div className="experience">
            <section className="section visual-area">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop
                    autoplay={{ delay: visualSwiperDelay, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => {
                        setVisualSwiper(swiper)
                        swiper.slides[0].querySelector(".cube").classList.add("ani-bg")
                        swiper.slides[0].querySelector(".stick").classList.add("ani-fullwidth")
                    }}
                    onSlideChange={(swiper) => {
                        const currentSlideEl = swiper.slides[swiper.activeIndex]
                        const slideEls = swiper.slides;
                        slideEls.forEach((item)=> {
                            item === currentSlideEl ? (
                                    item.querySelector(".cube").classList.add("ani-bg"),
                                        item.querySelector(".stick").classList.add("ani-fullwidth")
                                )
                                : (
                                    item.querySelector(".cube").classList.remove("ani-bg"),
                                        item.querySelector(".stick").classList.remove("ani-fullwidth")
                                )
                        })
                    }}

                ><div className="date">{`2013.01~ ${new Date().getFullYear()}.${new Date().getMonth() + 1 } Experience`}</div>
                    {
                        visualObjects.map((item,index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="background" style={{backgroundColor : item.background }}></div>
                                    {
                                        item.title !== null ?
                                            <>
                                                <div className="progress-bar">
                                                    <span className={`stick ${isAutoplay ? "" : "ani-none" }`} style={{animationDuration : `${(visualSwiperDelay / 1000)}s`}}></span>
                                                </div>
                                                <div className="cube">
                                                    <div>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </div>
                                                <div className={`context-box ${item.dir}`}>
                                                    {
                                                        typeof item.icon === "string" ?
                                                            <div className="icon-box"><img src={item.icon} className="ani-shake" alt={`${item.title} icon`} /></div>
                                                            : <div className="icon-box"><FontAwesomeIcon icon={item.icon} shake style={{color: item.iconColor,}}/></div>
                                                    }

                                                    <p className="title" dangerouslySetInnerHTML={{ __html: item.title }} style={{color:item.color}}></p>
                                                    <p className="desc"  style={{color:item.color}}>{item.desc}</p>
                                                </div>
                                            </> : null
                                    }
                                </SwiperSlide>
                            )
                        })
                    }
                    <div className="swiper-player">
                        <button type='button' onClick={heroSwiperToggleAutoplay} title={isAutoplay ? "Pause" : "Play"}>
                            <FontAwesomeIcon icon={isAutoplay?  faPause : faPlay} />
                        </button>
                    </div>
                    <div className={`swiper-player-status ${isShowTiming ? "ani-twinkling" : ""}`} >
                        {isAutoplay ? "Play": "Pause" }
                    </div>
                </Swiper>
            </section>

            <section className="section useful">
                <Titles
                    classAdd={"section-title"}
                    type={"2"}
                    align={"center"}
                    description={"A collection of useful sites when working"}
                    descriptionAlign={"center"}
                >Bookmark</Titles>

                <Swiper
                    modules={[Pagination, EffectCoverflow]}
                    effect={"coverflow"}
                    loop
                    breakpoints={{
                        "480": {
                            slidesPerView: 2,
                            spaceBetween:20
                        },
                        "768":{slidesPerView: 3,
                            spaceBetween:0},
                        "1024":{slidesPerView: 4,
                            spaceBetween:0}
                    }}

                    centeredSlides={true}
                    pagination={{ clickable: true }}
                >
                    {
                        usefulObjects.map((item) => {
                            return (
                                <SwiperSlide key={item.title}>
                                    <Card classAdd="is-round">
                                        <div className="pic" style={{backgroundImage : `url(${item.background})`}}></div>
                                        <div className="title"><FontAwesomeIcon icon={faHouseChimneyUser} /><span>{item.title}</span></div>
                                        <div className="desc">{item.desc}</div>
                                        <div className="link"><a href={item.link} target="_blank" rel="noopener noreferrer">바로가기</a></div>
                                    </Card>
                                </SwiperSlide>
                            )
                        })

                    }
                </Swiper>
            </section>

            <section className="section extension-tools">
                <div className="inner">
                    <Titles
                        classAdd={"section-title"}
                        type={"2"}
                        align={"center"}
                        description={"Collection of useful extensions for work (Chrome browser)"}
                        descriptionAlign={"center"}
                    >Extension Program</Titles>

                    <Swiper
                        modules={[Pagination, EffectCards]}
                        effect="cards"
                        loop
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                    >
                        {
                            extensionObjects.map((item) => {
                                return (
                                    <SwiperSlide key={item.title}>
                                        <div className="title"><FontAwesomeIcon icon={item.icon} /><span>{item.title}</span></div>
                                        <div className="desc">{item.desc}</div>
                                        <div className="link"><a href={item.link} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLink} />바로가기</a></div>
                                    </SwiperSlide>
                                )
                            })

                        }
                    </Swiper>
                </div>
            </section>
        </div>
    )
}

export default Experience