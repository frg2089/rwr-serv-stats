<template>

  <a :href="getInfoUri(props.server)" class="w-max block mt-8" target="_blank">
    <h3 class="w-max">
      {{ props.name }}
    </h3>
    <img :src="getImageUri(props.server)" :alt="props.name">
  </a>
  <a :href="getSteamUri(props.server)" class="inline-block rounded-full border bg-neutral-2 hover:bg-accent border-accent mt-2 py-2 px-8 ">
    加入服务器
  </a>

</template>

<script lang="ts" scoped setup>
import { getImageUri, getInfoUri, getSteamUri } from '../services/uritools';

const props = defineProps({
  name: String,
  server: String
})

</script>
