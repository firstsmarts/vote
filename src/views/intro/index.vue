<template>
    <div class="ibox">
        <div class="iwraper">
            <img src="../../assets/ititle.png" alt="" class="ititle">
        </div>
        <div class="intro">
            <img src="../../assets/indes.png" alt="" class="ititle">
        </div>
        <div class="descbox">
            <div class="textbox">
                <img src="../../assets/desctext.png" alt="" class="desctext">
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
.ibox{
    padding-bottom: 50px;
}
.iwraper{
    padding: 14% 0 5% 0;
}
.textbox{
    display: inline-block;
    width: 80%;
}
.ititle{
    max-width: 80%;
}
.intro{
    padding: 6% 0;
}
.descbox{
    margin: 0 auto;
    background-size: contain;
    padding-bottom: 10%;
}
.desctext{
    width: 100%;
}
.back{
    width: 30%;
}
</style>
