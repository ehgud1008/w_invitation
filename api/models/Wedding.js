import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/Database.js';

class WeddingInfo extends Model {}

WeddingInfo.init({
        seq : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            required : true,
            autoIncrement: true, // Auto Increment 설정
            allowNull: false     // NULL을 허용하지 않음
        },
        groom_ko : {
            type : DataTypes.STRING,
            required : true,
        },
        groom_en : {
            type : DataTypes.STRING,
            required : true,
        },
        groom_no : {
            type : DataTypes.STRING,
            required : true,
        },
        groom_father : {
            type : DataTypes.STRING,
            required : true,
        },
        groom_mother : {
            type : DataTypes.STRING,
            required : true,
        },
        groom_contact : {
            type : DataTypes.STRING,
            required : true,
        },
        bride_ko : {
            type : DataTypes.STRING,
            required : true,
        },
        bride_en : {
            type : DataTypes.STRING,
            required : true,
        },
        bride_no : {
            type : DataTypes.STRING,
            required : true,
        },
        bride_father : {
            type : DataTypes.STRING,
            required : true,
        },
        bride_mother : {
            type : DataTypes.STRING,
            required : true,
        },
        bride_contact : {
            type : DataTypes.STRING,
            required : true,
        },
        wedding_date : {
            type : DataTypes.VIRTUAL,
            required : true,
            // get() {
            //     //return sequelize.literal(`DATE_FORMAT(wedding_date, '%Y%m%d')`);
            //     return this.getDataValue('paymentDate').toLocaleString('en-GB', { timeZone: 'UTC' });
            // },
        },
    },{
        sequelize,
        modelName : 'WeddingInfo',
        tableName : 'wedding_info',
        timestamps : false,
    }
);

export default WeddingInfo;


