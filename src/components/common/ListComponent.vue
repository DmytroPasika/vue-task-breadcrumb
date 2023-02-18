<template>
  <p @click="onSelectList(`${title}`)">{{ title }}</p>
  <ul>
    <slot
      :on="{
        select: onSelectListItem,
      }"
    />
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "ListComponent",
  emits: ["on-select-item", "select"],
  props: {
    title: {
      type: String as PropType<string>,
      require: true,
    },
  },
  setup(props, { emit }) {
    function onSelectListItem(path: string[]) {
      emit("on-select-item", [props.title, ...path]);
      emit("select", [props.title, ...path]);
    }

    function onSelectList(list: string) {
      emit("on-select-item", [list]);
      emit("select", [list]);
    }
    return { onSelectList, onSelectListItem };
  },
});
</script>
