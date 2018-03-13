// Containers are what connects the STATE from STORES and ACTIONS to VIEWS

import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import TodoStore from '../data/TodoStore';
import TodoActions from '../data/TodoActions';
import TodoDraftStore from '../data/TodoDraftStore'

function getStores() {
  return [
    TodoStore,
  ];
}

function getState() {
  return {
    todos: TodoStore.getState(),
    draft: TodoDraftStore.getState(),
    onDeleteTodo: TodoActions.deleteTodo,
    onToggleTodo: TodoActions.toggleTodo,
    onAdd: () => {console.log('onadd!')},
    onUpdateDraft: () => {console.log('onupdate!!')},
  };
}

export default Container.createFunctional(AppView, getStores, getState);
