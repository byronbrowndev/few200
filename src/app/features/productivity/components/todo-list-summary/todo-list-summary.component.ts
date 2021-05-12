import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TodoListSummary } from '../../models';

@Component({
  selector: 'app-todo-list-summary',
  templateUrl: './todo-list-summary.component.html',
  styleUrls: ['./todo-list-summary.component.css'],
  // says only refresh on push
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListSummaryComponent implements OnInit {

  @Input() summary: TodoListSummary;

  constructor() { }

  ngOnInit(): void {
  }

}
