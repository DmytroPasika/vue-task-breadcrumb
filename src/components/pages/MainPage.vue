<template>
  <div class="main-page">
    <navigation-bar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "@/components/NavigationBar.vue";

export default defineComponent({
  name: "MainPage",
  components: {
    NavigationBar,
  },
});
</script>
