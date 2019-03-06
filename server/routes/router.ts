
import { MainRoutes } from "./main";
import { PDFGeneratorRoutes } from './pdf.generator';


export class Router {

  public mainRoutes: MainRoutes;
  public pdfGeneratorRoutes: PDFGeneratorRoutes;


  /**
   * @method
   * @public
   * @param app
   * @description 
   */
  public generateRoutes(app: any): void {
    this.mainRoutes = new MainRoutes( app );
    this.pdfGeneratorRoutes = new PDFGeneratorRoutes( app );
  }// CreateRoutes

}// Routes