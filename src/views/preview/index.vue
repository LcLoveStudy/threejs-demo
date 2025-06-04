<template>
  <canvas ref="canvasRef" class="w-[100vw] h-[calc(100vh-64px)]"></canvas>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { initialExamples } from './examples'
import { onMounted, useTemplateRef } from 'vue'
import type { ExampleIdsType } from '@/types/dashboard'
const canvasRef = useTemplateRef('canvasRef')
const route = useRoute()

onMounted(() => {
  const exampleId = route.query.id as ExampleIdsType
  initialExamples(canvasRef.value, exampleId)
})
</script>
