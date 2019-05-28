<template>
	<div class="container transition">
		<div class="projects transition">

			<div class="title transition">
				<span></span>
				<h1 class="transition">About me</h1>
			</div>

			<div class="desc-container transition">	

				<div class="pic" data-aos="fade-in"
					data-aos-duration="600"
					data-aos-easing="ease-in-out">
				<img src="@/assets/profile_pic.png" alt="Mariana Inácio Profile Pictue">
				</div>

				<div class="description transition">

					<div class="text">
						<h2 class=" transition">Hello, my name is Mariana Inácio and I want to be an unicorn.</h2>
						<p class="transition">“A unicorn? What a strange thing to aspire to!” you might think.<br>Although there are plenty of mythical creatures to look up to, but “unicorn” is the nickname often given to designers who knows how to code and that’s exactly who I want to become.  
						I studied Multimedia Arts (Interactive Environments) at Faculdade de Belas Artes da Universidade de Lisboa, which awoken my love for art and art history and sparked my interest in programming. 
						As much as I love art and perceive it as means to express myself, I also love to solve problems, so I resorted to Design to satisfy this need. Consequently, I took a postgraduate degree in Digital Design at DeMonfort University in Leicester, in the UK.<br>I am immensely curious and strive to keep learning and bettering myself, so I enrolled in a yearlong Web Design course where I am learning about not only how to design a web site but how to code it (HTML/CSS/JavaScript), a skill that I am very keen on keep working on, even if self-taught.<br>What excites me the most about UX/UI Design and programming is the challenge of creating an user experience that is cohesive, simple and intuitive.
						I am very independent, pro-active and pragmatic. I strive when challenged and I keep pushing myself outside of my comfort zone. 
</p>
					</div>
				</div>

					<div class="more">
						<div class="titles">
							<h3>Work<br>Experience</h3>
						</div>

						<div class="work">
							<div class="job">
								<h2>UX/UI Designer</h2>
								<p>IRON Portugal<br>March to May 2019</p>
							</div>

							<div class="job">
								<h2>Junior Designer</h2>
								<p>IRON Portugal<br>September 2018 to March 2019</p>
							</div>

							<div class="job">
								<h2>Marketing Intern</h2>
								<p>Noesis<br>June to September 2014</p>
							</div>
						</div>
					</div>

					<div class="more">
						<div class="titles">
							<h3>Academic<br>Background</h3>
						</div>

						<div class="work">
							<div class="job">
								<h2>Web Design</h2>
								<p>ETIC Lisboa<br>Otober 2018 to June 2019</p>
							</div>
							<div class="job">
								<h2>Postgraduate Degree in Digital Design with Honours</h2>
								<p>DeMonfort University, Leicester UK<br>September 2017 to March 2018</p>
							</div>
							<div class="job">
								<h2>Bachelor Degree in Multimedia Art - Interactive Environments</h2>
								<p>Faculdade de Belas Artes da Universidade de Lisboa<br>September 2014 to July 2017</p>
							</div>
						</div>
					</div>
	
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss" src="./about.scss"/>

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"src="https://unpkg.com/aos@2.3.1/dist/aos.js">
	AOS.init();
</script>

<script>
	export default {
	  name: 'AboutMe',
	  props: {
	  }
	}
</script>