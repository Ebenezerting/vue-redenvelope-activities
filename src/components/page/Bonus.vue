<template>
    <div>
        <div style="position:relative;">
            <img class="headerImg1" src="@/assets/img/quanming.png" alt="">
            <div style="position:absolute;right:0;top:3.5%;">
                <div class="headerImg2" style="position:relative;left:">
                    <img src="@/assets/img/btn1.png" alt="">
                    <div style="position:absolute;left:11px;top:5px;">
                        <router-link to="/rule">
                            <span>活动规则</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div style="margin:-3px 0 40px 0;padding:0 20px;background:rgba(116,180,252,1);">
            <div class="Middle">
                <div @click="$router.push('/dashboard')" class="duojinbang">
                    <img class="headerImg3" src="@/assets/img/jinbang.png" alt="">
                </div>
                <div class="jiangjinchi">
                    <img class="headerImg3" src="@/assets/img/jiangjinchi.png" alt="">
                    <div style="position:absolute;left:69%;top:-3px;">
                        <img class="img44" src="@/assets/img/qianwan.png" alt="">
                    </div>
                </div>
                <div class="rizongbang">
                    <span>【第56期】</span>
                    <div style="float:left;width:100%;">
                        <p>— 掏空奖池 —</p>
                        <h2>每日抽奖</h2>
                        <div class="dingwei">
                            <img class="jiangchiimg" src="@/assets/img/bgmoney.png" alt="">
                            <div style="position:absolute;left:0;top:0;">
                                <em>11000000</em>
                            </div>
                        </div>
                        <img class="jiangchiimg2" src="@/assets/img/pool.png" alt="">
                        <img @click="modal3 = true" class="jiangchiimg3" src="@/assets/img/anniu.png" alt="">
                        <h3>每日获取金币达5000，领券后参于瓜分</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div style="position:relative;">
                <img class="footerimg" src="@/assets/img/pool.png" alt="">
                <div class="prity">
                    <div style="position:relative;">
                        <img class="dingweiimg" src="@/assets/img/footerbiaoqian.png" alt="">
                        <div class="mingci">
                            <span>第134名</span>
                        </div>
                    </div>
                </div>
                <div class="user">
                    <p>我与自己流浪</p>
                    <p>积分：1321321</p>
                </div>
            <button @click="guafen">瓜分记录</button>
            </div>
        </div>
        <my-modal v-model="modal2" title="瓜分记录">
            <ul class="jilu">
                <li v-for="(item,index) in Record" :key="index">
                    <div style="position:relative;">
                        <img class="jiuimg" src="@/assets/img/photo.png" alt="">
                        <div class="workent">
                            <span>第1期</span>
                        </div>
                    </div>
                    <div style="float:left;">
                        <p>总奖金池：10000000金币</p>
                        <p>瓜分人数：23265人</p>
                        <p>瓜分奖金：3132</p>
                    </div>
                    <img class="statusimg" src="@/assets/img/guafen.png" alt="">
                </li>
            </ul>
        </my-modal>
        <my-model v-model="modal3">
            <ul class="carveClass">
                <li v-for="(item,index) in Carve" :key="index">
                    <p><span style="color:rgba(255,195,45,1);">●</span>
                        11.21(今天)
                    </p>
                    <p>1231</p>
                </li>
            </ul>
        </my-model>
    </div>
</template>

<script>
import MyModal from '../common/my-modal'
import MyModel from '../common/my-model'
export default {
    components: {
        MyModal,
        MyModel
    },
    data() {
        return {
            Carve: [
                {

                },
                {

                }
            ],
            modal2: false,
            modal3: false,
            Record: [
                {

                },
                {

                }
            ]
        }
    },
    methods: {
        guafen() {
            this.modal2 = true;
        }
    }
}
</script>

<style scoped>
.headerImg1 {
    width: 100%;
}
.headerImg2 img {
    width:131px;
    height:49px;
}
.headerImg2 span {
    font-size:24px;
    font-family:Source Han Sans CN;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:27px;
}
.headerImg3 {
    height: 88px;
}
.Middle {
    /* height:1835px; */
    position: relative;
    bottom: 90px;
    background:rgba(255,251,237,1);
    border:4px solid rgba(251,187,39,1);
    box-shadow:0px 2px 11px 0px rgba(41,117,239,0.6);
    border-radius:10px;
}
.img44 {
    height:60px;
}
.spanmoney {
    font-size:12px;
    font-family:PingFang SC;
    font-weight:500;
    font-style:italic;
    color:rgba(255,255,255,1);
}
.rizongbang {
    height: 902px;
    padding: 0 0 50px 0;
    margin: 0 20px 0 20px;
    /* background:rgba(255,255,255,1); */
    border-radius:10px;
}
.duojinbang {
    float:left;
    position:relative;
    left:60px;
    bottom:36px;
}
.jiangjinchi {
    float:left;
    position:relative;
    left:60px;
    bottom:35px;
}
.footer {
    position: fixed;
    bottom: 0;  
    width: 721px;
    padding: 21px 0 19px 30px;
    height:80px;
    background:rgba(255,255,255,1);
    box-shadow:0px -6px 6px 0px rgba(22,71,126,0.06);
}  
.rizongbang span {
    float: right;
    height:25px;
    font-size:26px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(239,110,103,1);
    line-height:24px;
}
.rizongbang p {
    margin-top: 19px;
    letter-spacing: 10px;
    text-align: center;
    font-size:56px;
    font-family:JHRuHeiZhong;
    font-weight:400;
    color:rgba(251,172,38,1);
    line-height:30px;
}
.rizongbang h3 {
    margin-top: 32px;
    text-align: center;
    height:27px;
    font-size:26px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(233,152,26,1);
    line-height:24px;
}
.rizongbang h2 {
    width: 130px;
    height:31px;
    text-align: center;
    margin: 30px 0 0 235px;
    border:1px solid rgba(251,186,38,1);/*no*/
    border-radius:16px;
    font-size:19px;/*px*/
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(251,172,38,1);
}
.jiangchiimg {
    width: 280px;
    height: 64px;
}
.dingwei {
    position:relative;
    margin-left: 165px;
    top: 60px;
}
.dingwei em {
    display: inline-block;
    width: 280px;
    line-height: 45px;
    text-align: center;
    font-size:30px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(251,172,38,1);
}
.jiangchiimg2 {
    width: 100%;
    margin-top: 50px;
}
.footerimg {
    float: left;
    width:80px;
    height:80px;
    margin-right: 40px;
    border-radius:50%;
    background: pink;
}
.jiangchiimg3 {
    width: 367px;
    height: 80px;
    margin: 30px 0 0 125px;
}
.dingweiimg {
    width: 100px;
    height: 26px;
    margin-left: -8px;
}
.prity {
    position:absolute;
    top: 60px;
}
.prity span {
    display: inline-block;
    width: 100px;
    font-size:16px;/*px*/
    color:rgba(255,255,255,1);
}
.mingci {
    position:absolute;
    bottom:5px;
}
.user {
    float: left;
}
.user p:nth-child(1) {
    margin: 10px 0 15px 0;
    height:28px;
    font-size:30px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(77,111,91,1);
    line-height:24px;
}
.user p:nth-child(2) {
    height:21px;
    font-size:22px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:24px;
}
.footer button {
    float: right;
    margin: 10px 50px 0 0;
    width: 180px;
    height: 60px;
    font-size:28px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(255,255,254,1);
    background:rgba(245,112,48,1);
    border-radius:10px;
    outline: none;
    border: 0;
}
@media screen and (max-width: 360px) {
    .headerImg2 img {
        width:150px;
        height:55px;
    }
    .dingweiimg {
        width: 120px;
        height: 26px;
        margin-left: -11px;
    }
    .prity span {
        display: inline-block;
        width: 120px;
        font-size:16px;/*px*/
        color:rgba(255,255,255,1);
    }
    .footerimg {
        float: left;
        width:80px;
        height:80px;
        margin-right: 40px;
        margin-left: 8px;
        border-radius:50%;
        background: pink;
    }
}
.jilu li {
    margin: 25px 0 25px 25px;
    height:180px;
    border-bottom: 4px solid #FFF7F3D5;
}
.jiuimg {
    float: left;
    width: 150px;
    height: 150px;
    margin-right: 18px;
}
.workent {
    position:absolute;
    width: 120px;
    text-align: center;
    top:113px;
    left:20px;
    background:#F57030;
}
.workent span {
    color: white;
}
.statusimg {
    float:right;
    width:137px;
    height: 50px;
    margin-top: 50px;
}
.jilu p:nth-child(1) {  
    margin-top: 15px;
    font-size:32px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(255,144,84,1);
}
.jilu p:nth-child(2) {
    font-size:24px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(153,153,153,1);
}
.jilu p:nth-child(3) {
    font-size:24px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(252,202,81,1);
}
.carveClass li {
    margin-top: 20px;
}
.carveClass p {
    word-wrap:break-word;
}
.carveClass p:nth-child(1) {
    font-size:28px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(102,102,102,1);
}
.carveClass p:nth-child(2) {
    margin-left: 30px;
    font-size:30px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(51,51,51,1);
}
</style>


