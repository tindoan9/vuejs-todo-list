<template>
  <div class="sidebar">
    <div class="sidebar__option">
      <router-link to="/home">Home</router-link>
      <router-link to="/projects">Projects</router-link>
      <p>Logout</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar-timesheet',
};
</script>

<style lang="scss" scoped></style>
