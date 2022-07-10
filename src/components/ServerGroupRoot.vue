<template>

  <article class="bg-neutral-0 text-white">
    <ServerGroup v-for="(servers, name) in servGroups" :groupName="name" :servers="servers" />
  </article>

</template>

<script lang="ts" scoped setup>
import { getServerMap } from '../services/getServerMap'
import ServerGroup from './ServerGroup.vue';

const servGroups = await getServerMap()

</script>
