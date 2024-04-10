import {INestApplicationContext} from "../common/interffaces/nest-application.context";


export class NestApplicationContext implements INestApplicationContext{
	close(): Promise<void> {
		return Promise.resolve(undefined);
	}

	flushLogs(): void {
	}

	init(): Promise<this> {
		return Promise.resolve(undefined);
	}

	registerRequestByContextId<T = any>(request: T, contextId: { id: number }): void {
	}

}
