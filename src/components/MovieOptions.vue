<template>
    <h3 class="title has-text-centered">
        Select a movie for your answer!
    </h3>
    <div class="guessContainer columns is-mobile is-multiline">
        <div
            v-for="(movie, index) in guessArray"
            :key="index"
            class="column is-12-touch is-6-desktop movieTitle"
        >
            <p class="has-text-centered">
                {{ movie }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    guessArray: any[];
}>()
</script>

<style scoped lang="scss">
.title {
    color: #cccccc;
}
.movieTitle {
    border: 1px solid #ccc;
    border-radius: 2px;
    cursor: pointer;
    padding: .5rem;

    p {
        font-weight: bold;
        color: #ccc;
    }

    &:hover {
        background-color: #ccc;

        p {
            color: #000;

        }
    }
}
</style>
