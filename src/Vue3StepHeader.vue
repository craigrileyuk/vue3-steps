<template>
  <div
    class="vue3-steps__header--item"
    :class="generatedBaseClasses"
    :style="generatedBaseStyles"
  >
    <button
      class="vue3-steps__header--button"
      :class="generatedButtonClasses"
      @click="changeStep(props.step)"
    >
      <div class="vue3-steps__header--step">
        <svg-icon v-if="props.complete" type="mdi" :path="mdiCheck" />
        <svg-icon v-else-if="props.icon" v-bind="buttonIcon" />
        <span v-else>{{ props.step }}</span>
      </div>

      <label class="vue3-steps__header--label">
        <slot />
      </label>
    </button>
  </div>
</template>

<script setup>
import { computed, inject } from "vue";
import SvgIcon from "vue3-icon";

const currentStep = inject("currentStep");
const changeStep = inject("changeStep");

import { mdiCheck } from "@mdi/js";

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
  "is-inline": props.inline,
  "is-disabled": props.disabled,
}));

/* **************************************************
 * BASE STYLES
 ************************************************** */
const generatedBaseStyles = computed(() => ({
  "--button": props.inline,
}));
const generatedButtonClasses = computed(() => ({}));
</script>

<style lang="scss">
button {
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
}

.vue3-steps__header {
  &--item {
    &.is-inline.has-icon label {
      margin-left: 1em;
    }

    &.is-inline label {
      margin-top: 0;
    }

    &.is-disabled {
      .vue3-steps__header--button {
        pointer-events: none;
        opacity: 0.4;
        filter: grayscale(1);
      }
    }
  }

  &--button {
    position: relative;
    padding: 0.5em 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    flex-flow: column;

    label {
      pointer-events: none;
      margin-top: 0.5em;
    }

    &.is-inline {
      flex-flow: row;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      background-color: currentColor;
      opacity: 0;
      transition: opacity 300ms ease-in-out;
      border-radius: 4px;
    }

    &:hover::before {
      opacity: 0.17;
    }

    &:active::before {
      opacity: 0.4;
    }
  }

  &--step {
    height: 35px;
    width: 35px;
    background-color: steelblue;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
}
</style>
