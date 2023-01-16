import Vue from 'vuex';

const store = Vue.createStore({
  state: {
    todoList: [],
  },
  mutations: {
    ADD_TODO (state, payload) {
      state.todoList = [payload, ...state.todoList];
    },
    DELETE_TODO (state, payload) {
      const newTodoList = state.todoList.filter((item) => item.id !== payload);
      state.todoList = newTodoList;
    },
    DEACTIVE_TODO (state, payload) {
      const todoUpdate = state.todoList.findIndex((item) => item.id === payload);
      state.todoList[todoUpdate] = {
        ...state.todoList[todoUpdate],
        status: 1
      }
    },
    ACTIVE_TODO (state, payload) {
      const todoUpdate = state.todoList.findIndex((item) => item.id === payload);
      state.todoList[todoUpdate] = {
        ...state.todoList[todoUpdate],
        status: 0
      }
    },
    EDIT_TODO (state, payload) {
      const todoUpdate = state.todoList.findIndex((item) => item.id === payload.id);
      state.todoList[todoUpdate] = {
        ...state.todoList[todoUpdate],
        todoName: payload.todoName,
        deadline: payload.deadline,
        status: payload.status,
      }
    }
  },
  actions: {
    ADD_TODO (context, action) {
      context.commit('ADD_TODO', action);
    },
    DELETE_TODO (context, action) {
      context.commit('DELETE_TODO', action);
    },
    DEACTIVE_TODO (context, action) {
      context.commit('DEACTIVE_TODO', action);
    },
    ACTIVE_TODO (context, action) {
      context.commit('ACTIVE_TODO', action);
    },
    EDIT_TODO (context, action) {
      context.commit('EDIT_TODO', action);
    },
  }
});

export default store;
