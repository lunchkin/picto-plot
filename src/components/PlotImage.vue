<template>
	<div class="imageContainer">
		<figure class="image">
			<img
				:src="plotItem.url"
				alt="Movie Image" />
		</figure>
		<div class="imageTextContainer">
			<p class="hintText has-text-centered">
				{{ plotItem.word }}
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import type ImageData  from "../types/ImageData";

defineProps<{
	plotItem: ImageData;
}>();
</script>

<style scoped lang="scss">
.imageContainer {
	padding: .5rem;
	border: 1px solid #ccc;
	border-radius: 3px;
	margin: .5rem;

	.hintText {
		display: none;
	}

	.imageTextContainer {
		min-height: 3rem;
	}

	&:hover {
		.hintText {
			display: block;
		}
	}
}

@media (max-width: 1023px) {
	.hintText {
		display: block !important;
	}
}
</style>
