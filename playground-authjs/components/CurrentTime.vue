<script setup lang="ts">
import { ref } from '#imports'

const time = ref<Date | undefined>(new Date())
</script>
<template>
  <span>
    {{ time?.toISOString() }}
  </span>
</template>
