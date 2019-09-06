<template>
  <div id="app">
    <menu-bar></menu-bar>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Header from './components/includes/Header'
import Footer from './components/includes/Footer'
export default {
  name: 'App',
  components: {
    'menu-bar': Header,
    'my-footer': Footer
  }
}
</script>

<style>
#app {

}
</style>
