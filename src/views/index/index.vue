<template>
    <div class="idx">
        <!-- <div class="imgbox">
            <img src="../../assets/slogn.png" alt="" class="slogn">
        </div>
        <div class="title">
            <div class="titlebox"></div>
        </div> -->
        <div class="swiperbox">
            <div class="swiper-container" ref="container">
                <div class="swiper-wrapper">
                    <div v-for="(item,i) in imglist" :key="i" class="swiper-slide" :style="{backgroundImage: `url(${item.img_url})`,backgroundSize: i == 0 ? '80%' : ''}"></div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
        <div class="funbox clearfix">
            <router-link to="/intro" class="fun-item"></router-link>
            <router-link to="/knowledge" class="fun-item"></router-link>
            <router-link to="/entry" class="fun-item"></router-link>
            <router-link to="/range" class="fun-item"></router-link>
        </div>
        <div class="subbox">
            <div class="sublogo"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import axios from 'axios'
export default {
    data(){
        return {
            imglist: [],
            swiper: null
        }
    },
    created(){
        axios.get('/testvote/api.php/Index/banner').then(({data}) => {
            this.imglist = data
            this.$nextTick(() => {
                this.swiper = new Swiper('.swiper-container', {
                spaceBetween: 30,
                autoplay: {
                    delay: 2000
                },
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
        });
            })
        })
    },
    mounted(){
        
    }
}
</script>

<style scoped>
.idx{
    padding-bottom: 50px;
}
.slogn{
    max-width: 78%;
}
.title{
    padding-bottom: 8%; 
}
.imgbox{
    padding: 20% 0 16% 0;
}
.titlebox{
    padding-top: 20%;
    background: url(../../assets/title.png) center center no-repeat;
    background-size: 80%;
}
.fun-item{
    display: inline-block;
    margin-right: 3%;
    font-size: 16px;
    padding-bottom: 8%;
    width: 16%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}
.fun-item:first-child{
    background-image: url(../../assets/desc.png);
}
.fun-item:nth-child(2){
    background-image: url(../../assets/knowledge.png);
}
.fun-item:nth-child(3){
    background-image: url(../../assets/entry.png);
}
.fun-item:nth-child(4){
    background-image: url(../../assets/comp.png);
}
.funbox{
    text-align: center;
    font-size: 0;
    background: url(../../assets/line.png) center top no-repeat;
    padding: 8% 0;
}
.fun-item:last-child{
    margin: 0;
}
.subbox{
    padding-top: 4%;
}
.sublogo{
    padding-top: 7%;
    background: url(../../assets/sublogo.png) center top no-repeat;
    background-size: contain;
}
.swiper-slide{
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}
.swiper-slide:last-child{
    background-image: url(../../assets/slide1.png);
    background-size: 80%;
}
.swiper-slide:nth-child(2){
    background-image: url(../../assets/slide2.png);
}
.swiper-slide:nth-child(3){
    background-image: url(../../assets/slide3.png);
}
.swiper-slide:nth-child(4){
    background-image: url(../../assets/slide4.png);
}
.swiper-button-prev{
    background: url(../../assets/prev.png) center center no-repeat;
    background-size: contain;
}
.swiper-button-next{
    background: url(../../assets/next.png) center center no-repeat;
    background-size: contain;
}
.swiper-slide{
    padding-top: 112%;
}
</style>