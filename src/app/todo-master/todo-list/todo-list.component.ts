import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todo: { id: number, title: string, desc: string } = {
    id: 0, title: '', desc: ''
  }

  @Output() editTodoItemList = new EventEmitter<void>();
  @Output() deleteTodoItemList = new EventEmitter<void>();

  editTodoItem() {
    this.editTodoItemList.emit();
  }
  deleteTodoItem() {
    this.deleteTodoItemList.emit();
  }
}
