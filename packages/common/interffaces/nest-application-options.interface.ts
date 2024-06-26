import {NestApplicationContextOptions} from "./nest-application-context-options.interface";

export interface NestApplicationOptions extends NestApplicationContextOptions{
	/**
	 * CORS options from [CORS package](https://github.com/expressjs/cors#configuration-options)
	 */
	cors?: boolean ; // | CorsOptions | CorsOptionsDelegate<any>;
	/**
	 * Whether to use underlying platform body parser.
	 */
	bodyParser?: boolean;
	/**
	 * Set of configurable HTTPS options
	 */
	httpsOptions?: any;
	/**
	 * Whether to register the raw request body on the request. Use `req.rawBody`.
	 */
	rawBody?: boolean;
	/**
	 * Force close open HTTP connections. Useful if restarting your application hangs due to
	 * keep-alive connections in the HTTP adapter.
	 */
	forceCloseConnections?: boolean;
}
