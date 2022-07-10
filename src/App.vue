<template>

  <suspense>
    <MyHeader />
  </suspense>

  <suspense>
    <ServerGroupRoot />
  </suspense>

</template>

<script lang="ts" scoped setup>
import ServerGroupRoot from './components/ServerGroupRoot.vue';
import MyHeader from './components/MyHeader.vue';

</script>
