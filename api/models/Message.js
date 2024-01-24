import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/Database.js';

class MessageInfo extends Model {}

MessageInfo.init({
        seq : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            required : true,
            autoIncrement: true, // Auto Increment 설정
            allowNull: false     // NULL을 허용하지 않음
        },
        wedding_seq : {
            type : DataTypes.STRING,
            required : true,
            allowNull: false     // NULL을 허용하지 않음
        },
        name : {
            type : DataTypes.STRING,
            required : true,
        },
        password : {
            type : DataTypes.STRING,
            required : true,
        },
        message : {
            type : DataTypes.STRING,
            required : true,
        },
        reg_date : {
            type : DataTypes.STRING,
            required : true,
        },
    },{
        sequelize,
        modelName : 'MessageInfo',
        tableName : 'message_info',
        timestamps : false,
    }
);

export default MessageInfo;


