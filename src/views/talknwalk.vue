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
							<li>UX/UI Design</li>
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
						<p>The project aim was to create an app that would breach the gap between people suffering from mental health problems and therapists, specifically in Portugal. A country where there is still a lot of stigma associated with mental health, patients often must rely on private practices to have access to a therapist which can be financially strenuous for someone who is on a budget. Thus TalknWalk offers benefits for both patients and therapists.</p>
						<p v-bind:class="{desktop : desktop}">Therapists have access to a wider range of patients, the secure video-calls and chats allow them to work remotely thus being more independent and reducing commute and space renting costs, the therapists has access to information prior to the first interaction with the patient, if the later wishes so, making the diagnosis and therapy more efficient.</p>
						<p v-bind:class="{desktop:desktop}">Patients have access to a list of therapists with whom they can start chatting or video-call, enabling the former to try out different types of therapy, effortlessly finding a therapist that fits their budget and reducing the expenses of commuting. This type of user also has access to a chat bot that track their mood and offers statistics of their symptoms and as the user interacts with the app, their profile while become more robust allowing for AI to send them personalized recommendations, articles and mood boosters.</p>
						<p v-bind:class="{desktop:desktop}">It was important to keep the design clean and simple, highlighting the main features both for therapists and patients. Keeping in mind that privacy is an imperative, every interaction between therapists and patients and with the app is confidential.</p>
						<p v-bind:class="{desktop:desktop}">The project's most challenging aspect was the time constraint, we had little to no time to research jumping straight to action. However, this was the first time I had work with such a big team, it was easier than I anticipated and it allowed me to share some of the responsibility, for example deciding on which colours and fonts to use.</p>
						<button v-on:click="desktop = !desktop"
						class="mobile">Read More</button>
					</div>
				</div>
			</div>

			<div class="gallery transition desktop">
					<figure data-aos="fade-up"
		     				data-aos-duration="500"
		     				data-aos-easing="ease-in-out">
						<img src="/images/talknwalk_app/patient_web.png" alt="minimalistic app screens, patients profile over purple background" class="transition">
						<figcaption>Patients' app view. From left to right. The home screen where patients' can check their upcoming appointments and persnonalized recommendations. The statitics screens, where the user can keep track of their symptoms. The messages screen, where patients and therapists interact privately, they can message or video-call each other, make appointments or even check eachother's profile. Lastly, the user profile screen, where the user has access to the settings menu, their biography and main topics they want to discuss with a therapist.</figcaption>
					</figure>
					<figure data-aos="fade-up"
		     				data-aos-duration="500"
		     				data-aos-easing="ease-in-out">
						<img src="/images/talknwalk_app/doctor_web.png" alt="minimalistic app screens, therapist profile over pink background" class="transition">
						<figcaption>Patients' app view. From left to right. The home screen, where therapists can keep track of their appointments. The wallet screen, where the user can check all the transactions made in app. The conversation screen, showing the active conversations and allowing the therapist to start new ones. And, finally, the user profile, where the user has access to the settings menu, their biography, their registration number, their speacilist area and where they can set their hourly fees.</figcaption>
					</figure>	
			</div>

			<div class="gallery transition mobile">
					<figure data-aos="fade-up"
		     				data-aos-duration="500"
		     				data-aos-easing="ease-in-out">
						<img src="/images/talknwalk_app/mobile_pat_1.png" alt="minimalistic app screens, patients profile over purple background" class="transition">
						<figcaption>Patients' app view. From left to right. The home screen where patients' can check their upcoming appointments and persnonalized recommendations. The statitics screens, where the user can keep track of their symptoms.</figcaption>
					</figure>
					<figure data-aos="fade-up"
		     				data-aos-duration="500"
		     				data-aos-easing="ease-in-out">
						<img src="/images/talknwalk_app/mobile_pat_2.png" alt="minimalistic app screens, patients profile over purple background" class="transition">
						<figcaption>Patients' app view. From left to right. The messages screen, where patients and therapists interact privately, they can message or video-call each other, make appointments or even check eachother's profile. The user profile screen, where the user has access to the settings menu, their biography and main topics they want to discuss with a therapist.</figcaption>
					</figure>					
					<figure data-aos="fade-up"
		     				data-aos-duration="500"
		     				data-aos-easing="ease-in-out">
						<img src="/images/talknwalk_app/mobile_doc_1.png" alt="minimalistic app screens, therapist profile over pink background" class="transition">
						<figcaption>Patients' app view. From left to right. The home screen, where therapists can keep track of their appointments. The wallet screen, where the user can check all the transactions made in app.</figcaption>
					</figure>
					<figure data-aos="fade-up"
		     				data-aos-duration="500"
		     				data-aos-easing="ease-in-out">
						<img src="/images/talknwalk_app/mobile_doc_2.png" alt="minimalistic app screens, therapist profile over pink background" class="transition">
						<figcaption>Patients' app view. From left to right. The conversation screen, showing the active conversations and allowing the therapist to start new ones. And the user profile, where the user has access to the settings menu, their biography, their registration number, their speacilist area and where they can set their hourly fees.</figcaption>
					</figure>		
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
	  },
	  data: {
	  	desktop: true,
	  },
	  methods: {

	  },
	  computed: {
	  	compClassses: function(){
	  		return {
	  			desktop: this.desktop,
	  		}
	  	}
	  }
	}
</script>