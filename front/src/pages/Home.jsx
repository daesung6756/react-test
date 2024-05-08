import { useState } from "react";
import { Titles } from "../components/Titles/index.jsx";
import { Card } from "../components/Card/index.jsx";
import Canvas from "../components/canvas.jsx";

import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, EffectCoverflow } from 'swiper/modules';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faCaravan, faCode, faHouseChimneyUser, faPlus, faCamera, faSyringe,faLink,faFont} from "@fortawesome/free-solid-svg-icons"
import {faJs, faCss3Alt, faNode, faReact, faGithub, faSass, faVuejs, faGulp,faSalesforce} from "@fortawesome/free-brands-svg-icons"
library.add(faPause, faPlay, faCaravan, faJs,faCss3Alt,faCode, faNode,faReact,faGithub, faSass, faVuejs, faGulp, faSalesforce,faHouseChimneyUser, faPlus, faCamera, faSyringe,faLink,faFont)

import '../assets/css/pages/home.css'
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


const Home = () =>  {
    const visualSwiperDelay = 5000;
    const [visualSwiper, setVisualSwiper] = useState(null);
    let [isAutoplay, setIsAutoplay] = useState(true);
    let [isShowTiming, setIsShowTiming] = useState(null);
    const [loadingBar, setLoadingBar] = useState(false);
    const [firstMsg, setFirstMsg] = useState(false);

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
            icon:faJs,
            iconColor:"#ffbb00"
        },
        {
            title: "Typescript",
            desc: "Boolean ,Number ,String ...",
            dir: "right",
            color:"#fff",
            background:"#3178c6",
            icon:faTs,
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
            title: "React",
            desc: "useState",
            dir: "right",
            color:"#61dafb",
            background:"#282c34",
            icon:faReact,
            iconColor:"rgb(97, 218, 251)"
        },
        {
            title: "Vue",
            desc: "v-model,on,if,bind,html@....v-_-",
            dir: "center",
            color:"#000",
            background:"#f3daae",
            icon:faVuejs,
            iconColor:"#3fb27f"
        },
        {
            title: "Svelte",
            desc: ".svelte ........svt?",
            dir: "left",
            color:"#fff",
            icon: faSvelte,
            background:"#fb4303",
        },
        {
            title: "Salesforce LWC",
            desc: "lwc:if: ... lwc:else",
            dir: "right",
            color:"#fff",
            icon: faSalesforceLWC,
            background:"#008fff",
        },
        {
            title: "Marketing Cloud Account Engagement",
            desc: "Salesforce B2B Solution / engagement studio, form, form handler, landing page ...",
            dir: "center",
            color:"#fff",
            icon: faSalesforce,
            background:"#008fff",
            iconColor:"#fff"
        },
        {
            title: "Marketing Cloud Engagement",
            desc: "Salesforce B2C Solution / journey builder, web builder, email studio, cloud page ...",
            dir: "left",
            color:"#333",
            icon: faSalesforce,
            background:"#f49800",
            iconColor:"#fff"
        },
        {
            title: "Sales Cloud",
            desc: "Salesforce core cloud Solution / leads, account, opportunity, contact ....",
            dir: "center",
            color:"#fff",
            icon: faSalesforce,
            background:"#008fff",
            iconColor:"#fff"
        },
        {
            title: "Experience Cloud",
            desc: "community cloud Solution & builder,create micro-site",
            dir: "right",
            color:"#fff",
            icon: faSalesforce,
            background:"#008fff",
            iconColor:"#fff"
        },
        {
            title: "Gulp",
            desc: "gulp.task(('name')=>{}) .pipe().pipe().pipe()",
            dir: "right",
            color:"#fff",
            background:"#999",
            icon:faGulp,
            iconColor:"#d5504d"
        },
        {
            title: "Webpack",
            desc: "webpack.config.js....",
            dir: "center",
            color:"#fff",
            background:"#2b3a42",
            icon:faWebpack,
            iconColor:"#fff"
        },
        {
            title: "Vite",
            desc: "npm create vite@latest",
            dir: "right",
            color:"#fff",
            background:"#33373f",
            icon:faVite,
            iconColor:"#fff"
        },
        {
            title: "Github",
            desc: "pull commit push, pull commit push,pull commit push...",
            dir: "center",
            color:"#000",
            background:"#c6fff1",
            icon:faGithub,
            iconColor:"#000000"
        },
        {
            title: "Tortoise SVN",
            desc: "update commit, update commit, update commit...",
            dir: "left",
            color:"#000",
            background:"#c6fff1",
            icon:faTortoiseSVN
        },
        {
            title: "SCSS",
            desc: "$ __ & @",
            dir: "left",
            color:"#fff",
            background:"#cf649a",
            icon:faSass,
            iconColor:"#fff"
        },
        {
            title: "Photoshop",
            desc: "...psd",
            dir: "right",
            color:"#fff",
            background:"#11208d",
            icon:faPhotoshop,
            iconColor:"#fff"
        },
        {
            title: "XD",
            desc: "Design Prototype... search",
            dir: "left",
            color:"#fff",
            background:"#9807fd",
            icon:faXD,
            iconColor:"#fff"
        },
        {
            title: "AEM",
            desc: "Adobe Experience Manager",
            dir: "left",
            color:"#fff",
            background:"#251506",
            icon:faAEM,
            iconColor:"#fff"
        },
        {
            title: "Firebase",
            desc: "firebase deploy..",
            dir: "right",
            color:"#fff",
            background:"#251506",
            icon:faFirebase,
            iconColor:"#fff"
        },
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
    const timingArray = [
        "잠시 명상을 해보세요.",
        "종이와 펜을 가져와 생각을 정리해보세요.",
        "깊은 숨을 세 번 들이마셔주세요.",
        "잠시 외부로 걸어나가 상쾌한 공기를 마셔보세요.",
        "눈을 감고 10분간 아무 생각도 하지 않으려 노력하세요.",
        "친구나 가족에게 문제를 상담해보세요.",
        "문제의 원인과 해결 방안을 명확히 정의해보세요.",
        "다른 관점에서 문제를 바라보려고 노력하세요.",
        "이 문제를 5년 뒤에도 기억할까요? 생각해보세요.",
        "짧은 휴식을 취하고 다시 고민에 대해 생각해보세요.",
        "적당한 운동으로 스트레스를 해소해보세요.",
        "음악을 들으며 잠시 마음을 편안하게 하세요.",
        "바쁜 일상을 벗어나 당신만의 시간을 가지세요.",
        "습관적인 생각에서 벗어나 새로운 관점을 탐색하세요.",
        "당신의 감정을 그림이나 글로 표현해보세요.",
        "문제를 작은 부분으로 나누어 접근해보세요.",
        "당신이 통제할 수 없는 요소에 대해 너무 걱정하지 마세요.",
        "지금 이 순간에만 집중해보세요.",
        "긍정적인 생각과 마음가짐을 유지하세요.",
        "변화를 받아들이려고 노력하세요.",
        "당신의 직감을 믿어보세요.",
        "당신의 가치는 현재의 문제로 결정되지 않습니다.",
        "목표를 재정의하고 다시 시작하세요.",
        "고민을 다른 사람과 공유하면서 해결 방안을 찾아보세요.",
        "어려움을 경험으로 바라보려고 노력하세요.",
        "지금의 어려움도 지나갈 것입니다.",
        "피드백을 받아볼 용기를 가져보세요.",
        "일기를 써보며 하루를 회고해보세요.",
        "새로운 활동이나 취미를 시작해보세요.",
        "모든 가능성을 열어두고 생각해보세요.",
        "인생의 큰 그림을 생각하며 지금의 문제를 상대화하세요.",
        "잠시 멀리 떨어져 문제를 객관적으로 바라보세요.",
        "새로운 경험을 적극적으로 탐색해보세요.",
        "다양한 사람들의 이야기와 경험을 들어보세요.",
        "자신을 위한 작은 선물을 준비해 힘을 얻으세요.",
        "완벽을 추구하기보다는 '좋은' 것에 만족해보세요.",
        "시간을 설정하고 그 안에서 문제 해결에 집중하세요.",
        "정해진 시간 안에 결정을 내려보세요.",
        "변화의 필요성을 인식하고 계획을 세우세요.",
        "다시 시작하는 것에 대한 두려움을 버리세요.",
        "당신의 성공 경험을 회고해보세요.",
        "잠시 스마트폰과 컴퓨터를 멀리하고 생각에 잠기세요.",
        "가장 가까운 도서관을 방문해보세요.",
        "가장 편안한 장소에서 잠시 휴식을 취하세요.",
        "문제를 피하기보다는 직면하려고 노력하세요.",
        "사소한 것에서도 기쁨을 찾아보세요.",
        "지금 이 문제를 해결하기 위한 첫 번째 단계는 무엇일까요?",
        "일주일간 일기를 쓰면서 자신의 감정을 파악해보세요.",
        "자신을 위해 하루 10분간 명상의 시간을 가져보세요.",
        "어제의 나와 비교하며 성장하려 노력하세요.",
        "비슷한 고민을 겪은 사람의 이야기나 글을 찾아보세요.",
        "고민의 원인이 되는 것을 잠시 멈춰보세요.",
        "좋아하는 음식을 만들어 먹으며 기분전환을 해보세요.",
        "목표를 세우고 그에 따른 작은 행동을 시작해보세요.",
        "사람들의 기대에서 벗어나 자신만의 길을 찾아보세요.",
        "인터넷에서 관련 정보나 해결법을 검색해보세요.",
        "난관을 극복한 사람들의 이야기를 들어보세요.",
        "고민을 노래나 춤으로 표현해보세요.",
        "끈기를 갖고 문제 해결에 임하세요.",
        "하루의 시작과 끝에 감사의 마음을 느껴보세요.",
        "자신에게 힘든 시간 동안 어떻게 대처했는지 물어보세요.",
        "책을 읽으며 다양한 관점을 탐색해보세요.",
        "자신의 감정을 그대로 받아들이세요.",
        "주변 사람들에게 직접 도움을 청해보세요.",
        "당신만의 소중한 가치를 인식하세요.",
        "다가오는 휴일에는 스스로를 위한 시간을 가져보세요.",
        "자신의 감정을 솔직하게 표현하세요.",
        "어릴 때의 꿈을 회상해보세요.",
        "일상에서 변화를 주는 행동을 시도해보세요.",
        "자신의 신념을 믿고 나아가세요.",
        "마음의 준비가 되면 문제에 재도전하세요.",
        "당신의 의견은 중요하니 자신감을 갖고 표현하세요.",
        "시간이 해결해주기도 합니다. 잠시 기다려보세요.",
        "고민을 공유하는 것만으로도 큰 도움이 됩니다.",
        "새로운 환경에서 새로운 시작을 해보세요.",
        "현실을 받아들이고 다음 단계를 계획하세요.",
        "부정적인 생각을 멈추고 긍정적인 마인드로 바꿔보세요.",
        "자주 웃어보세요. 웃음은 최고의 약입니다.",
        "사소한 변화부터 시작하여 큰 변화를 준비하세요.",
        "지금의 자신을 위로하며, 미래의 나를 기대해보세요.",
        "자신의 감정을 정직하게 표현하세요.",
        "상대방의 감정과 생각을 존중하세요.",
        "서로를 위한 시간을 꾸준히 갖으세요.",
        "좋은 추억을 만들기 위해 노력하세요.",
        "서로의 의견 차이를 인정하고 이해하세요.",
        "자주 대화하며 소통하세요.",
        "서로의 성장을 응원하세요.",
        "상대방을 비판하기 전에 이해를 시도하세요.",
        "힘든 시기에도 서로를 의지하세요.",
        "서로의 장점을 자주 칭찬하세요.",
        "낭만적인 순간을 함께 만드세요.",
        "서로의 단점을 수용하세요.",
        "정기적인 데이트 시간을 갖으세요.",
        "서로의 취미나 관심사를 공유하세요.",
        "서로를 위한 작은 선물을 주세요.",
        "기대와 현실의 괴리를 인식하세요.",
        "상대방의 의견을 경청하세요.",
        "서로의 경험과 이야기를 나누세요.",
        "상대방의 기분 변화에 민감해지세요.",
        "서로에게 필요한 공간과 시간을 주세요.",
        "상대방을 믿으세요.",
        "존경과 사랑의 마음으로 대화하세요.",
        "함께 웃으며 즐거운 시간을 보내세요.",
        "서로의 비밀을 지키세요.",
        "충돌 시 서로의 입장에서 생각해보세요.",
        "사랑의 표현 방법을 다양하게 가져보세요.",
        "서로의 가족을 존중하고 이해하세요.",
        "서로의 미래에 대해 이야기하세요.",
        "추억을 기록하며 함께 회상하세요.",
        "서로를 위한 작은 서프라이즈를 준비하세요.",
        "서로의 친구들과 좋은 관계를 유지하세요.",
        "신뢰와 안정감을 주세요.",
        "함께 새로운 경험을 시도하세요.",
        "사랑하는 마음을 꾸준히 표현하세요.",
        "상대방의 꿈과 목표를 응원하세요.",
        "서로의 문화와 배경을 존중하세요.",
        "서로의 편이 되어주세요.",
        "상대방을 생각할 때 긍정적으로 생각하세요.",
        "서로의 일상을 관심있게 들어주세요.",
        "상대방이 기뻐하는 것을 찾아주세요.",
        "기쁨과 슬픔을 함께 나누세요.",
        "상대방의 감정을 깊이 이해하려 노력하세요.",
        "서로를 위한 따뜻한 위로의 말을 건네세요.",
        "함께 공부하거나 취미를 나누세요.",
        "서로를 위해 감사의 마음을 잊지 마세요.",
        "상대방의 성격과 습관을 수용하세요.",
        "서로의 관심사에 호기심을 가져보세요.",
        "상대방이 슬플 때 위로의 말을 건네세요.",
        "서로의 생각과 의견을 공유하세요.",
        "상대방과의 추억을 소중히 여기세요.",
        "불편한 사항은 직접적이고 건설적으로 이야기하세요.",
        "서로의 감정 변화에 주의 깊게 대응하세요.",
        "상대방의 일상에 관심을 가져주세요.",
        "서로에게 특별한 날을 만들어보세요.",
        "함께 소소한 즐거움을 찾아보세요.",
        "서로를 위한 진심어린 경청자가 되세요.",
        "상대방의 건강을 챙기세요.",
        "서로의 개인적인 공간을 존중하세요.",
        "상대방의 선택을 지지하세요.",
        "서로를 위한 작은 배려를 실천하세요.",
        "상대방과의 약속을 지키세요.",
        "서로를 위한 진심어린 피드백을 주세요.",
        "상대방과의 의견 차이를 겸손하게 받아들이세요.",
        "서로의 성장을 위한 시간을 가지세요.",
        "상대방과의 미래를 계획해보세요.",
        "서로의 존재를 당연시하지 말고 소중히 여기세요.",
        "상대방과의 소통을 위해 노력하세요.",
        "서로에 대한 믿음을 키워가세요.",
        "상대방과 함께 추억을 만드는 여행을 가보세요.",
        "서로의 단점도 긍정적으로 바라보세요.",
        "상대방을 위해 기도하세요.",
        "서로에 대한 감사의 마음을 표현하세요.",
        "상대방과의 시간을 최우선으로 생각하세요.",
        "서로의 의견을 중요하게 생각하세요.",
        "상대방의 취미나 관심사에 관심을 가져보세요.",
        "서로를 위한 화목한 가정을 만들어가세요.",
        "상대방과의 관계를 지속적으로 발전시켜가세요.",
        "서로의 인생 이야기를 나누세요.",
        "상대방과의 유쾌한 순간을 많이 만들어보세요.",
        "서로에게 필요한 휴식의 시간을 제공하세요.",
        "상대방의 생각과 감정을 존중하세요.",
        "서로를 위한 의미 있는 행동을 실천하세요.",
        "상대방과 함께 꿈을 이야기하세요.",
        "서로를 위한 따뜻한 위로와 격려를 주세요.",
        "상대방의 존재와 가치를 인정하세요.",
        "서로를 위한 의미 있는 선물을 생각해보세요.",
        "상대방과의 관계를 끊임없이 성장시키세요.",
        "서로의 미래와 꿈을 함께 그려보세요.",
        "상대방을 위해 좋은 음식을 준비해보세요.",
        "서로의 존재를 소중하게 생각하세요.",
        "상대방과의 감정의 교류를 중요하게 생각하세요.",
        "서로의 삶을 향한 응원과 격려를 주세요.",
        "상대방의 일과 취미에 관심을 보여주세요.",
        "서로를 위한 신뢰와 의지를 갖게 해주세요.",
        "상대방과 함께하는 시간을 소중히 생각하세요.",
        "서로의 의견과 생각을 깊이 공감하세요.",
        "상대방의 삶과 꿈을 응원하세요.",
        "서로의 마음과 감정을 소중하게 다루세요.",
        "상대방과의 관계를 위해 서로를 이해하세요.",
        "서로의 사랑을 지속적으로 갱신하고 발전시키세요.",
        "자신을 사랑하고 존중하세요.",
        "매일 아침 일찍 일어나세요.",
        "정기적으로 목표를 세우고 검토하세요.",
        "자신의 감정을 솔직하게 표현하세요.",
        "힘든 시기에는 도움을 청하시길.",
        "건강을 위해 매일 운동하세요.",
        "일상에서 작은 행복을 찾으세요.",
        "타인의 의견에 귀 기울이세요.",
        "자신의 장점을 발견하고 활용하세요.",
        "매일 밤 자기 전에 감사의 마음으로 하루를 회고하세요.",
        "새로운 경험을 두려워하지 마세요.",
        "자주 웃으며 긍정적인 태도를 유지하세요.",
        "타인과의 관계에서 서로를 이해하려 노력하세요.",
        "스스로를 계속해서 도전하며 성장하세요.",
        "일상 속에서의 여유를 찾아보세요.",
        "타인에게 친절하고 배려하세요.",
        "자신의 몸과 마음을 돌보세요.",
        "지속적으로 새로운 지식을 습득하세요.",
        "자연을 즐기며 스트레스를 해소하세요.",
        "자신의 선택과 결정을 믿으세요.",
        "힘든 시기에는 휴식을 취하세요.",
        "새로운 취미를 시작하며 일상에 다양성을 더하세요.",
        "타인의 차별과 비판에 휘둘리지 마세요.",
        "지속적으로 자신과 대화하며 내면을 탐색하세요.",
        "시간 관리를 통해 효율적인 생활을 실천하세요.",
        "가족과의 소통을 꾸준히 유지하세요.",
        "인생의 의미와 가치에 대해 깊이 생각하세요.",
        "독서를 통해 생각의 폭을 넓히세요.",
        "변화에 유연하게 대처하세요.",
        "인생의 소중한 순간들을 기록하세요.",
        "감사의 마음으로 타인에게 도움을 주세요.",
        "매일 잠들기 전, 다음 날의 계획을 세우세요.",
        "문제와 위기의 시기에도 자신을 믿으세요.",
        "스스로를 위한 작은 선물을 주세요.",
        "자신의 꿈과 열정을 잃지 않으세요.",
        "인생의 큰 그림을 보며 선택하세요.",
        "새로운 사람들과의 관계를 형성하며 네트워크를 확장하세요.",
        "타인의 성공을 축하하며 함께 기뻐하세요.",
        "매일 건강한 식습관을 유지하세요.",
        "자신의 무의식을 탐색하며 성장의 기회를 찾으세요.",
        "인생의 소소한 즐거움을 찾아보세요.",
        "힘든 일이 있을 때, 깊게 숨을 쉬세요.",
        "자주 여행을 가며 다양한 경험을 얻으세요.",
        "다양한 문화와 사람들을 이해하려 노력하세요.",
        "지속적으로 자신의 가치와 신념을 확인하세요.",
        "자신의 감정과 마음의 상태를 주기적으로 점검하세요.",
        "자신만의 시간을 만들어 휴식과 명상을 하세요.",
        "스스로를 비판하기 전에 칭찬하고 격려하세요.",
        "불안과 걱정을 풀어내는 방법을 찾으세요.",
        "다양한 활동과 경험을 통해 인생의 밸런스를 유지하세요.",
        "타인과의 관계에서도 자신의 가치를 잊지 마세요.",
        "매일 아침, 긍정적인 아침 명상을 실천하세요.",
        "자신의 몸과 마음의 신호를 민감하게 받아들이세요.",
        "스스로를 위한 시간을 충분히 갖으세요.",
        "자신의 삶의 목표와 방향성을 세우세요.",
        "타인과의 갈등 상황에서도 차분하게 대처하세요.",
        "자신의 삶과 선택을 스스로 주도하세요.",
        "매일 자신의 몸과 마음을 스트레칭하세요.",
        "주기적으로 삶의 우선순위를 재정비하세요.",
        "타인의 행복을 지지하고 함께 기뻐하세요.",
        "자신의 삶에 대한 만족도를 주기적으로 점검하세요.",
        "자주 자연 속에 있어 마음의 평온함을 얻으세요.",
        "인생의 중요한 결정에 있어서는 심도 있게 생각하세요.",
        "자신의 삶의 스토리를 스스로 쓰세요.",
        "변화와 성장을 위해 지속적으로 노력하세요.",
        "자신의 삶에 대한 책임감을 갖으세요.",
        "일상에서의 스트레스를 관리하는 방법을 찾으세요.",
        "인생의 변화를 받아들이며 유연성을 유지하세요.",
        "자신만의 원칙과 기준을 세우세요.",
        "타인의 생각과 기대에서 벗어나 자신만의 길을 걷으세요.",
        "매일 자신을 칭찬하며 자신감을 키우세요.",
        "마음의 평화와 휴식을 찾는 시간을 갖으세요.",
        "자주 나를 돌아보며 반성하고 성장하세요.",
        "자신의 감정과 생각을 타인과 공유하세요.",
        "인생의 어려움을 극복하는 방법을 찾으세요.",
        "스스로를 사랑하며 인생의 가치를 찾으세요.",
        "일상에서 스스로를 돌보는 습관을 기르세요.",
        "자신의 삶을 위해 계속해서 배우세요.",
        "타인과의 좋은 관계를 위해 노력하세요.",
        "매 순간을 최선으로 살아가세요.",
        "인생의 큰 목표를 향해 단계별로 나아가세요.",
        "자신의 감정과 생각을 인정하며 존중하세요.",
        "자주 봉사활동을 통해 타인을 도와주세요.",
        "삶의 큰 의미를 찾아 나아가세요.",
        "매일 자신의 건강을 위해 노력하세요.",
        "자신의 선택과 결정에 자신감을 가지세요.",
        "인생의 방향성을 스스로 결정하세요.",
        "자신의 감정을 주기적으로 체크하며 관리하세요.",
        "힘든 시기에도 스스로를 격려하며 앞으로 나아가세요.",
        "다양한 사람들과의 소통을 통해 인생의 풍요를 누리세요.",
        "매일 자신의 삶을 의미 있게 만들어 가세요.",
        "타인과의 소통에서 서로를 이해하려 노력하세요.",
        "자신의 삶의 경험을 다른 사람과 공유하세요.",
        "타인의 의견을 존중하되, 자신의 길을 걷으세요.",
        "자신만의 가치와 원칙을 지키며 살아가세요.",
        "자주 휴식을 취하며 마음의 안정을 찾으세요.",
        "자신의 삶을 즐기며 긍정적인 태도를 유지하세요.",
        "매일 새로운 도전을 통해 성장하세요.",
        "인생의 중요한 순간들을 가슴 속에 간직하세요.",
        "자신의 인생을 사랑하며, 매 순간을 소중히 살아가세요."
    ]

    arrayRandomSort(visualArray)
    arrayRandomSort(usefulArray)
    arrayRandomSort(extensionArray)


    const [visualObjects] = useState(visualArray)
    const [usefulObjects] = useState(usefulArray);
    const [extensionObjects] = useState(extensionArray)
    const [timingObjects, setTimingObjects] = useState(timingArray)

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

    const timingGetMessage = () => {
        setLoadingBar(true)

        const loadingEnd = setTimeout(()=> {
            !firstMsg ? setFirstMsg(true) : false
            arrayRandomSort(timingArray)
            setTimingObjects(timingArray)
            setLoadingBar(false)
            clearTimeout(loadingEnd)

        },1600)
    }


    return (
        <div className="home">
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
                                            </>: null
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

            <section className="section consolation">
                <Canvas />
                <div className="inner">
                    <Titles
                        classAdd={"section-title"}
                        type={"2"}
                        align={"left"}
                        description={"With your concerns in mind, press the button."}
                        descriptionAlign={"left"}
                    >Counseling</Titles>

                    <div className="consolation-wrap">
                        <div className="button-wrap"><button onClick={timingGetMessage} disabled={loadingBar ? true : false}>{loadingBar ? "답변 중" : "상담"}</button></div>
                        <div className={`circle-wrap ${loadingBar ? "is-ani" : ""}`}>
                            {
                                firstMsg ?
                                timingObjects.map((msg , key) => {
                                    return key === 0 ? <div className="msg-wrap" key={key}><div className="position-wrap"><span className={`msg ${loadingBar ? "is-hide" : ""}`} >{msg}</span></div></div> : false
                                })
                                : <div className="msg-wrap"><div className="position-wrap"><span className={`msg ${loadingBar ? "is-hide" : ""}`}>고민을 생각하고, <br/>버튼을 눌러주세요.</span></div></div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home