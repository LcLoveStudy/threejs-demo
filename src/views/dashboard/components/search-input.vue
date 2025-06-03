<template>
  <div class="relative bg-[rgba(30,41,59,0.5)] w-2xs h-12 p-4">
    <img :src="SearchIcon" />
    <input
      class="absolute top-0 left-0 right-0 bottom-0 pl-12 hover:shadow-white-rounded-lg focus:shadow-white-rounded-lg rounded-lg shadow-2xl duration-500"
      placeholder="搜索示例..."
    />
  </div>
</template>

<script setup lang="ts">
import SearchIcon from '@/assets/images/search.svg'
// 搜索框的值
const searchValue = defineModel({
  type: String,
  required: true,
})
</script>
