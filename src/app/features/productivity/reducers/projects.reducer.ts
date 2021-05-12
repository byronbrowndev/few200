import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action } from '@ngrx/store';

export interface ProjectEntity {
  id: string;
  name: string;
}

export interface ProjectState extends EntityState<ProjectEntity> {

}

export const adapter = createEntityAdapter<ProjectEntity>();

const initialState: ProjectState = {
  ids: ['1', '2', '3'],
  entities: {
    '1': { id: '1', name: 'Fitness' },
    '2': { id: '2', name: 'Home Repair' },
    '3': { id: '3', name: 'Shopping' }
  }
}

const reducerFunction = createReducer(
  initialState
);

export function reducer(state: ProjectState = initialState, action: Action): ProjectState {
  return reducerFunction(state, action);
}



