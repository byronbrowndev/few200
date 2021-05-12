import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductivityComponent } from './productivity.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { TodosEntryComponent } from './components/todos-entry/todos-entry.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './effects/app.effects';
import { TodoEffects } from './effects/todos.effects';
import { TodoListSummaryComponent } from './components/todo-list-summary/todo-list-summary.component';
import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: 'productivity',
    component: ProductivityComponent,
    children: [
      {
        path: 'todos',
        component: TodosComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    ProductivityComponent,
    TodosComponent,
    TodosListComponent,
    TodosEntryComponent,
    DashboardComponent,
    ProjectsComponent,
    TodoListItemComponent,
    TodoListSummaryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([AppEffects, TodoEffects]),
    ReactiveFormsModule
  ],
  exports: [
    ProductivityComponent
  ]
})
export class ProductivityModule { }
