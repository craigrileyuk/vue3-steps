<template>
  <div class="vue3-steps__content--item" :key="props.step">
    <slot></slot>
  </div>
</template>

<script setup>
import { inject } from "vue";
const props = defineProps({
  step: {
    type: [Number, String],
    required: true,
  },
});
const currentStep = inject("currentStep");
</script>
