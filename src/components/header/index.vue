<template>
  <div class="h-16 flex items-center justify-between px-8">
    <div class="flex items-center gap-4">
      <img :src="Logo" alt="" />
      <h1 class="text-2xl font-bold">THREE.JS 展示中心</h1>
    </div>
    <div>
      <img @click="toGithubPage" :src="GithubLogo" class="hover:cursor-pointer w-6 h-6" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from '@/assets/images/three.svg'
import GithubLogo from '@/assets/images/github.png'

/** 去github仓库 */
const toGithubPage = () => {
  window.open('https://github.com/LcLoveStudy/threejs-demo')
}
</script>
