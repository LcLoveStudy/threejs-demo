<template>
  <div class="mt-8">
    <!-- 过滤栏 -->
    <div class="flex justify-end px-8">
      <search-input v-model="searchValue" />
    </div>
    <!-- 示例列表 -->
    <div class="grid grid-cols-4 gap-4 h-[80vh] overflow-y-auto p-8">
      <example-box v-for="item in exampleList" :key="item.name" :example-info="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SearchInput, ExampleBox } from './components'
import { ExampleNameEnum, type ExampleItemType } from '@/types/dashboard'
const searchValue = ref('') // 搜索值
// 示例列表
const exampleList = ref<ExampleItemType[]>([
  {
    id: 'solarSystem',
    name: ExampleNameEnum.solarSystem,
    img: '',
    description: '使用three.js 实现的太阳系模型',
  },
  {
    id: 'baseCube',
    name: ExampleNameEnum.baseCube,
    img: '',
    description: '一个简单的立方体',
  },
])
</script>
