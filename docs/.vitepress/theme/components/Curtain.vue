<script lang="ts" setup>
interface Props {
    title?: string
}

withDefaults(defineProps<Props>(), {
    title: '你知道的太多了'
})
</script>


<template>
  <span :title="title" class="heimu" tabindex="-1">
    <slot></slot>
  </span>
</template>

<style scoped>

</style>