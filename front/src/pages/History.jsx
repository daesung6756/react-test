import {useEffect, useState} from "react";

import '../assets/css/pages/history.css'

import visualImage from "../assets/images/visual/history-visual01.jpg";

const History = () =>{
    const historyList = [
        {
            years:"2024",
            projects :[
                {
                    id:49,
                    month:"05",
                    title: "MCE(Marketing Cloud Engagement) Journey Builder 연계 / 외부 사이트의 고객 식별 행동데이터 추적 SI 작업 및 테스트",
                    src:[],
                    lists: [
                        '개발 환경 구축 ( Node )',
                        'Server 구축 및 배포 (Render)',
                        'MCE Journey Builder 및 DE 제작',
                        '외부 사이트 환경 고객 식별 로직, REST API 작업',
                    ]
                },
                {
                    id:48,
                    month:"04",
                    title: "MCE(Marketing Cloud Engagement) Journey Builder 내부 Custom Activity 카카오톡/문자메시지 전송 UI 제작",
                    src:[],
                    lists: [
                        '개발 환경 구축 (Node)',
                        'Server 구축 및 배포 (Render)',
                        '알림톡/친구톡/문자메시지 전송 관련 UI 설계',
                        '알림톡/친구톡/문자메시지 전송 관련 UI 제작 (빌드 없는 CommonJs 모듈 형태)',
                        '미완료 상태'
                    ]
                },
                {
                    id:47,
                    month:"03",
                    title: "MCP(Marketing Cloud Personalization) 활용하여 The START 사이트 분석 및 캡쳐 & 다이나믹컨텐츠 활용",
                    src:[],
                    lists: [
                        'MCP 비콘파일 컨트롤하는 자바스크립트 설정',
                        '익명의 접속자 고객 식별 작업',
                        'SPA에 대한 데이터 캡쳐 방법 연구',
                        'Automation USER 정보 ETL 처리',
                        '다이나믹 컨텐츠 제작 및 노출 5가지 타입',
                    ]
                },
                {
                    id:46,
                    month:"02",
                    title: "MCE(Marketing Cloud Engagement) Journey Builder : Entry (API Event) Data Intergration Test",
                    src:[],
                    lists: [
                        'DE 및 Journey Builder 제작',
                        'REST API 테스트 (Postman 활용)',
                    ]
                },
                {
                    id:45,
                    month:"01",
                    title: "MCE(Marketing Cloud Engagement) Journey Builder : Entry (API Event) Data Intergration Test",
                    src:[],
                    lists: [
                        'DE 및 Journey Builder 제작',
                        'REST API 테스트 (Postman 활용)',
                    ]
                },
            ]
        },
        {
            years:"2023",
            projects :[
                {
                    id:44,
                    month:"12",
                    title: "SC(Sales Cloud) or DB(Data Base)의 대용량 데이터 MCE FTP DE화 Automation tool 자동화 처리 구현",
                    src:[],
                    lists: [
                        'MCE FTP 계정 생성',
                        'Automation File Drop 트리거로 자동화 로직 구현',
                        '파일질라 프로그램 활용 파일 드랍 상황 테스트 진행',
                        '42만건 레코드 정상 등록 확인 (라이센스 문제 일 수도)',
                        '레코드내 누락되는 필드 케이스 분석 및 자료화'
                    ]
                },
                {
                    id:43,
                    month:"09",
                    title: "전남대학교 MCAE Prototype 프로젝트",
                    src:[],
                    lists: [
                        '(적응형) ESG EDM 제작',
                        '(반응형) ESG lead form Landing page (Experience Builder + LWC)제작',
                    ]
                },
                {
                    id:42,
                    month:"",
                    title: "경일대학교 MCAE Prototype 프로젝트",
                    src:[],
                    lists: [
                        '(적응형) ESG EDM 제작',
                        '(반응형) Landing page (Experience Builder)제작',
                    ]
                },
                {
                    id:41,
                    month:"08",
                    title: "포스코홀딩스 MCAE Prototype 프로젝트",
                    src:[],
                    lists: [
                        '(적응형) ESG EDM 제작',
                        '(반응형) ESG lead form Landing page 제작'
                    ]
                },
                {
                    id:40,
                    month:"",
                    title: "삼성바이오로직스 [Salesforce MCAE] 고도화 작업",
                    src:[],
                    lists: [
                        '(반응형) Lead form Landing page Multi Checkbox field added',
                        '(반응형) MCAE Lead form calendly connect 검토'
                    ]
                },
                {
                    id:39,
                    month:"07",
                    title: "DKBMC 내부 MCAE 고도화 프로젝트",
                    src:[],
                    lists: [
                        '(반응형) DKBMC 전체 사이트 lead form 리뉴얼',
                        '(반응형) MCAE Preferences page',
                        '(반응형) MCAE lead form page 제작'
                    ]
                },
                {
                    id:38,
                    month:"06",
                    title: "현대자동차 Connex [Salesforce 구축] 개발 지원",
                    src:[],
                    lists: [
                        '(반응형) SMS,MMS,KAKAO,SURVEY Tab page 제작 기존 UI/UX 수정',
                    ]
                },
                {
                    id:37,
                    month:"05",
                    title: "삼성바이오로직스 [Salesforce MCAE] 고도화 작업",
                    src:[],
                    lists: [
                        '(적응형) EDM TYPE 3가직',
                        '(반응형) Lead form Landing page TYPE 5가지 제작',
                    ]
                },
                {
                    id:36,
                    month:"02",
                    title: "LG 디스플레이 웹사이트 운영",
                    src:[],
                    lists: [
                        '(반응형) 컨텐츠 수정 및 비쥬얼 페이지 제작',
                    ]
                },
                {
                    id:35,
                    month:"01",
                    title: "콘센트릭스 삼성 대쉬보드 운영",
                    src:[],
                    lists: [
                        '신규 UI 추가 및 기존 페이지 확장 작업',
                    ]
                },
            ]
        },
        {
            years:"2022",
            projects :[
                {
                    id:34,
                    month:"12",
                    title:" [GLOBAL] 2.0 한국타이어 글로벌 사이트 운영",
                    src:[],
                    lists: ['2022년 5월 ~ 2022년 12월','nodeJs로 제작되어 AEM 시스템에 대한 운영 환경 방식 조성', '신규 UI 제작 및 기존 UI 고도화']
                },
                {
                    id:33,
                    month:"",
                    title:"[LOCAL] 라우펜 글로벌 사이트 운영",
                    src:[],
                    lists: ['2020년 3월 ~ 2022년 12월', '신규 UI 제작 및 기존 UI 고도화']
                },
                {
                    id:32,
                    month:"",
                    title:"[KO][EN] 한국타이어 모터스포츠 운영",
                    src:[],
                    lists: ['2020년 9월 ~ 2022년 12월', '신규 UI 제작 및 기존 UI 고도화 이벤트 페이지 제작']
                },
                {
                    id:31,
                    month:"09",
                    title:"[KO][EN] 한국타이어 모터스포츠 구축",
                    src:[],
                    lists: ['(반응형) nodejs 웹 사이트 구축']
                },
                {
                    id:30,
                    month:"05",
                    title:"[GLOBAL] 1.0 한국타이어 글로벌 사이트 운영 업무",
                    src:[],
                    lists: ['2020년 4월 ~ 2022년 5월','(적응형) 신규 UI 제작 및 기존 UI 고도화 이벤트 페이지 제작']
                },
                {
                    id:29,
                    month:"01",
                    title:"[ar-AE] 삼성 CPC 멤버쉽용 FAQ 중동 RTL 소스 작업 (25p)",
                    src:[],
                    lists: ['(반응형) 페이지 제작']
                }
            ]
        },
        {
            years:"2021",
            projects :[
                {
                    id:28,
                    month:"12",
                    title: "[KR] 셀퓨전 브랜드 스토리 수정 작업",
                    src:[],
                    lists: ['오류 수정 및 UI 리뉴얼 작업']
                },
                {
                    id:27,
                    month:"",
                    title: "[KR] 롯데모바일 상품권 메인 페이지 수정 작업",
                    src:[],
                    lists: ['UI 고도화 작업']
                },
                {
                    id:26,
                    month:"01",
                    title: "[GLOBAL] 한국 타이어 제품 상세 페이지 사이드 컨텐츠 고도화 작업",
                    src:[],
                    lists: ['UI 고도화 작업']
                }
            ]
        },
        {
            years:"2020",
            projects :[
                {
                    id:25,
                    month:"10",
                    title: "[KR] 한국타이어 윈터아이셉트 브랜드 페이지 제작",
                    src:[],
                    lists: ['신규 브랜드 페이지 제작','운영 업무와 별개의 추가 계약 건']
                },
                {
                    id:24,
                    month:"07",
                    title: "[KR] 티스테이션 웹사이트 운영",
                    src:[],
                    lists: ['2020년 4월 ~ 2020년 7월', '이벤트 페이지 작업']
                },
                {
                    id:23,
                    month:"",
                    title: "[KR] 한국타이어 벤투스 브랜드 페이지 리뉴얼",
                    src:[],
                    lists: ['UI 고도화 작업']
                },
                {
                    id:22,
                    month:"01",
                    title: "T World Direct 웹사이트 운영",
                    src:[],
                    lists: ['2018년 12월 ~ 2020년 01월','신규 UI 제작 및 기존 UI 고도화 이벤트 페이지 제작']
                }
            ]
        },
        {
            years:"2018",
            projects :[
                {
                    id:21,
                    month:"12",
                    title: "삼성 멀티캠퍼스 청년 SW 아카데미 구축",
                    src:[],
                    lists: ['2018년 8월 ~ 2018년 12월','청년 SW 아카데미 웹사이트 구축']
                },
                {
                    id:20,
                    month:"07",
                    title: "프론트엔드 하나투어 모하지 구축 프로젝트",
                    src:[],
                    lists: ['2018년 3월 ~ 2018년 7월', 'nodejs, VUE, webpack 구성']
                }
            ]
        },
        {
            years:"2017",
            projects :[
                {
                    id:19,
                    month:"12",
                    title: "아모레 퍼시픽 사회 공헌 CSR 웹사이트 구축",
                    src:[],
                    lists: ['2017년 9월 ~ 2017년 12월','(반응형) 웹 접근성 마크 획득 웹사이트 구축']
                },
                {
                    id:18,
                    month:"08",
                    title: "인터파크 엔터테인먼트 웹사이트 구축",
                    src:[],
                    lists: ['2017년 7월 ~ 2017년 8월', '(적응형) 웹 사이트 구축']
                },
                {
                    id:17,
                    month:"07",
                    title: "삼성 클라우드 웹사이트 제안용 프로토타입 구축",
                    src:[],
                    lists: ['2017년 5월 ~ 2017년 7월', '(반응형) 웹 사이트 구축']
                },
                {
                    id:16,
                    month:"06",
                    title: "법무법인 율촌 웹사이트 구축 지원",
                    src:[],
                    lists: ['2017년 6월', '(반응형) 웹 사이트 구축 지원,미완성 페이지 및 오류 페이지 수정 진행']
                },
                {
                    id:15,
                    month:"",
                    title: "Cj ONE 모바일 고도화 프로토타입 구축",
                    src:[],
                    lists: ['2017년 6월', '(적응형) 모바일 웹 사이트 고도화 구축']
                },
                {
                    id:14,
                    month:"04",
                    title: "본아이에프 웹사이트 리뉴얼 구축",
                    src:[],
                    lists: ['2017년 2월 ~ 2017년 4월', '(반응형) 웹 사이트 구축 지원','미완성 페이지 및 오류 페이지 수정 진행']
                },
                {
                    id:13,
                    month:"",
                    title: "현대 일렉트로닉 PC 웹사이트 구축",
                    src:[],
                    lists: ['2017년 3월 ~ 2017년 4월', '(적응형) PC 웹 사이트 구축']
                },
                {
                    id:12,
                    month:"01",
                    title: "피자헛 AS-IS 웺 사이트 운영",
                    src:[],
                    lists: ['2016년 7월 ~ 2017년 1월', '신규 UI 제작 및 기존 UI 고도화 작업']
                },
                {
                    id:11,
                    month:"",
                    title: "이모션 런드리타임 페이지 제작",
                    src:[],
                    lists: ['2017년 1월', '오프더레코드 담당자에게 메일 전송 되는 페이지 제작']
                },
                {
                    id:10,
                    month:"",
                    title: "피자헛 To-be 사이트 리뉴얼 구축",
                    src:[],
                    lists: ['2017년 1월', '미완성 페이지 및 오류 페이지 수정 진행']
                }
            ]
        },
        {
            years:"2016",
            projects :[
                {
                    id:9,
                    month:"05",
                    title: "패밀리투 메인 웹 사이트 운영",
                    src:[],
                    lists: ['2013년 1월 ~ 2016년 5월','(적응형) 신규 UI 제작 및 기존 UI 고도화','컨텐츠 업데이트']
                },
                {
                    id:8,
                    month:"",
                    title: "패밀리투 인력 모집 PC 웹 사이트 구축",
                    src:[],
                    lists: ['2016년 5월','(적응형) PC 웹 사이트 구축']
                },
                {
                    id:7,
                    month:"04",
                    title: "패밀리투 메인사이트 모바일용 Admin 구축",
                    src:[],
                    lists: ['2016년 3월 ~ 2016년 4월', '(적응형) 모바일 어드민 웹 사이트 구축']
                },
                {
                    id:6,
                    month:"02",
                    title: "패밀리투 메인 웹 사이트 2차 리뉴얼 구축",
                    src:[],
                    lists: ['2015년 6월 ~ 2016년 2월', '(반응형) 웹 사이트 구축']
                },

            ]
        },
        {
            years:"2015",
            projects :[
                {
                    id:5,
                    month:"05",
                    title: "패밀리투 메인 웹 사이트 운영",
                    src:[],
                    lists: ['2013년 1월 ~ 2016년 5월','(적응형) 신규 UI 제작 및 기존 UI 고도화','컨텐츠 업데이트']
                },
                {
                    id:4,
                    month:"",
                    title: "패밀리투 법률 ARS PC 웹 사이트 구축",
                    src:[],
                    lists: ['2015년 3월 ~ 2015년 5월','(적응형) PC 웹 사이트 구축']
                },
                {
                    id:3,
                    month:"03",
                    title: "패밀리투 운세 ARS 2차 PC 웹 사이트 구축",
                    src:[],
                    lists: ['2014년 6월 ~ 2015년 3월', '(적응형) PC 웹 사이트 구축']
                }
            ]
        },
        {
            years:"2014",
            projects :[
                {
                    id:2,
                    month:"05",
                    title: "패밀리투 운세 ARS 1차 PC 웹 사이트 구축",
                    src:[],
                    lists: ['2013년 10월 ~ 2014년 5월','(적응형) PC 웹 사이트 구축']
                }
            ]
        },
        {
            years:"2013",
            projects :[
                {
                    id:1,
                    month:"09",
                    title: "패밀리투 메인사이트 1차 리뉴얼 구축",
                    src:[],
                    lists: ['2013년 1월 ~ 2013년 9월','(적응형) PC, MOBILE 웹 사이트 구축']
                }
            ]
        }
    ]

    const [scrollPosition, setScrollPosition ] = useState(0);
    const [scrollPersonTop, setScrollPersonTop ] = useState("-80px");

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
        setScrollPersonTop(position - 369)
    };

    useEffect(() => {
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