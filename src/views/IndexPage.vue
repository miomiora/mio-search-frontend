<template>
  <div class="index-page">
    <a-input-search
      v-model:value="searchText"
      placeholder="input search text"
      enter-button="Search"
      size="large"
      @search="onSearch"
    />
    <MyDivider />
    <a-tabs v-model:activeKey="activeKey" @change="onTableChange">
      <a-tab-pane key="post" tab="文章">
        <PostList :post-list="postList" />
      </a-tab-pane>
      <a-tab-pane key="picture" tab="图片">
        <PictureList :picture-list="pictureList" />
      </a-tab-pane>
      <a-tab-pane key="user" tab="用户">
        <UserList :user-list="userList" />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import PostList from "@/components/PostList.vue";
import MyDivider from "@/components/MyDivider.vue";
import PictureList from "@/components/PictureList.vue";
import UserList from "@/components/UserList.vue";
import { useRoute, useRouter } from "vue-router";
import myAxios from "@/plugins/myAxios";

const router = useRouter();
const route = useRoute();
const activeKey = route.params.category;
const initSearchParams = {
  text: route.query.text,
  size: 12,
  page: 1,
  type: activeKey,
};
const searchParams = ref(initSearchParams);
const postList = ref([]);
const userList = ref([]);
const pictureList = ref([]);

const searchText = ref(route.query.text || "");
const loadData = (params: any) => {
  searchText.value = params.text;
  const query = {
    ...params,
    text: params.text,
  };
  myAxios.post("/all", query).then((res: any) => {
    postList.value = res.data.post;
    userList.value = res.data.user;
    pictureList.value = res.data.picture;
  });
};

// loadData(initSearchParams);

watchEffect(() => {
  searchParams.value = {
    ...initSearchParams,
    text: route.query.text,
    type: route.params.category,
  } as any;
  loadData(searchParams.value);
});

const onSearch = (value: string) => {
  router.push({
    query: {
      // ...searchParams.value,
      text: value,
      page: searchParams.value.page,
      size: searchParams.value.size,
    },
  });
  // loadData(searchParams.value);
};

const onTableChange = (key: string) => {
  router.push({
    path: `/${key}`,
    query: {
      text: searchParams.value.text,
      page: searchParams.value.page,
      size: searchParams.value.size,
    },
  });
  // loadData(searchParams.value);
};
</script>
