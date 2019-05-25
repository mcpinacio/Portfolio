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
    MenuLeft
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
    padding: 0 40px;
  }

  @include mq('desktop'){
    padding:0 80px;
  }
}

section {
  margin-bottom: 20px;

  padding: 40px 40px;

  @include mq('tablet-small'){
    padding: 80px 80px;
  }

  @include mq('tablet'){
    margin-bottom: 40px;
  }

  @include mq('tablet-wide'){
    padding: 80px 120px;
    margin-bottom: 80px;
  }
  @include mq('desktop'){
    padding: 100px 150px;
  }

  @include mq('desktop-super-wide'){
    padding: 100px 190px;
  }

  &:first-child{
    margin-top: 80px;
  }
}


footer {
  margin-bottom: 20px;

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