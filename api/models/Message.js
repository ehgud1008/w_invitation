import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/Database.js';

class MessageInfo extends Model {}

MessageInfo.init({
        seq : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            required : true,
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


