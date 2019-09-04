<template>
  <div id="home" class="home">
    <About/> 
    <ProjectsMobile class="mobile" id="projects-mobile"/>
    <Projects class="desktop" id="projects-desktop"/>
    <Contacts/>
  </div>
</template>

<style scoped lang="scss" src='./home.scss'/>

<script>
import Projects from '@/components/projects-section/projects-section.vue'
import ProjectsMobile from '@/components/projects-section/projects_mobile.vue'
import About from '@/components/about/about.vue'
import Contacts from '@/components/contacts/contacts.vue'

export default {
  name: 'home',
  components: {
    Contacts,
    Projects,
    ProjectsMobile,
    About
  }
}
</script>