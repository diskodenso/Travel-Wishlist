// import express
import express from "express";
// import countriesRouter
import countriesRouter from "./routes/countriesRouter.js";
// call express method
const app = express(); //app Objekt kennzeichnet die Express application; es hat Methoden für bspw. das Routen von http requests
const port = process.env.PORT || 5000;

// const countries = [
//   { id: 1, name: "Bhutan", alpha2Code: "BT", alpha3Code: "BTN" },
//   { id: 1, name: "Bhutan", alpha2Code: "BT", alpha3Code: "BTN" },
//   { id: 1, name: "Bhutan", alpha2Code: "BT", alpha3Code: "BTN" },
//   { id: 1, name: "Bhutan", alpha2Code: "BT", alpha3Code: "BTN" },
//   { id: 1, name: "Bhutan", alpha2Code: "BT", alpha3Code: "BTN" },
// ];
//Middleware, die uns das eingehende request Objekt als JSON erkennen lässt
// will be executed at every request the app receives 
app.use(cors()); // third party middleware
// import ejs
app.set("view engine", "ejs");
app.use(express.json()); // built in middleware in express
// add inuilt express urlencoded method to recognize the incoming data as strings or arrays
app.use(express.urlencoded({extended: false}));
//Middleware, die uns die countries routes aus dem countriesRoutes Modul benutzen lässt
// will only be executed if the path is matching
app.use('/api/countries', countriesRouter)

// Api Description
app
  .route("/")
  .get((req, res) =>
    res.render("pages/index", {countryData})
  );

app.all("*", (req, res) => {
    res.status(404).send("This is not a valid endpoint, please have a look into the documentation")
});

app.listen(port, () => {
    console.log(`This Server is running on http://localhost:${port}`);
});