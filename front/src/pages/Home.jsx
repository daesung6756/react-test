import { useState, useEffect } from "react";
import axios from 'axios';
import { Titles } from "../components/Titles/index.jsx";

import Canvas from "../components/canvas.jsx";
import "../assets/css/pages/home.css"



const Home = () =>  {
    const [loadingBar, setLoadingBar] = useState(false);
    const [firstMsg, setFirstMsg] = useState(false);
    const [consolationData, setConsolationData] = useState(null);
    const [consolationTempData, setConsolationTempData] = useState(null);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const arrayRandomSort = (array) => {
        array.sort(() => Math.random() - 0.5);
    }

    useEffect(() => {

        // consolation
        async function getConsolationFetchData() {
            try {
                const response = await axios.get('/api/consolations');
                setConsolationData(response.data);
                setLoadingBar(false);
            } catch (err) {
                console.log(err)
                setLoadingBar(false);
            }
        }

        // consolation temp
        async function getConsolationTempFetchData() {
            try {
                const response = await axios.get('/api/consolations/temp');
                setConsolationTempData(response.data);
                setLoadingBar(false);
            } catch (err) {
                console.log(err)
                setLoadingBar(false);
            }
        }

        getConsolationTempFetchData();
        getConsolationFetchData();
    }, []);

    const consolationGetMessage = () => {
        setLoadingBar(true)

        const loadingEnd = setTimeout(()=> {
            !firstMsg ? setFirstMsg(true) : false
            arrayRandomSort(consolationData)
            setConsolationData(consolationData)
            setLoadingBar(false)
            clearTimeout(loadingEnd)
        },1600)
    }

    const postMessage = async () => {
        const trimmedValue = inputValue.trim();
        if (!trimmedValue) {
            alert('내용을 입력하세요.');
            return;
        } else if(trimmedValue.length <= 25) {
            alert('최소 25자 이상 작성해야 합니다.');
            return;
        }

        try {
            const response = await axios.post('/api/consolations' ,{
                message : inputValue
            });
            if(response.status === 201) {
                alert("정상으로 등록 되었습니다.")
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="home">

            <section className="section consolation">
                <Canvas />
                <div className="inner">
                    <Titles
                        classAdd={"section-title"}
                        type={"2"}
                        align={"left"}
                        description={"51% F / 49% T"}
                        descriptionAlign={"left"}
                    >Counseling </Titles>

                    <div className="consolation-wrap">
                        <div className="message-input-wrap">
                            <p className="title">듣고 싶은 위로의 메세지 남기기</p>
                            <fieldset className="input-button-field">
                                <input type="text"
                                       value={inputValue}
                                       placeholder="25자 이상 남겨주세요."
                                       onChange={e => handleInputChange(e)} />
                                <button onClick={e => postMessage(e)}>SEND</button>
                            </fieldset>
                            <div className="temp-message-wrap">
                                <ul className="temp-list">
                                    {
                                        consolationTempData ?
                                        consolationTempData.map((item , key) => {
                                            return(
                                                <li key={key}>
                                                    <div>
                                                        <p>{item.number}.{item.message}</p>
                                                        <span>{item.createDate}</span>
                                                    </div>
                                                    <div>
                                                        <button>승인</button>
                                                        <button>삭제</button>
                                                    </div>
                                                </li>
                                            )
                                        }) : false
                                    }

                                </ul>
                            </div>
                        </div>
                        <div className="button-wrap"><button onClick={consolationGetMessage} disabled={loadingBar ? true : false}>{loadingBar ? "답변 중" : "상담"}</button></div>
                        <div className={`circle-wrap ${loadingBar ? "is-ani" : ""}`}>
                            {
                                firstMsg ?
                                    consolationData.map((msg , key) => {
                                        return key === 0 ? <div className="msg-wrap" key={key}><div className="position-wrap"><span className={`msg ${loadingBar ? "is-hide" : ""}`} >{msg.message}</span></div></div> : false
                                    })
                                    : <div className="msg-wrap"><div className="position-wrap"><span className={`msg ${loadingBar ? "is-hide" : ""}`}>고민을 생각하고, <br/>버튼을 눌러주세요.</span></div></div>
                            }
                        </div>
                    </div>

                </div>
            </section>

            <section className="section">
                <Titles
                    classAdd={"section-title"}
                    type={"2"}
                    align={"center"}
                    description={"비지니스 모델이 실패하는 이유는 뭘까?"}
                    descriptionAlign={"left"}
                >원하는 사람이 없다.</Titles>
            </section>

        </div>
    )
}

export default Home