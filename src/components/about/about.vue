<template>
<section id="aboutMe" class="about">
	<div class="container">

		<div class="up">
			<img class="profile" id="inner" src="@/assets/profile_pic.png" alt="Mariana Inácio Profile Pictue">
			<div class="impose">
				<div class="text">	
					<h1>Hi, I'm Mariana!</h1>
					<h1>I'm a UX/UI Designer, who wants to become an unicorn!</h1>
				</div>
			<div class="btn">
			<router-link to="/about">
				<button>Learn more</button>
				<div class="up"></div>
			</router-link>
		</div>
			</div>
		</div>

		
		</div>
</section>

</template>



<script>
export default {
  name: 'About',

  props: {
  },

  methods: {
		function() {
		// Init
		var container = document.getElementById("container");
		var inner = document.getElementById("inner");

		// Mouse
		var mouse = {
		_x: 0,
		_y: 0,
		x: 0,
		y: 0,
		updatePosition: function(event) {
		var e = event || window.event;
		this.x = e.clientX - this._x;
		this.y = (e.clientY - this._y) * -1;
		},
		setOrigin: function(e) {
		this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
		this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
		},
		show: function() {
		return "(" + this.x + ", " + this.y + ")";
		}
		};

		// Track the mouse position relative to the center of the container.
		mouse.setOrigin(container);

		//-----------------------------------------

		var counter = 0;
		var updateRate = 10;
		var isTimeToUpdate = function() {
		return counter++ % updateRate === 0;
		};

		connsole.log('blah');
		}

	},

}

</script>

<style scoped lang="scss" src='./about.scss'/>