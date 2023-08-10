<template>
  <div class="content">
    <p class="p-2 text-center my-5">
      Do you know that "a stich in time saves nine"? Let me assist you in
      achieving your daily GOALS.
    </p>
    <div class="options mx-auto mb-5">
      <div>
        {{ formattedDate }}
      </div>
      <div class="button">Shedule Events</div>
      <div class="button">Set Timer</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
    };
  },
  computed: {
    formattedDate() {
      const order = {
        weekday: "short",
        day: "2-digit",
        month: "short",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      };

      return this.date.toLocaleString("en-US", order);
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/options";
</style>
