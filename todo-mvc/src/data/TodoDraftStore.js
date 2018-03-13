import {ReduceStore} from "flux/utils";
import TodoDispatcher from "./TodoDispatcher";

class TodoDraftStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher);
  }

  getInitialState() {
    return '';
  }

  reduce(state, action) {
    return state;
  }
}

export default new TodoDraftStore();
