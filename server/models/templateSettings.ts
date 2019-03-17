import { PDFFormat } from "puppeteer";


/*
NOTE: More info of this interface: 
https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagepdfoptions
*/
export default interface PageOptions {
  path?: string;
  scale?: number;
  displayHeaderFooter?: boolean;
  headerTemplate?: string;
  footerTemplate?: string;
  printBackground?: boolean;
  // orientation
  landscape?: boolean;
  pageRanges?: string;
  // PDFFormat type: "Letter" | "Legal" | "Tabload" | "Ledger" | "A0" | "A1" | "A2" | "A3" | "A4" | "A5"
  format?: PDFFormat;
  width?: string | number;
  height?: string | number;
  margin?: PageMargins;
  // Give any CSS @page size declared in the page priority over what is declared in width and height or format options.
  // Defaults to false, which will scale the content to fit the paper size.
  preferCSSPageSize?: boolean;

}// TemplateSettings 


export interface PageMargins {
  top: string | number;
  bottom: string | number;
  left: string | number;
  right: string | number;
}// PageMargins