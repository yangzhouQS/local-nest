export interface INestApplicationContext {
	registerRequestByContextId<T = any>(
		request: T,
		contextId: { id: number },
	): void;


	close(): Promise<void>;

	flushLogs(): void;

	init(): Promise<this>
}
