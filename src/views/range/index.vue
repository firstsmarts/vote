<template>
    <div class="range">
        <div class="titlebox">
            <img src="../../assets/range.png" alt="" class="rangetitle">
        </div>
        <div class="table">
            <div class="theader">
                <div class="inner clearfix">
                    <div class="th">排名</div>
                    <div class="th">编号</div>
                    <div class="th">姓名</div>
                    <div class="th">票数</div>
                </div>
            </div>
            <div class="tbody">
                <div class="bodyinner inner clearfix">
                    <div class="tr" v-for="(item,i) in userlist" :key="i">
                        <div class="td" v-text="i+1"></div>
                        <div class="td" v-text="item.number"></div>
                        <div class="td" v-text="item.name"></div>
                        <div class="td" v-text="item.num"></div>
                    </div>
                </div>
            </div>
        </div>
        <router-link to="/" class="backbtn">
            <img src="../../assets/back.png" alt="" class="back">
        </router-link>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return {
            userlist: []
        }
    },
    created(){
        axios.get(`/testvote/api.php/Index/paihang`).then(({data}) => {
            this.userlist = data
        })
    }
}
</script>
<style scoped>
.range{
    padding-bottom: 50px;
}
.titlebox{
    padding: 14% 0 10% 0;
}
.rangetitle{
    max-width: 80%;
}
.back{
    width: 30%;
}
.theader{
    height: 30px;
    line-height: 30px;
    background: url(../../assets/tablebg.png) center center no-repeat;
    background-size: 100%;
    margin-bottom: 16px;
}
.inner{
    width: 64%;
    margin: 0 auto;
    font-size: 0;
}
.th,.td{
    display: inline-block;
    width: 25%;
    font-size: 15px;
    color: #2c2364;
    font-weight: 700;
}
.td{
    display: inline-block;
    font-size: 14px;
    color: #fff;
}
.tr{
    background: url(../../assets/subline.png) center bottom no-repeat;
    background-size: contain;
    padding: 16px 0 6px 0;
}
.table{
    margin-bottom: 40px;
}
</style>
