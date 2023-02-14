<template>
  <div class="bread-crumbs">
    <drop-down
      :is-open-by-default="true"
      :list="breadCrumbsData"
      title="Navigation bar"
    >
      <div v-if="navigationPath" class="bread-crumbs__path">
        {{ `Breadcrumbs: ${navigationPath}` }}
      </div>
    </drop-down>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import DropDown from "@/components/common/DropDown.vue";
import { useBreadCrumbds } from "@/composables/useBreadCrumbs";

export default defineComponent({
  name: "BreadCrumbs",
  components: {
    DropDown,
  },
  setup() {
    const { state } = useBreadCrumbds();

    const navigationPath = computed(() => {
      return state.path.map((i) => i.title).join(" -> ");
    });

    return {
      breadCrumbsData: state.breadCrumbsData,
      navigationPath,
    };
  },
});
</script>
