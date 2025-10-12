import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../data/task-service';

@Component({
  selector: 'an-taskall',
  standalone: true,
  imports: [],
  templateUrl: './taskall.component.html',
  styleUrl: './taskall.component.css'
})
export class TaskallComponent implements OnInit {

  private tasks: any;
  tasklist: string = '';

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTaskData(localStorage.getItem('mosbachtasktoken')).subscribe(
      data => {
        this.tasks = data;
        console.log(this.tasks);
        var temp = '';
        for (var i = 0; i < this.tasks.tasks.length; i++)
          temp += '<li>' + this.tasks.tasks[i].name + ' ' + this.tasks.tasks[i].priority + '</li>';
        console.log(temp);
        this.tasklist = temp;
      },
      err => console.log('Could not reach heroku.'),
      () => console.log('Reading Task data done.')
    );
    
  }

}
