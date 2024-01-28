import RSVPInfo from '../models/RSVP.js';

export const registRSVP = async (req, res, next) => {
    const {wedding_seq, name, contact, member_cnt, memo, side_option, attend_option, meal_option} = req.body;
    const newRSVP = {
        wedding_seq, name, contact, member_cnt, memo, side_option, attend_option, meal_option
    };
    try {
        const rsvp = await RSVPInfo.create(newRSVP, { logging: console.log });
        return res.status(200).json(rsvp);
    } catch (error) {
        console.log(error);
    }
}