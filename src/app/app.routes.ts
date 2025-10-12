import { Routes } from '@angular/router';
import { TaskaddComponent } from './taskadd/taskadd.component';
import { TaskallComponent } from './taskall/taskall.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserlogoffComponent } from './userlogoff/userlogoff.component';
import { UsersignupComponent } from './usersignup/usersignup.component';

export const routes: Routes = [
  { path: 'LinkSignup', component: UsersignupComponent },
  { path: 'LinkLogon', component: UserloginComponent },
  { path: 'LinkLogoff', component: UserlogoffComponent },
  { path: 'LinkTaskadd', component: TaskaddComponent },
  { path: 'LinkTaskall', component: TaskallComponent }
];
