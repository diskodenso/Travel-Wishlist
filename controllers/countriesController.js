import countries from "../countries.js";
//------- get all countries controller ---------//
export const getAllCountries = (req, res) => {
    res.status(200).json(countries);
};