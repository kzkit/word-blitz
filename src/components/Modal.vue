<template>
	<div
		@click.self="handleCloseModal"
		class="fixed z-10 left-0 right-0 top-0 w-full h-full pt-100 overflow-auto bg-neutral-900/80"
	>
		<div
			class="mx-auto lg:mt-64 pt-2 pb-8 px-8 w-2/5 bg-neutral-700 rounded-lg"
		>
			<div class="flex">
				<div class="flex-grow"></div>
				<button
					class="font-bold hover:text-red-500/50"
					@click="handleCloseModal"
				>
					x
				</button>
			</div>
			<WordForm @createWord="handleCreate" />
		</div>
	</div>
</template>
<script setup>
	import WordForm from './WordForm.vue'
	const emit = defineEmits(['closeModal'])

	const handleCreate = (word, wordLength) => {
		// test if emit works
		console.log(word, wordLength)
	}

	const handleCloseModal = () => {
		emit('closeModal')
	}
</script>
