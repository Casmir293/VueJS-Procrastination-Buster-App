<template>
  <section class="container">
    <div class="my-4 d-flex justify-content-between align-items-center">
      <h2>My Schedule</h2>
      <router-link to="/timer" class="button"><b>Set Timer</b></router-link>
    </div>

    <div class="rounded-3 shadow bg-light p-3 pb-1 p-sm-5 pb-sm-3 mb-2">
      <!--INPUT-BAR-->
      <input
        class="form-control"
        type="text"
        name="task"
        placeholder="Enter a Task"
      />
      <br />

      <!--ADD-BUTTON-->
      <button class="btn btn-sm btn-primary mb-3">Add Task</button>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
@import "../assets/scss/to-do";
</style>
