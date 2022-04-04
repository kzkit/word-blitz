<script setup>
	import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<div class="bg-gray-800 relative text-white">
		<header>
			<nav>
				<RouterLink to="/">Home</RouterLink>
			</nav>
		</header>
		<RouterView />
	</div>
</template>

<style></style>
