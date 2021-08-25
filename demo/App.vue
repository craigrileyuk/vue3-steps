<template>
  <Vue3Steps v-model="step">
    <template #header>
      <Vue3StepHeader :icon="mdiAccount" :step="1">One</Vue3StepHeader>
      <Vue3StepHeader :icon="mdiAnimation" :step="2">Two</Vue3StepHeader>
    </template>
    <Vue3Step :step="1">Content for one</Vue3Step>
    <Vue3Step :step="2">Content for two</Vue3Step>
  </Vue3Steps>
</template>

<script setup>
import { ref } from "vue";
import { mdiAccount, mdiAnimation } from "@mdi/js";
const step = ref(1);
</script>
