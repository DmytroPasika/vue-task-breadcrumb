<template #default="{ scope }">
  <div class="list">
    <p :navigationItem="true" :itemValue="title">{{ title }}</p>
    <ul :navigationItem="true" :itemValue="title">
      <slot />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "ListComponent",
  props: {
    title: {
      type: String as PropType<string>,
      require: true,
    },
  },
});
</script>
