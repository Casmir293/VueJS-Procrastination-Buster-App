<template>
  <div class="content">
    <p class="p-2 text-center my-5">
      Do you know that "a stich in time saves nine"? Let me assist you in
      reaching your daily <br />
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
  name: "Options",
  data() {
    return {
      //  Date & Time
      date: new Date(),

      // Animated Text
      phrases: ["GOALS!", "TARGETS!!", "SCHEDULE!!!"],
      erasing: false,
      currentPhraseIndex: 0,
      currentLetterIndex: 0,
      currentWordIndex: 0,
      currentWord: "",
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
      return this.currentWord;
    },
  },

  methods: {
    // Animated Text
    typeNextWord() {
      const phrase = this.phrases[this.currentPhraseIndex];
      const words = phrase.split(" ");
      const word = words[this.currentWordIndex];

      if (word) {
        if (this.erasing) {
          if (this.currentLetterIndex >= 0) {
            this.currentWord = word.substring(0, this.currentLetterIndex);
            this.currentLetterIndex--;
          } else {
            this.erasing = false;
            this.currentWordIndex++;
          }
        } else {
          if (this.currentLetterIndex < word.length) {
            this.currentWord = word.substring(0, this.currentLetterIndex + 1);
            this.currentLetterIndex++;
          } else {
            this.erasing = true;
          }
        }
      } else {
        this.currentPhraseIndex =
          (this.currentPhraseIndex + 1) % this.phrases.length;
        this.currentWordIndex = 0;
        this.currentWord = "";
        this.currentLetterIndex = 0;
        this.erasing = false;
      }
    },
    startTyping() {
      this.typeNextWord();
      this.interval = setInterval(() => {
        this.typeNextWord();
      }, 300);
    },
    stopTyping() {
      clearInterval(this.interval);
    },
  },

  mounted() {
    //  Date & Time
    this.interval = setInterval(() => {
      this.date = new Date();
    }, 1000);

    //  Animated Text
    this.startTyping();
  },

  beforeDestroy() {
    //  Date & Time
    clearInterval(this.interval);

    //  Animated Text
    this.stopTyping();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/options";
</style>
