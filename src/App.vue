<template>
  <div id="app">
    <div class="container">
      <!-- header -->
      <app-header />
      <!-- menu -->
      <app-menu />
      <!-- router view -->
      <router-view />
    </div>
  </div>
</template>

<script>
import './styles/global.scss'
import AppHeader from './components/AppHeader'
import AppMenu from './components/AppMenu'
import PageTitle from './components/PageTitle.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMenu,
    PageTitle
  }
}
</script>

<style lang="scss">
.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
}
</style>
