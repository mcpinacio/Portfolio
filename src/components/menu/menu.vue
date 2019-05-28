<template>
	<div class="container">
		<div class="menu-toggle" v-on:click="toggleMenu" v-bind:class="{'open': open}">
			<span class="hamburger"></span>
			<span class="hamburger"></span>
		</div>

		<div class="menubig" v-on:click="toggleMenu" v-bind:class="{'menubigopen': open}">
			<nav >
				<a href="#" v-on:click="toggleMenu" v-bind:class="{'move': open}">Home</a>
				<a href="#" v-on:click="toggleMenu" v-bind:class="{'move': open}">Projects</a>
				<a href="#" v-on:click="toggleMenu" v-bind:class="{'move': open}">About Me</a>
				<a href="#" v-on:click="toggleMenu" v-bind:class="{'move': open}">Contacts</a>
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


<style scoped lang="scss" src="./menu.scss"/>

