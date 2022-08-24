const express = require('express');
const http = require('http');
const morgan = require('morgan')
const routes = require ('./routers/news');
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require('./swagger.json');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/** Rules */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET');
        return res.status(200).json({});
    }
    next();
});

app.use('/', routes);

/**Swagger */
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

/** Error handling */
app.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

/** Server */
const httpServer = http.createServer(app);
const PORT = process.env.PORT || 6070;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));