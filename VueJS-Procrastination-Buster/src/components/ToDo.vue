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
        v-model="newTodo"
        @keyup.enter="addTodo"
      />
      <br />

      <!--ADD-BUTTON-->
      <button class="btn btn-sm btn-primary mb-3" @click="addTodo">
        Add Task
      </button>

      <!--TO-DO-->
      <ul class="p-0">
        <li v-for="(todo, index) in todos" :key="index">
          <div
            class="my-3 p-3 p-sm-4 shadow-sm rounded-3 text-light bg-secondary myTask"
          >
            <div class="row">
              <div class="my-1 col-md-10 col-lg-11">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label ps-2">{{ todo }}</label>
              </div>
              <div class="col-md-2 col-lg-1">
                <button
                  class="btn btn-sm btn-danger mt-2 mt-sm-0"
                  @click="removeTodo(index)"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "ToDo",

  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },

  methods: {
    addTodo() {
      if (this.newTodo.trim !== "") {
        this.todos.push(this.newTodo);
        this.newTodo = "";
      }
    },

    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/to-do";
</style>
