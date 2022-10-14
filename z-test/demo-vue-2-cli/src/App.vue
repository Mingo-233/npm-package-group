<template>
  <!-- <p>Mouse: {{ x }}x{{ y }}</p> -->
  <p>
    vue-2
    <SFCButton></SFCButton>
  </p>
</template>

<script>
// import { useMouse } from "@vue-demi/use-mouse";
// console.log(useMouse);
// import { JSXButton } from "@mingo_789/vite-admix/dist/smarty-ui.mjs";
// import { JSXButton } from "../../../vite-admix/dist/smarty-ui.mjs";
import SFCButton from "../../../vite-admix/dist/v2/index.es";
export default {
  name: "App",
  components: {
    SFCButton,
  },
  // setup() {
  //   return useMouse();
  // },
};
</script>
