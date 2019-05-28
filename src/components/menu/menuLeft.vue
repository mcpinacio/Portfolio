<template>
	<div class="containerLeft">
		<div class="menu-toggle" v-on:click="toggleMenu" v-bind:class="{'open': open}">
			<span class="hamburger"></span>
			<span class="hamburger"></span>
		</div>
		
		<div class="menubig" v-on:click="toggleMenu" v-bind:class="{'menubigopen': open}">
			<nav class="cl-effect-3">
				<a href="#">Home</a>
				<a href="#">Projects</a>
				<a href="#">About Me</a>
				<a href="#">Contacts</a>
			</nav>
		</div>
	</div>

</template>

<script>

export default {
data() {
    return {
      open: false
    };
  },

  methods: {
    toggleMenu(event) {
       this.open = !this.open
      }
    }
  }

</script>

<style scoped lang="scss" src="./menuLeft.scss"/>

