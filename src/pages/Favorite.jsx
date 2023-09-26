import { Tabs } from "../components/Tabs/Tabs.jsx";

import visualImage from '../assets/images/visual/favorite-visual01.jpg';
import personProfile1 from '../assets/images/favorite/profile/kyj_profile.jpg';
import personProfile2 from '../assets/images/favorite/profile/kdm_profile.jpg';
import personProfile3 from '../assets/images/favorite/profile/khr_profile.jpg';
import personPosterMoving from '../assets/images/favorite/poster/kyj_drama_moving.jpg';
import personPosterAsls from '../assets/images/favorite/poster/kyj_drama_asls.jpg';
import dramaPosterMoving from '../assets/images/favorite/poster/drama_moving.jpg';
import dramaPosterMaskgirl from '../assets/images/favorite/poster/drama_maskgirl.jpg';
import dramaPosterSinbyung2 from '../assets/images/favorite/poster/drama_sinbyung2.jpg';
import dramaPosterDp2 from '../assets/images/favorite/poster/drama_dp2.jpg';
import moviePosterSuzume from '../assets/images/favorite/poster/movie_suzume.jpg';
import moviePosterHero from '../assets/images/favorite/poster/movie_hero.jpg';
import moviePosterCrimeCity3 from '../assets/images/favorite/poster/movie_crime_city3.jpg';
import moviePosterGog3 from '../assets/images/favorite/poster/movie_gog3.jpg';

import '../assets/css/pages/favorite.css'

const Favorite = () => {
    const data = {
        person : [
            {
                lank: 1,
                image: personProfile1 ,
                name: "고윤정",
                job : "배우",
                birth: "1996년 4월 22일",
                type : "ISTP",
                nickname: "꼰정, 고전사",
                masterpiece : [
                    {
                        id:1,
                        name:"무빙",
                        poster:personPosterMoving,
                        alt:"무빙 포스터"
                    },
                    {
                        id:2,
                        name:"환혼",
                        poster:personPosterAsls,
                        alt:"환혼 포스터"
                    }
                ]
            },
            {
                lank: 2,
                image: personProfile2 ,
                name: "김다미",
                job : "배우",
                birth: "1995년 4월 9일",
                type : "ISFP",
                nickname: "담다, 햄찌, 햄토리, 마녀아가씨, 국다미",
                masterpiece : []
            },
            {
                lank: 3,
                image: personProfile3 ,
                name: "강혜린",
                job : "가수",
                birth: "2006년 5월 15일",
                type : "ISTP",
                nickname: "강해린 이상하다, 아기고양이, 꼬양이, 냥냥, 우당이, 마름모 아티스트, 강고양이씨, 강떤고양이, 강떤여자, 언니조아고양이, 개구리, 침착걸, 강윤숙, 냥해린, 키티강(Kitty Kang), 부시강, 아기구미호, 강강강",
                masterpiece : [
                    {
                        id:1,
                        title:"[안방1열 직캠4K] 뉴진스 해린 'ETA' (NewJeans HAERIN FanCam) @SBS Inkigayo 230723",
                        video:"rZiDK4ck2to"
                    },
                    {
                        id:2,
                        title:"[페이스캠4K] 뉴진스 해린 'OMG' (NewJeans HAERIN FaceCam) @SBS Inkigayo 230115",
                        video:"J8_56-8eSDU"
                    }

                ]
            }
        ],
        drama : [
            {
                id:1,
                lank:1,
                name:"무빙",
                date:"2023년 8월 9일 ~ 2023년 9월 20일",
                poster:dramaPosterMoving,
                actors:"류승룡, 한효주, 조인성, 차태현, 류승범, 김성균, 김희원, 문성근, 이정하, 고윤정, 김도훈 外",
                plot: "어린 시절부터 초능력을 가진 봉석은 자신의 능력을 숨기고 평범한 고등학생으로 살아간다. 그런 봉석 앞에 갑자기 나타난 희수는 봉석의 비밀을 알고 있다고 말한다. 희수는 봉석과 함께 자신의 정체를 숨기고 살아가는 부모를 찾아 나선다. 그리고 그 과정에서 봉석과 희수는 시대와 세대를 넘어 닥치는 거대한 위험에 맞서게 된다.",
                trailer: [
                    {
                        id:1,
                        title:"티저 예고편",
                        video:"pyrwTv8aS-E"
                    },
                    {
                        id:2,
                        title:"커밍순 예고편",
                        video:"lw_KiAFDM10"
                    },
                    {
                        id:3,
                        title:"메인 예고편",
                        video:"YuUoMHoFAZk"
                    }
                ]
            },
            {
                id:2,
                lank:2,
                name:"마스크걸",
                date:"2023년 8월 18일",
                poster:dramaPosterMaskgirl,
                actors:"고현정, 안재홍, 염혜란, 나나, 이한별 外",
                plot: "외모 콤플렉스를 가진 김모미는 가면을 쓰고 인터넷 방송 BJ로 활동하며 인기를 얻는다. 하지만 그녀의 인기는 의도치 않은 사건으로 인해 위기에 처하고, 결국 살인 사건에 휘말리게 된다. 김모미는 살인 누명을 쓰고 감옥에 가게 되고, 딸 미모는 그녀의 엄마가 마스크걸이라는 사실을 알게 되면서 갈등을 겪게 된다.",
                trailer: [
                    {
                        id:1,
                        title:"티저 예고편",
                        video:"z1WbVxZJN_4"
                    },
                    {
                        id:2,
                        title:"공식 예고편",
                        video:"IOWo0QruiS8"
                    }
                ]
            },
            {
                id:3,
                lank:3,
                name:"신병 시즌2",
                date:"2023년 8월 28일 ~ 2023년 9월 12일",
                poster:dramaPosterSinbyung2,
                actors:"김지석, 김민호, 남태우, 이충구, 전승훈, 장성범, 이정현, 이상진 外",
                plot: "일병만 되면 편해질 줄 알았던 신병 박민석 앞에 화생방보다 독한 중대장 오승윤이 부임하면서 펼쳐지는 파란만장한 생활관 라이프를 그린다.",
                trailer: [
                    {
                        id:1,
                        title:"1차 티저 예고편",
                        video:"4N2Z6qTm5o4"
                    },
                    {
                        id:2,
                        title:"2차 티저 예고편",
                        video:"uqm6b1O4Ucc"
                    },
                    {
                        id:3,
                        title:"메인 예고편",
                        video:"AjGdSFfcQx0"
                    }
                ]
            },
            {
                id:4,
                lank:4,
                name:"D.P 시즌2",
                date:"2023년 8월 28일 ~ 2023년 9월 12일",
                poster:dramaPosterDp2,
                actors:"김지석, 김민호, 남태우, 이충구, 전승훈, 장성범, 이정현, 이상진 外",
                plot: "일병만 되면 편해질 줄 알았던 신병 박민석 앞에 화생방보다 독한 중대장 오승윤이 부임하면서 펼쳐지는 파란만장한 생활관 라이프를 그린다.",
                trailer: [
                    {
                        id:1,
                        title:"제작 확정 예고편",
                        video:"HAkB-aQR7cI"
                    },
                    {
                        id:2,
                        title:"티저 예고편",
                        video:"1L9d3NyIt2o"
                    },
                    {
                        id:3,
                        title:"공식 예고편",
                        video:"WXLfyrmKQUc"
                    }
                ]
            }
        ],
        movie : [
            {
                id:1,
                lank:1,
                name:"스즈메의 문단속",
                date:"2023.03.08",
                poster:moviePosterSuzume,
                actors:"세례자 역: 이경태, 타케토 역: 김명준, 마츠코 역: 김하루, 이자키 역: 김현욱, 다혜진 역: 이선율 성우등",
                plot:"10대 소녀 스즈메는 우연히 문을 열게 되고, 그 안에서 쏟아져 나오는 괴물들을 문으로 다시 닫아주는 일을 하게 된다. 스즈메는 문을 닫는 일을 통해 성장하고, 세상에 대한 새로운 시각을 갖게 된다. 영화는 인간의 마음속에 존재하는 어둠과 그 어둠을 극복하는 과정을 그린다.",
                trailer: [
                    {
                        id:1,
                        title:"론칭 예고편",
                        video:"6c4GAIig9gY"
                    },
                    {
                        id:2,
                        title:"국내 1차 예고편",
                        video:"x1Y_pud2_FY"
                    },
                    {
                        id:3,
                        title:"한국어 음성판 예고편",
                        video:"N0xlY_t26zM"
                    }
                ],
            },
            {
                id:2,
                lank:2,
                name:"영웅",
                date:"2022.12.21",
                poster:moviePosterHero,
                actors:"정성화, 김고은, 나문희, 박진주 外",
                plot:"대한제국 시절, 하얼빈에서 이토 히로부미를 처단한 안중근 의사의 이야기를 다룬 영화입니다. 안중근 의사 역을 정성화가 맡아 열연을 펼쳤습니다. 영화는 안중근 의사의 삶과 사상을 통해 민족의식을 일깨우는 작품입니다.",
                trailer: [
                    {
                        id:1,
                        title:"1차 예고편",
                        video:"sHIlnOxRm0w"
                    },
                    {
                        id:2,
                        title:"2차 예고편",
                        video:"OJH2XIUs0bU"
                    },
                    {
                        id:3,
                        title:"뮤직 예고편",
                        video:"K4KR4J-yBMw"
                    }
                ],
            },
            {
                id:3,
                lank:3,
                name:"범죄의도시3",
                date:"2023.05.31",
                poster:moviePosterCrimeCity3,
                actors:"마동석, 이준혁, 아오키 무네타카 외",
                plot:"베트남 납치 살해범 검거 후 7년 뒤, 마석도는 새로운 팀원들과 함께 신종 마약 사건을 수사한다. 마석도는 야쿠자와의 대결 끝에 신종 마약을 막아내지만, 팀원 중 한 명이 목숨을 잃는다. 마석도는 복수를 위해 야쿠자와 다시 한번 맞서게 된다.",
                trailer: [
                    {
                        id:1,
                        title:"런칭 예고편",
                        video:"ZebPUYhYKNU"
                    },
                    {
                        id:2,
                        title:"티저 예고편",
                        video:"ZebPUYhYKNU"
                    },
                    {
                        id:3,
                        title:"메인 예고편",
                        video:"4p7WZmM3Bk8"
                    }
                ],
            },
            {
                id:4,
                lank:4,
                name:"가디언즈 오브 갤럭시 3",
                date:"2023.05.03",
                poster:moviePosterGog3,
                actors:"크리스 프랫, 조 샐다나, 데이브 바티스타, 카렌 길런. 폼 클레멘티에프, 빈 디젤, 브래들리 쿠퍼,숀 건, 마리아 바칼로바, 추쿠디 이우지 외",
                plot:"가디언즈 오브 갤럭시 멤버들은 로켓을 구하기 위해 새로운 세력의 위협에 맞서 위험천만한 임무를 수행한다. 로켓은 자신의 과거와 맞서며 진정한 성장을 이루고, 가디언즈 오브 갤럭시는 새로운 가족으로 거듭난다. 영화는 유머와 감동, 액션이 완벽하게 조화를 이루는 마블 스튜디오의 대표적인 작품이다.",
                trailer: [
                    {
                        id:1,
                        title:"티저 예고편",
                        video:"rMJ8qLe6q3A"
                    },
                    {
                        id:2,
                        title:"메인 예고편",
                        video:"XyHr-s3MfCQ"
                    },
                    {
                        id:3,
                        title:"디즈니+ 예고편",
                        video:"I66y9LKLejo"
                    }
                ],
            }
        ],
        music : [
            {
                id:1,
                lank:1,
                name:"",
                song:"",
                trailer: [
                    {
                        id:1,
                        title:"제작 확정 예고편",
                        video:"HAkB-aQR7cI"
                    },
                    {
                        id:2,
                        title:"제작 확정 예고편",
                        video:"HAkB-aQR7cI"
                    },
                    {
                        id:3,
                        title:"제작 확정 예고편",
                        video:"HAkB-aQR7cI"
                    },
                ]
            }
        ],
        youtube : [
            {
                id:1,
                lank:1,
                title: "",
                song: "",
                trailer: [
                    {
                        id:1,
                        title:"제작 확정 예고편",
                        video:"HAkB-aQR7cI"
                    },
                    {
                        id:2,
                        title:"제작 확정 예고편",
                        video:"HAkB-aQR7cI"
                    },
                ]
            }
        ]
    }

    return (
        <>
            <main className="container favorite sub">
                <div className="content">

                    <div className="visual-area">
                        <div className="bg" style={{backgroundImage:`url(${visualImage})`}}></div>
                        <div className="inner">
                            <h3 className="title">{new Date().getFullYear()}.{new Date().getMonth() + 1}</h3>
                        </div>
                    </div>

                    <section className="section history-tab">
                        <div className="inner">
                            <h3 className="title">카테고리</h3>
                            <Tabs>
                                <div label="인물">

                                    <ul className="lank-list person">
                                        {
                                            data.person.map((item) => {
                                                return (
                                                    <li key={item.name}>
                                                        <div className="card-box">
                                                            <span className="lank">{item.lank}</span>
                                                            <dl>
                                                                <dt style={{backgroundImage:`url(${item.image})`}}></dt>
                                                                <dd>
                                                                    <div className="info-box">
                                                                        <div><strong>이름</strong> {item.name}</div>
                                                                        <div><strong>생일</strong> {item.birth}</div>
                                                                        <div><strong>직업</strong> {item.job}</div>
                                                                        <div><strong>MBTI</strong> {item.type}</div>
                                                                        <div><strong>별명</strong> {item.nickname}</div>
                                                                        <div>
                                                                            <p><strong>대표작</strong></p>
                                                                            <div className="masterpiece">
                                                                                {
                                                                                    item.masterpiece.length > 0 ?
                                                                                        item.masterpiece.map((product)=> {
                                                                                            if (product.poster) {
                                                                                                return (
                                                                                                    <dl className="poster-item" key={product.id}>
                                                                                                        <dt><img src={product.poster} alt={product.alt}/></dt>
                                                                                                        <dd>{product.name}</dd>
                                                                                                    </dl>
                                                                                                );
                                                                                            } else if (product.video) {
                                                                                                return (

                                                                                                    <dl className="video-item" key={product.id}>
                                                                                                        <dt className="video">
                                                                                                            <iframe src={`https://www.youtube.com/embed/${product.video}`}
                                                                                                                    frameBorder="0"
                                                                                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                                                                    allowFullScreen></iframe>
                                                                                                        </dt>
                                                                                                        <dd className="video-title">{product.title}</dd>
                                                                                                    </dl>

                                                                                                );
                                                                                            } else {
                                                                                                return null;
                                                                                            }
                                                                                        })
                                                                                    : <p>데이터가 없습니다.</p>
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </dd>
                                                            </dl>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>

                                </div>
                                <div label="드라마">
                                    <ul className="lank-list drama">
                                        {
                                            data.drama.map((item) => {
                                                return(
                                                    <li key={item.id}>
                                                        <div className="card-box">
                                                            <span className="lank">{item.lank}</span>
                                                            <dl>
                                                                <dt style={{backgroundImage:`url(${item.poster})`}}></dt>
                                                                <dd className="info-box">
                                                                    <div><strong>작품명</strong> {item.name}</div>
                                                                    <div><strong>방영일</strong> {item.date}</div>
                                                                    <div><strong>출연진</strong> {item.actors}</div>
                                                                    <div><strong>줄거리</strong> {item.plot}</div>
                                                                    <div>
                                                                        <div><strong>예고편</strong></div>
                                                                        <div className="masterpiece">
                                                                        {
                                                                            item.trailer.length > 0 ?
                                                                                item.trailer.map((product) => {
                                                                                    if(product.poster) {
                                                                                        return (
                                                                                            <dl className="poster-item" key={product.id}>
                                                                                                <dt><img src={product.poster} alt={product.alt}/></dt>
                                                                                                <dd>{product.name}</dd>
                                                                                            </dl>
                                                                                        );
                                                                                    } else if(product.video) {
                                                                                        return(
                                                                                            <dl className="video-item" key={product.id}>
                                                                                                <dt className="video">
                                                                                                    <iframe src={`https://www.youtube.com/embed/${product.video}`}
                                                                                                            frameBorder="0"
                                                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                                                            allowFullScreen></iframe>
                                                                                                </dt>
                                                                                                <dd className="video-title">{product.title}</dd>
                                                                                            </dl>
                                                                                        )
                                                                                    } else {
                                                                                        return null;
                                                                                    }

                                                                                })
                                                                            : <p>데이터가 없습니다.</p>
                                                                        }
                                                                        </div>
                                                                    </div>
                                                                </dd>
                                                            </dl>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div label="영화">
                                    <ul className="lank-list movie">
                                        {
                                            data.movie.map((item) => {
                                                return(
                                                    <li key={item.id}>
                                                        <div className="card-box">
                                                            <span className="lank">{item.lank}</span>
                                                            <dl>
                                                                <dt style={{backgroundImage:`url(${item.poster})`}}></dt>
                                                                <dd className="info-box">
                                                                    <div><strong>작품명</strong> {item.name}</div>
                                                                    <div><strong>방영일</strong> {item.date}</div>
                                                                    <div><strong>출연진</strong> {item.actors}</div>
                                                                    <div><strong>줄거리</strong> {item.plot}</div>
                                                                    <div>
                                                                        <div><strong>예고편</strong></div>
                                                                        <div className="masterpiece">
                                                                            {
                                                                                item.trailer.length > 0 ?
                                                                                    item.trailer.map((product) => {
                                                                                        if(product.poster) {
                                                                                            return (
                                                                                                <dl className="poster-item" key={product.id}>
                                                                                                    <dt><img src={product.poster} alt={product.alt}/></dt>
                                                                                                    <dd>{product.name}</dd>
                                                                                                </dl>
                                                                                            );
                                                                                        } else if(product.video) {
                                                                                            return(
                                                                                                <dl className="video-item" key={product.id}>
                                                                                                    <dt className="video">
                                                                                                        <iframe src={`https://www.youtube.com/embed/${product.video}`}
                                                                                                                frameBorder="0"
                                                                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                                                                allowFullScreen></iframe>
                                                                                                    </dt>
                                                                                                    <dd className="video-title">{product.title}</dd>
                                                                                                </dl>
                                                                                            )
                                                                                        } else {
                                                                                            return null;
                                                                                        }

                                                                                    })
                                                                                    : <p>데이터가 없습니다.</p>
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </dd>
                                                            </dl>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div label="음악">
                                    <ul className="lank-list music">
                                        {
                                            data.music.map((item) => {
                                                return(
                                                    <li key={item.id}>
                                                        <div className="card-box">
                                                            <span className="lank">{item.lank}</span>
                                                            <dl>
                                                                <dt style={{backgroundImage:`url(${item.poster})`}}></dt>
                                                                <dd className="info-box">
                                                                    <div><strong>작품명</strong> {item.name}</div>
                                                                    <div><strong>방영일</strong> {item.date}</div>
                                                                    <div><strong>출연진</strong> {item.actors}</div>
                                                                    <div><strong>줄거리</strong> {item.plot}</div>
                                                                    <div>
                                                                        <div><strong>예고편</strong></div>
                                                                        <div className="masterpiece">
                                                                            {
                                                                                item.trailer.length > 0 ?
                                                                                    item.trailer.map((product) => {
                                                                                        if(product.poster) {
                                                                                            return (
                                                                                                <dl className="poster-item" key={product.id}>
                                                                                                    <dt><img src={product.poster} alt={product.alt}/></dt>
                                                                                                    <dd>{product.name}</dd>
                                                                                                </dl>
                                                                                            );
                                                                                        } else if(product.video) {
                                                                                            return(
                                                                                                <dl className="video-item" key={product.id}>
                                                                                                    <dt className="video">
                                                                                                        <iframe src={`https://www.youtube.com/embed/${product.video}`}
                                                                                                                frameBorder="0"
                                                                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                                                                allowFullScreen></iframe>
                                                                                                    </dt>
                                                                                                    <dd className="video-title">{product.title}</dd>
                                                                                                </dl>
                                                                                            )
                                                                                        } else {
                                                                                            return null;
                                                                                        }

                                                                                    })
                                                                                    : <p>데이터가 없습니다.</p>
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </dd>
                                                            </dl>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div label="유튜브">
                                    <ul className="lank-list youtube">
                                        {
                                            data.youtube.map((item) => {
                                                return(
                                                    <li key={item.id}>
                                                        <div className="card-box">
                                                            <span className="lank">{item.lank}</span>
                                                            <dl>
                                                                <dt style={{backgroundImage:`url(${item.poster})`}}></dt>
                                                                <dd className="info-box">
                                                                    <div><strong>작품명</strong> {item.name}</div>
                                                                    <div><strong>방영일</strong> {item.date}</div>
                                                                    <div><strong>출연진</strong> {item.actors}</div>
                                                                    <div><strong>줄거리</strong> {item.plot}</div>
                                                                    <div>
                                                                        <div><strong>예고편</strong></div>
                                                                        <div className="masterpiece">
                                                                            {
                                                                                item.trailer.length > 0 ?
                                                                                    item.trailer.map((product) => {
                                                                                        if(product.poster) {
                                                                                            return (
                                                                                                <dl className="poster-item" key={product.id}>
                                                                                                    <dt><img src={product.poster} alt={product.alt}/></dt>
                                                                                                    <dd>{product.name}</dd>
                                                                                                </dl>
                                                                                            );
                                                                                        } else if(product.video) {
                                                                                            return(
                                                                                                <dl className="video-item" key={product.id}>
                                                                                                    <dt className="video">
                                                                                                        <iframe src={`https://www.youtube.com/embed/${product.video}`}
                                                                                                                frameBorder="0"
                                                                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                                                                allowFullScreen></iframe>
                                                                                                    </dt>
                                                                                                    <dd className="video-title">{product.title}</dd>
                                                                                                </dl>
                                                                                            )
                                                                                        } else {
                                                                                            return null;
                                                                                        }

                                                                                    })
                                                                                    : <p>데이터가 없습니다.</p>
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </dd>
                                                            </dl>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </Tabs>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Favorite