import { Category } from 'src/app/model/Category';
import { DataHandlerService } from './../../service/DataHandler.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];

  constructor(private dataHandler: DataHandlerService) {}

  ngOnInit() {
    this.categories = this.dataHandler.getCategories();
    console.log(this.categories);
    
  }
  
  showTasksByCategory(category: Category){
    this.dataHandler.getTasksByCategory(category);
  }
}
