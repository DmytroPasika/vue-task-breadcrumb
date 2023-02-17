<template>
  <li @click="onClickItem">{{ title }}</li>
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
    onSelectItem: {
      type: Function as PropType<CallableFunction>,
      default: () => {
        undefined;
      },
    },
  },
  setup(props) {
    function onClickItem(event: MouseEvent) {
      if (event.target instanceof Element) {
        props.onSelectItem([event.target.innerHTML]);
      }
    }
    return { onClickItem };
  },
});
</script>
