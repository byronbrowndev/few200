import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductivityComponent } from './productivity.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { TodosEntryComponent } from './components/todos-entry/todos-entry.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {
    path: '',
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
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ProductivityComponent
  ]
})
export class ProductivityModule { }
