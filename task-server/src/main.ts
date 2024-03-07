import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const globalPrefix = '/api';
const logger = new Logger('App');

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useLogger(logger);
	app.useGlobalPipes(new ValidationPipe({ transform: true }));
	app.setGlobalPrefix(globalPrefix);
	await app.listen(3001);
	console.log('app listen port: 3001/api');
}
bootstrap();
