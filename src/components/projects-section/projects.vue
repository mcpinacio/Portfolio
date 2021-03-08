<template>
	<section class="projects" id="projects">
		<div 	class="block"
				data-aos="fade-up"
				data-aos-duration="850"
				data-aos-anchor-placement="center-bottom">
			<router-link to="/projects/talknwalk"> 
				<img src="images/talknwalk_app/0_preview.png" alt="talnkwalk app screens">
				<div class="titles">
					<h2>TalknWalk App</h2>
					<h3>Product Design</h3>
				</div>
			</router-link>
		</div>
		<div 	class="block"
				data-aos="fade-up"
				data-aos-duration="850"
				data-aos-anchor-placement="center-bottom">
			<router-link to="/projects/talknwalk_web"> 
				<img src="/images/talknwalk_web/0_preview.png" alt="talnkwalk website screen on laptop">
				<div class="titles">
					<h2>TalknWalk Website</h2>
					<h3>Web Design and Development</h3>
				</div>
			</router-link>
		</div>
		<div 	class="block"
				data-aos="fade-up"
				data-aos-delay="25"
				data-aos-duration="850"
				data-aos-anchor-placement="center-bottom">
			<router-link to="/projects/ipsslab"> 
				<img src="images/ipsslab/0_preview.png" alt="ipss lab logo">
				<div class="titles">
					<h2>IPSSLAB by UNITATE</h2>
					<h3>Visual Identity</h3>
				</div>
			</router-link>
		</div>
		<div 	class="block"
				data-aos="fade-up"
				data-aos-delay="25"
				data-aos-duration="850"
				data-aos-anchor-placement="center-bottom">
			<router-link to="/projects/illustration"> 
				<img src="/images/portraits/0_preview.png" alt="Walter White Portrait illustration">
				<div class="titles">
					<h2>PopCulture</h2>
					<h3>Vector Illustration</h3>
				</div>
			</router-link>
		</div>
		<div 	class="block"
				data-aos="fade-up"
				data-aos-delay="25"
				data-aos-duration="850"
				data-aos-anchor-placement="center-bottom">
			<router-link to="/projects/recollections"> 
				<img src="/images/recollections/1_preview.png" alt="ipss lab logo">
				<div class="titles">
					<h2>Recollections</h2>
					<h3>Game Design</h3>
				</div>
			</router-link>
		</div>
	</section>
</template>

<style scoped lang="scss" src="./projects.scss"/>

<script>
	export default {
		name: 'Projects'
	}
</script>