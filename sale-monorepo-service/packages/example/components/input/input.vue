<template>
  <div>
    <input v-model="inputValue" @change="triggerInfo" />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import usehooks from "@example/hooks";
const { useInputInfo } = usehooks;
useInputInfo();
const inputValue = ref();
const triggerInfo = () => {
  useInputInfo().chenfaNums();
  console.log(useInputInfo().num.value);
};
</script>
<!-- <style lang="scss" scoped>
// @import "../../styles/common.scss";
// @import "../../styles/input.scss";
</style> -->
