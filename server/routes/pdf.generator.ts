import { Request, Response } from 'express';

import Route from "./route.interface";
import PDFGeneratorService from '../services/pdf-generator-service';



export class PDFGeneratorRoutes implements Route {
  
  _app: any;
  _pdfGenerator: PDFGeneratorService;

  public static readonly PDF_FILE_OF_URL: string = '/pdf/url';
  public static readonly PDF_FILE_OF_TEMPLATE: string = '/pdf/template';
  
  
  constructor(app: any) {
    this._app = app;
    this._pdfGenerator = new PDFGeneratorService();
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

        this._pdfGenerator.generatePdf()
        .then((pdfFile) => {
          
          console.log("PDF --> FILE: ", pdfFile );
          res.set({'Content-Type': 'application/pdf', 'Content-Length' : pdfFile.length});
          res.send( pdfFile );
        
        }).catch((err) => {
          console.log("ERROR IN PDF FILE OF URL ----> ", err );
        });
      });

      

    /**
     * @route
     * @description
     * Return pdf file of template 
     */
    this._app.route( PDFGeneratorRoutes.PDF_FILE_OF_TEMPLATE )
      .get((req: Request, res: Response) => {
        res.send('AQUI RETORNAMOS UN ARCHIVO DE PDF DE UNA PLANTILLA PREVIAMENTE DEFINIDA...');
      });  

  }// GenerateEndPoints

}// PDFGeneratorRoutes