const express = require("express");
const bodyparser = require("body-parser");
const sequelize = require("./util/database");
const User = require("./models/user");
const swaggerDocs = require("./swagger.js")

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

const port = process.env.PORT || 8887;

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

//test route
app.get("/", (req, res, next) => {
    res.send("Bienvenue dans mon application de gestion des utilisateurs!");
});

//CRUD routes
app.use("/users", require("./routes/users"));

//health check routes
app.use("/health", require("./routes/health"));

//error handling
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message });
});

//sync database
sequelize
    .sync()
    .then((result) => {
        console.log("Database connected");
        app.listen(port);
        swaggerDocs(app, port);
    })
    .catch((err) => console.log(err));