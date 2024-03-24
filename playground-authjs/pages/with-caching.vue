<script setup lang="ts">
import { computed, definePageMeta, onMounted, ref } from '#imports'
import CurrentTime from '~/components/CurrentTime.vue'

const cachedAt = ref(new Date())
const enteredAt = ref<Date | undefined>(undefined)

const cachedAtTime = computed(() => cachedAt.value.getTime())
const enteredAtTime = computed(() => (enteredAt.value?.getTime() ?? 0))

const relativeTimeFormat = ref(new Intl.RelativeTimeFormat('en'))

onMounted(() => {
  enteredAt.value = new Date()
})

definePageMeta({ auth: false })
</script>

<template>
  <div>
    <p v-if="cachedAtTime < enteredAtTime - 5000">
      This page was cached
      {{ relativeTimeFormat.format((cachedAtTime / 60000) - (enteredAtTime / 60000), 'minutes') }}.
    </p>
    <p v-else>
      This page was not cached.
    </p>
    <p>
      Cached At:
      <NuxtIsland name="cached-at">
        <CurrentTime />
      </NuxtIsland>.
    </p>
    <p>Created At: <ClientOnly><CurrentTime /></ClientOnly>.</p>
  </div>
</template>
