<script>
export default{
  name: "AppHeader"
}

</script>

<template>
 <div class="container">
    <div class="row">
      <img src="/src/assets/img/Yugioh_anime_logo.webp" alt="">
      <h1>Yu-Gi-Oh Api</h1>
    </div>
 </div>
 
</template>

<style lang="scss" scoped>
@use'../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *; 

.container{
  background-color: white;
}
.row{
  width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 20px;

  img{
    width: 150px;
    margin-right: 30px;
  }

  h1{
    font-size: 50px;
    font-weight: 300;
  }
}


</style>
