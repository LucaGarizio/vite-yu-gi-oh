<script>
// importa axios
import axios from 'axios'

import AppHeader from './components/AppHeader.vue'
import MainContent from './components/MainContent.vue'
import CardList from './components/CardList.vue'


import { store } from "./store";


export default{
  components: {
    AppHeader,
    MainContent,
    CardList
  },
  data(){
    return {
      store,
    }
  },
  methods: {
    getCards() {
      axios
        .get(store.apiURL)
        .then((res=> { 
          // console.log(res.data.data);
          store.getCards = res.data.data;
        }))
    }
  },
  created() {
    this.getCards();
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
