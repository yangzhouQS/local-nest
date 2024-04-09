import {NestFactory} from "./core";

console.log('common - hello')

async function bootstrap() {
	const app = await NestFactory.create()
	
}

bootstrap();
