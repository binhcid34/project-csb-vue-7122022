<template>
    <div class="left-menu" v-if="isShowLeftMenu">
        <div class="top-menu">
            <div class="title-menu">HỆ THỐNG GIÁM SÁT THÔNG TIN HỖ TRỢ CÔNG TÁC CSB</div>
        </div>
        <div class="content-menu" >
            <input class="input-search" placeholder="Tên tàu, hô hiệu, IMO, MMSI" />
            <div class="filter-menu">
                <div class="filter-type filter-item">
                    <div class="name-filter">
                        1. Loại tàu
                    </div>
                    <div class="group-filter">
                        <div class="value-filter" v-for="shipType in shipTypes" :key="shipType.id">
                        <input type="checkbox" name="shipType" @click="filterShip(shipType.id)" :value="shipType.id"/>
                        {{ shipType.value }}
                    </div>
                    </div>
                </div>
                <div class="filter-weight filter-item">
                    <div class="name-filter">
                        2. Tải trọng
                    </div>
                    <div class="range-filter"> 
                        <RangeSlider
                        :min="0"
                        :max="10000"
                            v-model="range"
                            :tooltip="tooltip"
                        
                            />
                        <div class="format-range">
                            <p class="value-range-start">0</p>
                            <p class="value-range-end">10000</p>
                        </div>
                        <p class="value-range">Tấn</p>
                       <div class="value-range-filter">
                        NHẬP GIÁ TRỊ:  <input type="text" v-model="range[0]"/>  -
                        <input type="text" v-model="range[1]"/>
                       </div>

                    </div>
                </div>
                <div class="filter-port filter-item">
                    <div class="name-filter">
                        3. Cảng biển
                    </div>
                    <div class="group-filter">
                        <div class="value-filter" v-for="portType in portTypes" :key="portType.id">
                            <input type="checkbox" name="portType" @click="filterSource(portType.id)" :value="portType.id"/>
                            {{ portType.value }}
                        </div>
                    </div>
                </div>
                <div class="filter-country filter-item">
                    <div class="name-filter">
                        4. Quốc gia
                    </div>
                    <DxSelectBox
                        :data-source="country"
                        :value="country[0].id"
                        display-expr="value"
                        value-expr="id"
                    />
                </div>
                <div class="filter-dataSource filter-item">
                    <div class="name-filter">
                        5. Nguồn dữ liệu
                    </div>
                    <div class="group-filter-source">
                        <div class="value-filter" v-for="sourceShip in sourceShips" :key="sourceShip.id">
                            <input type="checkbox" name="sourceType"/>
                            {{ sourceShip.value }}
                        </div>
                    </div>
                </div>
                <div class="list-monitor-ships filter-item">
                    <div class="name-filter">
                        6. Danh sách tàu giám sát
                    </div>
                    <div  v-for="listReport in listReports" :key="listReport.id">
                        <div >{{listReport.value}}</div>
                        <DxSelectBox
                       :data-source="listReport.listShips"
                       :placeholder="listReport.value"
                       display-expr="NameShip"
                       value-expr="ID"
                   />
                    </div>
                   
                    <div class="btn-add" @click="handleAddNewListReport">
                        Thêm
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import shipTypes from '../data/shipTypes'
import DxSelectBox from 'devextreme-vue/select-box';
import { mapGetters } from "vuex";
import RangeSlider from 'devextreme-vue/range-slider';


export default {
    components: {
        DxSelectBox,
        RangeSlider
    },
    data() {
        return {
            shipTypes: [
                {
                    id: 1,
                    value: "TÀU ĐÁNH CÁ",
                },
                {
                    id: 2,
                    value: "TÀU CẢNH SÁT",
                },
                {
                    id: 3,
                    value: "TÀU CHỞ HÀNG",
                },
                {
                    id: 4,
                    value: "TÀU CHỞ KHÁCH"
                },
                {
                    id: 5,
                    value: "TÀU KÉO LƯỚI",
                },
                {
                    id: 6,
                    value: "TÀU QUÂN SỰ",
                },
                {
                    id: 7,
                    value: "TÀU KÉO",
                },
                {
                    id: 8,
                    value: "TÀU CHỞ DẦU",
                },
                {
                    id: 9,
                    value: "N/A",
                },

            ],
            portTypes: [
            {
                    id: 1,
                    value: "CẢNG A",
                },
                {
                    id: 2,
                    value: "CẢNG B",
                },
                {
                    id: 3,
                    value: "CẢNG C",
                },
            ],
            tooltip: {
                enabled: true,
                
                showMode: 'always',
                position: 'bottom',
            },
            range: [1000,7000],
            country: [
            {
                    id: 1,
                    value: "Việt Nam",
                },
                {
                    id: 2,
                    value: "Trung Quốc",
                },
                {
                    id: 3,
                    value: "Singapore",
                },
            ],
            sourceShips: [
                {
                    id: 1,
                    value: "GIÁM SÁT TÀU CÁ"
                },
                {
                    id: 2,
                    value: "MARINE TRAFFIC",
                },
                {
                    id: 3,
                    value: "VISHIPEL",
                },
                {
                    id: 4,
                    value: "VESSELFINDER",
                }
            ],
            isShowLeftMenu: true,
            arrayFilterShip: [

            ],
            arrFilterPort:[],
            listReports: [],
        }
    },
    methods: {
        filterShip() {
            var ele = document.getElementsByName('shipType');
            this.arrayFilterShip = [];
            for(let i = 0; i < ele.length; i++) {
                if(ele[i].checked) 
                this.arrayFilterShip.push(ele[i].value)
            }
            this.handleFilter(this.arrayFilterShip, 'TypeShip');
        },

        handleFilter(arr, type) {
            this.$store.dispatch('handleFilterDataShips', {arr, type});
            this.$emit('changeFilter');
        },

        // lọc theo cảng
        filterPort() {
            var ele = document.getElementsByName('portType');
            this.arrFilterPort = [];
            for(let i = 0; i < ele.length; i++) {
                if(ele[i].checked) 
                this.arrFilterPort.push(ele[i].value)
            }
            this.handleFilter(this.arrFilterPort, 'PortShip');
        },

        filterRanger() {
            this.handleFilter(this.range, 'WeightShip');
        },
        // filter theo nguon du lieu
        filterSource() {
            var ele = document.getElementsByName('sourceType');
            var arrFilterSource = [];
            for(let i = 0; i < ele.length; i++) {
                if(ele[i].checked) 
                arrFilterSource.push(ele[i].value)
            }
            // this.handleFilter(this.arrFilterSource, 'SourceShip');
        },
        handleAddNewListReport() {
            this.$store.dispatch('handleCreateNewListReport');
        }
    },
    props: {
        
    },
    watch: {
        range() {
            this.filterRanger();
        }
    },
    created() {
        this.filterRanger();
        this.listReports = this.$store.state.ListReports
        // format listreport
        this.listReports.forEach(listReport => {
            listReport.listShips.unshift({ID:'999', NameShip:'Tất cả'})
        })
    },
    computed: {
        ...mapGetters(['getDataListReport']),
    }
}
</script>
<style>
.left-menu {
    width: 480px;
    border-radius: 8px;
    border: 2px solid #1D83C3;
    position: relative;
    overflow-y: scroll;
}

.top-menu {
    height: 48px;
    background-color: #fff;
    border-bottom: 2px solid #1D83C3;

}

.content-menu {
    padding-top: 12px;
}

.input-search {
    width: 300px;
    border-radius: 8px;
    height: 24px;
    padding-left: 8px;
}

.name-filter {
    text-transform: uppercase;
}
.group-filter{
    margin-top: 12px;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 15px;
}
.value-filter{
    font-size: 11px;
}
.filter-item{
    margin-top: 8px;
}
.range-filter{
    width: 90%;
    height: 108px;
    position: relative;

}
.range-filter input {
    border: none;
    font-size: 16px;
    margin-left: 12px;
    margin-right: 12px;
    width:  48px;
    height: 24px;
    background-color: #828688;
    text-align: center;
    text-transform: uppercase;

}
.dx-dropdownlist-popup-wrapper .dx-list:not(.dx-list-select-decorator-enabled) .dx-list-item-content {
  padding-left: 7px;
  padding-right: 7px;
}

.custom-item {
  position: relative;
  min-height: 30px;
}

.dx-dropdowneditor-input-wrapper .custom-item > img {
  padding-left: 8px;
}

.custom-item .product-name {
  display: inline-block;
  padding-left: 50px;
  text-indent: 0;
  line-height: 30px;
  font-size: 15px;
  width: 100%;
}

.custom-item > img {
  left: 1px;
  position: absolute;
  top: 50%;
  margin-top: -15px;
}

.dx-theme-material #custom-templates .dx-texteditor-buttons-container {
  display: none;
}

.current-value {
  padding: 10px 0;
}

.current-value > span {
  font-weight: bold;
}

.dx-theme-material .dx-selectbox-container .product-name {
  padding-left: 58px;
}
.value-range-filter{
    margin-top: 48px;
}


/* btn rút gọn side bar */
.extension-btn{
    position: absolute;
    height: 24px;
    width: 16px;
    background-color: #fff;
    border:  2px #1D83C3 solid;
    top: 320px;
    left: 367px;
    z-index: 999;
    transition: width 2s, height 2s, transform 2s;
}
.icon{
    height: 24px;
    width: 24px;
}
.icon-drop-down{
    transform: rotate(90deg);
    color: #1D83C3;
    margin-left: -5px;
}

/* Formart Range Slider*/
.format-range{
    display: flex;
    justify-content: space-between;

}
.format-range-end{
    display: flex;
    justify-content: space-between;
}
.value-range{
    position: absolute;
    top: 5px;
    right: -25px;
    font-weight: 600;
}
.group-filter-source{
    margin-top: 8px;
    display: flex;
    flex-direction: column;
}
.group-filter-source .value-filter{
    margin-bottom: 8px;
}
.list-monitor-ships .btn-add{
    width: 120px;
    height: 24px;
    background-color: #1D83C3;
    border-radius: 8px;
    text-align: center;
    padding-top: 8px;
    color: #fff;
    text-transform: uppercase;
    margin-left: 56px;
    margin-top: 12px;
}

</style>

