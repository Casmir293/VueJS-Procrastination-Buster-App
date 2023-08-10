<template>
  <div class="content">
    <p class="p-2 text-center my-5">
      Do you know that "a stich in time saves nine"? Let me assist you in
      reaching your daily
      <span class="typing-animation"
        ><b>{{ currentPhrase }}</b></span
      >
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
      //  Date & Time
      date: new Date(),

      // Animated Text
      phrases: ["GOALS!", "TARGETS!!", "SCHEDULE!!!"],
      currentIndex: 0,
      interval: null,
    };
  },
  computed: {
    //  Date & Time
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

    // Animated Text
    currentPhrase() {
      return this.phrases[this.currentIndex];
    },
  },

  methods: {
    //  Animated Text
    startCycle() {
      this.interval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.phrases.length;
      }, 3000);
    },
    stopCycle() {
      clearInterval(this.interval);
    },
  },

  mounted() {
    //  Date & Time
    this.interval = setInterval(() => {
      this.date = new Date();
    }, 1000);

    //  Animated Text
    this.startCycle();
  },

  beforeDestroy() {
    //  Date & Time
    clearInterval(this.interval);

    //  Animated Text
    this.stopCycle();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/options";
</style>
