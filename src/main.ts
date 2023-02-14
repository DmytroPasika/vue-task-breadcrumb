import { createApp } from "vue";
import App from "./App.vue";
import {
  faUserSecret,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

const icons = [faUserSecret, faCaretDown, faCaretUp];

library.add(...icons);

createApp(App).component("icon", FontAwesomeIcon).mount("#app");
