const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, '../api/v1/resource/json/consolation.json');

function formatDateToYyyyMmDd() {
    // 현재 날짜 가져오기
    const currentDate = new Date();

    // 년도, 월, 일 추출
    const year = currentDate.getFullYear(); // 연도
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // 월 (0부터 시작하므로 +1)
    const day = currentDate.getDate().toString().padStart(2, '0'); // 일

    // yyyy.mm.dd 형식으로 조합
    const formattedDate = `${year}.${month}.${day}`;

    return formattedDate;
}

exports.getAllConsolation = async (req, res) => {

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('파일 읽기 오류:', err);
            return res.status(500).json({ error: '파일을 읽는 중 오류가 발생했습니다.' });
        }
        try {
            // JSON 데이터를 파싱
            const jsonData = JSON.parse(data);
            // JSON 데이터를 응답으로 보냄
            res.json(jsonData);
        } catch (parseErr) {
            // JSON 파싱 중 에러가 발생하면 에러를 응답으로 보냄
            res.status(500).send('JSON 파싱 중 오류가 발생했습니다.');
        }
    });
};

exports.createConsolation = async (req, res) => {
    try {
        // JSON 파일 읽기
        fs.readFile(filePath, 'utf8', (readError, data) => {
            if (readError) {
                console.error('파일 읽기 오류:', readError);
                return res.status(500).json({ error: '파일을 읽는 중 오류가 발생했습니다.' });
            }

            try {
                // JSON 데이터를 배열로 파싱
                const consolationArray = JSON.parse(data);

                // 요청 본문에서 추가할 데이터 추출
                const newMessage = req.body.message;

                // 배열에 새로운 데이터를 추가
                consolationArray.push({
                    message: newMessage,
                    number: consolationArray.length,
                    createDate : formatDateToYyyyMmDd()
                });

                // 수정된 배열을 JSON 문자열로 변환
                const updatedData = JSON.stringify(consolationArray, null, 2);

                // JSON 파일에 수정된 데이터를 저장
                fs.writeFile(filePath, updatedData, (writeError) => {
                    if (writeError) {
                        console.error('파일 쓰기 오류:', writeError);
                        return res.status(500).json({ error: '파일을 쓰는 중 오류가 발생했습니다.' });
                    }

                    // 성공 응답 보내기
                    res.status(201).json({ message: '새로운 데이터가 성공적으로 추가되었습니다.' });
                });
            } catch (parseError) {
                console.error('JSON 파싱 오류:', parseError);
                return res.status(500).json({ error: 'JSON 파싱 중 오류가 발생했습니다.' });
            }
        });
    } catch (error) {
        console.error('에러:', error);
        res.status(500).json({ error: '데이터 추가 중 오류가 발생했습니다.' });
    }
};