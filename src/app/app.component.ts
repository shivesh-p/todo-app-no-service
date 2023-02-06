import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editMode: boolean = false;
  todoList: [{ id: number, title: string; desc: string }] = [{ id: 0, title: '', desc: '' }]

  onAddTodoApp(data: { id: number, title: string; desc: string }) {
    this.todoList.push(data);
  }
  onEditTodoApp(data: { id: number, title: string; desc: string }) {
    var objIndex = this.todoList.findIndex((obj => obj.id == data.id));
    this.todoList[objIndex].title = data.title;
    this.todoList[objIndex].desc = data.desc;
  }
  onDeleteTodoApp(data: { id: number, title: string; desc: string }) {
    var objIndex = this.todoList.findIndex((obj => obj.id == data.id));
    this.todoList.splice(objIndex, 1);
  }
}
