import Button from "./button.vue";
import { BUTTON } from "@example/constants";
console.log(BUTTON);
import { withInstall } from "@example/utils";

// 通过 withInstall 方法给 Button 添加了一个 install 方法
const ElButton = withInstall(Button);

// 可以通过 app.use 来使用，也可以通过 import 方式单独使用
export default ElButton;
export * from "./button";
