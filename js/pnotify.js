import { alert, defaultModules, notice, error, info, success } from "@pnotify/core/dist/PNotify.js";
import * as PNotifyMobile from "@pnotify/mobile";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

defaultModules.set(PNotifyMobile, {});

// alert({
//   text: 'Notice me, senpai!',
// });

const myNotice = notice({
  title: "Regular Notice",
  text: "Check me out! I'm a notice.",
});

const myCustomButton = notice({
  title: "Custom Button Icons Notice",
  text: "Check me out! My sticker and close buttons have custom icons!",
  hide: false,
  icons: {
    // prefix: PNotify.defaults.icons,

    closer: "fas fa-bomb",
    sticker: "fas",
    stuck: "fa-hourglass",
    unstuck: "fa-anchor",
  },
});

const myError = error({
    text: 'Notice me, senpai!'
})

const infoNotice = info({
    text: 'Notice me, senpai!'
})

const successNotice = success({
    text: 'Notice me, senpai!'
})