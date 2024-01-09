<script>
import CardList from "./CardList.vue";

export default {
	name: "MainContent",
	components: {
		CardList,
	},
};
</script>

<template>
	<div class="container">
		<div class="row-find">
			<h3>Found 39 cards</h3>
		</div>
		<div class="card-box">
			<CardList />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;

.container {
	width: 90%;
	background-color: white;
	margin: 0 auto 20px;
	padding: 70px 0 40px;
}

.row-find {
	width: 90%;
	margin: 0 auto;
	padding: 20px;
	background-color: #212529;
	color: white;
}
</style>
