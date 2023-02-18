<template>
  <li @click="onClickItem">{{ title }}</li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "ListItem",
  emits: ["select"],
  props: {
    title: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props, { emit }) {
    function onClickItem() {
      emit("select", [props.title]);
    }
    return { onClickItem };
  },
});
</script>
