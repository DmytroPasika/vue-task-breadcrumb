<template>
  <div class="navigation-bar">
    <list-component title="list #1.0" @on-select-item="onSetPath">
      <template #default="{ on }">
        <list-item title="item #1.1" v-on="on" />
        <list-item title="item #1.2" v-on="on" />
        <list-component title="list #2.0" v-on="on">
          <template #default="{ on: on2 }">
            <list-item title="item #2.1" v-on="on2" />
            <list-item title="item #2.2" v-on="on2" />
            <list-item title="item #2.3" v-on="on2" />
            <list-component title="list #3.0" v-on="on2">
              <template #default="{ on: on3 }">
                <list-item title="item #3.1" v-on="on3" />
                <list-item title="item #3.2" v-on="on3" />
                <list-component title="list #4.0" v-on="on3">
                  <template #default="{ on: on4 }">
                    <list-item title="item #4.1" v-on="on4" />
                    <list-item title="item #4.2" v-on="on4" />
                    <list-item title="item #4.3" v-on="on4" />
                    <list-item title="item #4.4" v-on="on4" />
                  </template>
                </list-component>
              </template>
            </list-component>
          </template>
        </list-component>
      </template>
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
    const path = ref("");

    function onSetPath(elementPath: string[]) {
      path.value = elementPath.join(" -> ");
    }

    return { path, onSetPath };
  },
});
</script>

<style leng="less">
.navigation-bar {
  width: fit-content;
}
</style>
