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
      <div class="d-flex justify-content-around">
        <div class="d-flex align-items-center gap-2">
          <div>
            <button @click="hour++">^</button>
            <button class="d-block" @click="hour--">v</button>
          </div>
          <div>
            <span>{{ hour }}</span> Hours
          </div>
        </div>

        <div class="d-flex align-items-center gap-2">
          <div>
            <button @click="min++">^</button>
            <button class="d-block" @click="min--">v</button>
          </div>
          <div>
            <span>{{ min }}</span> Min
          </div>
        </div>

        <div class="d-flex align-items-center gap-2">
          <div>
            <button @click="sec++">^</button>
            <button class="d-block" @click="sec--">v</button>
          </div>
          <div>
            <span>{{ sec }}</span> Sec
          </div>
        </div>
      </div>
    </div>
    <div class="button"><b>START</b></div>
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
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/timer";
</style>
