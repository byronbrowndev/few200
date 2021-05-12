export interface TodoListModel {



  list: TodoListItem[];
  summary: TodoListSummary



}



export interface TodoListItem {
  id: string;
  description: string;
  project?: string;
  completed: boolean;
}



export interface TodoListSummary {
  totalTodos: number;
  incomplete: number;
  complete: number;
}
