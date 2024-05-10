const express = require('express')
const cors = require('cors')
const path = require("path")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
const fs = require("fs")

const app = express()
const port = 8000;
const usersRouter = require('./routes/users');
const consolationsRouter = require('./routes/consolations');
const User = require('./models/User');

require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY;
const testEnv = process.env.TEST_NUMBER

app.use(cors({
    origin: 'http://localhost:5173', // 허용할 도메인
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // 허용할 HTTP 메서드
}));
app.use(express.json());
app.use('/api/users', usersRouter);
app.use('/api/consolations', consolationsRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // 유저를 데이터베이스에서 찾습니다.
        const user = User.findByUsername(email);

        if (!user) {
            // 유저를 찾지 못했을 경우 에러 응답
            return res.status(404).json({ message: '유저를 찾을 수 없습니다.' });
        }

        // 비밀번호 비교 (해시된 비밀번호와 입력된 비밀번호 비교)
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            // 비밀번호가 일치하지 않을 경우 에러 응답
            return res.status(401).json({ message: '비밀번호가 일치하지 않습니다.' });
        }

        // JWT 토큰 생성
        const token = jwt.sign({ id: user.email, username: user.username }, SECRET_KEY, {
            expiresIn: '1h', // 토큰 만료 시간 설정 (예: 1시간)
        });

        // 토큰을 포함한 응답 전송
        res.json({ message: '로그인 성공', token });
    } catch (error) {
        // 에러 처리
        console.error('서버 에러:', error);
        res.status(500).json({ message: '서버 에러', error: error.message });
    }
});
app.get('/api/v1/resource/history',(req, res) => {
    const filePath = path.join(__dirname, '/api/v1/resource/json/history.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            // 파일을 읽는데 문제가 생기면 에러를 응답으로 보냄
            return res.status(500).send('Error reading file');
        }

        try {
            // JSON 데이터를 파싱
            const jsonData = JSON.parse(data);
            // JSON 데이터를 응답으로 보냄
            res.json(jsonData);
        } catch (parseErr) {
            // JSON 파싱 중 에러가 발생하면 에러를 응답으로 보냄
            res.status(500).send('Error parsing JSON');
        }
    });

})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port} `)
})


