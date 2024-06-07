---
title: useMapbox
editLink: true
---

# useMapbox

\<Mapbox /\>组件辅助 hook，用于获取`mapbox-gl`实例、方法。

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
const [register, { getMapInstance, getCenter }] = useMapbox();

</script>
```

```vue [Js]
<template>
  <Mapbox :options="options" :register="register"></Mapbox>
</template>
<script setup>
import { useMapbox } from "vue3-mapbox-gl";
const options = {
  style: "mapbox://styles/mapbox/satellite-v9",
  center: [107.132759, 34.784138],
  zoom: 4,
  // accessToken: 'pk.xxxxxx',
};
const [register, { getMapInstance, getCenter }] = useMapbox();

</script>
```

:::
