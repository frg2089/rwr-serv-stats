<template>
  <section class="bg-neutral-alt">
    <h2 class="p-2 text-lg text-bold border bg-primary border-primary-light">
      <FontAwesomeIcon :icon="faServer" />
      {{ title }}
    </h2>
    <div class="mx-auto p-1 flex flex-wrap gap-2 justify-center">
      <ServerTile
        v-for="(server, name) in servers"
        :key="`${server}-${name}`"
        :name="(name as string)"
        :address="server"
      />
    </div>
  </section>
</template>

<script lang="ts" scoped setup>
import { ServerMap } from '@/source.json'
import { faServer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ServerTile from './ServerTile.vue'

defineProps<{
  title: string,
  servers: ServerMap
}>()
</script>
