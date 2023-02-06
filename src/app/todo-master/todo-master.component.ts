import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-master',
  templateUrl: './todo-master.component.html',
  styleUrls: ['./todo-master.component.css']
})
export class TodoMasterComponent implements OnInit {
  count: number = 0;
  idEdit: number = 0;
  title: string = '';
  desc: string = '';
  editMode: boolean = false;

  @Input() todoList: [{ id: number, title: string; desc: string }] = [{ id: this.count, title: '', desc: '' }]

  constructor() { }

  @Output() addTodoEmit: EventEmitter<{ id: number, title: string, desc: string }> = new EventEmitter<{ id: number, title: string, desc: string }>();
  @Output() editTodoEmit: EventEmitter<{ id: number, title: string, desc: string }> = new EventEmitter<{ id: number, title: string, desc: string }>();
  @Output() deleteTodoEmit: EventEmitter<{ id: number, title: string, desc: string }> = new EventEmitter<{ id: number, title: string, desc: string }>();


  ngOnInit() {
  }
  addItemTodoList() {
    this.count += 1;
    this.addTodoEmit.emit({ id: this.count, title: this.title, desc: this.desc });
    this.idEdit = 0;
    this.title = '';
    this.desc = '';
    this.editMode = false;
  }
  editTodoItemMaster(todo: { id: number, title: string; desc: string }) {
    this.editMode = true;
    this.idEdit = todo.id;
    this.title = todo.title;
    this.desc = todo.desc;
  }
  editSave() {
    this.editTodoEmit.emit({ id: this.idEdit, title: this.title, desc: this.desc });
    this.idEdit = 0;
    this.title = '';
    this.desc = '';
    this.editMode = false;
  }

  deleteTodoItemMaster(todo: { id: number, title: string; desc: string }) {
    this.deleteTodoEmit.emit(todo);
  }

}
