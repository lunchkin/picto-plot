<template>
    <h3 class="title has-text-centered">
        Select a movie for your answer!
    </h3>
    <div class="guessContainer columns is-mobile is-multiline">
        <MovieOption
            v-for="(movie, index) in guessArray"
            :key="index"
            @check-answer="checkAnswer"
            :winningID="winningID"
            :movieID="movie.id"
        >
            {{ movie.name }}
        </MovieOption>
    </div>
</template>

<script setup lang="ts">
import MovieOption from "./MovieOption.vue";

const props = defineProps<{
    guessArray: any[];
    winningID: string;
}>();

const checkAnswer = (id: string) => {
    alert(id === props.winningID ? "You got it!" : "Sorry, try again!");
};
</script>

<style scoped lang="scss">
.title {
    color: #cccccc;
}
</style>
