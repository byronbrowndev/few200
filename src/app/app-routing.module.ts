import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
// import { TodosComponent } from './features/productivity/components/todos/todos.component';
import { ProductivityComponent } from './features/productivity/productivity.component';

const routes: Routes = [
  {
    path: 'productivity',
    component: ProductivityComponent
  },
  {
    path: '',
    component: HomeComponent,
    // pathMatch: 'full'
  },
  {
    path: 'counter',
    component: CounterComponent,
    // pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent,
    // pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
