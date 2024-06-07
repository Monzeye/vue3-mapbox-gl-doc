---
title: Layers
editLink: true
---

# CustomLayer

自定义图层



## Apis

### Props

| 参数         | 说明                                                  | 类型                       | 默认值     |
| ------------ | ----------------------------------------------------- | -------------------------- | ---------- |
| customLayer?       | CustomLayer                                                  | CustomLayerInterface | - |
| beforeId?    | 图层层级插入此LayerId之后                             | string                     | -          |


### Emits

| 事件名      | 说明               | 参数                                                     |
| ----------- | ------------------ | -------------------------------------------------------- |
| register    | source创建后触发   | (acitions:CreateLayerActions&lt;CustomLayer&gt;,map:Map) |
| click       | 点击元素时触发     | (ev:MapLayerMouseEvent)                                  |
| dblclick    | 双击元素时触发     | (ev:MapLayerMouseEvent)                                  |
| mousedown   | 鼠标按下元素时触发 | (ev:MapLayerMouseEvent)                                  |
| mouseup     | 鼠标抬起元素时触发 | (ev:MapLayerMouseEvent)                                  |
| mousemove   | 鼠标移动元素时触发 | (ev:MapLayerMouseEvent)                                  |
| mouseenter  | 鼠标进入元素时触发 | (ev:MapLayerMouseEvent)                                  |
| mouseleave  | 鼠标离开元素时触发 | (ev:MapLayerMouseEvent)                                  |
| mouseover   | 鼠标移到元素时触发 | (ev:MapLayerMouseEvent)                                  |
| mouseout    | 鼠标移出元素时触发 | (ev:MapLayerMouseEvent)                                  |
| touchstart  | 触摸元素开始时出发 | (ev:MapLayerTouchEvent)                                  |
| touchend    | 触摸元素结束时出发 | (ev:MapLayerTouchEvent)                                  |
| touchcancel | 触摸元素取消时出发 | (ev:MapLayerTouchEvent)                                  |

### Slots

| name | 说明 |
| ---- | ---- |
| 无   | 无   |
