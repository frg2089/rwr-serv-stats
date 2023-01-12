<template>
  <section class="bg-neutral-alt">
    <h2 class="p-2 text-lg text-bold border bg-primary border-primary-light">
      <FontAwesomeIcon :icon="faServer" />
      {{ title }}
    </h2>
    <div class="mx-auto p-1 columns-1 lg:columns-2 2xl:columns-3 justify-center items-baseline">
      <RWRServerTile
        v-for="server, name in servers"
        :key="`${server}-${name}`"
        :server="server"
        :name="name"
      />
    </div>
  </section>
</template>

<script lang="ts" scoped setup>
import { Servers } from '@/utils/servers'
import { faServer } from '@fortawesome/free-solid-svg-icons'
import RWRServerTile from './RWRServerTile.vue'

export interface RWRServerGroupProps{
  title: string
  servers: Servers
}

defineProps<RWRServerGroupProps>()

</script>
