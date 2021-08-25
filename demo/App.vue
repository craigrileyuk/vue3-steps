<template>
	<Vue3Steps v-model="step" style="width: 500px" :transition-duration="500">
		<template #header>
			<Vue3StepHeader
				:icon="mdiAccount"
				:step="1"
				error="Something's wrong"
				>One</Vue3StepHeader
			>
			<Vue3StepHeader :icon="mdiAnimation" :step="2">Two</Vue3StepHeader>
		</template>
		<Vue3Step :step="1"
			><div class="step-wrapper">
				<div>Content for one</div>
				<div class="flex-end">
					<button class="btn" @click="step = 2">Next</button>
				</div>
			</div></Vue3Step
		>
		<Vue3Step :step="2">
			<div class="step-wrapper">
				<div>Content for two</div>
				<div>
					<button class="btn" @click="step = 1">Back</button>
				</div>
			</div>
		</Vue3Step>
	</Vue3Steps>
</template>

<script setup>
import { ref } from "vue";
import { mdiAccount, mdiAnimation } from "@mdi/js";
const step = ref(1);
</script>

<style lang="scss">
.step-wrapper {
	display: flex;
	flex-flow: column;
}
.btn {
	border: none;
	margin: 0;
	padding: 0;
	width: auto;
	overflow: visible;

	background: transparent;
	color: inherit;
	font: inherit;
	line-height: normal;
	-webkit-font-smoothing: inherit;
	-moz-osx-font-smoothing: inherit;
	-webkit-appearance: none;
	&::-moz-focus-inner {
		border: 0;
		padding: 0;
	}
	display: inline-block;
	padding: 0.5em 0.75em;
	background-color: steelblue;
	color: white;
	border-radius: 4px;
	cursor: pointer;
}
.flex-end {
	display: flex;
	justify-content: flex-end;
}
</style>
