import { createApp } from "vue";
import App from "./App.vue";
import {
  faArrowRight,
  faCaretDown,
  faCaretUp,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
const icons = [faUserSecret, faCaretDown, faCaretUp, faArrowRight];

library.add(...icons);

createApp(App).component("icon", FontAwesomeIcon).mount("#app");
