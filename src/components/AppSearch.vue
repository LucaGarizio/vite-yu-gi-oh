<script>
import axios from "axios";
import { store } from "../store";

export default {
	name: "AppSearch",
	data() {
		return {
			store,
		};
	},
	methods: {
		getType() {
			axios.get(store.apiType).then((res) => {
				console.log(res.data);
				store.getType = res.data;
			});
		},
	},
	created() {
		this.getType();
	},
};
</script>

<template>
	<div class="row-option">
		<label for="search"></label>
		<select
			v-model="store.selectedType"
			name=""
			id="search"
			@change="$emit('search')"
		>
			<option value="">Select Type</option>
			<option
				v-for="(cardType, i) in store.getType"
				:key="i"
				:value="cardType.archetype_name"
			>
				{{ cardType.archetype_name }}
			</option>
		</select>
	</div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;

.row-option {
	width: 88%;
	margin: 20px auto;
	select {
		padding: 10px;
		width: 200px;
		font-size: 15px;
	}
}
</style>
