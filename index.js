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
app.use(express.json());

//Middleware, die uns die countries routes aus dem countriesRoutes Modul benutzen lässt
app.use('/api/countries', countriesRouter)

// Api Description
app
  .route("/")
  .get((req, res) =>
    res.send(
      "<h1>Willkommen auf unserer API</h1><h2>folgende Endpunkte sind verfügbar:</h2><p>/countries -> alle Länder abrufen & neue Länder hinzufügen</p><p>/countries/:id -> einzelnen Länder abrufen, Länder löschen, Länder aktualisieren</p>"
    )
  );

app.listen(port, () => {
    console.log(`This Server is running on http://localhost:${port}`);
});