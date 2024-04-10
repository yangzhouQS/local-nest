import {HttpServer, RequestHandler} from "../../common/interffaces/http/http-server.interface";


export class AbstractHttpAdapter<TServer = any, TRequest = any, TResponse = any> implements HttpServer<TRequest, TResponse> {
	protected httpServer: TServer;

	constructor(
		protected instance?: any
	) {
	}

	// @ts-ignore
	public init(): void {
		console.log('arguments')
	}

	public patch(handler: RequestHandler);
	public patch(path: any, handler: RequestHandler);
	public patch(...args: any[]) {
		return this.instance.patch(...args);
	}
}
