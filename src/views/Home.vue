<template>
  <div id="home" class="home">
    <About/> 
    <Projects/>
    <Contacts/>
  </div>
</template>

<style scoped lang="scss" src='./home.scss'/>

<script>
import Projects from '@/components/projects-section/projects.vue'
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