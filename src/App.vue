<template>
<!-- eslint-disable vue/no-v-html -->
<header my-4 text-center v-html="html" />
<!-- eslint-enable vue/no-v-html -->

<main mx-auto bg-neutral-alt text-white container>
  <RWRServerGroup v-for="[title, servers], i in Object.entries(groups)" :key="i" :title="title" :servers="servers" />
</main>
</template>

<script lang="ts" scoped setup>
import { onMounted, Ref, ref } from 'vue'
import { getNotice, getServerList } from '@/apis/servers'
import RWRServerGroup from './components/RWRServerGroup.vue'

const html = ref('')
const groups: Ref<RWRModel.Response.ServerGroups> = ref({})

const refresh = () => {
  getNotice().then(i => (html.value = i))
  getServerList().then(i => (groups.value = i))
}

const init = () => {
  refresh()
  setInterval(refresh, 60000)
}

onMounted(init)
</script>
