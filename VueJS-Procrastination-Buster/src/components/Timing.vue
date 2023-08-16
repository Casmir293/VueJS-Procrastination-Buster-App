<template>
  <section>
    <div
      class="rounded-3 shadow bg-light p-3 text-dark pb-1 p-sm-5 pb-sm-3 mb-2 text-center"
    >
      <div class="py-5 fs-1">
        <b> {{ formattedHour }} : {{ formattedMin }} : {{ formattedSec }} </b>
      </div>
    </div>

    <div class="button my-5 text-center w-50 mx-auto">
      <b>START</b>
    </div>
    <div class="button my-5 text-center w-50 mx-auto">
      <b>CANCEL</b>
    </div>
  </section>
</template>

<script>
export default {
  name: "Timing",
  data() {
    return {};
  },

  props: {
    hour: Number,
    min: Number,
    sec: Number,
  },

  methods: {
    formatNumber(number) {
      return number.toString().padStart(2, "0");
    },
  },

  computed: {
    formattedHour() {
      return this.formatNumber(this.hour);
    },
    formattedMin() {
      return this.formatNumber(this.min);
    },
    formattedSec() {
      return this.formatNumber(this.sec);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/timing";
</style>
