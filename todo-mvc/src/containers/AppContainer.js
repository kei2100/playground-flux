// Containers are what connects the STATE from STORES and ACTIONS to VIEWS

import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import TodoStore from '../data/TodoStore';
import TodoActions from '../data/TodoActions';

function getStores() {
  return [
    TodoStore,
  ];
}

function getState() {
  return {
    todos: TodoStore.getState().todos,
    draft: TodoStore.getState().draft,
    onDeleteTodo: TodoActions.deleteTodo,
    onToggleTodo: TodoActions.toggleTodo,
    onAdd: TodoActions.addTodo,
    onUpdateDraft: TodoActions.updateDraft,
  };
}

export default Container.createFunctional(AppView, getStores, getState);
