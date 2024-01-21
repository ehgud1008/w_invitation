import MessageInfo from '../models/Message.js';
import sequelize from 'sequelize';

export const getMessageInfo = async (req, res, next) => {
    const seq = req.params.seq;
    try{
        const messageInfo = await MessageInfo.findAll({ 
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
            limit : 5,
            where : {
                wedding_seq : seq,
             }
        });
        console.log("ASDFASDF");
        console.log(messageInfo);
        return res.status(201).json(messageInfo);
    }catch(error){
        next(error);
    }
}
