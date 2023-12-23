import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/Database.js';

class WeddingInfo extends Model {}

WeddingInfo.init({
        seq : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            required : true,
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
        groom_contract : {
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
        bride_contract : {
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


