import { Component, inject, Input } from '@angular/core';
import { Task } from './task.model';
import { TasksService } from '../tasks.service';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.scss',
    imports: [CardComponent, DatePipe],
})
export class TaskComponent {
    @Input({ required: true }) task!: Task;
    private tasksService = inject(TasksService);

    onCompleteTask() {
        this.tasksService.removeTask(this.task.id);
    }
}
