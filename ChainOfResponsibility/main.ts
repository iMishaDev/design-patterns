import { Authenticator } from "./Authenticator.js";
import { Compressor } from "./Compressor.js";
import { HttpRequest } from "./HttpRequest.js";
import { Logger } from "./Logger.js";
import { WebServer } from "./WebServer.js";

let compressor = new Compressor(null);
let logger = new Logger(compressor);
let authenticator = new Authenticator(logger);

let server = new WebServer(authenticator);
let request = new HttpRequest('admin', '1234');
server.handle(request)

