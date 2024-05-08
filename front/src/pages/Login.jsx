import '../assets/css/pages/login.css'
import '../assets/css/component/form.css'

const Login = () => {
    return(
        <div className="login-wrap">
            <form className="login-form">
                <h2 className="title">로그인</h2>
                <div className="id-pw-wrap">
                    <div className="input-set hidden-label">
                        <label className="label" htmlFor="userId">ID</label>
                        <input type="text" id="userId" name="userId" placeholder="아이디를 입력하세요."/>
                    </div>
                    <div className="input-set hidden-label">
                        <label className="label" htmlFor="userPassword">Password</label>
                        <input type="password" id="userPassword" name="userPassword" placeholder="비밀번호를 입력하세요."/>
                    </div>
                </div>
                <div className="find-wrap">
                    <div>
                        <span className="checkbox">
                            <input type="checkbox" id="secureConnection" name="secureConnection"/>
                            <label htmlFor="secureConnection">보안접속</label>
                        </span>
                    </div>
                    <div>
                        <a href="front/src/pages/Login.jsx#">아이디찾기</a>
                        <span> | </span>
                        <a href="front/src/pages/Login.jsx#">비밀번호찾기</a>
                    </div>
                </div>
                <p className="error-msg-wrap" id="errorCapslock" style={{display:"block"}}>CapsLock이 켜져있습니다.</p>
                <p className="error-msg-wrap" id="errorEmptyId">아이디를 입력해주세요.</p>
                <p className="error-msg-wrap" id="errorEmptyPw">비밀번호를 입력해주세요.</p>
                <div className="btn-wrap">
                    <button type="submit" className="btn size-wide bg-primary">로그인</button>
                    <a href="front/src/pages/Login.jsx#" className="btn size-wide">회원가입</a>
                </div>
            </form>
        </div>
    )
}

export default Login