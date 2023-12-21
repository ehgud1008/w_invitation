import WeddingInfo from '../models/wedding.js';


export const getWeddingInfo = async (req, res, next) => {
    const url = req.params.url;
    console.log("!@#!@#!#!#@!#!@");
    console.log(url);
    try{
        const weddingInfo = await WeddingInfo.findOne({ 
            where : {
                url : url,
             }
        });
        console.log(weddingInfo);
        return res.status(201).json(weddingInfo);
    }catch(error){
        next(error);
    }
}
