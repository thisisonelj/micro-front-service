import Input from "./input.vue";
import { INPUT } from "@example/constants";
console.log(INPUT);
import { withInstall } from "@example/utils";

// 通过 withInstall 方法给 Input 添加了一个 install 方法
const ELInput = withInstall(Input);

// 可以通过 app.use 来使用，也可以通过 import 方式单独使用
export default ELInput;
export * from "./input";
