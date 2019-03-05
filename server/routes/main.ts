
import { Request, Response } from 'express';

import Route from './route.interface';
import { pathToFileURL } from 'url';



export class MainRoutes implements Route {

  _app: any;

  // EndPoints declarations
  public static MAIN_ENDPOINT: string = '/';
  public static INFO_ENDPOINT: string = '/about';


  constructor(app: any) {
    this._app = app;
    this._generateEndPoints();
  }// Constructor



  /**
   * @method
   * @private
   * @description
   */
  _generateEndPoints() {


    // MAIN ENDPOINT
    this._app.route( MainRoutes.MAIN_ENDPOINT )
      .get((req: Request, res: Response) => {

        res.render(`/about/index.html`);
      
      });


    // INFO ENDPOINT
    this._app.route( MainRoutes.INFO_ENDPOINT )
      .get((req: Request, res: Response) => {
        
        res.render(`/about/index.html`);

      });// GEt



  }// GenerateEndPoints

}// MainRoutes