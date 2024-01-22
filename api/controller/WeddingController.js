import WeddingInfo from '../models/Wedding.js';
import sequelize from 'sequelize';

export const getWeddingInfo = async (req, res, next) => {
    const url = req.params.url;
    try{
        const weddingInfo = await WeddingInfo.findOne({ 
            attributes : {
                include : [
                    [
                        sequelize.fn(
                            "DATE_FORMAT",
                            sequelize.col("wedding_date"),
                            "%Y-%m-%d %H:%i:%s"
                        ),
                        "wedding_date"
                    ],
                ]
            },
            where : {
                url : url,
             }
        });
        return res.status(201).json(weddingInfo);
    }catch(error){
        next(error);
    }
}
