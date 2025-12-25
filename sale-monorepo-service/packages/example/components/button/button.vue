<template>
  <div>
    <button @click="triggerInfo">{{ btnName }}</button>
  </div>
</template>
<script lang="ts" setup>
import usehooks from "@example/hooks";
const { useButtonInfo } = usehooks;
useButtonInfo();
const props = defineProps({
  btnName: String,
  clickName: String,
});
const triggerInfo = () => {
  useButtonInfo().increaseNums();
  console.log(useButtonInfo().num.value);
  console.log(`this is ${props.clickName}`);
};
</script>
<!-- <style lang="scss" scoped>
// @import "../../styles/common.scss";
// @import "../../styles/button.scss";
</style> -->
