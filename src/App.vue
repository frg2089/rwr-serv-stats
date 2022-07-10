<template>

  <header>
    <h1>RWR 服务器状态</h1>
  </header>

  <suspense>
    <ServerGroupRoot />
  </suspense>

</template>

<script lang="ts" scoped setup>
import ServerGroupRoot from './components/ServerGroupRoot.vue';

</script>
