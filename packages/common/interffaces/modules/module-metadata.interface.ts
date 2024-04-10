import {Type} from "../type.interface";


export interface ModuleMetadata {
	imports?: Array<Type<any>>,
	controllers?: any[],
	providers?: any[],
	exports?: any[],
}
