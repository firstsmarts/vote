<template>
    <div class="knowledge">
        <div class="titlebox">
            <img src="../../assets/knowledge-title.png" alt="" class="title">
        </div>
        <div class="datebox">
            <div class="date-item">
                <div class="date-title begin"></div>
                <p class="date">2018年10月10日10:00</p>
            </div>
            <div class="date-item">
                <div class="date-title end"></div>
                <p class="date">2018年10月19日23:59</p>
            </div>
            <div class="date-item">
                <div class="date-title rule"></div>
                <p class="date">每个微信号每天能投10票，每天可为同一选手投1票。票数需为真实，有刷票情况一经核实，将取消刷票的票数！</p>
            </div>
        </div>
        <router-link to="/" class="backbtn">
            <img src="../../assets/back.png" alt="" class="back">
        </router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.knowledge{
    padding-bottom: 50px;
}
.titlebox{
    padding: 14% 0 14% 0;
}
.title{
    max-width: 100%;
}

.date-title.end{
    background-image: url(../../assets/end.png);
}
.date-title.begin{
    background-image: url(../../assets/begin.png);
}
.date-title.rule{
    background-image: url(../../assets/rule.png);
}
.date-title{
    width: 28%;
    padding-top: 8%;
    background-size: contain;
    position: relative;
    background-position: center center;
    background-repeat: no-repeat;
    font-size: 15px;
}
.datebox{
    padding: 0 10% 10% 10%;
    margin: 0 auto;
    
}
.date{
    text-align: left;
    line-height: 32px;
    color: #fff;
    padding-left: 16%;
}
.date-item{
    padding-bottom: 3%;
}
.label{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    line-height: 100%;
}
.back{
    width: 30%;
}
</style>
