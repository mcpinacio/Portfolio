<template>
	<div class="container transition">
		<div class="projects transition">
			
			<div class="title transition">
				<h1 class="transition">Recollections</h1>
			</div>

			<div class="desc-container transition">
			<div class="infos transition">

				<div class="year transition">
					<h3 class="margin-top-none transition">Year</h3>
					<p class="year2 transition">2017</p>
				</div>

				<div class="deliverables transition">
					<h3 class="margin-top-none transition">Deliverables</h3>
					<ul class="lists transition">
						<li>Assets</li>
						<li>Backgrounds</li>
						<li>Characters</li>
						<li>Collectables</li>
						<li>Game Posters</li>
						<li>UI Elements</li>
					</ul>
				</div>

				<div class="team transition">
					<h3 class="margin-top-none transition">Team</h3>
					<ul class="lists transition">
						<li>Alexandre Peres</li>
						<li>André Saraiva</li>
						<li>Duarte Botelho</li>
						<li>João Varandas</li>
					</ul>
				</div>
			</div>

			<div class="description transition">

				<h2 class=" transition">A puzzle-platform game inspired by the seasons and human life stages.</h2>

				<p class="transition">This project is a collaboration with Instituto Superior Técnico de Lisboa’s Systems 
				and Computer Engineering Master Students, who developed the game. My role was 
				to create all the visual  elements, such as: UI elements, backgrounds, characters, 
				collectables and assets and game poster.
				<br>The background illustrations were based on nature, inspired by a minimalist 
				approach that would convey the feelings associated with each season 
				straightforwardly. Summer is bright and exudes warmth, while winter feels more 
				sterile and dark.
				<br>The game’s main concept was to associate each human life stage to a season, so as 
				the season change so does the character. Thus childhood (the first level) would be 
				played during spring, adolescence during summer and so on. As to maintain the 
				same visual language, the characters were design in a minimalistic and linear 
				fashion and their clothes colour scheme was chosen to match the specific season 
				they are associated with. Consequently, the adults are dressed in darker colours to 
				match autumn and the children are dressed in vibrant colours to match spring.</br></p>
			</div>
		</div>
		</div>

		<div class="vertical transition">
			<figure data-aos="fade-in"
     				data-aos-delay="25"
     				data-aos-duration="750"
     				data-aos-easing="ease-in-out">
				<img src="./recollections/poster_character.png" alt="poster with character" class="img-vertical transition">
				<figcaption>Game poster inspired by the seasons and the characters</figcaption>
			</figure>
			<figure data-aos="fade-in"
     				data-aos-delay="25"
     				data-aos-duration="750">
				<img src="./recollections/poster_sun.png" alt="poster with sun and trees" class="img-vertical transition">
				<figcaption>Game poster inspired by the winter background</figcaption>
			</figure>
				
		</div>
		<div class="horizontal transition">
			<figure data-aos="fade-in"
     				data-aos-delay="25"
     				data-aos-duration="750">
				<img src="./recollections/four_seasons.png" alt="four seasons" class="img-horizontal">
				<figcaption>The fours seasons backgrounds combined</figcaption>
			</figure>
			<figure data-aos="fade-in"
     				data-aos-delay="25"
     				data-aos-duration="750"
     				data-aos-easing="ease-in-out">
				<img src="./recollections/summer.png" alt="summer background" class="img-horizontal transition">
				<figcaption>Summer background, it is the level 2 and associated with adolescence</figcaption>
			</figure>
			<figure data-aos="fade-in"
     				data-aos-delay="25"
     				data-aos-duration="750"
     				data-aos-easing="ease-in-out">
				<img src="./recollections/winter.png" alt="winter background" class="img-horizontal transition">
				<figcaption>Winter bacground, it is the last level and associated with the  elderly</figcaption>
			</figure>
			<figure data-aos="fade-in"
     				data-aos-delay="25"
     				data-aos-duration="750"
     				data-aos-easing="ease-in-out">
				<img src="./recollections/characters.png" alt="characters" class="img-horizontal transition">
				<figcaption>Male and female characteres life cycle</figcaption>
			</figure>
			<figure data-aos="fade-in"
     				data-aos-delay="25"
     				data-aos-duration="750"
     				data-aos-easing="ease-in-out">
				<img src="./recollections/seasons_menu.png" alt="seasons menu" class="img-horizontal transition">
				<figcaption>Menu level UI</figcaption>
			</figure>
		</div>
	</div>
</template>

<style scoped lang="scss" src="./projects.scss"/>

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"src="https://unpkg.com/aos@2.3.1/dist/aos.js">
	AOS.init();
</script>

<script>
	export default {
	  name: 'Recollections',
	  props: {
	  }
	}
</script>