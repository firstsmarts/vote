<template>
    <div class="entry">
        <div class="titlebox">
            <img src="../../assets/vote.png" alt="" class="title">
        </div>
        <div class="searchbox">
            <div class="search clearfix">
                <div class="inputbox">
                    <input type="text" placeholder="输入选手编号或姓名" v-model="name" class="search-input">
                </div>
                <span class="searchbtn" @click="getList"></span>
            </div>
        </div>
        <div class="swiperbox">
            <router-link :to="`/detail/${item.id}`" class="user-item" v-for="(item,i) in userlist" :key="i">
                <div class="image-wraper">
                    <div class="imgbox" :style="{backgroundImage: `url(${item.img_url})`}"></div>
                </div>
                <div class="name"><span v-text="item.number"></span>号 <span v-text="item.name"></span></div>
            </router-link>
        </div>
        <router-link to="/" class="backbtn">
            <img src="../../assets/back.png" alt="" class="back">
        </router-link>
    </div>
</template>

<script>
import Swiper from 'swiper'
import axios from 'axios'
export default {
    data(){
        return {
            name: '',
            userlist: []
        }
    },
    created(){
        this.getList()
    },
    mounted(){
    },
    methods:{
        getList(){
            axios.get(`/testvote/api.php/Index/xlist?name=${this.name}`).then(({data}) => {
                console.log(data)
                this.userlist = data
            })
        }
    }
}
</script>

<style scoped>
.entry{
    padding-bottom: 50px;
}
.titlebox{
    padding: 14% 0 0 0;
}
.title{
    max-width: 80%;
}
.back{
    width: 30%;
}
.searchbox{
    padding: 7% 0;
}
.search{
    width: 64%;
    margin: 0 auto;
}
.searchbtn{
    width: 14%;
    padding-top: 8%;
    background: url(../../assets/search.png) center center no-repeat;
    background-size: cover;
    vertical-align: top;
    float: right;
}
.inputbox{
    padding-top: 8%;
    width: 80%;
    position: relative;
    float: left;
}
.search-input{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding: 0;
    border-radius: 4px;
    padding: 0 10px;
    box-sizing: border-box;
    border: none;
    outline: none;
}
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #26236a;
}
::-moz-placeholder { /* Firefox 19+ */
  color: #26236a;
}
:-ms-input-placeholder { /* IE 10+ */
  color: #26236a;
}
:-moz-placeholder { /* Firefox 18- */
  color: #26236a;
}
.swiperbox{
    width: 64%;
    margin: 0 auto;
}
.image-wraper{
    padding: 2px;
    border: 2px solid #fff;
}
.name{
    line-height: 24px;
    margin-top: 4px;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    background: #fff;
    color: #26236a;
    font-weight: 700;
    text-decoration: none;
}
.backbtn{
    display: block;
    padding-top: 16%;
}
.imgbox{
    width: 100%;
    padding-top: 128%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
.user-item{
    float: left;
    width: 48%;
    padding-bottom: 4%;
}
.user-item:nth-child(2n){
    margin-left: 4%;
}
</style>
