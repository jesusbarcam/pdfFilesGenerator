
import { Request } from 'express';
import PDFGeneratorService from '../services/pdf-generator-service';
import Exception from '../models/exception';



export default class PDFGeneratorController {

  private static readonly REQUESTED_URL_PARAMETER = 'Url parameter is requested';
  private static readonly DEFAULT_EXCEPTION_BASE_MESSAGE = 'Wrong Parameters';
  private static readonly DEFAULT_PDF_FORMAT = 'A4';

  private _pdfGenerator: PDFGeneratorService;
  private _currentError: string;



  constructor() {
    this._pdfGenerator = new PDFGeneratorService();
  }// Constructor



  /**
   * @method
   * @param req
   * @description 
   */
  public async generatePdfFileFromUrl (req: Request) {

    this._currentError = null;
    let generatedFile = null;

    const reqUrl = req.query.name;
    const reqFormat = req.query.format;
    
    const parameters = await this._parametersAreOk([ reqUrl, reqFormat ]);

    if ( parameters ) {
      const [url, format] = parameters;
      await this._pdfGenerator.generatePdfFromUrl( url, format )
        .then((pdfFile) => {
          generatedFile = pdfFile;
        });
    } else {
      const exceptionDescription = `${PDFGeneratorController.DEFAULT_EXCEPTION_BASE_MESSAGE} [${this._currentError}]`;
      const exception = new Exception(exceptionDescription, 400);
      throw exception;
    }// If
    return generatedFile;
  }// GeneratePdfFileFromUrl

  


  /**
   * @method
   * @param args
   * @description 
   */
  private _parametersAreOk(parameters: string[]) {

    let [ url, format ] = parameters;

    if ( !url ) {
      this._currentError = PDFGeneratorController.REQUESTED_URL_PARAMETER;
      return null;
    }// Url

    if ( !format ) {
      format = PDFGeneratorController.DEFAULT_PDF_FORMAT;
    }// If
    
    return [url, format];
  }// ParametersAreOk


}// PDFGeneratorController