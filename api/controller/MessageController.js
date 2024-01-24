import MessageInfo from '../models/Message.js';
import sequelize from 'sequelize';

export const getMessageInfo = async (req, res, next) => {
    const seq = req.params.seq;
    const {page, offset, pageSize, limit} = req.body;
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

export const registMessage = async (req, res, next) => {
    console.log("@@@@@@@@@@@@@@@@");
    console.log(req.body);
    const { wedding_seq, name, password, message } = req.body;
    const newMessage = {
        wedding_seq,
        name,
        password,
        message
    };
    try {
        const message = await MessageInfo.create(newMessage, { logging: console.log });
        return res.status(200).json(message);
    } catch (error) {
        console.log(error);
    }
}
