


export interface HttpServer<
	TRequest = any,
	TResponse = any,
	ServerInstance = any,
> {
	close(): any;
	getType(): string;
	init?(): Promise<void>;
}

export type RequestHandler<TRequest = any, TResponse = any> = (
	req: TRequest,
	res: TResponse,
	next?: Function,
) => any;
