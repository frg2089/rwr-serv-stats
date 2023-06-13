<template>
<tr border-2 border-neutral>
  <td
      w-10 border-2 border-neutral bg-neutral-secondary-alt
      v-text="label"
  />
  <td border-2 border-neutral>
    <slot />
  </td>
</tr>
</template>

<script lang="ts" scoped setup>

defineProps<{
  label: string
}>()

</script>
