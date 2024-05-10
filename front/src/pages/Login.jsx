import {useState} from "react"
import axios from "axios"

import '../assets/css/pages/login.css'
import '../assets/css/component/form.css'

const Login = () => {

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const handleLogin = async (e) => {
        e.preventDefault(); // 폼 제출 기본 동작을 막습니다.

        try {
            // 로그인 데이터를 서버에 전송합니다.
            const response = await axios.post('/api/login', {
                email: id,
                password: pw,
            });

            // 서버 응답 처리
            const { data } = response;

            // 로그인 성공
            if (data.token) {
                // JWT 토큰을 로컬 스토리지 또는 쿠키에 저장할 수 있습니다.
                localStorage.setItem('token', data.token);
                console.log('로그인 성공:', data);
                // 로그인 성공 후 추가 작업 수행 (예: 리다이렉션)
            } else {
                // 로그인 실패 시 에러 메시지 처리
                console.error('로그인 실패:', data.message);
            }
        } catch (error) {
            // 에러 처리
            console.error('로그인 중 오류 발생:', error);
        }
    };

    // 아이디나 비밀번호 입력 시 버튼 활성화
    const changeButton = () => {
        setButtonDisabled(id === '' || pw === '');
    };

    return (
        <div className="login-wrap">
            <form className="login-form" onSubmit={handleLogin}>
                <h2 className="title">로그인</h2>
                <div className="id-pw-wrap">
                    <div className="input-set hidden-label">
                        <label className="label" htmlFor="userId">ID</label>
                        <input
                            type="email"
                            id="userId"
                            name="email"
                            placeholder="이메일을 입력하세요."
                            value={id}
                            onChange={(e) => {
                                setId(e.target.value);
                                changeButton();
                            }}
                        />
                    </div>
                    <div className="input-set hidden-label">
                        <label className="label" htmlFor="userPassword">Password</label>
                        <input
                            type="password"
                            id="userPassword"
                            name="userPassword"
                            placeholder="비밀번호를 입력하세요."
                            value={pw}
                            onChange={(e) => {
                                setPw(e.target.value);
                                changeButton();
                            }}
                        />
                    </div>
                </div>
                <div className="btn-wrap">
                    <button
                        type="submit"
                        className="login-btn"
                        disabled={buttonDisabled}
                    >로그인</button>
                </div>
            </form>
        </div>
    );
}

export default Login