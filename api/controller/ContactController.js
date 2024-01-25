import ContactInfo from '../models/Contact.js';
import sequelize from 'sequelize';

export const getContactInfo = async (req, res, next) => {
    const seq = req.params.seq;
    try{
        const contactInfo = await ContactInfo.findAll({ 
            where : {
                wedding_seq : seq,
             },
        });

        return res.status(201).json();
    }catch(error){
        next(error);
    }
}
