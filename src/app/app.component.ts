import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { DUMMY_USERS } from './dummy-users';
import { UserComponent } from './component/user/user.component';
import { TasksComponent } from './component/tasks/tasks.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    users = DUMMY_USERS;
    selectedUserId?: string;

    get selectedUser() {
        return this.users.find(user => user.id === this.selectedUserId);
    }

    onSelectUser(id: string) {
        this.selectedUserId = id;
    }
}
