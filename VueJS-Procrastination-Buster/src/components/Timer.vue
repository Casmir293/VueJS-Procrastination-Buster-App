<template>
  <section class="container">
    <div class="my-4 d-flex justify-content-between align-items-center">
      <h2>Timer</h2>
      <router-link to="/to-do" class="button"
        ><b>Schedule Event</b></router-link
      >
    </div>

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
    <div class="button my-5 text-center w-50 mx-auto">
      <b>START</b>
    </div>
    <div class="button my-5 text-center w-50 mx-auto" @click="resetTimer">
      <b>RESET</b>
    </div>
  </section>
</template>

<script>
export default {
  name: "Timer",

  data() {
    return {
      hour: 0,
      min: 0,
      sec: 0,
    };
  },

  methods: {
    incrementHour() {
      this.hour = (this.hour + 1) % 24;
    },
    decrementHour() {
      this.hour = (this.hour - 1 + 24) % 24;
    },
    incrementMin() {
      this.min = (this.min + 1) % 60;
    },
    decrementMin() {
      this.min = (this.min - 1 + 60) % 60;
    },
    incrementSec() {
      this.sec = (this.sec + 1) % 60;
    },
    decrementSec() {
      this.sec = (this.sec - 1 + 60) % 60;
    },
    resetTimer() {
      this.hour = 0;
      this.min = 0;
      this.sec = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/timer";
</style>
