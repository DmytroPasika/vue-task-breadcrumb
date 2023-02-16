<template>
  <div class="navigation-bar" ref="perenRoot">
    <list-component title="list #1.0" @click="onSelectItem">
      <list-item title="item #1.1" />
      <list-item title="item #1.2" />
      <list-component title="list #2.0">
        <list-item title="item #2.1" />
        <list-item title="item #2.2" />
        <list-item title="item #2.3" />
        <list-component title="list #3.0">
          <list-item title="item #3.1" />
          <list-item title="item #3.2" />
        </list-component>
      </list-component>
    </list-component>
  </div>
  <div v-if="path.length">
    {{ `Breadcrumbs: ${path}` }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ListComponent from "@/components/common/ListComponent.vue";
import ListItem from "@/components/common/ListItem.vue";

export default defineComponent({
  name: "NavigationBar",
  components: {
    ListComponent,
    ListItem,
  },
  setup() {
    const perenRoot = ref(null);
    const path = ref("");
    function onSelectItem(e: any) {
      if (!e.target) return;
      const elementPath = [];
      let node = e.target;
      while (node !== perenRoot.value) {
        if (node.hasAttribute("navigationItem")) {
          elementPath.unshift(node);
        }
        node = node?.parentNode;
      }
      path.value = elementPath
        .map((e) => {
          return e.getAttribute("itemValue");
        })
        .join(" -> ");
    }

    return { path, onSelectItem, perenRoot };
  },
});
</script>

<style leng="less">
.navigation-bar {
  width: fit-content;
}
</style>
