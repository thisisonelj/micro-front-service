import { ref } from "vue";
const useButtonInfo = () => {
  const num = ref(0);
  const increaseNums = () => {
    num.value++;
  };
  const decreaseNums = () => {
    num.value--;
  };
  return {
    num,
    increaseNums,
    decreaseNums,
  };
};
const useInputInfo = () => {
  const num = ref(1);
  const chenfaNums = () => {
    num.value = num.value * 2;
  };
  const chufaNums = () => {
    num.value = num.value / 2;
  };
  return {
    num,
    chenfaNums,
    chufaNums,
  };
};
export default {
  useButtonInfo,
  useInputInfo,
};
