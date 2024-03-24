<script setup lang="ts">
import { ref } from '#imports'

const currentTime = ref(new Date())
</script>
<template>
  <span>{{ currentTime?.toISOString() }}</span>
</template>
