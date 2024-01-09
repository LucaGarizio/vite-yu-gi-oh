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
        <img :src="info.card_images[0].image_url" :alt="info.name">
        <div class="info">
            <h3>{{ info.name }}</h3>
            <h4>{{ info.archetype }}</h4>
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
    padding: 20px 3px;
    color: white;
}

h4{
    margin-bottom: 20px;
    font-weight: normal;
    padding: 0 5px;
}
</style>