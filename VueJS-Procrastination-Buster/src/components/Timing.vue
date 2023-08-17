<template>
  <section>
    <div
      class="rounded-3 shadow bg-light p-3 text-dark pb-1 p-sm-5 pb-sm-3 mb-2 text-center"
    >
      <div class="py-5 fs-1">
        <b> {{ formattedHour }} : {{ formattedMin }} : {{ formattedSec }} </b>
      </div>
    </div>

    <div @click="startTimer" class="button my-5 text-center w-50 mx-auto">
      <b>START</b>
    </div>
    <div @click="cancelTiming" class="button my-5 text-center w-50 mx-auto">
      <b>CANCEL</b>
    </div>
  </section>
</template>

<script>
export default {
  name: "Timing",

  props: {
    hour: Number,
    min: Number,
    sec: Number,
  },

  data() {
    return {
      remainingTime: 0,
      timerInterval: null,
      localHour: this.hour,
      localMin: this.min,
      localSec: this.sec,
    };
  },

  methods: {
    formatNumber(number) {
      return number.toString().padStart(2, "0");
    },
    startTimer() {
      this.localHour = this.hour;
      this.localMin = this.min;
      this.localSec = this.sec;

      this.remainingTime =
        this.localHour * 3600 + this.localMin * 60 + this.localSec;

      this.timerInterval = setInterval(() => {
        if (this.remainingTime > 0) {
          this.remainingTime--;
          this.updateLocalStorage();

          const hours = Math.floor(this.remainingTime / 3600);
          const minutes = Math.floor((this.remainingTime % 3600) / 60);
          const seconds = this.remainingTime % 60;

          this.localHour = hours;
          this.localMin = minutes;
          this.localSec = seconds;
        } else {
          this.stopTimer();
        }
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.timerInterval);
    },
    cancelTiming() {
      this.stopTimer();
      this.$emit("cancel-timer");
    },
    updateLocalStorage() {
      localStorage.setItem("hour", this.localHour);
      localStorage.setItem("min", this.localMin);
      localStorage.setItem("sec", this.localSec);
    },
  },

  computed: {
    formattedHour() {
      return this.formatNumber(this.localHour);
    },
    formattedMin() {
      return this.formatNumber(this.localMin);
    },
    formattedSec() {
      return this.formatNumber(this.localSec);
    },
  },

  beforeDestroy() {
    this.stopTimer();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/timing";
</style>
