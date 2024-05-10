import { useState, useEffect } from "react";
import axios from 'axios';
import { Titles } from "../components/Titles/index.jsx";

import Canvas from "../components/canvas.jsx";
import "../assets/css/pages/home.css"



const Home = () =>  {
    const [loadingBar, setLoadingBar] = useState(false);
    const [firstMsg, setFirstMsg] = useState(false);
    const [consolationData, setConsolationData] = useState(null);
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
            // 입력 값이 비어 있거나 공백만 있는 경우 경고 메시지 표시
            alert('내용을 입력하세요.');
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
                            <p className="title">내가 위로 해줄께. (위로의 말 남기기)</p>
                            <fieldset className="input-button-field">
                                <input type="text"
                                       value={inputValue}
                                       onChange={e => handleInputChange(e)} />
                                <button onClick={e => postMessage(e)}>SEND</button>
                            </fieldset>
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

        </div>
    )
}

export default Home