/* eslint-disable */
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Providers } from "./schemas.providers";

@Module({
	imports: [
		MongooseModule.forRoot("mongodb://localhost:27017/task-system-db"),
		MongooseModule.forFeature(Providers),
	],
	exports: [MongooseModule.forFeature(Providers)],
})
export class DatabaseModule {}
