<script>
export default{
  name: "SingleCard",
  props: {
    info: Object,
  }
}

</script>

<template>
    <div class="card-box">
        <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" alt="">
        <div class="info">
            <h3>Nome Carta</h3>
            <h4>Alien</h4>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use'../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *; 



.card-box{
            background-color: #d48f38;
        }

        img{
            width: 100%;
        }

        h3{
            padding: 20px 0;
            color: white;
        }

        h4{
            padding-bottom: 20px;
            font-weight: normal;
        }
</style>