<template>
	<section id="projects" class="projects-section">

		<div class="images">	
			<img :src="this.getImgSelected">
		</div>

		<ul class="work">
			<li class="group"
				v-on:mouseover="itemSelected = 0"
				v-on:mouseleave="itemSelected = -1">
				<router-link to="/projects/talknwalk"> 
					<h2>TalknWalk App</h2>
					<h3>Produt Design</h3>
				</router-link>
			</li>
			<li class="group" 				
				v-on:mouseover="itemSelected = 1"
				v-on:mouseleave="itemSelected = -1">
				<router-link to="/projects/talknwalk_web">
					<h2>TalknWalk Website</h2>
					<h3>Web Design and Development</h3>
				</router-link>
			</li>
			<li class="group"
				v-on:mouseover="itemSelected = 2"
				v-on:mouseleave="itemSelected = -1">
				<router-link to="/projects/ipsslab">
					<h2>IPSSLAB by Unitate</h2>
					<h3>Visual Identity</h3>
				</router-link>
			</li>
			<li class="group"
				v-on:mouseover="itemSelected = 3"
				v-on:mouseleave="itemSelected = -1">
				<router-link to="/projects/illustration">
					<h2>PopCulture</h2>
					<h3>Vector Illustration</h3>
				</router-link>
				
			</li>
			<li class="group"
				v-on:mouseover="itemSelected = 4"
				v-on:mouseleave="itemSelected = -1">
				<router-link to="/projects/recollections">
					<h2>Recollections</h2>
					<h3>Game Design</h3>
				</router-link>
			</li>
		</ul>
	</section>
</template>

<style scoped lang="scss" src='./projects-section.scss'/>

<script>
export default {
  name: 'Projects',
  props: {
  },

	data() {
		return{
			itemSelected: -1,
			images: [	
				"talknwalk_app/0_preview.png",
				"talknwalk_web/0_preview.png",
				"ipsslab/0_preview.png",
				"portraits/1_preview.png",
				"recollections/1_preview.png"
			]
		}
	},

	methods: {
	},

	computed: {
		getImgSelected(){
			if (this.itemSelected === -1){
				return "";
			} else {
				const img = this.images[this.itemSelected];
				return `/images/${img}`;
			}	
		}
	}
}
</script>



