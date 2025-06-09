<template>
  <div class="relative">
    <el-button
      class="absolute top-2 left-2"
      size="large"
      :icon="Back"
      @click="backHandler"
      type="primary"
      round
      >返回</el-button
    >
    <canvas ref="canvasRef" class="w-[100vw] h-[calc(100vh-64px)]"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { Back } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'
import { initialExamples } from './examples'
import { onMounted, useTemplateRef } from 'vue'
import type { ExampleIdsType } from '@/types/dashboard'
const canvasRef = useTemplateRef('canvasRef')
const route = useRoute()
const router = useRouter()

/** 返回导航 */
const backHandler = () => {
  router.back()
}

onMounted(() => {
  const exampleId = route.query.id as ExampleIdsType
  initialExamples(canvasRef.value, exampleId)
})
</script>
