<template>
<section bg-neutral-alt>
  <h2
      text-bold border border-primary-light bg-primary
      p-2 text-lg
  >
    <i i-fa6-solid:server />
    {{ title }}
  </h2>
  <div
      :class="`columns-1 ${count > 1 ? 'lg:columns-2' : ''} ${count > 2 ? '2xl:columns-3' : ''}`" mx-auto
      items-baseline justify-center p-1
  >
    <RWRServerTile v-for="server, name in servers" :key="`${server}-${name}`" :server="server" :name="name" />
  </div>
</section>
</template>

<script lang="ts" scoped setup>
import { computed } from 'vue'
import RWRServerTile from './RWRServerTile.vue'

export interface RWRServerGroupProps {
  title: string
  servers: RWRModel.Response.Servers
}

const props = defineProps<RWRServerGroupProps>()

const count = computed(() => Object.keys(props.servers).length)

</script>
