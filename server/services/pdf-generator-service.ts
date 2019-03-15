
import * as puppeteer from 'puppeteer';



export default class PDFGeneratorService {

  public static readonly A3_FILE_FORMAT = 'A3';
  public static readonly A4_FILE_FORMAT = 'A4';


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
  public generatePdfFromTemplate(templateName: string, payload: any) {

  }// GeneratePdfFromTemplate




}// PDFGeneratorService
