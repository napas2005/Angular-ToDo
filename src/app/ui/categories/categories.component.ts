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
  selectedCategory!: Category;
  
  constructor(private dataHandler: DataHandlerService) {}

  ngOnInit() {
    this.categories = this.dataHandler.getCategories();
    
  }
  
  showTasksByCategory(category: Category){
    this.selectedCategory = category;
    this.dataHandler.fillTasksByCategory(category);
  }
}
