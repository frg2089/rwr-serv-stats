<template>
  <article class="bg-neutral text-white container mx-auto grid grid-cols-1 gap-4">
    <ServerGroup
      v-for="(servers, title) in groups"
      :key="`${title}-${servers}`"
      :title="(title as string)"
      :servers="servers"
    />
  </article>
</template>

<script lang="ts" scoped setup>
import ServerGroup from '@/components/ServerGroup.vue'
import { ServerGroupMap } from '@/source.json'

defineProps<{
  groups: ServerGroupMap
}>()

</script>
