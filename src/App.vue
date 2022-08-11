<template>
  <!-- eslint-disable vue/no-v-html -->
  <header
    class="mx-4 mt-4"
    v-html="html"
  />
  <!-- eslint-enable vue/no-v-html -->

  <article class="bg-neutral-0 text-white container mx-auto">
    <section
      v-for="(servers, name) in servGroups"
      :key="`${servers}-${name}`"
      class="m-4 px-8 py-4 bg-neutral-1"
    >
      <div
        class="mb-4 flex items-center p-2 text-lg text-bold border bg-primary border-primary-light"
      >
        <FontAwesomeIcon
          :icon="faServer"
          class="mr-2"
        />
        {{ name }}
      </div>
      <div class="flex flex-wrap gap-4 justify-between">
        <div
          v-for="(server, name1) in servers"
          :key="`${server}-${name1}`"
        >
          <a
            :href="getInfoUri(server)"
            class="w-max block mb-4"
            target="_blank"
          >
            <h3 class="w-max">
              {{ name1 }}
            </h3>
            <img
              :src="getImageUri(server)"
              :alt="(name1 as string)"
            >
          </a>
          <div class="flex gap-2">
            <a
              class="px-4 py-1 text-bold border bg-neutral-thertiary border-neutral-thertiary-alt text-white hover:bg-primary hover:border-primary-light "
              :href="getInfoUri(server)"
            >
              <FontAwesomeIcon :icon="faInfo" />
              显示服务器详情
            </a>
            <a
              class="px-4 py-1 text-bold border bg-neutral-thertiary border-neutral-thertiary-alt text-white hover:bg-primary hover:border-primary-light "
              :href="getSteamUri(server)"
            >
              <font-awesome-icon :icon="faSteamSymbol" />
              加入服务器
            </a>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script lang="ts" scoped setup>
import { faSteamSymbol } from '@fortawesome/free-brands-svg-icons'
import { faInfo, faServer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { onMounted, ref } from 'vue'
import { headerUri } from '@/URIs'
import { serversUri } from '@/URIs'

interface ServerMap{
  [name: string] : string
}

interface ServerGroupMap{
  [group: string]: ServerMap
}

const getServerMap = async (): Promise<ServerGroupMap> => {
  const data = await fetch(serversUri)
  const json = await data.json()
  return json as ServerGroupMap
}

const getImageUri = (addr: string) => {
  return `https://rwrstats.com/images/servers/${addr.replace(':', '-')}.png`
}

const getInfoUri = (addr: string) => {
  return `https://rwrstats.com/servers/${addr}`
}

const getSteamUri = (addr: string) => {
  const split = addr.split(':')
  const address = split[0]
  let port = '1234'
  if (split.length > 1) {
    port = split[1]
  }
  return `steam://rungameid/270150//server_address=${address} server_port=${port}`
}

const html = ref<string>()
const servGroups = ref<ServerGroupMap>()

onMounted(async () => {
  const res = await fetch(headerUri)
  html.value = await res.text()
  servGroups.value = await getServerMap()
})
</script>
