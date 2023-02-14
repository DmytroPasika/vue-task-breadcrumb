<template>
  <div class="main-page">
    <bread-crumbs />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumbs from "@/components/BreadCrumbs.vue";

export default defineComponent({
  name: "MainPage",
  components: {
    BreadCrumbs,
  },
});
</script>

<style leng="less" scoped>
.main-page {
  display: flex;
  justify-content: center;
}
</style>
