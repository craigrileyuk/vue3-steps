import { ref, h, provide, computed } from "vue";

const headers = ref([]);
const steps = ref([]);

const registerHeader = (vNode) => {
	headers.value.push(vNode);
}
const registerStep = (vNode) => {
	steps.value.push(vNode);
}

const unregisterHeader = (vNode) => {
	headers.value = headers.value.filter(n => n !== vNode);
}

const unregisterStep = (vNode) => {
	steps.value = steps.value.filter(n => n !== vNode);
}

const generateHeaderComponents = (slots) => {
	return h("div", {
		class: "vue3-steps__header--container"
	}, [slots.headers()]);
}

const generateContentComponents = (slots) => {
	return h("div", {
		class: "vue3-steps__content--container"
	}, [slots.default()]);
}

export default {
	setup(props, { slots }) {
		provide("registerHeader", registerHeader);
		provide("registerStep", registerStep);
		provide("unregisterHeader", unregisterHeader);
		provide("unregisterStep", unregisterStep);

		return () => h("div", { class: ["vue3-steps__steps"] }, [generateHeaderComponents(slots), generateContentComponents(slots)])
	}
}