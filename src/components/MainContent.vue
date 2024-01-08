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
  <div class="row-option">
    <select name="" id="">
      <option value=""></option>
      <option value="">Alien</option>
      <option value="">Spell</option>
      <option value="">Infernoble Arms</option>
      <option value="">Noble Knight</option>
      <option value="">Archfiend</option>
    </select>
  </div>
  <div class="container">
    <div class="row-found">
      <h3>Found 39 cards</h3>
        </div>
        <div class="card-box">
          <CardList/>
        </div>     
   </div>
</template>

<style lang="scss" scoped>
@use'../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *; 

.row-option{
  width: 88%;
  margin: 20px auto;
    select{
      padding: 10px; 
      width: 200px; 
      font-size: 15px;
    }
}
.container{
    width: 90%;
    background-color: white;
    margin: 0 auto 20px;
    padding: 70px 0 45px;
}

.row-found{
    width: 90%;
    margin: 0 auto;
    padding: 20px;
    background-color: #212529;
    color: white;
}

</style>