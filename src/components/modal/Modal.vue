<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="modal" :id="[selectTodoEdit.id === 0 ? '' : 'active']">
    <div class="modal__todo__edit">
      <div class="form__todo__edit">
        <h3>Edit Todo</h3>
        <input type="text" v-model="selectTodoEdit.todoName" />
        <input type="datetime-local" v-model="selectTodoEdit.deadline" />
      </div>
      <button
        @click="
          handleEditTodo(
            selectTodoEdit.id,
            selectTodoEdit.todoName,
            selectTodoEdit.deadline,
            selectTodoEdit.status
          )
        "
      >
        Save
      </button>
      <button @click="onCancelModal()">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalEditTodo',
  props: {
    selectTodoEdit: Object,
    onCancelModal: Function,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    handleEditTodo: function (id, todoName, deadline, status) {
      if (todoName && deadline) {
        const editTodo = {
          id,
          todoName,
          deadline,
          status,
        };
        this.onCancelModal();
        this.$store.dispatch('EDIT_TODO', editTodo);
      } else {
        alert('waning!!!');
      }
    },
  },
};
</script>

<style>
.modal {
  position: fixed;
  z-index: 10;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
}
.modal .modal__todo__edit {
  width: 400px;
  background-color: #f2f6fc;
  padding: 10px 50px 50px 50px;
  border-radius: 8px;
}
.modal .modal__todo__edit .form__todo__edit {
  display: flex;
  flex-direction: column;
}
.modal .modal__todo__edit .form__todo__edit h3 {
  text-align: center;
}
.modal .modal__todo__edit .form__todo__edit input {
  padding: 10px 20px;
  margin: 15px;
  font-size: 16px;
  border: none;
  outline: none;
  border-bottom: 2px solid #333;
}
.modal .modal__todo__edit button {
  float: right;
  border: none;
  padding: 5px 10px;
  background-color: #409eff;
  color: #fff f;
  margin: 5px;
  cursor: pointer;
}
#active {
  visibility: visible;
  background: rgba(0, 0, 0, 0.5);
}
</style>
