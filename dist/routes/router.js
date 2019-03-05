"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
class Router {
    /**
     * @method
     * @public
     * @param app
     * @description
     */
    generateRoutes(app) {
        this.mainRoutes = new main_1.MainRoutes(app);
    } // CreateRoutes
} // Routes
exports.Router = Router;
//# sourceMappingURL=router.js.map