import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../data/task-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'an-userlogin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './userlogin.component.html',
  styleUrl: './userlogin.component.css'
})
export class UserloginComponent implements OnInit {

  useremail : string = '';
  userpassword : string = '';
  private tokenAnswer: any;

  constructor(private taskService: TaskService) { }
  ngOnInit() { }

  logonUser(): void {
    alert('Logging user on ' + this.useremail + ' password ' + this.userpassword);
    let userLogon = {
      email: this.useremail,
      password : this.userpassword
    }
    this.taskService.postUserLogOn(userLogon).subscribe(
      data => {
        this.tokenAnswer = data;
        console.log(this.tokenAnswer);
        localStorage.setItem('mosbachtasktoken', this.tokenAnswer.token);
      },
      err => console.log('Could not reach heroku.'),
      () => console.log('Loggin user on done.')
    );
  }
 
}
