<template>
	<div>
		<div class="banner" id="talknwalkapp">
				<h1 class="transition">TalknWalk App</h1>
				<h3 class="transition">Product Design 2019</h3>		
		</div>

		<div class="container transition">
			<div class="projects transition">
				<div class="header transition">
					<h2>A mental health app designed to connect patients and therapists more efficiently</h2>
				</div>

				<div class="description  transition">
					<div class="infos transition">
						<ul><h4>Role</h4>
							<li>Product Design</li>
							<li>Experience Design</li>
							<li>Interface Design</li>
							<li>Web Design</li>
						</ul>
						<ul><h4>Deliverables</h4>
								<li>App Prototype</li>
								<li>User Flow</li>
								<li>User Flow</li>
								<li>UI Elements</li>
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
						<p class="transition">Talknwalk was developed during a three-week sprint for an academic project. It was developed by a multidisciplinary team, made by designers, illustrators, developers, animators, photographers and journalists.</p>
						<p>The project aim was to create an app that would breach the gap between people suffering from mental health problems and therapists, specifically in Portugal. A country where there is still a lot of stigma associated with mental health, patients often must rely on private practices to have access to a therapist which can be financially strenuous for someone who is on a budget. The team went through an ideation and brainstorming process, realising that TalknWalk offered benefits for both patients and therapists.</p>
						<p>The team weighted in the fonts, colour scheme and brand identity as a group, and after that first brainstorming each member moved on with their tasks. Consequently, I researched the competition and designed the app’s user flow and main features for therapists and patients, followed by the low and high-fidelity wireframes for the team’s approval. Once the app’s UX /UI was finished, I dedicated the remaining time to the app’s website, which would act as a promotional tool for marketing.</p>
						<p>The project's most challenging aspect was the time constraint, we had little to no time to research jumping straight to action. However, this was the first time I had work with such a big team, it was easier than I anticipated and it allowed me to share some of the responsability, for example deciding on which colours and fonts to use.</p>
					</div>
				</div>
			</div>

			<div class="gallery transition">
				<div class="groups">
					<figure data-aos="fade-in"
		     				data-aos-duration="500"
		     				data-aos-easing="ease-in-out" 
		     				class="full">
						<img src="/images/talknwalk_app/patient_web.png" alt="Talknwalk app screens, client profile" class="noshadow transition">
						<figcaption>On one hand patients have access to a list of therapists with whom they can start chatting or video-call; the former can chat with a chat bot that will track their mood and offer statistics on their symptoms and, lastly, the patients’ interactions with the app and the bot will complete their profile allowing the app’s AI to send personalized recommendations, articles and mood boosters.</figcaption>
					</figure>
					<figure data-aos="fade-in"
		     				data-aos-duration="500"
		     				data-aos-easing="ease-in-out" 
		     				class="full">
						<img src="/images/talknwalk_app/doctor_web.png" alt="Talknwalk app screens, therapist profile" class="noshadow transition">
						<figcaption>On the other hand, therapists will have access to a wider range of patients, the secure video-calls and chats allow them to work remotely thus being more independent and reducing commute and space renting costs, the therapists has access to information prior to the first interaction with the patient, if the later wishes so, making the diagnosis and therapy more efficient.</figcaption>
					</figure>
				</div>	
			</div>

			<div class="projnav">
				<div>
					<router-link to="/projects/recollections">previous</router-link>
				</div>

				<div>
					<router-link to="/projects/talknwalk_web">next</router-link>
				</div>
			</div>

		</div>
	</div>
</template>

<style scoped lang="scss" src="./projects.scss"/>


<script>
	export default {
	  name: 'TalknWalk',
	  props: {
	  }
	}
</script>