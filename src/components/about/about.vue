<template>
<section id="aboutMe" class="about">

	<figure class="pic">
		<img src="@/assets/profile_pic.png" alt="Mariana Inácio Profile Pictue">
	</figure>

	<div class="text">
		<h1>My name is Mariana Inácio, I'm a UX/UI Designer and I want become an unicorn!</h1>

		<div class="container">
			<router-link to="/about">
				<figure class="rectangle">
					<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 266 98">
						<g id="Grupo_26" data-name="Grupo 26" transform="translate(-294.919 -1483.78)">
						<g id="Retângulo_25" data-name="Retângulo 25" transform="translate(294.92 1483.78)" fill="none" stroke="#10223c" stroke-linejoin="round" stroke-width="3">
							<rect width="266" height="98" stroke="none"/>
							<rect x="1.5" y="1.5" width="266" height="95" fill="none"/>
						</g>
						</g>
					</svg>
				</figure>
				<h1 class="btn">Get to know me</h1>
		</router-link>

		</div>

	</div>

</section>

</template>

<style scoped lang="scss" src='./about.scss'/>

<script>
export default {
  name: 'About',
  props: {
  }
}
</script>