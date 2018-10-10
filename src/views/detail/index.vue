<template>
    <div class="detail">
        <div class="advbox">
            <img src="../../assets/adv.png" alt="" class="adv">
        </div>
        <div class="infobox clearfix">
            <div class="userinfo">
                <p>姓名：<span v-text="name"></span></p>
                <p>职位：<span v-text="position"></span></p>
            </div>
            <a href="/testdist" class="backbtn">返回</a>
        </div>
        <div class="subbox">
            <div class="avatarbox clearfix">
                <div class="item avatar">
                    <div class="avatar-wraper">
                        <img :src="avatar" alt="" >
                    </div>
                </div>
                <div class="item intro">
                    <div class="textbox">
                        <p>个人简介</p>
                        <p v-text="desc"></p>
                    </div>
                </div>
            </div>
            <div class="videobox">
                <!-- <video :src="url" class="video"></video> -->
                <iframe frameborder="0" :src="url" class="iframe" allowFullScreen="true"></iframe>
            </div>
            <div class="votebox">
                <div class="voteitem count"><span v-text="num"></span>票</div>
                <div class="voteitem dovote" @click="dovote"></div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            name: '',
            position: '',
            desc: '',
            avatar: '',
            num: 0,
            url: '',
            creatTime: 0,
            endTime: 0
        }
    },
    created(){
        let {params:{id}} = this.$route
        axios.get(`/testvote/api.php/Index/detail?id=${id}`).then(({data}) => {
              console.log(data)
              this.name = data.name
              this.position = data.position
              this.desc = data.describe
              this.avatar = data.img_url
              this.num = data.num
              this.creatTime = data.create_time
              this.endTime = data.end_time
              this.url = data.url
              this.ip = data.ip_url
        })
        
    },
    methods: {
        dovote(){
            let cur = (new Date()).getTime()
            
            let uuid = localStorage.getItem('uuid') || this.guid()
            // return
            
            if( cur > (new Date(this.endTime)).getTime() ){
                alert('活动已结束')
                return
            }else if (cur < (new Date(this.creatTime)).getTime()){
                alert('活动未开始')
                return
            }
            let {params:{id}} = this.$route
            axios.get(`/testvote/api.php/Index/vote?id=${id}&ip_url=${uuid}`).then(({data:{msg}}) => {
                alert(msg)
            })
        },
        guid() {    
            let uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {        
                var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8) 
                return v.toString(16)
            })
            localStorage.setItem('uuid',uuid)
            return uuid
        },
        back(){
            history.go(-1)
        }
    }
}
</script>
<style scoped>
.detail{
    padding-bottom: 50px;
}
.adv{
    max-width: 100%;
}
.advbox{
    padding: 3.3% 0;
}
.infobox{
    min-height: 60px;
    background: url(../../assets/infobg.png) center center no-repeat;
    background-size: cover;
    box-sizing: border-box;
    padding: 10px 5% 10px 10%;
    position: relative;
}
.userinfo{
    float: left;
    margin-right: 60px;
    text-align: left;
    line-height: 20px;
}
.userinfo p{
    color: #26236a;
    font-weight: 700;
    font-size: 14px;
    text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
}
.backbtn{
    position: absolute;
    width: 54px;
    line-height: 26px;
    height: 26px;
    background: #26236a;
    color: #fff;
    border-radius: 6px;
    font-size: 14px;
    top: 17px;
    right: 5%;
}
.subbox{
    padding: 10% 10% 0 10% ;
}
.avatar{
    padding: 2px;
    float: left;
    border: 2px solid #fff;
}
.intro{
    float: right;
    border: 2px solid transparent;
    padding: 2px;
    background: rgba(255,255,255,.3);
}
.item{
    width: 48%;
    position: relative;
    padding-top: 62%;
    box-sizing: border-box;
}
.avatar-wraper{
    position: absolute;
    left: 2px;
    top: 2px;
    right: 2px;
    bottom: 2px;
}
.avatar img{
    max-width: 100%;
    height: 100%;
}
.textbox{
    position: absolute;
    left: 4px;
    top: 4px;
    right: 4px;
    bottom: 4px;
    border: 1px solid #2c2364;
    padding: 10px;
    text-align: left;
    font-size: 12px;
    line-height: 20px;
    color: #fff;
    overflow-y: auto;
}
.videobox{
    padding-top: 56%;
    margin-top: 10px;
    border: 2px solid #fff;
    position: relative;
}
.votebox{
    text-align: center;
    padding-top: 20px;
}
.voteitem{
    display: inline-block;
    vertical-align: top;
}
.count{
    color: #242661;
    height: 26px;
    line-height: 26px;
    padding: 0 16px;
    background: #fff;
}
.dovote{
    width: 72px;
    height: 26px;
    background: url(../../assets/dovote.png) center center no-repeat;
    background-size: cover;
    margin-left: 30px;
}
.iframe{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
</style>
