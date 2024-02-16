import FileInfo from '../models/File.js';
import sequelize from 'sequelize';

export const getWeddingFiles = async (req, res, next) => {
    const seq = req.params.seq;
    try{
        const fileInfo = await FileInfo.findOne({ 
            where : {
                wedding_seq : seq,
             }
        });
        return res.status(201).json(fileInfo);
    }catch(error){
        next(error);
    }
}
