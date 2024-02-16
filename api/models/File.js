import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/Database.js';

class FileInfo extends Model {}

FileInfo.init({
        seq : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            required : true,
            autoIncrement: true, // Auto Increment 설정
            allowNull: false     // NULL을 허용하지 않음
        },
        wedding_pic1 : {
            type : DataTypes.STRING,
        },
        wedding_pic2 : {
            type : DataTypes.STRING,
        },
        wedding_pic3 : {
            type : DataTypes.STRING,
        },
        wedding_pic4 : {
            type : DataTypes.STRING,
        },
        wedding_pic5 : {
            type : DataTypes.STRING,
        },
        wedding_pic6 : {
            type : DataTypes.STRING,
        },
        wedding_pic7 : {
            type : DataTypes.STRING,
        },
        wedding_pic8 : {
            type : DataTypes.STRING,
        },
        wedding_pic9 : {
            type : DataTypes.STRING,
        },
        wedding_pic10 : {
            type : DataTypes.STRING,
        },
        wedding_video : {
            type : DataTypes.STRING,
        },
        video_check : {
            type : DataTypes.INTEGER,
            required : true,
        },
    },{
        sequelize,
        modelName : 'FileInfo',
        tableName : 'file_info',
        timestamps : false,
    }
);

export default FileInfo;


