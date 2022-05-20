// import Router
import { Router } from 'express';
import { getAllCountries, getSingleCountry } from '../controllers/countriesController.js';

// call router method
const countriesRouter = Router();

//"/" entspricht dem Endpunkt /countries --> siehe index.js Zeile 16, und ruft den getAllCountries Controller aus dem countriesControllers.js File auf
countriesRouter.route("/").get(getAllCountries);
// create single country 
countriesRouter.route("/:id").get(getSingleCountry);
// export countriesRouter
export default countriesRouter;