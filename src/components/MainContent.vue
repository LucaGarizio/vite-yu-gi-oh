<script>
export default{
  name: "MainContent",
  components:{
    CardList
  }
}

import CardList from './CardList.vue';

</script>

<template>
   <div class="container">
        <div class="row-found">
            <h2>Found 39 cards</h2>
        </div>
        <div class="card-box">
            <CardList/>
        </div>     
   </div>
</template>

<style lang="scss" scoped>
@use'../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *; 

.container{
    width: 90%;
    background-color: white;
    margin: 100px auto;
    padding: 50px 20px;
}

.row-found{
    width: 90%;
    margin: 40px auto 0;
    padding: 25px;
    background-color: #212529;
    color: white;
}



</style>