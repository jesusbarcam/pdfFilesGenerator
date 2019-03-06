import * as http from 'http';

import app from './app';
import Settings from './settings';

/**
 * @node
 * @server
 * @description
 */
const server = http.createServer( app );
server.timeout = Settings.REQUEST_TIMEOUT;
server.listen( Settings.LISTEN_PORT, () => {

  console.log("Express server listen on port: ", Settings.LISTEN_PORT );

});// App.listen