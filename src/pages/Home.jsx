import {useEffect, useState} from "react";

import {Navigation, Pagination, Scrollbar, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay,faCircleUser, faNewspaper, faPencil, faIdCard, faKeyboard, faLaptop, faFilm, faCalendarCheck} from "@fortawesome/free-solid-svg-icons"
library.add(faPause, faPlay,faCircleUser, faNewspaper, faPencil, faIdCard, faKeyboard, faLaptop, faFilm, faCalendarCheck)

import '../assets/css/pages/home.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import swiperImg01 from '../assets/images/visual/home-visual-01.jpg'
import swiperImg02 from '../assets/images/visual/home-visual-02.jpg'
import swiperImg03 from '../assets/images/visual/home-visual-03.jpg'
import swiperImg04 from '../assets/images/visual/home-visual-04.jpg'

import {WindowPopup} from "../components/WindowPopup";
import {Tabs} from "../components/Tabs";

import windowPopup1 from '../assets/images/window-popup/20230905-1.png'
import windowPopup2 from '../assets/images/window-popup/20230905-2.png'
import windowPopup3 from '../assets/images/window-popup/20230905-3.png'
import {Link} from "react-router-dom";

const Home = () =>  {
    const [visualSwiper, setVisualSwiper] = useState(null);
    let [isAutoplay, setIsAutoplay] = useState(true);
    const [swiperImages, setSwiperImages] = useState([
        {
            background: swiperImg01,
            title: "교육부 주관 대학의 <br>평생교육체제 지원",
            desc: "7년 연속선정 (LiFE2.0)<br>연 20억원 확보",
            dir: "left"
        },
        {
            background: swiperImg02,
            title: "경일대입구역<br>2024년에 개통!!",
            desc: "등교가 더욱 편리해 집니다!",
            dir: "right"
        },
        {
            background: swiperImg03,
            title: '반도체 대학원 26억원. 3년간 37억원 확보!!',
            desc: "",
            dir: "center"
        },
        {
            background: swiperImg04,
            title: '교육부 주관 대학의<br>평생교육체제 지원',
            desc: "7년 연속선정 (LiFE2.0)<br> 연 20억원 확보",
            dir: "left"
        }
    ])


    const heroSwiperToggleAutoplay = () => {
        visualSwiper.autoplay.running ?  visualSwiper.autoplay.stop() : visualSwiper.autoplay.start()
        setIsAutoplay(visualSwiper.autoplay.running)
    };

    return (
        <div className="home">

            <WindowPopup
                status={false}
                top={0}
                left={0}
                id="toDayNotOpen1"
            >
                <div>
                    <Link to="/" >
                        <img src={windowPopup1} alt="img"/>
                    </Link>
                </div>
            </WindowPopup>

            <WindowPopup
                status={false}
                top={0}
                left={360}
                id="toDayNotOpen2"
            >
                <div>
                    <Link to="/" >
                        <img src={windowPopup2} alt="img"/>
                    </Link>
                </div>
            </WindowPopup>

            <WindowPopup
                status={false}
                top={240}
                left={360}
                id="toDayNotOpen3"
            >
                <div>
                    <Link to="/" >
                        <img src={windowPopup3} alt="img"/>
                    </Link>
                </div>
            </WindowPopup>

            <section className="visual-area">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={setVisualSwiper}
                    onSlideChange={
                        () => console.log("change")
                    }
                >
                    {
                        swiperImages.map((item,index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="background" style={{ backgroundImage: `url(${item.background})` }}  ></div>
                                    {
                                        item.title !== null ?
                                        <div className={`context-box ${item.dir}`} >
                                            <p className="title" dangerouslySetInnerHTML={{ __html: item.title }}></p>
                                            <p className="desc"  dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                                        </div> : null
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
                </Swiper>
            </section>

            <section className="main-tab">
                <Tabs>
                    <div label="경일인 서비스">
                        <div className="col-wrap">
                            <div className="column">
                                <ul className="icon-list">
                                    <li><Link to="/"><i><FontAwesomeIcon icon={faCircleUser} /></i>KIU포털시스템</Link></li>
                                    <li><Link to="/"><i><FontAwesomeIcon icon={faNewspaper} /></i>KIUMY시스템</Link></li>
                                    <li><Link to="/"><i><FontAwesomeIcon icon={faPencil} /></i>온라인학습관리</Link></li>
                                    <li><Link to="/"><i><FontAwesomeIcon icon={faIdCard} /></i>인터넷증명발급</Link></li>
                                    <li><Link to="/"><i><FontAwesomeIcon icon={faKeyboard} /></i>전자문서서비스</Link></li>
                                    <li><Link to="/"><i><FontAwesomeIcon icon={faLaptop} /></i>시설예약시스템</Link></li>
                                    <li><Link to="/"><i><FontAwesomeIcon icon={faFilm} /></i>K-EQUS공용장비통함예약시스템</Link></li>
                                    <li><Link to="/"><i><FontAwesomeIcon icon={faCalendarCheck} /></i>전자출결시스템</Link></li>
                                </ul>
                            </div>
                            <div className="column">
                                <ul className="square-list">
                                    <li><a href="">교내시설이용안내</a></li>
                                    <li><a href="">스쿨버스</a></li>
                                    <li><a href="">금주의 식단</a></li>
                                    <li><a href="">해외유학생 토픽강좌</a></li>
                                    <li><a href="">증명서발급</a></li>
                                    <li><a href="">전자출결시스템(Web)</a></li>
                                    <li><a href="">생활관 홈페이지</a></li>
                                    <li><a href="">교육혁신처</a></li>
                                    <li><a href="">모의TOEIC</a></li>
                                    <li><a href="">국제학생증(ISIC)</a></li>
                                    <li><a href="">KIU지역사회공헌센터</a></li>
                                    <li><a href="">학생상담센터</a></li>
                                    <li><a href="">도서관(학술정보원)</a></li>
                                    <li><a href="">국제교류교육원</a></li>
                                    <li><a href="">KIU스포츠단</a></li>
                                    <li><a href="">학사행정안내</a></li>
                                    <li><a href="">KIU대학일자리플러스센터</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-wrap">
                            <div className="box">
                                <p className="box-title">2023-2학기 학부 재학생·복학생 추가 납부<br />9. 4.(월) ~ 9. 8.(금) 16시</p>
                                <a href="">등록금고지 출력</a>
                            </div>
                            <div className="box">
                                <p className="box-title">2023-2학기 수강정정<br />9. 6.(수) 10시 ~ 9. 7.(목) 16시</p>
                                <a href="">공지 바로가기</a>
                            </div>
                        </div>
                    </div>
                    <div label="예비경일인 서비스">
                        <div className="col-wrap">
                            <div className="column">
                                <ul className="icon-list">
                                    <li><Link to="/"><i><FontAwesomeIcon icon={faCircleUser} /></i>입학홈페이지</Link></li>
                                    <li><Link to="/"><i><FontAwesomeIcon icon={faNewspaper} /></i>찾아오시는길</Link></li>
                                    <li><Link to="/"><i><FontAwesomeIcon icon={faPencil} /></i>KIU 드론캠퍼스투어</Link></li>
                                    <li><Link to="/"><i><FontAwesomeIcon icon={faIdCard} /></i>KIU 철도아카데미</Link></li>
                                </ul>
                            </div>
                            <div className="column">
                                <ul className="square-list">
                                    <li><a href="">장학제도안내</a></li>
                                    <li><a href="">기숙사안내</a></li>
                                    <li><a href="">교내전화번호</a></li>
                                    <li><a href="">SNS안내</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div label="교지원 서비스">
                        <div className="col-wrap">
                            <div className="column">
                                <ul className="icon-list">
                                    <li><Link to="/"><i><FontAwesomeIcon icon={faCircleUser} /></i>KIU포털시스템</Link></li>
                                    <li><Link to="/"><i><FontAwesomeIcon icon={faNewspaper} /></i>KIUMY시스템</Link></li>
                                    <li><Link to="/"><i><FontAwesomeIcon icon={faPencil} /></i>온라인학습관리</Link></li>
                                    <li><Link to="/"><i><FontAwesomeIcon icon={faIdCard} /></i>인터넷증명발급</Link></li>
                                    <li><Link to="/"><i><FontAwesomeIcon icon={faKeyboard} /></i>전자문서서비스</Link></li>
                                </ul>
                            </div>
                            <div className="column">
                                <ul className="square-list">
                                    <li><a href="">교내시설이용안내</a></li>
                                    <li><a href="">스쿨버스</a></li>
                                    <li><a href="">금주의 식단</a></li>
                                    <li><a href="">해외유학생 토픽강좌</a></li>
                                    <li><a href="">증명서발급</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Tabs>
            </section>

            <section className="section">
                <Swiper
                    className="fade-swiper"
                    modules={[Navigation, Pagination ]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={
                        () => console.log("change")
                    }
                >
                    <SwiperSlide>1</SwiperSlide>
                    <SwiperSlide>2</SwiperSlide>
                </Swiper>
            </section>
        </div>
    )
}

export default Home