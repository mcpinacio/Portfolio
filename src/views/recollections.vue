<template>
	<div>
		<div class="banner transition" id="game">
					<h1>Recollections</h1>
					<h3>Game Design 2017</h3>		
			</div>

			<div class="container transition">
				<div class="projects">
					<div class="header">
						<h2>A puzzle-platform game inspired by the seasons and human life stages</h2>
					</div>

					<div class="description">
						<div class="infos">
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

						<div class="text">
							<p>This project is a collaboration with <b>Instituto Superior Técnico de Lisboa’s</b> Systems and Computer Engineering Master Students, who developed the game. <b>My role was to create all the visual  elements, such as: UI elements, backgrounds, characters, collectables and assets and game poster.</b></p>
							<p>The background illustrations were based on nature, inspired by a minimalist approach that would convey the feelings associated with each season straightforwardly. Summer is bright and exudes warmth, while winter feels more sterile and dark.</p>
							<p>The game’s main concept was to associate each human life stage to a season, so as the season change so does the character. Thus childhood (the first level) would be played during spring, adolescence during summer and so on. As to maintain the same visual anguage, the characters were design in a minimalistic and linear fashion and their clothes colour scheme was chosen to match the specific season they are associated with. Consequently, the adults are dressed in darker colours to match autumn and the children are dressed in vibrant colours to match spring.</p>
						</div>
					</div>
				</div>

				<div class="gallery transition">
					<figure data-aos="fade-up"
						data-aos-duration="500"
						data-aos-easing="ease-in-out">
						<img class="desktop" src="/images/recollections/four_seasons.png" alt="four seasons vectorial illustration">
						<img class="tablet" src="/images/recollections/four_seasons_tablet.png" alt="four seasons vectorial illustration">
						<img class="mobile" src="/images/recollections/four_seasons_mobile.png" alt="four seasons vectorial illustration">
						<figcaption>The fours seasons backgrounds combined</figcaption>
					</figure>
					<figure data-aos="fade-up"
							data-aos-duration="500"
							data-aos-easing="ease-in-out" 
							class="half">
						<img class="desktop" src="/images/recollections/poster_game.png" alt="vectorial illustration game poster with game elements">
						<img class="tablet" src="/images/recollections/poster_game_tablet.png" alt="vectorial illustration game poster with game elements">
						<img class="mobile" src="/images/recollections/poster_game_mobile.png" alt="vectorial illustration game poster with game elements">
						<figcaption>Game poster with game elements</figcaption>
					</figure>
					<figure data-aos="fade-up"
							data-aos-duration="500"
							data-aos-easing="ease-in-out" 
							class="half">
						<img class="desktop" src="/images/recollections/poster_sun.png" alt="vectorial illustration game poster with trees and sunset">
						<img class="tablet" src="/images/recollections/poster_sun_tablet.png" alt="vectorial illustration game poster with trees and sunset">
						<img class="mobile" src="/images/recollections/poster_sun_mobile.png" alt="vectorial illustration game poster with trees and sunset">
						<figcaption>Game poster inspired by the winter background</figcaption>
					</figure>
					<figure data-aos="fade-up"
							data-aos-duration="500"
							data-aos-easing="ease-in-out" >
						<img class="desktop" src="/images/recollections/winter.png" alt="winter background vectorial illustration">
						<img class="tablet" src="/images/recollections/winter_tablet.png" alt="winter background vectorial illustration">
						<img class="mobile" src="/images/recollections/winter_mobile.png" alt="winter background vectorial illustration">
						<figcaption>Winter bacground, it is the last level and associated with the elderly</figcaption>
					</figure>
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