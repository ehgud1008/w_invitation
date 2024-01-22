import LocationInfo from '../models/Location.js';
import sequelize from 'sequelize';

export const getLocationInfo = async (req, res, next) => {
    const seq = req.params.seq;
    try{
        const locationInfo = await LocationInfo.findOne({ 
            // attributes : {
            //     include : [
            //         [
            //             sequelize.fn(
            //                 "DATE_FORMAT",
            //                 sequelize.col("wedding_date"),
            //                 "%Y-%m-%d %H:%i:%s"
            //             ),
            //             "wedding_date"
            //         ],
            //     ]
            // },
            where : {
                wedding_seq : seq,
             }
        });
        return res.status(201).json(locationInfo);
    }catch(error){
        next(error);
    }
}
