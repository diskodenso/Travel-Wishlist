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
//------- create new country controller ---------//
export const createNewCountry = (req, res) => {
   // console.log(req.body);
    const newCountry = {
      id: req.body.id,
      name: req.body.name,
    };
    countries.push(newCountry);
    console.log(newCountry);
    res.status(201).json(newCountry);
};
