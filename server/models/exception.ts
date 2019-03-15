


export default class Exception extends Error {
  
  description?: string;
  statusCode?: number;
  stack?: string;

  constructor(_description?: string, _status?: number) {
    super();
    this.description = _description;
    this.statusCode = _status || 500;
  }// Constructor

}// Exception