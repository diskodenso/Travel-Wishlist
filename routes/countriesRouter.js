// import Router
import { Router } from 'express';
import { getAllCountries } from '../controllers/countriesController.js';

// call router method
const countriesRouter = Router();

//"/" entspricht dem Endpunkt /countries --> siehe index.js Zeile 16, und ruft den getAllCountries Controller aus dem countriesControllers.js File auf
countriesRouter.get("/", getAllCountries);
// export countriesRouter
export default countriesRouter;