<template>
  <article class="bg-neutral-alt text-white container mx-auto">
    <RWRServerGroup
      v-for="servers, title in groups"
      :key="title"
      :title="title"
      :servers="servers"
    />
  </article>
</template>

<script lang="ts" scoped setup>
import { ServerGroups } from '@/utils/servers'
import RWRServerGroup from './RWRServerGroup.vue'

defineProps<{
  groups: ServerGroups
}>()

</script>
