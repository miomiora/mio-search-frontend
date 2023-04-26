<template>
  <a-list item-layout="horizontal" :data-source="props.postList">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta>
          <template #title>
            <a v-html="item.title"></a>
          </template>
          <template #description>
            <p v-text="item.content" style="color: black"></p>
            <!--            <p v-html="item.content" style="color: black"></p>-->
          </template>
          <template #avatar>
            <a-avatar :src="hiyori" />
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup lang="ts">
import hiyori from "../assets/hiyori.jpg";
import { withDefaults, defineProps } from "vue";
interface Props {
  postList: any[];
}

const props = withDefaults(defineProps<Props>(), {
  postList: () => [],
});
</script>

<style scoped></style>
