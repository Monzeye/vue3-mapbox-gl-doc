---
title: 起步
editLink: true
---

# 安装/使用

确认系统中已安装 node，通过 npm 或者 yarn 等包管理器来进行安装

### 安装

::: code-group

```bash [Yarn]
$ yarn add vue3-mapbox-gl
```

```bash [Npm]
$ npm install vue3-mapbox-gl
```

:::

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
