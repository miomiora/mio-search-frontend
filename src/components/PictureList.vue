<template>
  <a-list
    :grid="{ gutter: 16, column: 4 }"
    item-layout="vertical"
    :data-source="props.pictureList"
  >
    <template #renderItem="{ item }">
      <a-list-item>
        <a-card hoverable>
          <template #cover>
            <img :src="item.picture" alt="" @click="jumpToSource(item.purl)" />
          </template>
          <a-card-meta :title="item.account">
            <template #description>{{ item.title }}</template>
          </a-card-meta>
        </a-card>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from "vue";
interface Props {
  pictureList: any[];
}
const props = withDefaults(defineProps<Props>(), {
  pictureList: () => [],
});

const jumpToSource = (purl: string) => {
  window.open(purl);
};
</script>

<style scoped></style>
