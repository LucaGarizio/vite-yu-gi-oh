<script>
import SingleCard from "./SingleCard.vue";

import { store } from "../store";

export default {
	name: "CardList",
	components: {
		SingleCard,
	},
	data() {
		return {
			store,
		};
	},
};
</script>

<template>
	<div class="cards-container">
		<div class="col" v-for="card in store.getCards" :key="card.id">
			<SingleCard :info="card" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;

.cards-container {
	width: 90%;
	margin: 0 auto;
	background-color: white;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	text-align: center;

	.col {
		flex-basis: 18%;
		margin-bottom: 30px;
		background-color: #d48f38;
	}
}
</style>
