"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyparser = require("body-parser");
const router_1 = require("./routes/router");
class App {
    constructor() {
        this.router = new router_1.Router();
        this.app = express();
        this.config();
        this.router.generateRoutes(this.app);
    } // Constructor
    /**
     * @method
     * @private
     * @description
     */
    config() {
        // Register url of static files
        this.app.use(express.static(`${__dirname}/views`));
        // Support application/json type post data
        this.app.use(bodyparser.json());
        // Support application/x-www-form-urlencoded post data
        this.app.use(bodyparser.urlencoded({ extended: false }));
    } // Config
} // App
exports.default = new App().app;
//# sourceMappingURL=app.js.map