import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/Database.js';

class LocationInfo extends Model {}

LocationInfo.init({
        seq : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            required : true,
        },
        hall_name : {
            type : DataTypes.STRING,
            required : true,
        },
        address : {
            type : DataTypes.STRING,
            required : true,
        },
        hall_contract : {
            type : DataTypes.STRING,
            required : true,
        },
        map_image : {
            type : DataTypes.STRING,
            required : true,
        },
        subway : {
            type : DataTypes.STRING,
            required : true,
        },
        bus : {
            type : DataTypes.STRING,
            required : true,
        },
        road : {
            type : DataTypes.STRING,
            required : true,
        },
        shuttle : {
            type : DataTypes.STRING,
            required : true,
        },
        parking_info : {
            type : DataTypes.STRING,
            required : true,
        },
    },{
        sequelize,
        modelName : 'LocationInfo',
        tableName : 'location_info',
        timestamps : false,
    }
);

export default LocationInfo;


