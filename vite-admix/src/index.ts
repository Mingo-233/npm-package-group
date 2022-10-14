import { createApp } from "vue-demi";
// import entry from "./entry";
// import SButton from "./button";

console.log("zhixing?");

import SFCButton from "./button/SFCButton.vue";
// import unoButton from "./button/unoButton";
// app.use(entry);

// const app = createApp(SButton);
// app.mount("#app");

createApp(SFCButton)
  //     {
  //   template: `
  //             <div>
  //                 <uno-Button>普通按钮</uno-Button>
  //             </div>
  //         `,
  // }
  .mount("#app");
