<template>
  <div class="container">
    <Todo />
  </div>
</template>

<script>
import Todo from './features/Todo/Todo.vue';

export default {
  name: 'App',
  components: {
    Todo,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
