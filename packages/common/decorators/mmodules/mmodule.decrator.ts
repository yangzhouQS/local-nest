import {ModuleMetadata} from "../../interffaces/modules/module-metadata.interface";

export function Module(metadata: ModuleMetadata): ClassDecorator {
	const propsKeys = Object.keys(metadata);
	return (target: Function) => {
		for (const property in metadata) {
			if (metadata.hasOwnProperty(property)) {
				Reflect.defineProperty(property, (metadata as any)[property], target)
			}
		}
	}
}
