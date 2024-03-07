import { Module } from "@nestjs/common";
import { DatabaseModule } from "./config/database/database.module";
import { TaskModule } from "./task/task.module";

@Module({
	imports: [DatabaseModule, TaskModule],
	providers: [],
})
export class AppModule {}
