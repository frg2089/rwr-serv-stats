<template>

  <section class="w-max m-4 px-8 py-4 bg-neutral-1">
    <h2 class="mb-4 text-xl text-accent">{{ props.groupName }}</h2>
    <ServerTile v-for="(server, name) in servers" :server="server" :name="name" />
  </section>

</template>

<script lang="ts" scoped setup>
import ServerTile from './ServerTile.vue';

const props = defineProps({
  groupName: String,
  servers: Object
})

</script>
