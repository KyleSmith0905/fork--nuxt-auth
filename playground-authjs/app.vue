<script setup lang="ts">
import { useAuth, useRoute } from '#imports'

const { data, status, lastRefreshedAt, signIn, signOut, getSession } = useAuth()

const route = useRoute()
</script>

<template>
  <div>
    <h3>Authentication Overview</h3>
    <p>
      See all available authentication & session information below. Navigate to different sub-pages to test out the app.
    </p>
    <pre>Status: {{ status }}</pre>
    <pre>Data: {{ data || 'no session data present, are you logged in?' }}</pre>
    <pre>Last refreshed at: {{ lastRefreshedAt || 'no refresh happened' }}</pre>
    <hr>
    <h2>Navigation</h2>
    <p>Navigate to different pages below to test out different things:</p>
    <div>
      <nuxt-link to="/api/protected/inline" external>
        -> API endpoint protected inline
      </nuxt-link>
      <br>
      <nuxt-link to="/api/protected/middleware" external>
        -> API endpoint protected middleware
      </nuxt-link>
      <br>
    </div>
    <h2>Actions</h2>
    <p>Take different actions:</p>
    <div>
      <button @click="signIn(undefined, { callbackUrl: '/' })">
        sign in
      </button>
      <br>
      <button @click="signIn('credentials', { callbackUrl: '/', username: 'jsmith', password: 'hunter2' })">
        sign in (credential)
      </button>
      <br>
      <button @click="signIn('github', { callbackUrl: '/' })">
        sign in (github)
      </button>
      <br>
      <button @click="signIn(undefined, { callbackUrl: '/protected/named' })">
        sign in (with redirect to protected page)
      </button>
      <br>
      <button @click="signOut({ callbackUrl: '/signout' })">
        sign out
      </button>
      <br>
      <button @click="getSession({ required: false })">
        refresh session
      </button>
    </div>
    <hr>
    <p>The page content of "{{ route.path }}"</p>
    <NuxtPage />
  </div>
</template>
