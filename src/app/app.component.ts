import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'World!';
  isLoading = true;

  todoList: number[] = [];

  imageUrl = 'https://placeimg.com/300/300/animals'

  isActive = true;

  email: string;

  amount = 123456.799;

  today = new Date();

  user = {
    name: 'John Snow',
    age: 20,
    isAdmin: false,
  }

  constructor(
    private todoService: TodoService
  ){
    this.todoList = this.todoService.getTodolist();
  }

  onClickOkButton(){
    console.log(event);
  }

  search(email: string){
    console.log('search', email);
  }


}
