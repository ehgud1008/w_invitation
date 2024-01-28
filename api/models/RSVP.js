import { DataTypes, Model } from "sequelize";
import sequelize from "../config/Database.js";

class RSVPInfo extends Model {}

RSVPInfo.init({
    seq : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        required : true,
        autoIncrement: true, // Auto Increment 설정
        allowNull: false     // NULL을 허용하지 않음
    },
    wedding_seq : {
        type : DataTypes.INTEGER,
        required : true,
        allowNull: false     // NULL을 허용하지 않음
    },
    name : {
        type : DataTypes.STRING,
        required : true,
    },
    contact : {
        type : DataTypes.STRING,
        required : true,
    },
    member_cnt : {
        type : DataTypes.INTEGER,
        required : true,
    },
    memo : {
        type : DataTypes.STRING,
        required : true,
    },
    side_option : {
        type : DataTypes.INTEGER,
        required : true,
    },
    attend_option : {
        type : DataTypes.INTEGER,
        required : true,
    },
    meal_option : {
        type : DataTypes.INTEGER,
        required : true,
    },
    reg_date : {
        type : DataTypes.STRING,
        required : true,
    },
    },{
        sequelize,
        modelName : 'RSVPInfo',
        tableName : 'rsvp_info',
        timestamps : false,
    }
);

export default RSVPInfo;
