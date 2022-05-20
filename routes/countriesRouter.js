// import Router
import { Router } from 'express';
import { createNewCountry, getAllCountries, getSingleCountry, deleteCountry, updateCountry } from '../controllers/countriesController.js';

// call router method
const countriesRouter = Router();

//"/" entspricht dem Endpunkt /countries --> siehe index.js Zeile 16, und ruft den getAllCountries Controller aus dem countriesControllers.js File auf
countriesRouter.route("/").get(getAllCountries).post(createNewCountry);
// get a single route - this should have get, put & delete
countriesRouter.route("/:id").get(getSingleCountry).delete(deleteCountry).put(updateCountry);
// export countriesRouter
export default countriesRouter;