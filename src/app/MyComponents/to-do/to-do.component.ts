import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent {
  localItem!: string;
  todos!: Todo[];
  constructor() {
    // this.localItem = JSON.parse(localStorage.getItem("todos") as string);
    // if(this.localItem == null){
    //   this.todos = []
    // }
    // else{
    //   this.todos = JSON.parse(this.localItem);
    // }
    this.todos = []
  }
    // this.todos = [
    //   // {
    //   //   sno: 1,
    //   //   title: 'wake-up',
    //   //   desc: 'get up from the bed',
    //   //   active: true,
    //   // },
    //   // {
    //   //   sno: 2,
    //   //   title: 'make-bed',
    //   //   desc: 'make the bed',
    //   //   active: true,
    //   // },
    //   // {
    //   //   sno: 1,
    //   //   title: 'breakfast',
    //   //   desc: 'make eggs and bacon',
    //   //   active: true,
    //   // }
    // ];
  deleteTodo(todo: Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
  addTodo(todo: Todo){
    console.log(todo);
    this.todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
}
