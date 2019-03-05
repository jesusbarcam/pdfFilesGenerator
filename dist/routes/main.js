"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MainRoutes {
    constructor(app) {
        this._app = app;
        this._generateEndPoints();
    } // Constructor
    /**
     * @method
     * @private
     * @description
     */
    _generateEndPoints() {
        // MAIN ENDPOINT
        this._app.route(MainRoutes.MAIN_ENDPOINT)
            .get((req, res) => {
            res.render(`/about/index.html`);
        });
        // INFO ENDPOINT
        this._app.route(MainRoutes.INFO_ENDPOINT)
            .get((req, res) => {
            res.render(`/about/index.html`);
        }); // GEt
    } // GenerateEndPoints
} // MainRoutes
// EndPoints declarations
MainRoutes.MAIN_ENDPOINT = '/';
MainRoutes.INFO_ENDPOINT = '/about';
exports.MainRoutes = MainRoutes;
//# sourceMappingURL=main.js.map