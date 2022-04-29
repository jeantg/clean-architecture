import {
  Controller,
  Get,
  Post,
  Body,
  Injectable,
  Query,
  Put,
  Delete,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { TaskService } from 'services';
@Controller()
@Injectable()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Post('/task')
  create(@Body() data: Prisma.TaskCreateInput) {
    return this.taskService.create(data);
  }
  @Get('/taskboard')
  async findMany(@Query('state') state) {
    return this.taskService.findMany(state);
  }
  @Put('/task/update/state')
  updateState(@Query('stateValue') stateValue, @Query('taskId') id) {
    return this.taskService.updateState(stateValue, id);
  }
  @Put('/task')
  updateTask(@Query('taskId') id, @Body() data: Prisma.TaskUpdateInput) {
    return this.taskService.updateTask(data, id);
  }
  @Delete('/task')
  deleteTask(@Query('taskId') id) {
    return this.taskService.deleteTask(id);
  }
}
