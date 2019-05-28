<template>
	<div class="container transition">
		<div class="projects transition">
			
			<div class="title transition">
				<h1 class="transition">Pop Culture</h1>
			</div>

			<div class="desc-container transition">
			<div class="infos transition">

				<div class="year transition">
					<h3 class="margin-top-none transition">Year</h3>
					<p class="year2 transition">2017<br>to present</p>
				</div>
			</div>

			<div class="description transition">

				<h2 class=" transition">Monochromatic portraits influenced by the colour field art movement.</h2>

				<p class="transition">Inspired by colour field art movement, I allied its usage of big flat surfaces of solid colour to a high-contrast and vectoral art style.<br>One of the main challenges of creating high-contrast portraits is how to work the light and shadows without losing the distinguishable features that make each person portraited unique and recognisable.</p>
			</div>
		</div>
		</div>

		<div class="vertical transition">
			<figure data-aos="fade-in"
     				data-aos-delay="50"
     				data-aos-duration="750"
     				data-aos-easing="ease-in-out">
				<img src="@/assets/portraits/walter_white.png" alt="Walter White Portrait" class="img-vertical transition">
				<figcaption>Bryan Cranston as Walter White in <i>Breaking Bad</i></figcaption>
			</figure>
			<figure data-aos="fade-in"
     				data-aos-delay="50"
     				data-aos-duration="750">
				<img src="@/assets/portraits/mindy_kalling.png" alt="poster with sun and trees" class="img-vertical transition">
				<figcaption>Mindy Kalling</figcaption>
			</figure>
			<figure data-aos="fade-in"
     				data-aos-delay="50"
     				data-aos-duration="750">
				<img src="@/assets/portraits/mariana_cabral.png" alt="poster with sun and trees" class="img-vertical transition">
				<figcaption>Mariana Cabral</figcaption>
			</figure>
		</div>

		<div class="projnav">
			<div>
				<router-link to="/projects/recollections">previous</router-link>
			</div>

			<div>
				<router-link to="/projects/tobe">next</router-link>
			</div>
		</div>
		
	</div>
</template>

<style scoped lang="scss" src="./illustration.scss"/>

<script>
	export default {
	  name: 'illustration',
	  props: {
	  }
	}
</script>