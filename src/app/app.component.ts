import { Component } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoList';
  constructor(){
    // setTimeout(()=>{
    //   this.title = "Yes";
    // },5000);
      
    }
  }

