<script>


import AppHeader from './components/AppHeader.vue'
import MainContent from './components/MainContent.vue'
import CardList from './components/CardList.vue'





export default{
  components: {
    AppHeader,
    MainContent,
    CardList
  }
}
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <MainContent/>
  </main>
</template>

<style lang="scss">
@use './styles/partials/variables' as *;
@use './styles/general.scss' as *; 

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color: #d48f38;
}
</style>
