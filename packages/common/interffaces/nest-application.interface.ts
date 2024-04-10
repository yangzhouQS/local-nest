import {INestApplicationContext} from "./nest-application.context";
import {HttpServer} from "./http/http-server.interface";


export interface INestApplication<TServer = any> extends INestApplicationContext {
	use(...args: any[]): this;

	listen(port: number | string, callback?: () => void): Promise<any>;

	getUrl(): Promise<string>;

	setGlobalPrefix(prefix: string, options?: any): this;


	useWebSocketAdapter(adapter: any): this;


	connectMicroservice<T extends object = any>(
		options: T,
		hybridOptions?: any,
	): any;

	getMicroservices(): any[];


	getHttpServer(): TServer;


	getHttpAdapter(): HttpServer;


	startAllMicroservices(): Promise<this>;


	useGlobalFilters(): this;

	useGlobalPipes(): this;


	useGlobalInterceptors(): this;


	useGlobalGuards(): this;

	close(): Promise<void>;
}
