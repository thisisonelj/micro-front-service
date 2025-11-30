<template>
  <h1>线索服务</h1>
  <LjButton :btn-name="btnNmae" @trigger="clueTrigger"></LjButton>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import commonInfo from '@lj/common'
import LjButton from '@lj/components/src/base/button/lj-button.vue';
commonInfo.utils.testFunc('测试线索模块引用common模块依赖')
const btnNmae=ref<string>('线索按钮')
const clueTrigger=((data) => {
  console.log(`${data.name||'线索'}: ${data.msg||'触发了'}`)
})
</script>
<style scoped></style>
