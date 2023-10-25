import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/Task';
import { DataHandlerService } from 'src/app/service/DataHandler.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './Tasks.component.html',
  styleUrls: ['./Tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit() {
    this.tasks = this.dataHandler.getTasks();
  }

}
