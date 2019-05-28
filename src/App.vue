<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
    <MenuLeft/>
  <footer>
  <p>designed and developed by mariana inácio</p>
</footer>
  </div>
</template>

<script>
import NavBar from '@/components/nav-bar/nav-bar.vue'
import Menu from "@/components/menu/menu.vue"
import MenuLeft from "@/components/menu/menuLeft.vue"

export default {
  name: 'app',
  components: {
    NavBar,
    Menu,
    MenuLeft,
  }
}
</script>

<style lang="scss">
@import 'src/assets/variables.scss';
@import url('https://fonts.googleapis.com/css?family=Lato:400,700|Quattrocento+Sans:400,700');

*,*:before, *:after{
  box-sizing: border-box;
}

html, body{
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Quattrocento Sans', 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  padding-left: 0;
  padding-right: 0;

  @include mq('tablet-wide'){
    padding: 0 70px;
  }
}

section { 
  padding: 40px 40px;
  margin: 0;

  margin-top: 70px;

  height: 35rem;

  @include mq('tablet-small'){
    padding: 80px 80px;
    height: 36rem;
  }

  @include mq('tablet'){
    height: 37rem;
  }

  @include mq('tablet-wide'){
    padding: 80px 120px;
    height: 41rem;
  }

  @include mq('desktop'){
    padding: 100px 150px;
    margin-top: 55px;
  }


  @include mq('desktop-super-wide'){
    padding: 100px 190px;
    height: 64rem;
  }
}


footer {
  margin: 35px 0;

  @include mq('desktop')

  p {
    @include normal-font;
    font-size: 12px;

    text-align: center;
    
    opacity: 0.3;

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