<template>
  <!-- eslint-disable vue/no-v-html -->
  <header
    class="text-center my-4"
    v-html="html"
  />
  <!-- eslint-enable vue/no-v-html -->

  <!-- <JsonServerList :groups="servGroups!" /> -->
  <RWRServerList :servers="servers!" />
</template>

<script lang="ts" scoped setup>
import { headerUri } from '@/URIs'
import { onMounted, ref } from 'vue'
import RWRServerList from './components/RWRServerList.vue'
// import JsonServerList from './components/JsonServerList.vue'
// import { ServerGroupMap } from './models'
// import { getServerMap } from './source.json'
import { getServerList, ServerInfo } from './source.rwr'

const html = ref<string>()
// const servGroups = ref<ServerGroupMap>()
const servers = ref<Partial<ServerInfo>[]>()

onMounted(async () => {
  const res = await fetch(headerUri)
  html.value = await res.text()
  // servGroups.value = await getServerMap()
  servers.value = await getServerList({ start: 0, size: 100, names: 1 })
})
</script>
