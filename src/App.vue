<script>
import AppHeader from "./components/AppHeader.vue";
import AppSearch from "./components/AppSearch.vue";
import MainContent from "./components/MainContent.vue";

// importa axios
import axios from "axios";
import { store } from "./store";

export default {
	components: {
		AppHeader,
		AppSearch,
		MainContent,
	},
	data() {
		return {
			store,
		};
	},
	methods: {
		getCards() {
			let myUrl = store.api;
			
			store.getCards = [];

			if (store.selectedType !== "") {
				myUrl += `?${store.typeArchetype}=${store.selectedType}`;
				console.log(myUrl);
			}
			axios.get(myUrl).then((res) => {
				console.log(res.data.data);
				store.getCards = res.data.data;
			});
		},
	},
	created() {
		this.getCards();
	},
};
</script>

<template>
	<header>
		<AppHeader />
	</header>
	<main>
		<AppSearch @search="getCards" />
		<MainContent />
	</main>
</template>

<style lang="scss">
@use "./styles/partials/variables" as *;
@use "./styles/general.scss" as *;

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	background-color: #d48f38;
}
</style>
