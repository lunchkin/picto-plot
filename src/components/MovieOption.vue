<template>
	<div
		@click="$emit('check-answer', movieID)"
		class="column is-12-touch is-6-desktop movieTitle"
	>
		<p class="has-text-centered">
			<slot></slot>
		</p>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	movieID: string;
}>();
</script>

<style scoped lang="scss">
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
