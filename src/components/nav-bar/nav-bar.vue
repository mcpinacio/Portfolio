<template>
	<nav>
		
		<router-link to='/'>
			<h1>mariana inácio</h1>
		</router-link>

		<div class="navigation">
				<router-link to="/about">
					<button>about</button>
				</router-link>

				<button
					v-on:click.prevent="goToSection('projects-desktop')">projects</button>

				<button href="#"
				   v-on:click.prevent="goToSection('contacts')">
					contacts
				</button>

			</div >

			<menu-view/>

	</nav>

</template>

<style scoped lang="scss" src="./nav-bar.scss"/>

<script>
	import MenuView from '@/components/menu/menu.vue'

	export default {
		components: {
			MenuView
		},

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
