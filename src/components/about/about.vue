<template>
  <section id="aboutMe"
           class="about"
           ref="container">
    <div class="container">

      <div class="up">
        <img class="profile"
             src="@/assets/profile_pic.jpg"
             alt="Mariana Inácio Profile Photo"
             ref="image">

        <div class="impose">
          <div class="text">
            <h1>Hi, I'm Mariana! I'm a UX/UI Designer, who wants to become an unicorn!</h1>
          </div>

            <router-link to="/about">
              <button>Learn more</button>
              <div class="up"></div>
            </router-link>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',

  data() {
    return {
      centerX: 0,
      centerY: 0,
      x: 0,
      y: 0,
    }
  },

  methods: {
    update(event) {
      // Update coordinates to center
      var e = event || window.event;
      this.x = e.clientX - this.centerX;
      this.y = (e.clientY - this.centerY) * -1;
      
      const image = this.$refs.image;

      const x = (this.y / image.offsetHeight / 2).toFixed(2);
      const y = (this.x / image.offsetWidth / 2).toFixed(2);

      const style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
      image.style.transform = style;
      image.style.webkitTransform = style;
      image.style.mozTransform = style;
      image.style.msTransform = style;
      image.style.oTransform = style;
    },

    onMouseEnterHandler(event) {
      this.update(event);
    },
    onMouseLeaveHandler(event) {
      this.$refs.image.style = '';
    },
    onMouseMoveHandler(event) {
      this.update(event);
    },
  },

  mounted() {
    const container = this.$refs.container;
    container.onmouseenter = this.onMouseEnterHandler;
    container.onmouseleave = this.onMouseLeaveHandler;
    container.onmousemove = this.onMouseMoveHandler;

    // Calculate container's center position
    this.centerX = container.offsetLeft + Math.floor(container.offsetWidth / 2);
    this.centerY = container.offsetTop + Math.floor(container.offsetHeight / 2);
  }
};
</script>

<style scoped lang="scss" src='./about.scss'/>
