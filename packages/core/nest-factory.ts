import {INestApplication} from "../common/interffaces/nest-application.interface";
import {NestApplicationOptions} from "../common/interffaces/nest-application-options.interface";
import {ApplicationConfig} from "../common/interffaces/application-config";
import {NestContainer} from "./injector/container";
import {NestApplication} from "./nest-application";
import {isFunction} from "lodash";
import {HttpServer} from "../common/interffaces/http/http-server.interface";
import {AbstractHttpAdapter} from "./adapters/http-adapter";
import * as express from 'express';

export class NestFactoryStatic {
	public async create<T extends INestApplication = INestApplication>(
		moduleCls: any,
		serverOrOptions?: AbstractHttpAdapter | NestApplicationOptions,
		options?: NestApplicationOptions
	) {

		const [httpServer, appOptions] = this.isHttpServer(serverOrOptions) ? [serverOrOptions, options] : [this.createHttpAdapter(), serverOrOptions]

		const applicationConfig = new ApplicationConfig()
		const container = new NestContainer(applicationConfig)
		const instance = new NestApplication(container)

		const target = this.createNestInstance((instance))

		console.log('create')
		return this.createAdapterProxy<T>(target, )
	}

	private isHttpServer(serverOrOptions: AbstractHttpAdapter | NestApplicationOptions): serverOrOptions is AbstractHttpAdapter {
		return !!(serverOrOptions && (serverOrOptions as AbstractHttpAdapter).patch)
	}

	private createNestInstance<T>(instance: T): T {
		return this.createProxy(instance);
	}

	private createProxy(target: any) {
		const proxy = this.createExceptionProxy();
		return new Proxy(target, {
			get: proxy,
			set: proxy,
		});
	}

	private createExceptionProxy() {
		return (receiver: Record<string, any>, prop: string) => {
			if (!(prop in receiver)) {
				return;
			}
			if (isFunction(receiver[prop])) {
				// return this.createExceptionZone(receiver, prop);
			}
			return receiver[prop];
		};
	}

	private createAdapterProxy<T>(app: NestApplication ) {

		return Promise.resolve(undefined);
	}

	private createHttpAdapter<T = any>(httpServer?: T): HttpServer {
		return express(httpServer) as HttpServer;
	}
}

export const NestFactory = new NestFactoryStatic()
