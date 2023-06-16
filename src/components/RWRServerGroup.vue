<template>
<section bg-neutral-alt>
  <h2
      text-bold relative border border-primary-light
      bg-primary p-2 text-lg
  >
    <i i-fa6-solid:server />
    {{ title }}
    <span v-if="onlineCountVisible" absolute right-4>
      <span :class="onlineCount !== count ? 'text-red-500' : 'text-green-300'" v-text="onlineCount" />
      /
      <span v-text="count" />
    </span>
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
  servers: RWRModel.Servers
}

const props = defineProps<RWRServerGroupProps>()

const count = computed(() => Object.keys(props.servers).length)

const onlineCountVisible = import.meta.env.RWR_ADVANCED_INFO_URI != null && import.meta.env.RWR_ADVANCED_INFO_URI !== ''

const onlineCount = computed(() => Object.values(props.servers).filter(i => typeof i !== 'string').length)

</script>
