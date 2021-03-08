<template>
  <div id="home" class="home">
    <About/> 
    <ProjectsMobile class="mobile" id="projects-mobile"/>
    <Contacts/>
  </div>
</template>

<style scoped lang="scss" src='./home.scss'/>

<script>
import ProjectsMobile from '@/components/projects-section/projects_mobile.vue'
import About from '@/components/about/about.vue'
import Contacts from '@/components/contacts/contacts.vue'

export default {
  name: 'home',
  components: {
    Contacts,
    ProjectsMobile,
    About
  }
}
</script>