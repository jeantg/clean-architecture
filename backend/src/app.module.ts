import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService, TaskService } from 'services';
import { TaskController } from 'controllers';
@Module({
  imports: [],
  controllers: [AppController, TaskController],
  providers: [AppService, PrismaService, TaskService],
})
export class AppModule {}
