<template>
  <div
    class="content"
    :class="theme === 'light' ? 'light-theme' : 'dark-theme'"
  >
    <header class="d-flex align-items-center shadow-lg">
      <div>
        <img src="/overcome_procrastination.png" alt="logo" class="m-2" />
      </div>
      <div class="">
        <h1>Procrastination</h1>
        <h3 class="text-danger">Buster <span class="text-dark">App</span></h3>
      </div>
    </header>

    <main>
      <options />
    </main>

    <footer></footer>
  </div>
  <div class="theme" @click="changeTheme">
    <font-awesome-icon
      icon="fa-solid fa-moon"
      size="xl"
      v-show="theme === 'dark'"
    />
    <font-awesome-icon
      icon="fa-solid fa-sun"
      size="xl"
      v-show="theme === 'light'"
    />
  </div>
</template>

<script>
import Options from "./components/Options.vue";

export default {
  name: "App",
  data() {
    return {
      theme: "light",
    };
  },
  methods: {
    changeTheme() {
      this.theme = this.theme === "dark" ? "light" : "dark";
    },
  },
  components: {
    options: Options,
  },
};
</script>
