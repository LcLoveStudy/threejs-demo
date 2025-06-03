<template>
  <div
    class="w-full h-[50vh] rounded-lg overflow-hidden bg-[rgba(30,41,59,0.5)] hover:shadow-white-rounded-lg duration-500"
  >
    <img src="" class="h-[50%]" />
    <div class="p-6 h-[50%] flex flex-col justify-between">
      <div>
        <h1 class="text-2xl font-bold example_title">{{ exampleInfo.name }}</h1>
        <div class="color-[#CBD5E1] text-sm mt-2">{{ exampleInfo.description }}</div>
      </div>
      <div class="flex justify-center mt-4">
        <button class="preview-btn" @click="toPreviewPage">查看演示</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ExampleItemType } from '@/types/dashboard'
import type { PropType } from 'vue'
import { useRouter } from 'vue-router'

const { exampleInfo } = defineProps({
  exampleInfo: {
    type: Object as PropType<ExampleItemType>,
    required: true,
  },
})

const router = useRouter()

/** 去演示页面 */
const toPreviewPage = () => {
  router.push({
    path: '/preview',
    query: {
      name: exampleInfo.name,
    },
  })
}
</script>

<style lang="less" scoped>
.example_title {
  background:
    linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    linear-gradient(90deg, #818cf8 0%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.preview-btn {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.001), rgba(0, 0, 0, 0.001)), #4f46e5;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.001), rgba(0, 0, 0, 0.001)), #6366f1;
  }
  &:active {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.001), rgba(0, 0, 0, 0.001)), #4f46e5;
  }
}
</style>
