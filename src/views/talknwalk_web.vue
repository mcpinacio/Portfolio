<template>
	<div>
		<div class="banner" id="talknwlak_web">
				<h1 class="transition">TalknWalk Web</h1>
				<h3 class="transition">Web Design and Development 2019</h3>		
		</div>

		<div class="container transition">
			<div class="projects transition">
				<div class="header transition">
					<h2>A mental health app designed to bring together patients and therapists</h2>
				</div>

				<div class="description  transition">
					<div class="infos transition">
						<ul><h4>Role</h4>
							<li>Web Design</li>
							<li>Web Development</li>
						</ul>
						<ul><h4>Deliverables</h4>
								<li>Website Prototype</li>
								<li>Live website</li>
						</ul>
						<ul><h4>Team Members</h4>
								<li>Giovanna Dealvaux</li>
								<li>Gonçalo Sardinha</li>
								<li>Inês Azevedo</li>
								<li>Lara Matos</li>
								<li>Sancha Martorell</li>
								<li>Sofia Inácio</li>
								<li>Rui Vasconcelos</li>
						</ul>
					</div>

					<div class="text transition">
						<p class="transition">As a result of developing the TALKNWALK app, the group felt the need to create a product landing page.</p>
						<p class="transition">Thus, the main challenge regarding this landing page was creating a design that was both beautiful and informative withouth losing the product chatacter.</p>
						<p class="transition">To make the website more dynamic, I used the TypedJS library to create a typing effect on the first fold. As it is the most important fold of the page, I wanted to make the first fold the most informative as possible without overcrowding it.</p>
						<p class="transition">You can visit the live <a href="https://talknwalk.pt/" target="blank">TALKNWALK landing page</a>.</p>
						
					</div>
				</div>
			</div>

			<div class="gallery transition">
					<figure data-aos="fade-up"
		     				data-aos-duration="500"
		     				data-aos-easing="ease-in-out" 
		     				class="full">
						<img src="/images/talknwalk_web/first_fold.png" alt="TalknWalk Landing Page Image">
						<figcaption>TalknWalk Landing Page</figcaption>
					</figure>
					<figure data-aos="fade-up"
		     				data-aos-duration="500"
		     				data-aos-easing="ease-in-out" 
		     				class="full">
						<img src="/images/talknwalk_web/therapists_fold.png" alt="TalknWalk Landing Page Image Therapist information">
						<figcaption>TalknWalk Landing Page</figcaption>
					</figure>
			</div>

			<div class="projnav">
				<div>
					<router-link to="/projects/talknwalk">previous</router-link>
				</div>

				<div>
					<router-link to="/projects/ipsslab">next</router-link>
				</div>
			</div>
		</div>	
	</div>
</template>

<style scoped lang="scss" src="./projects.scss"/>

<script>
	export default {
	  name: 'talknwalk_web',
	  props: {
	  }
	}
</script>