<template>
	<div
		class="vue3-steps__header--item"
		:class="generatedBaseClasses"
		:style="generatedBaseStyles"
	>
		<button
			class="vue3-steps__header--button"
			@click="changeStep(props.step)"
		>
			<div class="vue3-steps__header--step">
				<svg-icon v-if="props.complete" type="mdi" :path="mdiCheck" />
				<svg-icon
					v-else-if="props.error"
					type="mdi"
					:path="mdiAlertCircle"
				/>
				<svg-icon v-else-if="props.icon" v-bind="buttonIcon" />
				<span v-else>{{ props.step }}</span>
			</div>

			<div class="vue3-steps__header--text-content">
				<label class="vue3-steps__header--label">
					<slot />
				</label>
				<slot name="error">
					<div class="vue3-steps__header--error-message">
						{{ props.error }}
					</div>
				</slot>
			</div>
		</button>
	</div>
</template>

<script setup>
import { computed, inject } from "vue";
import SvgIcon from "vue3-icon";

const currentStep = inject("currentStep");
const changeStep = inject("changeStep");

import { mdiCheck, mdiAlertCircle } from "@mdi/js";

const props = defineProps({
	inline: {
		type: Boolean,
		default: false,
	},
	icon: {
		type: [Object, String],
		default: "",
	},
	step: {
		type: [Number, String],
		required: true,
	},
	complete: {
		type: Boolean,
		default: false,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	readonly: {
		type: Boolean,
		default: false,
	},
	error: {
		type: String,
		default: "",
	},
  badgeBackground: {
    type: String,
    default: "steelblue"
  },  
  badgeColor: {
    type: String,
    default: "#fff"
  }
});

/* **************************************************
 * ICON
 ************************************************** */
const buttonIcon = computed(() => {
	return typeof props.icon === "object"
		? props.icon
		: { type: "mdi", path: props.icon };
});

/* **************************************************
 * BASE CLASSES
 ************************************************** */
const generatedBaseClasses = computed(() => ({
	"has-icon": props.icon,
	"has-error": props.error,
	"is-inline": props.inline,
	"is-disabled": props.disabled,
	"is-readonly": props.readonly,
	"is-active": currentStep.value === props.step ? true : false,
}));

/* **************************************************
 * BASE STYLES
 ************************************************** */
const generatedBaseStyles = computed(() => ({
	"--steps-badge-color": props.badgeColor,
  "--steps-badge-background": props.badgeBackground
}));
</script>