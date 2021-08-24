import { createApp } from "vue";
import { Vue3Steps, Vue3StepHeader, Vue3Step } from "./package";
import App from "./App.vue";

const app = createApp(App);

app.component("Vue3Steps", Vue3Steps);
app.component("Vue3Step", Vue3Step);
app.component("Vue3StepHeader", Vue3StepHeader);
app.mount("#app");