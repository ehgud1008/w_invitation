import WeddingInfo from "../models/Wedding";

export const getWeddingInfo = async (req, res, next) => {
    //url/[title] 로 title 가져와서 조회하자
    const weddingInfo = await WeddingInfo.findOne({ 
        where : {

         }})
    try{
        return res.status(201).json(weddingInfo);
    }catch(error){
        next(error);
    }
}
