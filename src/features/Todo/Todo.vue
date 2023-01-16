<template>
  <div class="container__todo">
    <div class="form">
      <div class="form__add__todo">
        <input type="text" v-model="todoName" />
        <input type="datetime-local" v-model="deadline" />
        <button @click="handleAddNewTodo(todoName, deadline)">ADD</button>
      </div>
      <div class="form__todo__item">
        <TodoItem v-for="item in todos" :todoItem="item" :key="item.id" />
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue';
import { mapState } from 'vuex';

export default {
  name: 'TodoList',
  data() {
    return {
      todoName: '',
      deadline: '',
    };
  },
  computed: mapState({
    todos: (state) => state.todoList,
  }),
  mounted() {},
  methods: {
    handleAddNewTodo: function (name, deadline) {
      const randomId = new Date().getTime();
      if (name && deadline) {
        const newTodo = {
          id: randomId,
          todoName: name,
          deadline,
          status: 0,
        };
        this.todoName = '';
        this.deadline = '';
        this.$store.dispatch('ADD_TODO', newTodo);
      } else {
        alert('Waning!!!');
      }
    },
  },
  components: { TodoItem },
};
</script>

<style>
.container__todo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
}
.container__todo .form {
  width: 600px;
  height: 600px;
  background: #fff;
  padding: 17px;
  border-radius: 7px;
}
.container__todo .form .form__add__todo button {
  border: none;
  padding: 10px 15px;
  background: #333;
  border-radius: 4px;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
}
.container__todo .form .form__add__todo input {
  border: 1px solid #333;
  border-radius: 4px;
  font-size: 16px;
  padding: 5px 10px;
}
.container__todo .form .form__todo__item {
  margin-top: 100px;
  height: 400px;
  padding: 5px 15px;
  overflow: hidden;
  overflow-y: scroll;
}
.container__todo .form .form__todo__item::-webkit-scrollbar {
  display: none;
}
</style>
