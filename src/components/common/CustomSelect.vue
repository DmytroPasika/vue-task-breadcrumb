<template>
  <div class="select">
    <div
      v-for="item in navigationList"
      :key="item.id"
      :value="item.title"
      class="select__item-wrapper"
      @click="setSelectItem(item)"
    >
      <div class="select__item">
        {{ item.title }}
      </div>
      <custom-select
        v-if="item.subGroup.length && isItemSelected(item)"
        :navigation-list="item.subGroup"
        @click.stop
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref, ref } from "vue";
import { BreadCrumbsData, useBreadCrumbds } from "@/composables/useBreadCrumbs";

export default defineComponent({
  name: "CustomSelect",
  props: {
    navigationList: {
      type: Array as PropType<BreadCrumbsData[] | [] | undefined>,
      default: () => [],
    },
  },
  setup() {
    const selectedItem: Ref<BreadCrumbsData | null> = ref(null);
    const { clearPathFromItem, setPath } = useBreadCrumbds();

    function setSelectItem(item: BreadCrumbsData): void {
      if (selectedItem.value) clearPathFromItem(selectedItem.value);
      if (selectedItem.value && item.id === selectedItem.value.id) {
        selectedItem.value = null;
      } else {
        selectedItem.value = item;
        setPath({ id: item.id, title: item.title });
      }
    }

    function isItemSelected(item: BreadCrumbsData): boolean {
      if (!selectedItem.value) return false;
      return selectedItem.value.id === item.id;
    }

    return { setSelectItem, isItemSelected };
  },
});
</script>

<style leng="less" scoped>
.select {
  padding: 4px;
}
.select__item-wrapper {
  display: flex;
}

.select__item {
  border: 1px solid purple;
  height: fit-content;
  margin-top: 4px;
  margin-left: 4px;
  padding: 4px;
}
</style>
