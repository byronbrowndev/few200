import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTodo } from '../../actions/todos.actions';
import { ProductivityState, selectProjectNames } from '../../reducers';

@Component({
  selector: 'app-todos-entry',
  templateUrl: './todos-entry.component.html',
  styleUrls: ['./todos-entry.component.css']
})
export class TodosEntryComponent implements OnInit {

  projects$: Observable<string[]>
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private store: Store<ProductivityState>) { }



  ngOnInit(): void {
    this.projects$ = this.store.select(selectProjectNames)
    this.form = this.formBuilder.group({
      'name': ['', [Validators.required]],
      'project': ['']
    })
  }


  get name(): AbstractControl { return this.form.get('name') };
  submit() {
    if (this.form.value) {
      this.store.dispatch(addTodo(this.form.value))
    } else {
      // chicken
    }
  }



}
