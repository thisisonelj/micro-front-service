<template>
    <ElButton @click="triggerInfo">{{ btnName }}</ElButton>
</template>
<script lang="ts" setup>
import { ref ,defineProps,defineEmits} from 'vue'
import {ElButton} from 'element-plus'
interface btnTriggerInfo{
  name:string,
  msg:string
}
const props=defineProps<{
   btnName:string
}>()
const emit = defineEmits<{
  (e: 'trigger',info:btnTriggerInfo ): void
}>()
const triggerInfo=(() => {
  emit('trigger',{name:'lj',msg:'按钮点击事件'})
})
</script>
<style lang="scss" scoped></style>
