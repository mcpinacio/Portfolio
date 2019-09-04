<template>
	<div>
		<div class="banner" id="ipss">
				<h1 class="transition">IPSSLAB by UNITATE</h1>
				<h3 class="transition">Visual Identity 2019</h3>		
		</div>

		<div class="container transition">
			<div class="projects transition">
				<div class="header transition">
					<h2>A mental health app designed to connect patients and therapists more efficiently</h2>
				</div>

				<div class="description  transition">
					<div class="infos transition">
						<ul><h4>Role</h4>
							<li>Graphic Design</li>
						</ul>
						<ul><h4>Deliverables</h4>
								<li>Logo</li>
								<li>Visual Identity Usage Manual</li>
								<li>Social Media Images</li>
						</ul>
					</div>

					<div class="text transition">
						<p class="transition">UNITATE is a social organization aimed at creating a network among the Social Economy stakeholders by sharing resources and knowledge to enhance social economic development in Portugal.</p>
						<p>With that in mind, UNITATE created a sub brand that encapsulates all their courses and educational material: IPSS LAB by UNITATE.</p>
						<p>The most challenging aspect of this project was having to use the main brand’s logo on the sub brand logo, without the latter losing its’ identity.</p>
					</div>
				</div>
			</div>

			<div class="gallery transition">
				<div class="groups">
					<figure data-aos="fade-in"
		     				data-aos-duration="500"
		     				data-aos-easing="ease-in-out">
						<img src="/images/ipsslab/ipsslab_logo_full.png" alt="" class="transition">
						<figcaption>IPSS Lab logo on a dark blue background</figcaption>
					</figure>
					<figure data-aos="fade-in"
		     				data-aos-duration="500"
		     				data-aos-easing="ease-in-out" 
		     				class="padding">
						<img src="/images/ipsslab/logo_elements.png" alt="" class="transition">
						<figcaption class="none">IPSS Lab logo elements (from left to right): parent logo, parent brand elemnt and child-brand new logo</figcaption>
					</figure>
					
				</div>	
			</div>

			<div class="projnav">
				<div>
					<router-link to="/projects/illustration">previous</router-link>
				</div>

				<div>
					<router-link to="/projects/tobe">next</router-link>
				</div>
			</div>

		</div>
	</div>
	
</template>

<style scoped lang="scss" src="./projects.scss"/>

<script>
	export default {
	  name: 'ipsslab',
	  props: {
	  }
	}
</script>