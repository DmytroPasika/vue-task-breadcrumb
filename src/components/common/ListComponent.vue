<template>
  <p @click="onSelectList(`${title}`)">{{ title }}</p>
  <ul>
    <slot :on-select-item="onSelectListItem" />
  </ul>
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
    onSelectItem: {
      type: Function as PropType<CallableFunction>,
      default: () => {
        undefined;
      },
    },
  },
  setup(props) {
    function onSelectListItem(path: string[]) {
      props.onSelectItem([props.title, ...path]);
    }

    function onSelectList(list: string) {
      props.onSelectItem([list]);
    }
    return { onSelectList, onSelectListItem };
  },
});
</script>
