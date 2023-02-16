<template>
  <li :navigationItem="true" :itemValue="title">{{ title }}</li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "ListItem",
  components: {},
  props: {
    title: {
      type: String as PropType<string>,
      required: true,
    },
  },
});
</script>
