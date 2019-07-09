<template>
	<section id="projects" class="projects-section">

	<article  class="project_container tobe">
		<router-link to="/projects/tobe"> 
			<figure class="rectangle animate">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 251.825 251.825">
					<g transform="translate(0 0)" fill="none" stroke="#10223c" stroke-width="4">
						<rect width="251.825" height="251.825" stroke="none"/>
						<rect x="2" y="2" width="247.825" height="247.825" fill="none"/>
					</g>
				</svg>
			</figure>

			<figure class="circle">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 234 234">
					<circle id="tobe" cx="117" cy="117" r="117" fill="#EFBCC6"/>
				</svg>
			</figure>

			<div class="title">
				<h4>The Other<br>Body Experience</h4>
				<h5>Interactive Art Installation</h5>
			</div>
		</router-link>
	</article>

	<article  class="project_container recollections">
	<router-link to="/projects/recollections"> 
		<figure class="rectangle animate">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 251.825 251.825">
				<g transform="translate(0 0)" fill="none" stroke="#10223c" stroke-width="4">
					<rect width="251.825" height="251.825" stroke="none"/>
					<rect x="2" y="2" width="247.825" height="247.825" fill="none"/>
				</g>
			</svg>
		</figure>

		<figure class="circle">
			<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
				<circle cx="90" cy="90" r="90" fill="#EFBCC6"/>
			</svg>
		</figure>

		<div class="title">
			<h4>Recollections</h4>
			<h5>Game Design</h5>
		</div>
	</router-link>
	</article>

	<article  class="project_container illustration">
	<router-link to="/projects/illustration"> 
		<figure class="rectangle animate">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 251.825 251.825">
				<g transform="translate(0 0)" fill="none" stroke="#10223c" stroke-width="4">
					<rect width="251.825" height="251.825" stroke="none"/>
					<rect x="2" y="2" width="247.825" height="247.825" fill="none"/>
				</g>
			</svg>
		</figure>

		<figure class="circle">
			<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
				<circle cx="90" cy="90" r="90" fill="#EFBCC6"/>
			</svg>
		</figure>

		<div class="title">
			<h4>Pop Culture</h4>
			<h5>Illustration Project</h5>
		</div>
	</router-link>
	</article>

	<article  class="project_container talknwalk">
	<router-link to="/projects/talknwalk"> 
		<figure class="rectangle animate">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 251.825 251.825">
				<g transform="translate(0 0)" fill="none" stroke="#10223c" stroke-width="4">
					<rect width="251.825" height="251.825" stroke="none"/>
					<rect x="2" y="2" width="247.825" height="247.825" fill="none"/>
				</g>
			</svg>
		</figure>

		<figure class="circle">
			<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
				<circle cx="90" cy="90" r="90" fill="#EFBCC6"/>
			</svg>
		</figure>

		<div class="title">
			<h4>TalknWalk</h4>
			<h5>Mental Health App</h5>
		</div>
	</router-link>
	</article>

	</section>

</template>

<style scoped lang="scss" src='./projects-section.scss'/>

<script>
export default {
  name: 'Projects',
  props: {
  }
}
</script>



