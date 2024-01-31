<template>
  <div id='map'>
    <l-map ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]" :use-global-leaflet="false">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>

      <!-- Add an LMarker for Paris -->
      <l-marker :lat-lng="[48.8566, 2.3522]"></l-marker>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      zoom: 12, // You may adjust the zoom level as needed
    };
  },
};
</script>

<style>
#map{
  height: 50vh;
  width: 100vw;
}
</style>
  