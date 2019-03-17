import { Request, Response } from 'express';

import Route from "./route.interface";
import PDFGeneratorController from '../controllers/pdf-generator-controller';
import Exception from 'models/exception';



export class PDFGeneratorRoutes implements Route {
  
  _app: any;
  _pdfGeneratorController: PDFGeneratorController;

  public static readonly PDF_FILE_OF_URL: string = '/pdf/url';
  public static readonly PDF_FILE_FROM_TEMPLATE: string = '/pdf/template';
  
  
  constructor(app: any) {
    this._app = app;
    this._pdfGeneratorController = new PDFGeneratorController();
    this._generateEndPoints();
  }// Constructor
  
  

  /**
   * @method
   * @private
   * @description
   */
  _generateEndPoints(): void {
  


    /**
     * @route
     * @description
     * Return pdf file of url arrives 
     * by request parameters
     */
    this._app.route( PDFGeneratorRoutes.PDF_FILE_OF_URL )
      .get((req: Request, res: Response) => {

        this._pdfGeneratorController.generatePdfFileFromUrl(req)
        .then((pdfFile) => {
          
          res.status(200);
          res.set({'Content-Type': 'application/pdf', 'Content-Length' : pdfFile.length });
          res.send( pdfFile );
        
        })
        .catch((exception: Exception) => {
          console.error( exception );
          res.status(exception.statusCode).send(`${exception.description}`);
        });
        
      });




    /**
     * @route
     * @description
     * Return pdf file of template 
     */
    this._app.route( PDFGeneratorRoutes.PDF_FILE_FROM_TEMPLATE )
      .get((req: Request, res: Response) => {

        this._pdfGeneratorController.generatePdfFileFromTemplate(req)
        .then((pdfFile) => {

          res.status(200);
          res.set({'Content-Type': 'application/pdf', 'Content-Length' : pdfFile.length });
          res.send( pdfFile );

        }).catch((exception: Exception) => {
          console.error( exception );
          res.status(exception.statusCode).send(`${exception.description}`);
        });
      });  


  }// GenerateEndPoints
}// PDFGeneratorRoutes