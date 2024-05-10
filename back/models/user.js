const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

// JSON 파일의 경로 설정
const usersFilePath = path.join(__dirname, '/api/v1/resource/json/users.json');

// JSON 파일에서 데이터 읽어오기
const readUsersFromFile = () => {
    if (!fs.existsSync(usersFilePath)) {
        // 파일이 없으면 빈 배열을 반환
        return [];
    }

    const data = fs.readFileSync(usersFilePath, 'utf-8');
    return JSON.parse(data);
};

const writeUsersToFile = (users) => {
    const data = JSON.stringify(users, null, 2);
    fs.writeFileSync(usersFilePath, data, 'utf-8');
};

class User {
    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    // 유저 저장
    async save() {
        const users = readUsersFromFile();

        // 비밀번호 해시화
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);

        // 유저 정보 저장
        users.push(this);
        writeUsersToFile(users);
    }

    // 유저 찾기
    static findByUsername(username) {
        const users = readUsersFromFile();
        return users.find((user) => user.username === username);
    }

    // 유저 업데이트
    static updateByUsername(username, newUserData) {
        const users = readUsersFromFile();
        const index = users.findIndex((user) => user.username === username);

        if (index === -1) {
            return null;
        }

        const user = users[index];

        // 비밀번호 해시화
        if (newUserData.password) {
            const saltRounds = 10;
            newUserData.password = bcrypt.hashSync(newUserData.password, saltRounds);
        }

        // 유저 데이터 업데이트
        users[index] = {
            ...user,
            ...newUserData,
            updatedAt: new Date(),
        };

        writeUsersToFile(users);
        return users[index];
    }

    // 유저 삭제
    static deleteByUsername(username) {
        const users = readUsersFromFile();
        const index = users.findIndex((user) => user.username === username);

        if (index === -1) {
            return null;
        }

        const deletedUser = users.splice(index, 1)[0];
        writeUsersToFile(users);
        return deletedUser;
    }
}

module.exports = User;