import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.scss',
    imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
    @Input({ required: true }) userId!: string;
    @Input({ required: true }) name!: string;

    isAddingTask = false;

    constructor(private tasksService: TasksService) {}

    get selectedUserTasks() {
        return this.tasksService.getUserTasks(this.userId);
    }

    onStartAddTask() {
        this.isAddingTask = true;
    }

    onCloseAddTask() {
        this.isAddingTask = false;
    }
}
