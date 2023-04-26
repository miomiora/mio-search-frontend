<template>
  <a-list
    :grid="{ gutter: 16, column: 4 }"
    item-layout="vertical"
    :data-source="props.userList"
  >
    <template #renderItem="{ item }">
      <a-list-item>
        <a-card hoverable style="width: 240px">
          <template #cover>
            <img alt="妃爱" :src="hiyori" />
          </template>
          <a-card-meta :title="item.account">
            <template #description>{{ item.description }}</template>
          </a-card-meta>
        </a-card>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup lang="ts">
import hiyori from "../assets/hiyori.jpg";
import { withDefaults, defineProps } from "vue";
interface Props {
  userList: any[];
}
const props = withDefaults(defineProps<Props>(), {
  userList: () => [],
});
</script>

<style scoped></style>
