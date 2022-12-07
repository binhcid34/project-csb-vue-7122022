<template>
  <div style="height: 100%; width: 100%">
    <div>
      <!-- <p>First marker is placed at {{ withPopup.lat }}, {{ withPopup.lng }}</p> -->
      <!-- <p>Center is at {{ currentCenter }} and the zoom is: {{ currentZoom }}</p> -->
      <!-- <button @click="showLongText">
        Toggle long popup
      </button>
      <button @click="showMap = !showMap">
        Toggle map
      </button> -->
    </div>
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 100%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-marker :lat-lng="withPopup">
        <l-popup>
          <div @click="innerClick">
            I am a popup
            <p v-show="showParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
              Donec finibus semper metus id malesuada.
            </p>
          </div>
        </l-popup>
      </l-marker>
      <l-marker :lat-lng="withTooltip">
        <l-tooltip :options="{ permanent: true, interactive: true }">
          <div @click="innerClick">
            I am a tooltip
            <p v-show="showParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
              Donec finibus semper metus id malesuada.
            </p>
          </div>
        </l-tooltip>
      </l-marker>
        <l-icon
          :icon-size="dynamicSize"
          :icon-anchor="dynamicAnchor"
          icon-url="../assets/ship.png" >
</l-icon>
    </l-map>

  </div>
</template>

<script>
import { latLng } from "leaflet";
import L from 'leaflet';
export default {
  name: "Example",
  components: {

  },
  data() {
    return {
      zoom: 5,
      center: latLng(18.938523523446285, 107.36836203710838),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(18.938523523446285, 107.36836203710838),
      withTooltip: latLng(18.938523523446285, 107.368362037108383),
      currentZoom: 11.5,
      currentCenter: latLng(18.938523523446285, 107.36836203710838),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true,
      DataShip: [],
      icon: L.icon({
        iconUrl: "../assets/ship.png",
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      }),
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    }
  },
  created() {
  },
  computed: {
    dynamicSize () {
      return [this.iconSize, this.iconSize * 1.15];
    },
    dynamicAnchor () {
      return [this.iconSize / 2, this.iconSize * 1.15];
    }
  }
};
</script>