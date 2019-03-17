
import * as puppeteer from 'puppeteer';
import{ PDFFormat } from 'puppeteer';
import * as fs from 'fs';

import PageOptions from '../models/templateSettings';



export default class PDFGeneratorService {

  public static readonly A3_FILE_FORMAT = 'A3';
  public static readonly A4_FILE_FORMAT = 'A4';

  public static readonly TEMPLATES_DIRECTORY = 'file:///Users/Rawdog/Developer/Learning/Node/PdfFilesGenerator/server/views/templates';
  public static readonly HEADER_TEMPLATE_DIRECTORY = `../views/templates/header.html`;
  public static readonly FOOTER_TEMPLATE_DIRECTORY = `../views/templates/footer.html`;


  /**
  * @service
  * @description
  */
  public async generatePdfFromUrl(url: string, formatFile: string) {

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto( url, { waitUntil: 'networkidle0' });
    const pdf = await page.pdf({ format: formatFile as puppeteer.PDFFormat });

    await browser.close();
    return pdf;
  }// GeneratePdfFromUrl




  /**
   * @service
   * @description
  */
  public async generatePdfFromTemplate(templateName: string, payload: any) {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();    
    await page.goto(`${PDFGeneratorService.TEMPLATES_DIRECTORY}/index.html`); 
    

    await page.evaluateHandle('document.fonts.ready')
    .then(() => {
      // TODO: Cuando las fuentes son cargadas correctamente      
    
    }).catch((err) => {
      // TODO: Cuando al cargar las fuentes nos retorna un error
    });
    
    
    const header = fs.readFileSync(`${__dirname}/${PDFGeneratorService.HEADER_TEMPLATE_DIRECTORY}`, 'utf8');
    const footer = fs.readFileSync(`${__dirname}/${PDFGeneratorService.FOOTER_TEMPLATE_DIRECTORY}`,'utf8');

    const options: PageOptions = {
      path: 'title.pdf',
      displayHeaderFooter: true,
      headerTemplate: header,
      footerTemplate: footer,
      format: 'A4',
      margin: {
        top: '100px',
        bottom: '100px',
        right: '30px',
        left: '30px',
      }    
    };
    
    const pdf = await page.pdf( options );    
    await browser.close(); 
    return pdf;

  }// GeneratePdfFromTemplate


}// PDFGeneratorService
