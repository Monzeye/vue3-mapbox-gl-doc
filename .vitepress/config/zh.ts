import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    nav: [
      {
        text: "指南",
        link: "/guide/introduction",
        activeMatch: "^/guide/",
      },
      {
        text: "Hooks",
        link: "/hooks/introduction",
        activeMatch: "^/hook/",
      },
    ],
    sidebar: {
      "/guide": [
        {
          text: "指南",
          items: [
            {
              text: "介绍",
              link: "/guide/introduction.md",
            },
            {
              text: "起步",
              link: "/guide/getting-started.md",
            },
          ],
        },
        {
          text: "组件",
          items: [
            {
              text: "Mapbox",
              link: "/guide/components/mapbox.md",
            },
            {
              text: "Sources",
              link: "/guide/components/sources/geojson.md",
              collapsed: true,
              items: [
                {
                  text: "GeoJsonSource",
                  link: "/guide/components/sources/geojson.md",
                },
                {
                  text: "ImageSource",
                  link: "/guide/components/sources/image.md",
                },
                {
                  text: "RasterDemSource",
                  link: "/guide/components/sources/rasterDem.md",
                },
                {
                  text: "RasterSource",
                  link: "/guide/components/sources/raster.md",
                },
                {
                  text: "VectorTileSource",
                  link: "/guide/components/sources/vectorTile.md",
                },
                {
                  text: "CanvasSource",
                  link: "/guide/components/sources/canvas.md",
                },
                {
                  text: "VideoSource",
                  link: "/guide/components/sources/video.md",
                },
              ],
            },
            {
              text: "Layers",
              link: "/guide/components/layers/symbol.md",
              collapsed: true,
              items: [
                {
                  text: "SymbolLayer",
                  link: "/guide/components/layers/symbol.md",
                },
                {
                  text: "CircleLayer",
                  link: "/guide/components/layers/circle.md",
                },
                {
                  text: "LineLayer",
                  link: "/guide/components/layers/line.md",
                },
                {
                  text: "BackgroundLayer",
                  link: "/guide/components/layers/background.md",
                },
                {
                  text: "FillExtrusionLayer",
                  link: "/guide/components/layers/fillExtrusion.md",
                },
                {
                  text: "FillLayer",
                  link: "/guide/components/layers/fill.md",
                },
                {
                  text: "HeatmapLayer",
                  link: "/guide/components/layers/heatmap.md",
                },
                {
                  text: "HillshadeLayer",
                  link: "/guide/components/layers/hillshade.md",
                },
                {
                  text: "RasterLayer",
                  link: "/guide/components/layers/raster.md",
                },
                {
                  text: "CustomLayer",
                  link: "/guide/components/layers/custom.md",
                },
                {
                  text: "SkyLayer",
                  link: "/guide/components/layers/sky.md",
                },
              ],
            },
            {
              text: "Controls",
              link: "/guide/components/controls/attribution.md",
              collapsed: true,
              items: [
                {
                  text: "AttributionControl",
                  link: "/guide/components/controls/attribution.md",
                },
                {
                  text: "FullscreenControl",
                  link: "/guide/components/controls/fullscreen.md",
                },
                {
                  text: "GeolocateControl",
                  link: "/guide/components/controls/geolocate.md",
                },
                {
                  text: "NavigationControl",
                  link: "/guide/components/controls/navigation.md",
                },
                {
                  text: "ScaleControl",
                  link: "/guide/components/controls/scale.md",
                },
                {
                  text: "CustomControl",
                  link: "/guide/components/controls/custom.md",
                },
              ],
            },
            {
              text: "Image",
              link: "/guide/components/image.md",
            },
            {
              text: "Marker",
              link: "/guide/components/marker.md",
            },
            {
              text: "Popup",
              link: "/guide/components/popup.md",
            },
            {
              text: "Terrain",
              link: "/guide/components/terrain.md",
            },
            {
              text: "Fog",
              link: "/guide/components/fog.md",
            },
            {
              text: "Light",
              link: "/guide/components/light.md",
            },
          ],
        },
      ],
      "/hooks": [
        {
          text: "说明",
          link: "/hooks/introduction.md",
        },
        {
          text: "组件辅助",
          items: [
            {
              text: "useMapbox",
              link: "/hooks/comHook/mapbox.md",
            },
          ],
        },
        {
          text: "事件相关",
          items: [
            {
              text: "useMapEventListener",
              link: "/hooks/event/mapEventListener.md",
            },
            {
              text: "useLayerEventListener",
              link: "/hooks/event/layerEventListener.md",
            },
          ],
        },
        {
          text: "相机动画相关",
          items: [
            {
              text: "useFlyTo",
              link: "/hooks/camera/flyTo.md",
            },
            {
              text: "useJumpTo",
              link: "/hooks/camera/jumpTo.md",
            },
            {
              text: "useChainCamera",
              link: "/hooks/camera/chainCamera.md",
            },
          ],
        },
        {
          text: "地图相关",
          items: [
            {
              text: "useCreateMapbox",
              link: "/hooks/map/createMapbox.md",
            },
            {
              text: "useCreateFog",
              link: "/hooks/map/createFog.md",
            },
            {
              text: "useCreateImage",
              link: "/hooks/map/createImage.md",
            },
            {
              text: "useCreateLight",
              link: "/hooks/map/createLight.md",
            },
            {
              text: "useCreateMarker",
              link: "/hooks/map/createMarker.md",
            },
            {
              text: "useCreatePopup",
              link: "/hooks/map/createPopup.md",
            },
            {
              text: "useCreateTerrain",
              link: "/hooks/map/createTerrain.md",
            },
          ],
        },
        {
          text: "Layer相关",
          items: [],
        },
        {
          text: "Source相关",
          items: [],
        },
        {
          text: "Control相关",
          items: [],
        },
      ],
    },
  },
};
