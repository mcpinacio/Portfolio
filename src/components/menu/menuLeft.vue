<template>
	<div class="menu">

		<div class="containerLeft">
			<div class="menu-toggle"
				 v-on:click="toggleMenu"
				 v-bind:class="{'open': open}">
				<span class="hamburger"></span>
				<span class="hamburger"></span>
			</div>
		</div>
		
		<div class="menubig"
			 v-bind:class="{'open': open}">
			<nav class="cl-effect-3">
				<a href="#"
				   v-on:click.prevent="goToSection('home')">Home</a>

				<a href="#"
				   v-on:click.prevent="goToSection('aboutMe')">About Me</a>

				<a href="#"
					v-on:click.prevent="goToSection('projects')">Projects</a>

				<a href="#"
				   v-on:click.prevent="goToSection('contacts')">
					Contacts
				</a>
			</nav>
		</div>

		<div class="background"
			 v-on:click="closeMenu"
			 v-bind:class="{'open': open}">
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
	  	closeMenu() {
	  		this.open = false;
	  	},

	    toggleMenu() {
	    	this.open = !this.open;
	    },
	    scrollTo(sectionId) {
	    	const section = document.getElementById(sectionId);

	    	if (section) {
		    	section.scrollIntoView({ 
				  behavior: 'smooth' 
				});

				this.closeMenu();
	    	}
	    },

	    goToSection(sectionId) {
	    	if (this.$route.name === 'home') {
	    		this.scrollTo(sectionId);
	    	}
	    	else {
	    		this.$router.push({ name: 'home' }, () => {
			
					setTimeout(() => {
	    				this.scrollTo(sectionId);	
					}, 250);
				});
	    	}
	    }
  	}
}
</script>

<style scoped lang="scss" src="./menuLeft.scss"/>

