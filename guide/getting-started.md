---
title: 起步
editLink: true
---

# 安装/使用

### 安装

::: code-group

```bash [Yarn]
$ yarn add mapbox-gl vue3-mapbox-gl
```

```bash [Npm]
$ npm install mapbox-gl vue3-mapbox-gl
```
:::

vue3-mapbox-gl会跟进官方最新版本，当安装mapbox-gl低版本时，会导致高版本的一些功能无法使用，所以推荐安装最新版本

### 使用

入口
::: code-group

```ts [Ts]
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "vue3-mapbox-gl/dist/style.css";
import mapboxVue from "vue3-mapbox-gl";
const app = createApp(App);
/**
 * option : { accessToken?: string }
 */
app.use(mapboxVue, {
  accessToken: "pk.xxxxxxx",
});
app.mount("#app");
```

```js [Js]
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "vue3-mapbox-gl/dist/style.css";
import mapboxVue from "vue3-mapbox-gl";
const app = createApp(App);
app.use(mapboxVue, {
  accessToken: "pk.xxxxxxx",
});
app.mount("#app");
```

:::

对于 ts 项目需要在 tsconfig.json 里面配置 types

```json
{
  "compilerOptions": {
    "types": [
      // ...
      "vue3-mapbox-gl/global"
    ]
  }
}
```

组件

::: code-group

```vue [Ts]
<template>
  <Mapbox :options="options" :register="register"></Mapbox>
</template>
<script lang="ts" setup>
import { useMapbox } from "vue3-mapbox-gl";
import type { MapboxOptions } from "mapbox-gl";

const options: Partial<MapboxOptions> = {
  style: "mapbox://styles/mapbox/satellite-v9",
  center: [107.132759, 34.784138],
  zoom: 4,
  // accessToken: 'pk.xxxxxx',
};

const [register, { getMapInstance }] = useMapbox();
</script>
```

```vue [Js]
<template>
  <Mapbox :options="options" :register="register"></Mapbox>
</template>
<script lang="ts" setup>
import { useMapbox } from "vue3-mapbox-gl";

const options = {
  style: "mapbox://styles/mapbox/satellite-v9",
  center: [107.132759, 34.784138],
  zoom: 4,
  // accessToken: 'pk.xxxxxx',
};

const [register, { getMapInstance }] = useMapbox();
</script>
```

:::
