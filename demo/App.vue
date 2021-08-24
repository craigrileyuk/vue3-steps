<template>
	<Vue3Steps>
		<template #headers>
			<Vue3StepHeader inline :icon="mdiAccount">One</Vue3StepHeader>
		</template>
		<Vue3Step>Content</Vue3Step>
	</Vue3Steps>
</template>

<script setup>
import { mdiAccount } from "@mdi/js";
</script>