<template>
	<nav>
		<menu-view/>

		<router-link to='/'>
			<img src="/LOGO.png" alt="mariana inacio logo">
		</router-link>

	</nav>

</template>

<style scoped lang="scss" src="./nav-bar.scss"/>

<script>
	import MenuView from '@/components/menu/menu.vue'

	export default {
		components: {
			MenuView
		}
	}

</script>
