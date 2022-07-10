<template>

  <header v-html="html" class="mx-4 mt-4">
  </header>

</template>

<script lang="ts" scoped setup>
import { headerUri } from '../constants';

const res = await fetch(headerUri)
const html = await res.text();
</script>
