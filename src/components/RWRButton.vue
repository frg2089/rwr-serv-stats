<template>
<component
    :is="href ? 'a' : 'button'"
    :border="`.1rem solid ${accent ? 'primary-light' : 'neutral-thertiary-alt'} hover:primary-light`"
    p="x-[.8rem] y-[.3rem]" :bg="accent ? 'primary' : 'neutral-thertiary'" font-bold text-white
    hover:bg-primary
    @click="$emit('click', $event)"
>
  <slot />
</component>
</template>

<script lang="ts" scoped setup>

defineProps<{
  href?: string,
  accent?: boolean
}>()

defineEmits(['click'])

</script>
