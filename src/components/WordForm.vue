<script setup>
	import { ref } from 'vue'
	const emit = defineEmits(['createWord'])

	const wordLength = ref(0)
	const word = ref('')

	const handleCreateWord = () => {
		// TODO: Check the word in composable before emitting
		emit('createWord', word.value, wordLength.value)
	}
</script>
<template>
	<form @submit.prevent="handleCreateWord">
		<h3 class="font-bold text-lg">What is the length of the word?</h3>
		<div class="flex space-x-4 mt-4 items-center">
			<div class="space-x-2 items-center">
				<input type="radio" id="one" value="4" v-model.number="wordLength" />
				<label for="one" class="text-lg">4</label>
			</div>
			<div class="space-x-2 items-center">
				<input type="radio" id="two" value="5" v-model="wordLength" />
				<label for="two">5</label>
			</div>
			<div class="space-x-2 items-center">
				<input type="radio" id="three" value="6" v-model="wordLength" />
				<label for="three">6</label>
			</div>
		</div>
		<h3 class="font-bold text-lg my-4">
			What's the word?
			<span class="text-sm"> (It has to be a valid word) </span>
		</h3>
		<input
			v-model.trim="word"
			placeholder="Make it hard to guess!"
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
			type="text"
		/>
		<button
			class="rounded-lg bg-sky-500 hover:bg-sky-500/50 font-bold px-3 py-2 mt-4"
		>
			Create
		</button>
	</form>
</template>
