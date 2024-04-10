import {NestApplicationContext} from "./nest-application-context";
import {NestContainer} from "./injector/container";


export class NestApplication extends NestApplicationContext{
	constructor(
		container: NestContainer,
	) {
		super();
	}

}
