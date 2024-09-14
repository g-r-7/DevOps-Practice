
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Gestion d'utilisateurs",
            version: "2.0.0",
        },
        servers: [
            {
                url: "http://localhost:8887/"
            }
        ],
    },
    apis: ["./routes/users.js"],
};
const swaggerSpec = swaggerJsdoc(options);
function swaggerDocs(app, port) {
    // Swagger Page
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    app.get("docs.json", (req, res) => { 
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });

    log.info(`Docs available at http://localhost:${port}/docs`);
}

module.exports = swaggerDocs;
