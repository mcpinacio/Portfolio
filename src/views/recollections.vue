<template>
<div>
	<div class="container transition">

		
		<div class="projects transition">
			
			<div class="title transition">
				<div class="infos"></div>
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

			<div class="gallery transition">
				<figure data-aos="fade-in"
						data-aos-delay="25"
						data-aos-duration="750"
						data-aos-easing="ease-in-out"
						class="half">
					<img src="@/assets/recollections/poster_character.png" alt="poster with character" >
					<figcaption>Game poster with game elements</figcaption>
				</figure>

				<figure data-aos="fade-in"
						data-aos-delay="25"
						data-aos-duration="750"
						class="half">
					<img src="@/assets/recollections/poster_sun.png" alt="poster with sun and trees">
					<figcaption>Game poster inspired by the winter background</figcaption>
				</figure>

				<figure data-aos="fade-in"
						data-aos-delay="25"
						data-aos-duration="750"
						class="full">
					<img src="@/assets/recollections/four_seasons.png" alt="four seasons">
					<figcaption>The fours seasons backgrounds combined</figcaption>
				</figure>

				<figure data-aos="fade-in"
						data-aos-delay="25"
						data-aos-duration="750"
						data-aos-easing="ease-in-out"
						class="full">
					<img src="@/assets/recollections/summer.png" alt="summer background">
					<figcaption>Summer background, it is the level 2 and associated with adolescence</figcaption>
				</figure>

				<figure data-aos="fade-in"
						data-aos-delay="25"
						data-aos-duration="750"
						data-aos-easing="ease-in-out"
						class="full">
					<img src="@/assets/recollections/winter.png" alt="winter background">
					<figcaption>Winter bacground, it is the last level and associated with the elderly</figcaption>
				</figure>

				<figure data-aos="fade-in"
						data-aos-delay="25"
						data-aos-duration="750"
						data-aos-easing="ease-in-out"
						class="full">
					<img src="@/assets/recollections/characters.png" alt="characters">
					<figcaption>Male and female characteres life cycle</figcaption>
				</figure>

				<figure data-aos="fade-in"
						data-aos-delay="25"
						data-aos-duration="750"
						data-aos-easing="ease-in-out"
						class="full">
					<img src="@/assets/recollections/seasons_menu.png" alt="seasons menu" class="img-horizontal transition">
					<figcaption>Menu level UI</figcaption>
				</figure>
			</div>

		<div class="projnav">
			<div>
				<router-link to="/projects/tobe">previous</router-link>
			</div>

			<div>
				<router-link to="/projects/illustration">next</router-link>
			</div>
		</div>

	</div>
</div>
</template>

<style scoped lang="scss" src="./projects.scss"/>


<script>
	export default {
	  name: 'Recollections',
	  props: {
	  }
	}
</script>