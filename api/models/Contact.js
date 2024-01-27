import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/Database.js';

class ContactInfo extends Model {}

ContactInfo.init({
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
        groom_f_contact : {
            type : DataTypes.STRING,
            required : true,
        },
        groom_m_contact : {
            type : DataTypes.STRING,
            required : true,
        },
        bride_f_contact : {
            type : DataTypes.STRING,
            required : true,
        },
        bride_m_contact : {
            type : DataTypes.STRING,
            required : true,
        },
        groom_account : {
            type : DataTypes.STRING,
            required : true,
        },
        groom_account_name : {
            type : DataTypes.STRING,
            required : true,
        },
        groom_account_bank : {
            type : DataTypes.STRING,
            required : true,
        },
        bride_account : {
            type : DataTypes.STRING,
            required : true,
        },
        bride_account_name : {
            type : DataTypes.STRING,
            required : true,
        },
        groom_f_account : {
            type : DataTypes.STRING,
            required : true,
        },
        groom_f_account_name : {
            type : DataTypes.STRING,
            required : true,
        },
        groom_f_account_bank : {
            type : DataTypes.STRING,
            required : true,
        },
        groom_m_account : {
            type : DataTypes.STRING,
            required : true,
        },
        groom_m_account_name : {
            type : DataTypes.STRING,
            required : true,
        },
        groom_m_account_bank : {
            type : DataTypes.STRING,
            required : true,
        },
        bride_f_account : {
            type : DataTypes.STRING,
            required : true,
        },
        bride_f_account_name : {
            type : DataTypes.STRING,
            required : true,
        },
        bride_f_account_bank : {
            type : DataTypes.STRING,
            required : true,
        },
        bride_m_account : {
            type : DataTypes.STRING,
            required : true,
        },
        bride_m_account_name : {
            type : DataTypes.STRING,
            required : true,
        },
        bride_m_account_bank : {
            type : DataTypes.STRING,
            required : true,
        },
    },{
        sequelize,
        modelName : 'ContactInfo',
        tableName : 'contact_info',
        timestamps : false,
    }
);

export default ContactInfo;


