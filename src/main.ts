import { createApp } from "vue";
import { createPinia } from "pinia";
import VueLazyload from "vue-lazyload";
import router from "./routes/index";
import "../output.css";
import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(VueLazyload);
app.mount("#app");
