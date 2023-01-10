<template>
  <tr class="border-2 border-neutral">
    <td class="w-10 border-2 border-neutral bg-neutral-secondary-alt">
      {{ label }}
    </td>
    <td class="border-2 border-neutral">
      <slot />
    </td>
  </tr>
</template>

<script lang="ts" scoped setup>

defineProps<{
  label: string
}>()

</script>
