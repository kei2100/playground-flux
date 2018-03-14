//  This will save information about all of the To-do objects in our application. It will use an Immutable map as the state.

import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';
import Counter from './Counter';
import Todo from './Todo';

class TodoStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher);
  }

  getInitialState() {
    return {
      draft: '',
      todos: Immutable.OrderedMap(),
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case TodoActionTypes.ADD_TODO:
        if (!action.text) {
          return state
        }
        const id = Counter.increment();
        return {
          draft: '',
          todos: state.todos.set(id, new Todo({
            id,
            text: action.text,
            complete: false,
          })),
        };
      case TodoActionTypes.DELETE_TODO:
        return {
          ...state,
          todos: state.todos.delete(action.id),
        };
      case TodoActionTypes.TOGGLE_TODO:
        return {
          ...state,
          todos: state.todos.update(action.id, todo => todo.set('complete', !todo.complete)),
        };
      case TodoActionTypes.UPDATE_DRAFT:
        return {
          ...state,
          draft: action.text,
        };
      default:
        return state;
    }
  }
}

export default new TodoStore();
