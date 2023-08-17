<template>
  <section>
    <!-- Timer Display -->
    <div
      class="rounded-3 shadow bg-light p-3 text-dark pb-1 p-sm-5 pb-sm-3 mb-2 text-center"
    >
      <div class="py-5 fs-1">
        <b> {{ formattedHour }} : {{ formattedMin }} : {{ formattedSec }} </b>
      </div>
    </div>

    <!-- Start Button -->
    <div
      v-if="!timerStarted"
      @click="startTimer"
      class="button my-5 text-center w-50 mx-auto"
    >
      <b>START</b>
    </div>

    <!-- Cancel Button -->
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
      timerStarted: false,
    };
  },

  methods: {
    // Format a number to have leading zeros
    formatNumber(number) {
      return number.toString().padStart(2, "0");
    },

    // Start the timer
    startTimer() {
      this.timerStarted = true;
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
          localStorage.removeItem("hour");
          localStorage.removeItem("min");
          localStorage.removeItem("sec");
        }
      }, 1000);
    },

    // Stop the timer
    stopTimer() {
      clearInterval(this.timerInterval);
    },

    // Cancel timing and emit event to parent
    cancelTiming() {
      this.stopTimer();
      this.$emit("cancel-timer");
    },

    // Update local storage with current timing values
    updateLocalStorage() {
      localStorage.setItem("hour", this.localHour);
      localStorage.setItem("min", this.localMin);
      localStorage.setItem("sec", this.localSec);
    },
  },

  computed: {
    // Formatted hour, minute, and second
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
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/timer-timing-comp";
</style>
