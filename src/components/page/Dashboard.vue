<template>
    <div id="chatRecord" class="tac-app">
        <span @click="show = false">
            <div v-if="frequency !=0" class="index_times_3a7d3">今日剩余：{{ frequency }}次</div>
            <div v-else class="index_times_3a7d3">今日次数已用完</div>
            <div class="tac-header">
                <img src="@/assets/images/hongbao.png" alt />
            </div>
            <div ref="enter" class="prp hack">
                <div class="prp-shadow"></div>
                <div class="prp-packet">
                    <div class="prp-packet-full"></div>
                    <div class="prp-packet-pull"></div>
                    <div class="prp-packet-broken"></div>
                    <div @click="animationChange" ref="entert" class="prp-packet-btn"></div>
                </div>
                <div class="prp-rain"></div>
                <div class="prp-spark"></div>
                <div class="prp-guide">
                    <div class="hand active"></div>
                </div>
            </div>
        </span>
        <div class="tac-footer">
            <div class="PrizeList_main_2xr4h">
                <div class="PrizeList_wrapper_3R5Dp">
                    <ul class="PrizeList_ul_1Bj1X">
                        <li
                            class="PrizeList_li_5_FLW"
                            v-for="(item,index) in listData"
                            :key="index"
                            @click="prizeChange(item)"
                        >
                            <div class="PrizeList_liBg_3n7AG">
                                <img :src="item.url" alt />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div v-show="show" class="tac-footer-lun">
            <div class="tac-footer-main">
                <img :src="formEnt.image" alt />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            frequency: 1,
            video_frequency: 1,
            formEnt: {},
            show: false,
            listData: [
                {
                    url: require('@/assets/images/huawei.png'),
                    image: require('@/assets/images/huaweiwork.png'),
                    title: '顶配国产手机',
                    name: 'HUAWEI Mate Xs',
                    type: '5G全网通',
                    info: 'HUAWEI Mate Xs 5G全网通</br>8GB+512GB（星际蓝）',
                    money: '¥16999'
                },
                {
                    url: require('@/assets/images/erji.png'),
                    image: require('@/assets/images/erjiwork.png'),
                    title: '智能美发黑科技',
                    name: '戴森(Dyson)吹风机',
                    type: '进口家用',
                    info: '戴森(Dyson) 吹风机 HD03 紫红色',
                    money: '¥2990'
                },
                {
                    url: require('@/assets/images/shenxianshui.png'),
                    image: require('@/assets/images/shenxianshuiwork.png'),
                    title: '小仙女的挚爱',
                    name: 'SK-II神仙水精华液',
                    type: '护肤精华露',
                    info: 'SK-II 护肤精华露230ml',
                    money: '¥1540'
                },
                {
                    url: require('@/assets/images/mianshuang.png'),
                    image: require('@/assets/images/mianmowork.png'),
                    title: '护肤品界的女王',
                    name: 'Crème de la Mer',
                    type: '海蓝之谜精华面霜',
                    info: '海蓝之谜精华面霜60ml',
                    money: '¥2680'
                },
                {
                    url: require('@/assets/images/miandan.png'),
                    image: require('@/assets/images/lihework.png'),
                    title: '0元买TA！！！',
                    name: '免单商品',
                    type: '0元买TA！！！',
                    info: '免单商品',
                    money: '免费领取'
                },
                {
                    url: require('@/assets/images/shenmifudai.png'),
                    image: require('@/assets/images/fudaiwork.png'),
                    title: '一个意想不到的惊喜~',
                    name: '神秘福袋',
                    type: '一个意想不到的惊喜~',
                    info: '神秘福袋',
                    money: '惊喜福利'
                }
            ],
        };
    },
    created() {
    },
    mounted () {},
    methods: {
        prizeChange(data) {
            this.formEnt = data;
            this.show = true;
            // 定位到底部
            setTimeout(function () {
                let ele = document.getElementById('chatRecord');
                ele.scrollTop = ele.scrollHeight;
            }, 200);
        },
        // 执行动画
        animationChange() { 
            let vm = this;
            vm.$refs.enter.className = 'prp pull';
            setTimeout(function () {
                vm.$refs.enter.className = 'prp pull hack broken';
                setTimeout(function () {
                    vm.recover();
                }, 2000);
            }, 1000);
        },
        recover() {
            let vm = this;
            // 动画执行结束
            vm.$refs.enter.className = 'prp';
            // 执行完动画0.1s后恢复原状
            setTimeout(function () {
                vm.$refs.enter.className = 'prp hack';
            }, 100);
            // vm.$refs.entert.className = 'prp-packet-btn-disabled';
        },
    }
};
</script>

<style>
@import '../../assets/css/too.css'; 
.van-popup__close-icon {
    color: black;
}
.prp .prp-packet-full {
    background: url('../../assets/images/fudai.png') no-repeat;
    background-size: 100%;
}
.prp .prp-packet-pull {
    background: url('../../assets/images/fudai2.png') no-repeat;
}
.prp .prp-packet-broken {
    background: url('../../assets/images/fudai3.png') no-repeat;
}
.prp .prp-packet-btn {
    background: url('../../assets/images/fudai4.png') no-repeat;
}
.prp .prp-spark {
    background: url('../../assets/images/fudai5.png') no-repeat;
}
.prp .hand {
    background: url('../../assets/images/fudai6.png') no-repeat;
}
.prp .prp-shadow {
    background: url('../../assets/images/guangyun.png');
}
.PrizeList_main_2xr4h {
    /* width: 337px; */
    height: 120px;
    padding: 32px 0 0 38px;
    background: url('../../assets/images/footer.png');
    background-size: 100% 100%;
}
.PrizeList_wrapper_3R5Dp {
    overflow-x: auto;
    overflow-y: hidden;
}
.PrizeList_ul_1Bj1X {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    height: 100%;
    padding: 0;
}
.PrizeList_li_5_FLW {
    margin-right: 0.1792rem;
    width: 60px;
    height: 64px;
    margin-right: 15px;
}
.PrizeList_liBg_3n7AG {
    padding: 2px;
    width: 60px;
    height: 60px;
    text-align: center;
    background: url('../../assets/images/border.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.PrizeList_liBg_3n7AG img {
    width: 53px;
    height: 60px;
}
.top-main {
    padding-left: 60px;
    height: 51px;
    background: rgba(237, 237, 237, 1);
    line-height: 54px;
    font-size: 20px;
}
.wrapper {
    margin-top: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.block {
    width: 221px;
    height: 120px;
    text-align: center;
}
.block p {
    font-size: 17px;
    color: white;
    text-align: center;
    font-family: PingFangSC-Regular, PingFang SC;
}
.blockImg1 {
    position: relative;
    display: flex;
    top: 5px;
    left: 170px;
    width: 40px;
    height: 27px;
}
.blockImg2 {
    width: 110px;
    height: 54px;
    margin-top: 60px;
}
.tac-footer-main img {
    /* float: left; */
    width: 100%;
}
.tac-footer-work {
    position:absolute;
    width:140px;
    top:118px;
    font-size:13px;
    color:rgba(255,255,255,1);
    text-align: center;
}
</style>