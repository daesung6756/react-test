// 예제 컨트롤러 함수들
exports.getAllUsers = (req, res) => {
    // 모든 유저 데이터를 가져와서 응답
    res.send('모든 유저');
};

exports.getUserById = (req, res) => {
    // 특정 유저 ID에 해당하는 유저 데이터 응답
    res.send(`유저 ID: ${req.params.id}`);
};

exports.createUser = (req, res) => {
    // 유저 생성
    res.send('유저 생성');
};

exports.updateUser = (req, res) => {
    // 유저 업데이트
    res.send(`유저 ID: ${req.params.id} 업데이트`);
};

exports.deleteUser = (req, res) => {
    // 유저 삭제
    res.send(`유저 ID: ${req.params.id} 삭제`);
};