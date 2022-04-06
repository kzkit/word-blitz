<script setup>
	import { ref } from 'vue'
	import Modal from '../components/Modal.vue'
	const showModal = ref(false)

	const handleModal = () => {
		showModal.value = !showModal.value
	}
</script>

<template>
	<main class="flex h-screen justify-center items-center">
		<div class="text-center">
			<h1 class="text-xl md:text-6xl font-bold">Word Blitz</h1>
			<p class="my-8">Challenge your friends to a battle of wits!</p>
			<button
				class="rounded-lg bg-sky-500 hover:bg-sky-500/50 font-bold p-1"
				@click="handleModal"
			>
				Get Started
			</button>
		</div>
	</main>
	<div v-if="showModal">
		<Modal @closeModal="handleModal" />
	</div>
</template>
