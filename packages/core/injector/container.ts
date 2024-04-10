import {ApplicationConfig} from "../../common/interffaces/application-config";


export class NestContainer {
	constructor(
		private readonly _applicationConfig: ApplicationConfig = undefined
	) {
	}

}
