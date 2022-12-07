<template>
    <div id="app" :key="keyChangeMap">
      <l-map :zoom="6" :center="[18, 107]" style="height: calc(100vh - 64px); width: 100%" :data="mapData">
        <l-tile-layer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
          attribution="&copy; <a href='http://osm.org/copyrighte'>OpenStreetMap</a> contributors"
        />
        <v-marker-cluster>
          <l-marker
            v-for="(ship) in mapData"
            :icon="defaultIcon"
            :lat-lng="[ship.LatShip, ship.MerShip + 2]"
            :key="ship.ID"
            @click="handleClickMarker(ship)"
            
          >
          <l-tooltip>{{popupDetailShip(ship)}}</l-tooltip>
          </l-marker>
        </v-marker-cluster>
      </l-map>
      <DetailShip 
        v-if="isShowDetailShip"
        :shipDetail="shipSelected"
        @handleClickClose="closePopup"
      />
    </div>
  </template>
  
  <script>
  import { LMap, LTileLayer, LMarker, LTooltip } from "vue2-leaflet";
  import L from "leaflet";
  import Vue2LeafletMarkerCluster from "vue2-leaflet-markercluster";
  import "../assets/leaflet.css";
  import "../assets/MarkerCluster.css";
  import "../assets/MarkerCluster.Default.css";
  import icon from "../assets/ship.png";
  import DetailShip from "../views/DetailShip.vue"
import { mapGetters } from "vuex";
  export default {
    name: "App",
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LTooltip,
      DetailShip,
      "v-marker-cluster": Vue2LeafletMarkerCluster
    },
    data() {
      return {
        mapData : [],
        defaultIcon: L.icon({
          iconUrl: icon,
          iconSize: [26, 42 ],
          iconAnchor: [13, 42],
          shadowSize: [41, 41],
          shadowAnchor: [13, 41],
          keyChangeMap: 1,
        }),
        isShowDetailShip: false,
        shipSelected: []
      };
    },
    created() {
      this.mapData = this.$store.state.DataShips;
    },
    computed: {
      ...mapGetters(['getDataShips']),
    },
    methods: {
      popupDetailShip(shipDetail){
        shipDetail
        return `Thông tin tàu: \n Tên tàu: ${shipDetail.NameShip}
      \nHô Hiệu: \n IMO: ${shipDetail.IMO}`;
      },
      changeMap() {
        this.mapData = this.$store.state.DataShips;
        this.keyChangeMap ++;

      },

      handleClickMarker(ship) {
        var me = this;
        me.isShowDetailShip = true;
        me.shipSelected = ship;
      },
      closePopup() {
        this.isShowDetailShip = false;
      }
      
    },
    props:{
    }
   
  };
  </script>
  
<style>
#app{
  position: relative;
}
</style>