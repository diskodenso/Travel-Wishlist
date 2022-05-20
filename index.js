// import express
import express from "express";
// import routes
import usersRoutes from "./routes/userRoutes.js";
// call express method
const app = express(); //app Objekt kennzeichnet die Express application; es hat Methoden für bspw. das Routen von http requests
const port = process.env.PORT || 5000;

const users = [
  { id: 1, name: "Bhutan", alpha2Code: "BT", alpha3Code: "BTN" },
  { id: 1, name: "Bhutan", alpha2Code: "BT", alpha3Code: "BTN" },
  { id: 1, name: "Bhutan", alpha2Code: "BT", alpha3Code: "BTN" },
  { id: 1, name: "Bhutan", alpha2Code: "BT", alpha3Code: "BTN" },
  { id: 1, name: "Bhutan", alpha2Code: "BT", alpha3Code: "BTN" },
];
//Middleware, die uns das eingehende request Objekt als JSON erkennen lässt
app.use(express.json());

//Middleware, die uns die users routes aus dem userRoutes Modul benutzen lässt
//app.use("/users", usersRoutes);

app
  .route("/")
  .get((req, res) =>
    res.send(
      "<h1>Willkommen auf unserer API</h1><h2>folgende Endpunkte sind verfügbar:</h2><p>/countries -> alle Länder abrufen & neue Länder hinzufügen</p><p>/countries/:id -> einzelnen Länder abrufen, Länder löschen, Länder aktualisieren</p>"
    )
  );
