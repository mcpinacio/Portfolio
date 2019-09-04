<template>
	<div>
		<div class="banner" id="game">
				<h1 class="transition">PopCulture</h1>
				<h3 class="transition">Illustration 2017 to present</h3>		
		</div>

	<div class="container transition">
		<div class="projects transition">
				<div class="header transition">
					<h2>Monochromatic portraits influenced by the colour field art movement</h2>
				</div>
			
			<div class="description  transition">
				<div class="text full transition">
					<p class="transition">Inspired by colour field art movement, I allied its usage of big flat surfaces of solid colour to a high-contrast and vectoral art style.</p>
					<p class="transition">One of the main challenges of creating high-contrast portraits is how to work the light and shadows without losing the distinguishable features that make each person portraited unique and recognisable.</p>
				</div>
			</div>
		</div>

		<div class="gallery padding transition">
			<figure data-aos="fade-up"
					data-aos-duration="500"
					data-aos-easing="ease-in-out"
					class="half">
				<img src="/images/portraits/walter_white.png" alt="Walter White Portrait">
				<figcaption class="none">Bryan Cranston as Walter White in <i>Breaking Bad</i></figcaption>
			</figure>

			<figure data-aos="fade-up"
					data-aos-duration="500"
					data-aos-easing="ease-in-out"
					class="half">
				<img src="/images/portraits/serena_williams.png" alt="poster with sun and trees">
				<figcaption class="none">Serena Williams</figcaption>
			</figure>

			<figure data-aos="fade-up"
					data-aos-duration="500"
					data-aos-easing="ease-in-out"
					class="half">
				<img src="/images/portraits/mindy_kalling.png" alt="poster with sun and trees">
				<figcaption class="none">Mindy Kalling</figcaption>
			</figure>

			<figure data-aos="fade-up"
					data-aos-duration="500"
					data-aos-easing="ease-in-out"
					class="half">
				<img src="/images/portraits/mariana_cabral.png" alt="poster with sun and trees">
				<figcaption class="none">Mariana Cabral</figcaption>
			</figure>
		</div>

		<div class="projnav">
			<div>
				<router-link to="/projects/ipsslab">previous</router-link>
			</div>

			<div>
				<router-link to="/projects/recollections">next</router-link>
			</div>
		</div>
		
	</div>
	</div>
</template>

<style scoped lang="scss" src="./projects.scss"/>

<script>
	export default {
	  name: 'illustration',
	  props: {
	  }
	}
</script>