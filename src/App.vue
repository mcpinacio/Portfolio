<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
  <footer>
  <p class="center">designed and developed by mariana inácio</p>
</footer>
  </div>
</template>

<script>
import NavBar from '@/components/nav-bar/nav-bar.vue'
import Menu from "@/components/menu/menu.vue"


export default {
  name: 'app',
  components: {
    NavBar,
    Menu,
  }
}
</script>

<style lang="scss">
@import 'src/assets/variables.scss';
@import 'src/assets/fonts.scss';
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Open+Sans:wght@400;600;700&display=swap');

*,
*:after,
*::before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

html, body{
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Open Sans', 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #10223C;
}

.about {

    @include mq('tablet-small'){
    height: 100vh;
  }
}

section { 
  padding: 80px 40px;
  margin: 0;

  @include mq('tablet-small'){
    padding: 100px 80px;
  }

  @include mq('tablet-wide'){
    padding: 80px 120px;
  }

  @include mq('desktop-wide'){
    padding: 100px 300px;
  }
}


footer {
  background: $background-colour-blue;

  padding: 10px 35px;

  @include mq('tablet-small'){
    padding: 10px 80px;
  }

  @include mq('tablet-wide'){
    padding: 10px 130px;
  }

  @include mq('desktop'){
    padding: 10px 220px;
  }
  @include mq('desktop-super-wide'){
    padding: 10px 330px;
  }
  @include mq('desktop-super-wide'){
    padding: 10px 330px;
  } 

  p {
    text-align: center !important;
    opacity: 0.3 !important;
  }
}

</style>