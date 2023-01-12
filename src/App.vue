<template>
  <!-- eslint-disable vue/no-v-html -->
  <header
    class="text-center my-4"
    v-html="html"
  />
  <!-- eslint-enable vue/no-v-html -->

  <RWRServerGroupPane :groups="groups" />
</template>

<script lang="ts" scoped setup>
import { onMounted, Ref, ref } from 'vue'
import { getServers, ServerGroups } from './utils/servers'
import { getConfig } from './utils/config'
import { getHeader } from './utils/header'
import RWRServerGroupPane from './components/RWRServerGroupPane.vue'

const html = ref('')
const isModern = ref(false)
const groups: Ref<ServerGroups> = ref({})

const init = () => {
  getConfig().then(({ uri }) => (isModern.value = !!uri.api))
  getHeader().then(i => (html.value = i))
  getServers({}).then(i => { groups.value = i })
}

onMounted(init)
</script>
