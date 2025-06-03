<template>
  <div class="w-full h-full bg-black">
    <custom-header />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { CustomHeader } from '@/components'
</script>
