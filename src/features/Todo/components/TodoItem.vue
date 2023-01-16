<template>
  <div>
    <div class="todo__list__item">
      <div class="todo_info">
        <span class="done" v-if="todoItem.status === 1">Done</span>
        <span class="active" v-else>Active</span>
        <b>{{ todoItem.todoName }}</b>
        <div class="datetime__item">
          <span>{{ dateItem }}</span>
          <span>&nbsp; - &nbsp;</span>
          <span>{{ timeItem }}</span>
        </div>
      </div>
      <div class="option">
        <button
          class="deactive"
          @click="deactiveTodo(todoItem.id)"
          v-if="todoItem.status === 0"
        >
          Deactive
        </button>
        <button class="deactive" @click="activeTodo(todoItem.id)" v-else>
          Active
        </button>
        <button class="delete" @click="deleteTodo(todoItem.id)">Delete</button>
        <button
          class="edit"
          @click="
            toggleModalEdit(
              todoItem.id,
              todoItem.todoName,
              todoItem.deadline,
              todoItem.status
            )
          "
        >
          Edit
        </button>
      </div>
    </div>
    <Modal :selectTodoEdit="selectTodo" :onCancelModal="cancelModal" />
  </div>
</template>

<script>
import Modal from '@/components/modal/Modal.vue';

export default {
  props: {
    todoItem: Object,
  },
  data() {
    return {
      dateItem: '',
      timeItem: '',
      selectTodo: {
        id: 0,
        todoName: '',
        deadline: '',
        status: 0,
      },
    };
  },
  mounted() {
    const date = this.todoItem.deadline.split('T')[0];
    const time = this.todoItem.deadline.split('T')[1];
    this.dateItem = date;
    this.timeItem = time;
  },
  methods: {
    deleteTodo: function (id) {
      this.$store.dispatch('DELETE_TODO', id);
    },
    activeTodo: function (id) {
      this.$store.dispatch('ACTIVE_TODO', id);
    },
    deactiveTodo: function (id) {
      this.$store.dispatch('DEACTIVE_TODO', id);
    },
    toggleModalEdit: function (id, todoName, deadline, status) {
      const todoEdit = {
        id,
        todoName,
        deadline,
        status,
      };
      this.selectTodo = todoEdit;
    },
    cancelModal: function () {
      const cancel = {
        id: 0,
        todoName: '',
        deadline: '',
        status: 0,
      };
      this.selectTodo = cancel;
    },
  },
  components: { Modal },
};
</script>

<style>
.todo__list__item {
  display: flex;
  padding: 20px 10px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 7px;
  box-shadow: 0 3px 5px 1px #999;
  overflow: hidden;
}
.todo__list__item .todo_info .active {
  display: inline-block;
  border: none;
  padding: 5px 10px;
  color: #fff;
  background: rgb(80, 223, 13);
  border-radius: 4px;
}
.todo__list__item .todo_info .done {
  display: inline-block;
  border: none;
  padding: 5px 10px;
  color: #fff;
  background: rgb(234, 86, 86);
  border-radius: 4px;
}
.todo__list__item .todo_info .datetime__item {
  display: flex;
}
.todo__list__item .option .deactive {
  border: none;
  padding: 5px 10px;
  color: #fff;
  background: rgb(234, 86, 86);
  margin-left: 10px;
  cursor: pointer;
  border-radius: 4px;
}
.todo__list__item .option .delete {
  border: none;
  padding: 5px 10px;
  color: #fff;
  background: #333;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 4px;
}
.todo__list__item .option .edit {
  border: none;
  padding: 5px 10px;
  color: #fff;
  background: rgb(10, 82, 249);
  margin-left: 10px;
  cursor: pointer;
  border-radius: 4px;
}
</style>
