import { createApp } from "vue";
import { registerPlugins } from "@/plugins/index.ts";
import App from "./App.vue";

import "roboto-fontface/css/roboto/roboto-fontface.css";

const app = createApp(App);

registerPlugins(app);

app.mount("#app");
