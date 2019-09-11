<template>
  <section id="aboutMe"
           class="about"
           ref="container">
    <div class="container">
      <div class="text">
          <h1>Hi, I'm Mariana!<br>A UX/UI Designer, who wants to become a unicorn!</h1>

<!--           <router-link to="/about">
            <button>about me</button>
            <div class="up"></div>
          </router-link> -->
      </div>

      <div class="down">
        <svg class="mouse" xmlns="..." viewBox="0 0 76 130" preserveAspectRatio="xMidYmid meet"
              v-on:click.prevent="scrollTo('projects-desktop')">
          <g fill="none" fill-rule="evenodd">
            <rect width="70" height="118" x="1.5" y="1.5" stroke-width="3" rx="36"/>
            <circle class="scroll" cx="36.5" cy="31.5" r="4.5"/>
          </g>
        </svg>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'About',

  methods: {
      scrollTo(sectionId) {
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({ 
          behavior: 'smooth' 
        });
        }
      }
  }
};
</script>

<style scoped lang="scss" src='./about.scss'/>
