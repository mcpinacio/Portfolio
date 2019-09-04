<template>
	<div>
		<div class="banner">
					<h1 class="transition">Recollections</h1>
					<h3 class="transition">Game Design 2017</h3>		
			</div>

			<div class="container transition">
				<div class="projects transition">
					<div class="header transition">
						<h2>A puzzle-platform game inspired by the seasons and human life stages</h2>
					</div>

					<div class="description  transition">
						<div class="infos transition">
							<ul><h4>Role</h4>
								<li>Game Design</li>
							</ul>
							<ul><h4>Deliverables</h4>
								<li>Assets</li>
								<li>Backgrounds</li>
								<li>Characters</li>
								<li>Collectables</li>
								<li>Game Posters</li>
								<li>UI Elements</li>
							</ul>
							<ul><h4>Team Members</h4>
								<li>Alexandre Peres</li>
								<li>André Saraiva</li>
								<li>Duarte Botelho</li>
								<li>João Varandas</li>
							</ul>
						</div>

						<div class="text transition">
							<p class="transition">This project is a collaboration with Instituto Superior Técnico de Lisboa’s Systems and Computer Engineering Master Students, who developed the game. My role was to create all the visual  elements, such as: UI elements, backgrounds, characters, collectables and assets and game poster.</p>
							<p class="transition">The background illustrations were based on nature, inspired by a minimalist approach that would convey the feelings associated with each season straightforwardly. Summer is bright and exudes warmth, while winter feels more sterile and dark.</p>
							<p class="transition">The game’s main concept was to associate each human life stage to a season, so as the season change so does the character. Thus childhood (the first level) would be played during spring, adolescence during summer and so on. As to maintain the same visual anguage, the characters were design in a minimalistic and linear fashion and their clothes colour scheme was chosen to match the specific season they are associated with. Consequently, the adults are dressed in darker colours to match autumn and the children are dressed in vibrant colours to match spring.</p>
						</div>
					</div>
				</div>

				<div class="gallery transition">
					<div class="groups">
						<figure data-aos="fade-up"
			     				data-aos-duration="500"
			     				data-aos-easing="ease-in-out" >
							<img src="/images/recollections/four_seasons.png" alt="four seasons">
							<figcaption>The fours seasons backgrounds combined</figcaption>
						</figure>

						<div class="padding row">
							<figure data-aos="fade-up"
				     				data-aos-duration="500"
				     				data-aos-easing="ease-in-out" 
				     				class="half">
								<img src="/images/recollections/poster_character.png" alt="poster with character">
								<figcaption class="none">Game poster with game elements</figcaption>
							</figure>
							<figure data-aos="fade-up"
				     				data-aos-duration="500"
				     				data-aos-easing="ease-in-out" 
				     				class="half">
								<img src="/images/recollections/poster_sun.png" alt="poster with sun and trees">
								<figcaption class="none">Game poster inspired by the winter background</figcaption>
							</figure>
						</div>

						<figure data-aos="fade-up"
			     				data-aos-duration="500"
			     				data-aos-easing="ease-in-out" >
							<img src="/images/recollections/winter.png" alt="winter background">
							<figcaption>Winter bacground, it is the last level and associated with the elderly</figcaption>
						</figure>

						<div class="padding row">
							<figure data-aos="fade-up"
				     				data-aos-duration="500"
				     				data-aos-easing="ease-in-out" class="half">
								<img src="/images/recollections/characters.png" alt="characters">
								<figcaption class="none">Male and female characteres life cycle</figcaption>
							</figure>
							<figure data-aos="fade-up"
				     				data-aos-duration="500"
				     				data-aos-easing="ease-in-out" 
				     				class="half">
								<img src="/images/recollections/seasons_menu.png" alt="seasons menu">
								<figcaption class="none">Menu level UI</figcaption>
							</figure>
						</div>

					</div>	
				</div>

				<div class="projnav">
					<div>
						<router-link to="/projects/illustration">previous</router-link>
					</div>

					<div>
						<router-link to="/projects/talknwalk">next</router-link>
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