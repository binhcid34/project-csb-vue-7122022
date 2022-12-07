<template>
    <div class="detail-ship">
        <div class="top-detail">
            <p>Thông tin tàu</p>
            <span @click="handleClickClose">X</span>
        </div>
        <div class="content-detail">
            <div class="content-value-ship" v-for="(value, key) in shipDetail" :key="key" v-if="key != 'ID'">
                <span class="key-value-ship">{{ TypeKeyShip[key] }}:</span>
                <span>{{ value = value.length > 15 ? `${formatString(value)}...` : value }}</span>
            </div>
        </div>
        <div class="footer-detail">
            <div class="btn-footer">
                <div class="btn-search" @click="handleClickClosePopUp('isShowPopupAddReportList')">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div class="btn-bell" @click="handleClickClosePopUp('isShowPopupAddReportList')">
                    <i class="fa-solid fa-bell"></i>
                </div>
                <div class="btn-weather" @click="handleClickClosePopUp('isShowPopupAddReportList')">
                    <i class="fa-solid fa-sun"></i>
                </div>
                <div class="btn-journeys" @click="handleClickClosePopUp('isShowPopupAddReportList')">
                    <i class="fa-solid fa-map-location"></i>
                </div>
                <div class="btn-add" @click="handleClickClosePopUp('isShowPopupAddReportList')">
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>
        </div>
        <div class="popupAddReportList" v-if="isShowPopupAddReportList">
            <div class="top-detail">
                <h6> Thêm tàu vào danh sách giám sát
                </h6>
                <span @click="handleClickClosePopUp('isShowPopupAddReportList')">X</span>
            </div>
            <div class="popup-content">
                <div class="title-popup-content">Chọn danh sách giám sát</div>
                <div class="container-popup-content">
                    <div class="list-report" v-for="listReport in listReports" :key="listReport.id">
                            <input type="checkbox" name="listReport"  :value="listReport.id"/>
                            {{ listReport.value }}
                        </div>
                </div>
                <div class="btn-add" @click="handleAddNewListReport">
                        Thêm
                        <i class="fa-solid fa-plus"></i>
                    </div>
            </div>
        </div>
    </div>

</template>

<script>
import { mapGetters } from "vuex";
import { TypeKeyShip } from "../Constant/EnumTypeKeyShip"
export default {
    components: {

    },
    props: {
        shipDetail: Object
    },
    created() {
        this.listReports = this.$store.state.ListReports
    },
    methods: {
        formatString(string) {
            return string.toString().slice(0, string.length - 12);
        },
        handleClickClose() {
            this.$emit("handleClickClose");
        },
        handleClickClosePopUp(keyBtn) {
            this[keyBtn] = !this[keyBtn]
        }
    },
    data() {
        return {
            TypeKeyShip: TypeKeyShip,
            isShowPopupAddReportList: false,
            listReports: [],
        }
    },
    computed: {
        ...mapGetters(['getDataListReport']),
    }
    
}
</script>

<style>
.detail-ship {
    position: absolute;
    top: 50px;
    left: 50px;
    z-index: 1000;
    height: 420px;
    width: 280px;
    background-color: #fff;
    border-radius: 8px;
    border: #1D83C3 1px solid;
}

.content-detail {
    height: 80%;
    border-bottom: 2px solid #1D83C3;
}

.top-detail {
    height: 32px;
    background-color: #1D83C3;
    text-transform: uppercase;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 12px;
    padding-right: 12px;
}

.top-detail span {
    font-weight: 600;   
    cursor: pointer;
}

.content-value-ship {
    margin-top: 8px;


}

.content-value-ship span {
    padding-left: 8px;
}

.key-value-ship {
    width: 60px;
    text-align: right;
}

.btn-footer i {
    color: #fff;
}

.btn-footer {
    display: flex;
    justify-content: space-around;
    margin-top: 8px;
}

.btn-footer div {
    width: 32px;
    height: 24px;
    border-radius: 8px;
    background-color: #1D83C3;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.popupAddReportList {
    position: absolute;
    top: 50px;
    left: 100px;
    width: 320px;
    height: 160px;
    background-color: #fff;
    border-radius: 8px;
}
.popup-content .btn-add{
    width: 120px;
    background-color: #1D83C3;
    border-radius: 8px;
    color: #fff;
    text-align: center;
    margin-left: 78px;
    cursor: pointer;
}

</style>