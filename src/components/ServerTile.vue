<template>
  <div class="grid gap-1 p-1 hover:bg-primary hover:border-primary-light">
    <a
      :href="getInfoUri(address)"
      class="w-485 block"
      target="_blank"
    >
      <h3 class="w-485">
        {{ name }}
      </h3>
      <img
        :src="getImageUri(address)"
        :alt="name"
      >
    </a>
    <div class="w-485 grid grid-cols-2 gap-1">
      <a
        class="px-4 py-1 text-bold border bg-neutral-thertiary border-neutral-thertiary-alt text-white hover:bg-primary hover:border-primary-light "
        :href="getInfoUri(address)"
      >
        <FontAwesomeIcon :icon="faInfo" />
        显示服务器详情
      </a>
      <a
        class="px-4 py-1 text-bold border bg-neutral-thertiary border-neutral-thertiary-alt text-white hover:bg-primary hover:border-primary-light "
        :href="getSteamUri(address)"
      >
        <font-awesome-icon :icon="faSteamSymbol" />
        加入服务器
      </a>
    </div>
  </div>
</template>

<script lang="ts" scoped setup>
import { getImageUri, getInfoUri } from '@/rwrstats'
import { getSteamUri } from '@/steam'
import { faSteamSymbol } from '@fortawesome/free-brands-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'

defineProps<{
  name: string,
  address: string
}>()

</script>
