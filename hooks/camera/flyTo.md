---
title: useFlyTo
editLink: true
---

# useFlyTo

::: code-group

```vue [Ts]
<template>
  <Mapbox :options="options" :register="register"></Mapbox>
</template>
<script lang="ts" setup>
import { useMapbox, useFlyTo } from "vue3-mapbox-gl";
import type { MapboxOptions } from "mapbox-gl";
const options: Partial<MapboxOptions> = {
  style: "mapbox://styles/mapbox/satellite-v9",
  center: [107.132759, 34.784138],
  zoom: 4,
  // accessToken: 'pk.xxxxxx',
};
const [register, { getMapInstance }] = useMapbox();
const { flyTo } = useFlyTo(getMapInstance);
flyTo({
  center: [138.73036, 35.36197],
  zoom: 10,
  speed: 0.5,
  curve: 1,
});
</script>
```

```vue [Js]
<template>
  <Mapbox :options="options" :register="register"></Mapbox>
</template>
<script setup>
import { useMapbox, useFlyTo } from "vue3-mapbox-gl";
const options = {
  style: "mapbox://styles/mapbox/satellite-v9",
  center: [107.132759, 34.784138],
  zoom: 4,
  // accessToken: 'pk.xxxxxx',
};
const [register, { getMapInstance }] = useMapbox();
const { flyTo } = useFlyTo(getMapInstance);
flyTo({
  center: [138.73036, 35.36197],
  zoom: 10,
  speed: 0.5,
  curve: 1,
});
</script>
```

:::
