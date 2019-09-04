<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
  <footer>
  <p>designed and developed by mariana inácio</p>
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
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700|Muli:300,400,600,700&display=swap');

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
  font-family: 'Muli', 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #10223C;
}

.about, .contacts {

    @include mq('tablet-small'){
    height: 100vh;
  }
}

section { 
  padding: 80px 40px;
  margin: 0;

  //margin-top: 60px;

  @include mq('tablet-small'){
    padding: 100px 80px;
  }

  @include mq('tablet-wide'){
    padding: 80px 120px;
  }

  @include mq('desktop'){
    //margin-top: 55px;
    height: 92vh;
  }

  @include mq('desktop-super-wide'){
    padding: 100px 150px;
  }
}


footer {
  margin: 35px 0;

  @include mq('desktop')

  p {
    @include normal-font;
    font-size: 12px;

    text-align: center;
    
    opacity: 0.5;

    transition: 0.25s cubic-bezier(0.68, 0.16, 0.25, 1);

      @include mq('tablet'){
        font-size: 14px;
      }

      @include mq('desktop-wide'){
        font-size: 16px;
      }
  }
}

</style>