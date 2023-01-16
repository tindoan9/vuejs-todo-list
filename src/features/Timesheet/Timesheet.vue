<template>
  <div class="container__timesheet">
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar/Sidebar.vue';

export default {
  name: 'Timesheet-vue',
  components: { Sidebar },
};
</script>

<style lang="scss" scoped></style>
