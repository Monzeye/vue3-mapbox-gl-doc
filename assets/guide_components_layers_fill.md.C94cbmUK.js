import{_ as t,c as d,o as e,a2 as r}from"./chunks/framework.CzjK-ZDI.js";const y=JSON.parse('{"title":"Layers","description":"","frontmatter":{"title":"Layers","editLink":true},"headers":[],"relativePath":"guide/components/layers/fill.md","filePath":"guide/components/layers/fill.md"}'),a={name:"guide/components/layers/fill.md"},o=r('<h1 id="fillextrusionlayer" tabindex="-1">FillExtrusionLayer <a class="header-anchor" href="#fillextrusionlayer" aria-label="Permalink to &quot;FillExtrusionLayer&quot;">​</a></h1><p>填充图层</p><h2 id="apis" tabindex="-1">Apis <a class="header-anchor" href="#apis" aria-label="Permalink to &quot;Apis&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>id?</td><td>LayerId</td><td>string</td><td>随机生成</td></tr><tr><td>source?</td><td>数据源(组件放入Source组件中会自动引用)</td><td>SourceId|Object</td><td>-</td></tr><tr><td>style?</td><td>样式</td><td>SymbolLayout &amp; SymbolPaint</td><td>官方默认值</td></tr><tr><td>renderingMode?</td><td>渲染模式</td><td>string</td><td>-</td></tr><tr><td>slotName?</td><td>slot 层级</td><td>&#39;bottom&#39;</td><td>&#39;middle&#39;</td></tr><tr><td>filter?</td><td>过滤项</td><td>Expression</td><td>[&#39;all&#39;]</td></tr><tr><td>sourceLayer?</td><td>当source type为vector(VectorTileSource组件)时需要传入</td><td>string</td><td>-</td></tr><tr><td>beforeId?</td><td>图层层级插入此LayerId之后</td><td>string</td><td>-</td></tr><tr><td>metadata?</td><td>用于跟踪层的任意属性</td><td>object</td><td>-</td></tr><tr><td>visible?</td><td>图层是否显示</td><td>boolean</td><td>true</td></tr><tr><td>minzoom?</td><td>图层显示的最小层级</td><td>number</td><td>0</td></tr><tr><td>maxzoom?</td><td>图层显示的最大层级</td><td>number</td><td>24</td></tr></tbody></table><h3 id="emits" tabindex="-1">Emits <a class="header-anchor" href="#emits" aria-label="Permalink to &quot;Emits&quot;">​</a></h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>register</td><td>source创建后触发</td><td>(acitions:CreateLayerActions&lt;FillExtrusionLayer&gt;,map:Map)</td></tr><tr><td>click</td><td>点击元素时触发</td><td>(ev:MapLayerMouseEvent)</td></tr><tr><td>dblclick</td><td>双击元素时触发</td><td>(ev:MapLayerMouseEvent)</td></tr><tr><td>mousedown</td><td>鼠标按下元素时触发</td><td>(ev:MapLayerMouseEvent)</td></tr><tr><td>mouseup</td><td>鼠标抬起元素时触发</td><td>(ev:MapLayerMouseEvent)</td></tr><tr><td>mousemove</td><td>鼠标移动元素时触发</td><td>(ev:MapLayerMouseEvent)</td></tr><tr><td>mouseenter</td><td>鼠标进入元素时触发</td><td>(ev:MapLayerMouseEvent)</td></tr><tr><td>mouseleave</td><td>鼠标离开元素时触发</td><td>(ev:MapLayerMouseEvent)</td></tr><tr><td>mouseover</td><td>鼠标移到元素时触发</td><td>(ev:MapLayerMouseEvent)</td></tr><tr><td>mouseout</td><td>鼠标移出元素时触发</td><td>(ev:MapLayerMouseEvent)</td></tr><tr><td>touchstart</td><td>触摸元素开始时出发</td><td>(ev:MapLayerTouchEvent)</td></tr><tr><td>touchend</td><td>触摸元素结束时出发</td><td>(ev:MapLayerTouchEvent)</td></tr><tr><td>touchcancel</td><td>触摸元素取消时出发</td><td>(ev:MapLayerTouchEvent)</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>无</td><td>无</td></tr></tbody></table>',9),s=[o];function i(l,n,h,u,c,m){return e(),d("div",null,s)}const b=t(a,[["render",i]]);export{y as __pageData,b as default};
