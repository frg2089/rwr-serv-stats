<template>
  <article class="bg-neutral-alt text-white container mx-auto columns-1 lg:columns-2 2xl:columns-3 justify-center items-baseline">
    <RWRServerTile
      v-for="server, index in servers"
      :key="index"
      :server="server"
    />
  </article>
</template>

<script lang="ts" scoped setup>
import { ServerInfo } from '@/source.rwr'
import RWRServerTile from './RWRServerTile.vue'

defineProps<{
  servers: Partial<ServerInfo>[]
}>()

</script>
