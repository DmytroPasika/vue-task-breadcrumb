<template>
  <div class="drop-down">
    <div class="border drop-down__title" @click="setDropDownStatus">
      {{ title }}
      <icon
        class="drop-down__icon"
        :icon="!isDropDownOpen ? 'fa-caret-down' : 'fa-caret-up'"
      />
    </div>
    <div
      :class="{ 'hide-drop-down': !isDropDownOpen }"
      class="drop-down__content"
    >
      <div v-for="item in list" :key="item.id" class="drop-down__item-wrapper">
        <div class="drop-down__item" @click="setSelectItem(item)">
          {{ item.title }}
        </div>
        <custom-select
          v-if="item.subGroup.length && isItemSelected(item)"
          :navigation-list="item.subGroup"
          class="drop-down__custom-select"
        />
      </div>
    </div>
  </div>
  <slot />
</template>

<script lang="ts">
import { defineComponent, PropType, Ref, ref } from "vue";
import { BreadCrumbsData, useBreadCrumbds } from "@/composables/useBreadCrumbs";
import CustomSelect from "@/components/common/CustomSelect.vue";

export default defineComponent({
  name: "DropDown",
  components: { CustomSelect },
  props: {
    title: {
      type: String as PropType<string>,
      required: true,
    },
    list: {
      type: Array as PropType<BreadCrumbsData[] | undefined>,
      default: () => [],
    },
    isOpenByDefault: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  setup(props) {
    const { clearPath, clearPathFromItem, setPath } = useBreadCrumbds();
    const isDropDownOpen = ref(props.isOpenByDefault);
    const selectedItem: Ref<BreadCrumbsData | null> = ref(null);

    function setDropDownStatus(): void {
      if (isDropDownOpen.value) {
        selectedItem.value = null;
        clearPath();
      }
      isDropDownOpen.value = !isDropDownOpen.value;
    }

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

    return {
      isDropDownOpen,
      isItemSelected,
      setDropDownStatus,
      setSelectItem,
    };
  },
});
</script>

<style leng="less" scoped>
.drop-down {
  align-items: center;
  display: flex;
  flex-direction: column;
  /* width: fit-content; */
}

.drop-down__content {
  width: 100%;
}

.drop-down__icon {
  cursor: pointer;
  padding-left: 4px;
}
.drop-down__item {
  border: 1px solid purple;
  height: fit-content;
  margin-top: 4px;
  padding: 4px;
  width: 100%;
}

.drop-down__item-wrapper {
  display: flex;
  align-items: center;
}

.drop-down__title {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 4px 8px;
}

.hide-drop-down {
  display: none;
}

.border {
  border-radius: 4px;
  border: 1px solid purple;
}
</style>
