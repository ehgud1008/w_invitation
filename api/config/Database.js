import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// Sequelize를 사용하여 MySQL과 연결
const sequelize = new Sequelize('wedding_invitation', 'root', process.env.MYSQLPW, {
    host: 'localhost',
    dialect: 'mysql',
    logging : console.log,
});

sequelize.authenticate().then( ()=> {
    console.log("DB 연결 성공");
}).catch(error => {
    console.log("DB 연결 실패 : " + error);
});

export default sequelize;