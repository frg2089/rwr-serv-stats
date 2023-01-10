<template>
  <a
    v-if="href"
    :class="classList"
    :href="href"
  >
    <FontAwesomeIcon
      v-if="icon"
      :icon="icon"
    />
    <slot />
  </a>
  <button
    v-else
    :class="classList"
    @click="$emit('click')"
  >
    <FontAwesomeIcon
      v-if="icon"
      :icon="icon"
    />
    <slot />
  </button>
</template>

<script lang="ts" scoped setup>

const classList = 'px-4 py-1 text-bold border bg-neutral-thertiary border-neutral-thertiary-alt text-white hover:bg-primary hover:border-primary-light'

defineProps<{
  href?: string,
  icon?: any
}>()

defineEmits(['click'])

</script>
