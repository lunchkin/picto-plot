<template>
  <div>
    <h1 class="title is-1">
      Picto Movie Quiz
    </h1>
    <div v-if="question">
      <h2 class="title is-2">
        {{ question.question }}
      </h2>
      <p class="is-hidden-touch has-text-centered">
        HINT: ({{ question.hint }})
      </p>
      <div class="is-flex is-flex-wrap-wrap">
        <PlotImage
          v-for="(plotItem, index) in question.plotImageArray"
          :key="index"
          :plotItem="plotItem"
        />
      </div>
      <MovieOptions :winningID="question.chosenMovie.imdbID" :guessArray="question.guessArray" />
    </div>
  </div>
</template>

<script setup lang="ts">
import "bulma";
import { ref, onMounted } from 'vue';
import QuizQuestion from './modules/QuizQuestion';
import PlotImage from './components/PlotImage.vue';
import MovieOptions from './components/MovieOptions.vue';

const question = ref();

onMounted(async () => {
  question.value = await QuizQuestion.getQuestionData();
});

</script>

<style scoped lang="scss">

.title {
  text-align: center;
  color: #ccc;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
