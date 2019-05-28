<template>
	<div class="container transition">
		<div class="projects transition">
			
			<div class="title transition">
				<h1 class="transition">The Other Body Experience</h1>
			</div>

			<div class="desc-container transition">
			<div class="infos transition">

				<div class="year transition">
					<h3 class="margin-top-none transition">Year</h3>
					<p class="year2 transition">2016</p>
				</div>

				<div class="deliverables transition">
					<h3 class="margin-top-none transition">Deliverables</h3>
					<ul class="lists transition">
						<li>BPM visualizer</li>
						<li>Vest Prototype</li>
						<li>Wearables</li>
						<li>Workout Video</li>
					</ul>
				</div>
			</div>

			<div class="description transition">

				<h2 class=" transition">The Other Body Experience is an interactive art installation aimed at bringing awareness to social issues related with body shaming.</h2>
				<p class="transition">My goal was to make the participant experience having a different body from their one and to ally technology to art and social awareness. Thus, I created an art installation composed by various parts: a Lilypad Arduino connected to a pulse sensor and LED Lights, a prototype of a sand lined vest that weighted 4.2 kgs, a workout video and a heart monitor.<br>One of the most difficult challenges was how to code all the electronic elements to work together, as I had never coded before.<br>I began to solder the pulse sensor to the Lilypad, then sewed the lilypad to a piece of fabric and using conductive thread sewed the power source and the red and white LED lights. Consequently, the LED lights would blink to the participant’s BPM rhythm sent from the pulse sensor.<br>Another challenge was how to make the participant feel and look heavier and how would them wear the wearables safely. First, I thought about using ankle weights, but it wouldn’t solve the wearables problem. Then, I considered using the Kinect camera to create a convex mirror, but that wouldn’t make the participant feel heavier nor would it a useful solution considering the usage of wearables. So I decided to create a vest: I used a life-guard vest, lined with sand, and with sewing snaps sewed in, so that the wearables could be easily attached to it. The vest weighted 4.2kg, making the participant heavier and as it has a lot of volume, it makes the participant also look bigger. Therefore, the participant would wear the vest with the wearables and connect the pulse sensor to their ear lobe.<br>As the participant wears the vest, they have to workout to a video, making them feel how much more difficult it is to workout with excess weight. However, this interaction raised the problem on how the participant would visualize the information coming from the pulse sensor. Thus, I created a heart monitor using Processing that would display the information coming from the pulse sensor.<br>The prototype was tested with an audience and worked as planned, the participants were very engaged with the piece and said that they really felt tired by the weight of the vest and that the visualization of their heart beat made the installation feel more personal.</p>
			</div>
		</div>
		</div>

		<div class="vertical transition">
			<figure data-aos="fade-in"
     				data-aos-delay="50"
     				data-aos-duration="750"
     				data-aos-easing="ease-in-out">
				<img src="@/assets/tobe/vest.png" alt="Vest Prototype" class="img-vertical transition">
				<figcaption>Prototype of a weight vest: life-guard vest lined with sand</figcaption>
			</figure>
			<figure data-aos="fade-in"
     				data-aos-delay="50"
     				data-aos-duration="750">
				<img src="@/assets/tobe/lilypadarduino.jpg" alt="Lilypad Arduino connected to red and white LED lights and a pulse sensor" class="img-vertical transition">
				<figcaption>Lilypad Arduino connected to red and white LED lights and a pulse sensor</figcaption>
			</figure>
				
		</div>
		<div class="horizontal transition">
			<figure data-aos="fade-in"
     				data-aos-delay="50"
     				data-aos-duration="750">
				<img src="@/assets/tobe/heart_monitor.png" alt="four seasons" class="img-horizontal">
				<figcaption>Heart monitor and workout video</figcaption>
			</figure>
			<figure data-aos="fade-in"
     				data-aos-delay="50"
     				data-aos-duration="750"
     				data-aos-easing="ease-in-out">
				<img src="@/assets/tobe/ap1.jpg" alt="Testing the project" class="img-horizontal transition">
				<figcaption>Testing the project with an audience for the first time</figcaption>
			</figure>
		</div>

		<div class="projnav">
			<div>
				<router-link to="/projects/illustration">previous</router-link>
			</div>

			<div>
				<router-link to="/projects/recollections">next</router-link>
			</div>
		</div>

	</div>

</template>

<style scoped lang="scss" src="./projects.scss"/>

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"src="https://unpkg.com/aos@2.3.1/dist/aos.js">
	AOS.init();
</script>

<script>
	export default {
	  name: 'tobe',
	  props: {

	  }
	}
</script>
