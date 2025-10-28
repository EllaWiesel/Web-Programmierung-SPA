import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { TaskaddComponent } from './taskadd/taskadd.component';
import { TaskallComponent } from './taskall/taskall.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserlogoffComponent } from './userlogoff/userlogoff.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { TaskService } from '../data/task-service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductsearchComponent } from './productSearch/productsearch.component';

@Component({
  selector: 'an-root',
  standalone: true,
  imports: [
      HttpClientModule,
      FormsModule,
      RouterOutlet,
      RouterLink,
      TaskaddComponent,
      TaskallComponent,
      UserloginComponent,
      UserlogoffComponent,
      UsersignupComponent,
      ProductsearchComponent
    ],
  templateUrl: './app.component.html',
  providers: [TaskService],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tasksspa';
  author = 'Michael Hartwig';
  age = 25;

  searchTerm: string = '';
}
