<script setup>
	import Modal from '../components/Modal.vue'
	const handleModal = () => {}
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
			<h2 class="md:text-3xl mt-24">How to Play?</h2>
		</div>
	</main>
	<Modal />
</template>
