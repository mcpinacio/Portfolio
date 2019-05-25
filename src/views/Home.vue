<template>
  <div class="home">
	<section id="welcome">
	</section>  
    <Projects/>
    <About/>
    <Contacts/>
  </div>
</template>



<script>
import Projects from '@/components/projects-section/projects-section.vue'
import About from '@/components/about/about.vue'
import Contacts from '@/components/contacts/contacts.vue'

export default {
  name: 'home',
  components: {
    Contacts,
    Projects,
    About
  }
}
</script>