import { Injectable } from '@nestjs/common';
import { PrismaService } from 'services';
import { Prisma, Task } from '@prisma/client';
const select = {
  id: true,
  title: true,
  createdAt: true,
  state: true,
  stateValue: false,
};
@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}
  async create(
    data: Prisma.TaskCreateInput,
  ): Promise<Prisma.Prisma__TaskClient<Task>> {
    return this.prisma.task.create({
      select,
      data: { stateValue: (data.state as any).value, title: data.title },
    });
  }
  findMany(state: string) {
    return this.prisma.task.findMany({
      where: { stateValue: state },
      orderBy: { createdAt: 'desc' },
      select,
    });
  }
  updateState(stateValue, id) {
    return this.prisma.task.update({
      where: { id: Number(id) },
      select,
      data: { stateValue },
    });
  }
  updateTask(data: Prisma.TaskUpdateInput, id) {
    const { title, state }: any = data;
    return this.prisma.task.update({
      where: { id: Number(id) },
      select,
      data: { title, stateValue: state.value },
    });
  }
  deleteTask(id) {
    return this.prisma.task.delete({
      where: { id: Number(id) },
      select,
    });
  }
}
