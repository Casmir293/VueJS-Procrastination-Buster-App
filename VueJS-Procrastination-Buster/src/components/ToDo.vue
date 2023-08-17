<template>
  <section class="container">
    <!-- Header -->
    <div class="my-4 d-flex justify-content-between align-items-center">
      <h2>My Schedule</h2>
      <router-link to="/timer" class="button"><b>Set Timer</b></router-link>
    </div>

    <!-- Add Task Input -->
    <div class="rounded-3 shadow bg-light p-3 pb-1 p-sm-5 pb-sm-3 mb-2">
      <input
        class="form-control"
        type="text"
        name="task"
        placeholder="Enter a Task"
        v-model="newTodo"
        @keyup.enter="addTodo"
      />
      <br />

      <!-- Add Task Button -->
      <button class="btn btn-sm btn-primary mb-3" @click="addTodo">
        Add Task
      </button>

      <!-- List of Tasks -->
      <ul class="p-0">
        <li v-for="(todo, index) in todos" :key="index">
          <div
            class="my-3 p-3 p-sm-4 shadow-sm rounded-3 text-light bg-secondary"
          >
            <div class="row">
              <div class="my-1 col-md-10 col-lg-11">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="todo.checked"
                  @change="toggleCheck(todo)"
                />
                <label class="form-check-label ps-2">{{ todo.text }}</label>
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

  created() {
    this.loadToDos();
  },

  methods: {
    // Add a new task
    addTodo() {
      if (this.newTodo.trim() !== "") {
        this.todos.push({ text: this.newTodo, checked: false });
        this.saveToDos();
        this.newTodo = "";
      }
    },

    // Save task list to local storage
    saveToDos() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },

    // Toggle task completion
    toggleCheck(todo) {
      todo.checked;
      this.saveToDos();
    },

    // Load task list from local storage
    loadToDos() {
      const savedToDos = localStorage.getItem("todos");
      if (savedToDos) {
        this.todos = JSON.parse(savedToDos);
      }
    },

    // Remove a task
    removeTodo(index) {
      this.todos.splice(index, 1);
      this.saveToDos();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/to-do";
</style>
