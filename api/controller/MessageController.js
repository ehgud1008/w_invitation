import MessageInfo from '../models/Message.js';
import sequelize from 'sequelize';

export const getMessageInfo = async (req, res, next) => {
    const seq = req.params.seq;
    const {page, offset, pageSize, limit} = req.body;
    console.log("@@@@@@@@@@@@@@@@@@@@");
    console.log(page);
    console.log(pageSize);
    console.log(limit);
    console.log(offset);
    
    try{
        const messageInfo = await MessageInfo.findAll({ 
            attributes : {
                include : [
                    [
                        sequelize.fn(
                            "DATE_FORMAT",
                            sequelize.col("reg_date"),
                            "%Y-%m-%d %H:%i:%s"
                        ),
                        "reg_date"
                    ],
                ]
            },
            limit : limit,
            offset : offset,
            where : {
                wedding_seq : seq,
             },
             order : [['reg_date', 'DESC']]
        });
        console.log("ASDFASDF");

        const totalItems = await MessageInfo.count({
            where : {
                wedding_seq : seq,
            }
        });

        const totalPages = Math.ceil(totalItems/pageSize);
        
        return res.status(201).json({
            data: messageInfo,
            pagination: {
                page: page,
                pageSize: pageSize,
                totalItems: totalItems,
                totalPages: totalPages
            }
        });
    }catch(error){
        next(error);
    }
}
