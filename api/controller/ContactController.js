import ContactInfo from '../models/Contact.js';
import sequelize from 'sequelize';
import WeddingInfo from '../models/Wedding.js';

export const getContactInfo = async (req, res, next) => {
    const seq = req.params.seq;
    try{
        const contactInfo = await ContactInfo.findOne({ 
            include : [{
                model:WeddingInfo,
                as:'weddings',
                attributes : ['groom_ko', 'bride_ko', 'groom_father', 'groom_mother', 'bride_father', 'bride_mother', 'groom_contact', 'bride_contact'],
            }],
            where : {
                wedding_seq : seq,
             },
        });
        return res.status(201).json({
            data: contactInfo,
            weddingInfo: {
                groom_ko : contactInfo.weddings.groom_ko,
                bride_ko : contactInfo.weddings.bride_ko,
                groom_father : contactInfo.weddings.groom_father,
                groom_mother : contactInfo.weddings.groom_mother,
                bride_father : contactInfo.weddings.bride_father,
                bride_mother : contactInfo.weddings.bride_mother,
                groom_contact : contactInfo.weddings.groom_contact,
                bride_contact : contactInfo.weddings.bride_contact,
            }
        });
    }catch(error){
        next(error);
    }
}
