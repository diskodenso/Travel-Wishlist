import countries from "../countries.js";
//------- get all countries controller ---------//
export const getAllCountries = (req, res) => {
    res.status(200).json(countries);
};
//------- get single country controller ---------//
export const getSingleCountry = (req, res) => {
    console.log(req.params);
    const findCountry = countries.find((country) => country.id == req.params.id)
    if (findCountry) {
        res.status(200).json(findCountry);
    } else {
        res.status(404).send("Country not found");
    }
};
