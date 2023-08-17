<template>
  <section class="container">
    <!-- Header -->
    <div class="my-4 d-flex justify-content-between align-items-center">
      <h2>Timer</h2>
      <router-link to="/to-do" class="button"
        ><b>Schedule Event</b></router-link
      >
    </div>

    <div class="my-content" v-if="!showTimingComponent">
      <!-- Timer Configuration -->
      <div
        class="rounded-3 shadow bg-light p-3 text-dark pb-1 p-sm-5 pb-sm-3 mb-2"
      >
        <!-- Hour -->
        <div class="d-flex justify-content-around py-5">
          <div class="d-flex align-items-center gap-2">
            <div>
              <button class="navigate" @click="incrementHour">^</button>
              <button class="d-block navigate" @click="decrementHour">v</button>
            </div>
            <div>
              <span class="fs-3"
                ><b>{{ hour }}</b></span
              >
              Hours
            </div>
          </div>

          <!-- Minute -->
          <div class="d-flex align-items-center gap-2">
            <div>
              <button class="navigate" @click="incrementMin">^</button>
              <button class="d-block navigate" @click="decrementMin">v</button>
            </div>
            <div>
              <span class="fs-3"
                ><b>{{ min }}</b></span
              >
              Min
            </div>
          </div>

          <!-- Second -->
          <div class="d-flex align-items-center gap-2">
            <div>
              <button class="navigate" @click="incrementSec">^</button>
              <button class="d-block navigate" @click="decrementSec">v</button>
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

      <!-- Set Timer Button -->
      <div class="button my-5 text-center w-50 mx-auto" @click="setTimer">
        <b>SET TIME</b>
      </div>

      <!-- Reset Timer Button -->
      <div class="button my-5 text-center w-50 mx-auto" @click="resetTimer">
        <b>RESET</b>
      </div>
    </div>

    <!-- timing component -->
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

  methods: {
    // Increment hour
    incrementHour() {
      this.hour = (this.hour + 1) % 24;
      this.saveToLocalStorage();
    },

    // Decrement hour
    decrementHour() {
      this.hour = (this.hour - 1 + 24) % 24;
      this.saveToLocalStorage();
    },

    // Increment minute
    incrementMin() {
      this.min = (this.min + 1) % 60;
      this.saveToLocalStorage();
    },

    // Decrement minute
    decrementMin() {
      this.min = (this.min - 1 + 60) % 60;
      this.saveToLocalStorage();
    },

    // Increment second
    incrementSec() {
      this.sec = (this.sec + 1) % 60;
      this.saveToLocalStorage();
    },

    // Decrement second
    decrementSec() {
      this.sec = (this.sec - 1 + 60) % 60;
      this.saveToLocalStorage();
    },

    // Reset timer
    resetTimer() {
      this.hour = 0;
      this.min = 0;
      this.sec = 0;
      localStorage.removeItem("hour");
      localStorage.removeItem("min");
      localStorage.removeItem("sec");
    },

    // Save current timing values to local storage
    saveToLocalStorage() {
      localStorage.setItem("hour", this.hour);
      localStorage.setItem("min", this.min);
      localStorage.setItem("sec", this.sec);
    },

    // Set the timer
    setTimer() {
      if (this.hour === 0 && this.min === 0 && this.sec === 0) {
        alert("Please set up timer!");
        return;
      }
      this.showTimingComponent = true;
      this.saveShowTimingComponent();
    },

    // Cancel the timer
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

  created() {
    this.loadShowTimingComponent();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/timer-timing-comp";
</style>
