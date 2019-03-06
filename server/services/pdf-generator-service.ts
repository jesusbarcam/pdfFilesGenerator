
import * as puppeteer from 'puppeteer';



export default class PDFGeneratorService {


/**
 * @service
 * @description
 */
public generatePdfFromUrl() {
}// GeneratePdfFromUrl



/**
 * @service
 * @description
 */
public generatePdfFromTemplate() {

}// GeneratePdfFromTemplate



/**
 * @method
 * @private
 * @description
 */
public async generatePdf() {

  const url = 'https://www.taric.es';
  const pageFormat = 'A4';

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto( url, { waitUntil: 'networkidle0' });
  const pdf = await page.pdf({ format: pageFormat });

  await browser.close();
  return pdf;
  
}// GeneratePdf


}// PDFGeneratorService
