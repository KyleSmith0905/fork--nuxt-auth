<script setup lang="ts">
import { definePageMeta } from '#imports'

definePageMeta({ auth: false })
</script>

<template>
  <div>
    <p>
      Server Render Time: <NuxtIsland name="CurrentTime" />
    </p>
    <p>Client Render Time: <ClientOnly><CurrentTime /></ClientOnly></p>
  </div>
</template>
