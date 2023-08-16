<template>
  <section class="container">
    <div class="my-4 d-flex justify-content-between align-items-center">
      <h2>Timer</h2>
      <router-link to="/to-do" class="button"
        ><b>Schedule Event</b></router-link
      >
    </div>
    <div class="my-content" v-if="!showTimingComponent">
      <div
        class="rounded-3 shadow bg-light p-3 text-dark pb-1 p-sm-5 pb-sm-3 mb-2"
      >
        <div class="d-flex justify-content-around py-5">
          <div class="d-flex align-items-center gap-2">
            <div>
              <button @click="incrementHour">^</button>
              <button class="d-block" @click="decrementHour">v</button>
            </div>
            <div>
              <span class="fs-3"
                ><b>{{ hour }}</b></span
              >
              Hours
            </div>
          </div>

          <div class="d-flex align-items-center gap-2">
            <div>
              <button @click="incrementMin">^</button>
              <button class="d-block" @click="decrementMin">v</button>
            </div>
            <div>
              <span class="fs-3"
                ><b>{{ min }}</b></span
              >
              Min
            </div>
          </div>

          <div class="d-flex align-items-center gap-2">
            <div>
              <button @click="incrementSec">^</button>
              <button class="d-block" @click="decrementSec">v</button>
            </div>
            <div>
              <span class="fs-3"
                ><b>{{ sec }}</b></span
              >
              Sec
            </div>
          </div>
        </div>
      </div>
      <div class="button my-5 text-center w-50 mx-auto" @click="setTimer">
        <b>SET TIME</b>
      </div>
      <div class="button my-5 text-center w-50 mx-auto" @click="resetTimer">
        <b>RESET</b>
      </div>
    </div>
    <timing
      v-else
      :hour="hour"
      :min="min"
      :sec="sec"
      @cancel-timer="cancelTimer"
    />
  </section>
</template>

<script>
import Timing from "./Timing.vue";

export default {
  name: "Timer",

  components: {
    timing: Timing,
  },

  data() {
    return {
      hour: parseInt(localStorage.getItem("hour")) || 0,
      min: parseInt(localStorage.getItem("min")) || 0,
      sec: parseInt(localStorage.getItem("sec")) || 0,
      showTimingComponent: false,
    };
  },

  created() {
    this.loadShowTimingComponent();
  },

  methods: {
    incrementHour() {
      this.hour = (this.hour + 1) % 24;
      this.saveToLocalStorage();
    },
    decrementHour() {
      this.hour = (this.hour - 1 + 24) % 24;
      this.saveToLocalStorage();
    },
    incrementMin() {
      this.min = (this.min + 1) % 60;
      this.saveToLocalStorage();
    },
    decrementMin() {
      this.min = (this.min - 1 + 60) % 60;
      this.saveToLocalStorage();
    },
    incrementSec() {
      this.sec = (this.sec + 1) % 60;
      this.saveToLocalStorage();
    },
    decrementSec() {
      this.sec = (this.sec - 1 + 60) % 60;
      this.saveToLocalStorage();
    },
    resetTimer() {
      this.hour = 0;
      this.min = 0;
      this.sec = 0;
      localStorage.removeItem("hour");
      localStorage.removeItem("min");
      localStorage.removeItem("sec");
    },
    saveToLocalStorage() {
      localStorage.setItem("hour", this.hour);
      localStorage.setItem("min", this.min);
      localStorage.setItem("sec", this.sec);
    },
    setTimer() {
      this.showTimingComponent = true;
      this.saveShowTimingComponent();
    },
    cancelTimer() {
      this.showTimingComponent = false;
      this.resetTimer();
      this.saveShowTimingComponent();
    },
    saveShowTimingComponent() {
      localStorage.setItem("showTimingComponent", this.showTimingComponent);
    },
    loadShowTimingComponent() {
      const showTimingComponent = localStorage.getItem("showTimingComponent");
      this.showTimingComponent = showTimingComponent === "true";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/timer";
</style>
