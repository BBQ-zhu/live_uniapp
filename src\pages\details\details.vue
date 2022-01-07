<template>
  <view class="page" style="background: #fff">
    <view class="poRelative" style="height:170px;">
      <img :src="details.productlogo" width="100%" height="100%" />
      <!-- 返回按钮 -->
      <view class="back">
        <u-icon name="arrow-left" @click="back"></u-icon>
      </view>
      <!-- 播放按钮 -->
      <view class="playBtn poRelative"></view>
      <u-icon class="playBtn2" name="play-right-fill" size="50" color="#fff" @click="play"></u-icon>
      <!-- 浏览量 -->
      <view class="totalview flex">
        <u-icon name="eye" size="30" color="#fff"></u-icon>
        <view class="textOver1" style="padding:0 4px;max-width:60px;">{{details.totalview}}</view>
      </view>
    </view>
    <!-- 顶部导航区 -->
    <view class="contant">
      <u-tabs
        bg-color="#fff"
        class="flexCenter"
        :list="navList"
        @change="navChange"
        :current="current"
        :activeColor="activeColor"
        :is-scroll="isScroll"
      ></u-tabs>
    </view>

    <view v-show="navList[current].name == '文明互动'">
      <!-- 评论区 -->
      <!-- scroll-top 设置竖向滚动条位置
      scroll-with-animation 在设置滚动条位置时使用动画过渡
      @scrolltoupper 滚动到顶部/左边，会触发 scrolltoupper 事件
      @scrolltolower 滚动到底部/右边，会触发 scrolltolower 事件
      @scroll 滚动时触发-->
      <view class="chatBox">
        <scroll-view
          :scroll-top="scrollTop"
          scroll-with-animation="true"
          scroll-y="true"
          class="scroll-Y"
        >
          <view class="mt20" style="width:100%;">
            <view class="chatTime u-text-center">12月5日 10:23</view>
            <view class="flex">
              <u-image :src="details.productlogo" width="100rpx" height="100rpx" shape="square"></u-image>
              <view class="ml10">
                <view class="color2 f14 textOver1 ml5">朱恒熠</view>
                <view class="poRelative">
                  <u-icon class="sanjiao" name="integral-fill"></u-icon>
                  <view class="chatDetail mt5 ml5">这是发出的聊天内容</view>
                </view>
              </view>
            </view>
          </view>
          <view class="mt20" style="width:100%;">
            <view class="chatTime u-text-center">12月5日 10:23</view>
            <view class="flex">
              <u-image :src="details.productlogo" width="100rpx" height="100rpx" shape="square"></u-image>
              <view class="ml10" style="width:230px;">
                <view class="color2 f14 textOver1 ml5">朱恒熠</view>
                <view class="poRelative">
                  <u-icon class="sanjiao" name="integral-fill"></u-icon>
                  <view class="chatDetail mt5 ml5">这是发出的聊天内容这是发出的聊天内容这是发出的聊天内容这是发出的聊天内容这是发出的聊天内容</view>
                </view>
              </view>
            </view>
          </view>
          <view class="mt20" >
            <view class="chatTime u-text-center">12月5日 10:23</view>
            <view class="liwuChat flexCenter">
              <view class="textOver1" style="max-width:100px;">朱恒熠</view>
              <view class="mr5 ml5">送出了</view>
              <u-image src="../../static/liwu/stamped.png" width="50rpx" height="50rpx" shape="square"></u-image>
              <view class="ml5">X1</view>
            </view>
          </view>
        </scroll-view>
      </view>
      <!-- 发消息区 -->
      <view class="chat">
        <view class="flexBetween" style="box-size:border-box;">
          <u-icon name="gift" size="50" color="#11BBB8" @click="liwuShow=true"></u-icon>
          <u-input class="chatInput ml10" v-model="chat" placeholder="说点什么..." />
          <u-button class="ml15 fsbtn" @click="btnClick" :size="'medium'" :type="'primary'">发送</u-button>
        </view>
      </view>
      <!-- 右侧功能区 -->
      <view class="rightBtn">
        
        <view class="dianzan dianzanBg1 poRelative" hover-stay-time="150" @click="heartBtn()">
          <u-icon v-if="heart" name="heart" size="45" color="#fff"></u-icon>
          <u-icon v-else name="heart-fill" size="45" color="#ff6600"></u-icon>
          <view class="btnBg btnBg1 greenBtn">收藏</view>
        </view>
        <view class="dianzan dianzanBg2 poRelative" @click="liwuShow=true">
          <u-icon name="gift" size="45" color="#fff"></u-icon>
          <view class="btnBg btnBg2 greenBtn">送礼</view>
        </view>
        <view class="dianzan dianzanBg3 poRelative" @click="copy()">
          <u-icon name="share" size="38" color="#fff" style="position:relative;left:-1px;"></u-icon>
          <view class="btnBg btnBg3 greenBtn">分享</view>
        </view>
      </view>
      <!-- 礼物弹出展示区 -->
      <view class="leftBtn" v-if="leftBtnShow">
        <view class="flex ml10" style="margin-top:8px;">
          <u-avatar :src="details.productlogo" width="50rpx" height="50rpx"></u-avatar>
          <view class="ml10 mt5 color0 " style="max-width:120px;">
            <view class=" f15 ml5 fw600 textOver1" >朱恒熠</view>
            <view class="poRelative">
              <view class="textOver1 mt5 ml5">送出了- <span class="colorRed fw600">{{bulueTit.title}}</span></view>
            </view>
          </view>
          <view class="flex ml10">
            <u-image :src="bulueTit.image" width="90rpx" height="90rpx" shape="square"></u-image>
            <view class="colorjin btnNum ml10">X 1</view>
          </view>
        </view>
      </view>
    </view>
    <view
      v-if="navList[current].name == '直播介绍'"
      style="height:calc(100vh - 212px);overflow-y:auto;"
    >
      <u-parse
        style="padding:10px;"
        :html="details.details"
        :domain="$URL"
        :lazy-load="true"
        :show-with-animation="true"
      ></u-parse>
    </view>
    <view v-if="navList[current].name == '图片直播'" class="poRelative">
      <web-view
        class="webView"
        :webview-styles="webviewStyles"
        src="http://localhost:3033/testHtml/index.html"
      ></web-view>
    </view>
    <view v-if="navList[current].name == '商务合作'">
      <consult style="width:95%;margin:50px 0 0 2.5%;"></consult>
    </view>
    <!-- 礼物选项弹出框 -->
    <u-popup v-model="liwuShow" mode="bottom" border-radius="8">
      <view class="flex flexStart blueBtn liwuItem">
        <view
          class="navItem"
          v-for="(item, index) in liwuList"
          :key="index + 'nav'"
          @click="showGifts(item)"
        >
          <u-image
            :src="item.image"
            width="90rpx"
            height="90rpx"
            shape="square"
            style="margin: 0 auto"
          ></u-image>
          <view>
            <view class="mt10 f12">{{ item.title }}</view>
            <view class="colorYellow f12">免费</view>
          </view>
        </view>
      </view>
    </u-popup>
  </view>
</template> 

<script>
import fixedInfo from '../../common/js/fixedInfo.js'
export default {
  data() {
    return {
      leftBtnShow:false, // 礼物弹出展示区显示 / 隐藏
      bulueTit:{}, // 礼物弹出展示区
      webviewStyles: { // webview图片直播 缓冲条颜色
        progress: {
          color: '#3cc8c9'
        }
      },
      liwuShow: false, //礼物弹框
      heart: true, //收藏
      fixedInfo: fixedInfo,
      details: {},
      isScroll: true,
      current: 0,
      activeColor: '#11BBB8',
      navList: [
        {
          name: '文明互动'
        },
        {
          name: '直播介绍'
        },
        {
          name: '图片直播'
        },
        {
          name: '商务合作'
        }
      ],
      chat: '', //当前聊天内容
      scrollTop: 100, //聊天滚动条位置
      liwuList: [
        {
          image: '../../static/liwu/stamped.png',
          title: '礼物1'
        },
        {
          image: '../../static/liwu/stamped.png',
          title: '礼物2'
        },
        {
          image: '../../static/liwu/stamped.png',
          title: '礼物3'
        },
        {
          image: '../../static/liwu/stamped.png',
          title: '礼物4'
        },
        {
          image: '../../static/liwu/stamped.png',
          title: '礼物5'
        },
        {
          image: '../../static/liwu/stamped.png',
          title: '礼物6'
        },
        {
          image: '../../static/liwu/stamped.png',
          title: '礼物7'
        },
        {
          image: '../../static/liwu/stamped.png',
          title: '礼物8'
        }
      ]
    }
  },
  async onLoad(option) {
    await this.searchChange(option.name)
    this.updataProduct()
  },
  methods: {
    // 导航切换
    navChange(index) {
      this.current = index
    },
    // 收藏按钮
    heartBtn() {
      // 节流
      this.$u.throttle(()=>{
        this.heart = !this.heart
        uni.showToast({
          title: this.heart ? '取消收藏' : '收藏成功',
          icon: 'none'
        })
      }, 3000, 1);
      
    },
    // 点击礼物
    showGifts(item) {
      this.liwuShow = false
      
      this.leftBtnShow = this.leftBtnShow ? false : true
      this.leftBtnShow = true
      this.bulueTit = item
      setTimeout(() => {
        this.leftBtnShow = false
      }, 4000);
    },
    // 分享按钮
    copy() {
      let data = `一起开看直播吧，http://localhost:8080/#/pages/details/details?name=%E5%AE%9E%E9%AA%8C%E9%AB%98%E4%B8%AD2022%E5%B9%B4%E6%AF%95%E4%B8%9A%E5%85%B8%E7%A4%BC`
      uni.setClipboardData({
        data,
        success: () => {
          uni.showToast({
            title: '已复制链接，请粘贴给微信好友'
          })
        }
      })
    },
    // 修改直播浏览量
    updataProduct() {
      let ruleForm = {
        _id: this.details._id,
        totalview: parseInt(this.details.totalview || 0) + 1 + ''
      }
      this.$axios.post(this.$api.updataProduct, {
        data: JSON.stringify(ruleForm)
      })
    },
    async searchChange(name) {
      var data = {
        skip: 0,
        limit: 10,
        fuzz: 'name',
        input: name
      }
      await this.$axios.post(this.$api.findProduct, data).then(res => {
        this.details = res.data[0].data[0]
      })
    },
    back() {
      uni.navigateBack({
        delta: 1
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.liwuChat{
  font-style: italic;
  min-width:250px;
  max-width: 350px;
  font-weight: 600;
  height:35px;
  line-height: 25px;
  padding:5px 10px;
  text-align: center;
  color:#DB6159;
  background: linear-gradient(to right, #f7ecde, #fadebd);
  border-radius: 5px;
}
.btnNum{
  font-size: 26px;
  line-height: 45px;
  font-style: italic;
}
.leftBtn {
  width: 90%;
  height: 60px;
  border-radius: 30px;
  // background: linear-gradient(to right, #02baff, transparent);
  background: linear-gradient(to right,  #02baff 0%, transparent 90%);
  // background: -webkit-gradient(linear, 0 0, 0 100%, from(#dedede), color-stop(8%, white), color-stop(20%, red);
  position: absolute;
  bottom: 280px;
  left: 10px;
  z-index:3;
  animation: myfirst 0.6s ease-out;
}
@keyframes myfirst
{
    0%   {left: 300px;}
    100% {left: 10px;}
}
.liwuItem {
  padding-top: 28px;
  background: linear-gradient(to right top, #fffcf7, #fff, #e8f0ff);
}
.navItem {
  width: 25%;
  margin-bottom: 20px;
  text-align: center;
  line-height: 20px;
}
.playBtn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #000;
  opacity: 0.5;
  position: absolute;
  top: 60px;
  left: 44%;
}
.playBtn2 {
  color: #fff;
  position: absolute;
  top: 72px;
  left: 47.5%;
}
.webView {
  width: 100%;
  height: calc(100vh - 212px);
  overflow-y: auto;
  position: absolute;
  bottom: 0;
}
.dianzan {
  width: 46px;
  height: 46px;
  margin-top: 20px;
  border-radius: 50%;
  text-align: center;
  line-height: 45px;
}
.btnBg {
  width: 46px;
  height: 18px;
  line-height: 16px;
  font-size: 20rpx;
  border-radius: 10px;
  text-align: center;
  color: #fff;
  position: absolute;
  bottom: -8px;
}
.rightBtn {
  position: absolute;
  right: 12px;
  bottom: 80px;
}
.dianzanBg1 {
  box-shadow: 0px 1px 5px 0px #c740ff;
  background: linear-gradient(to right, #765dfb, #ce42f9);
}
.dianzanBg2 {
  box-shadow: 0px 1px 5px 0px #ff6e43;
  background: linear-gradient(to right, #fe5e01, #ff8b00);
}
.dianzanBg3 {
  box-shadow: 0px 1px 5px 0px #48b0f5;
  background: linear-gradient(to right, #2979ff, #45b2fd);
}
.btnBg1 {
  box-shadow: 0px 2px 5px 0px #fc74d1;
  background: linear-gradient(to right, #ce42f9, #fc74d1);
}
.btnBg2 {
  box-shadow: 0px 2px 5px 0px #fecf21;
  background: linear-gradient(to right, #ff8b00, #fecf21);
}
.btnBg3 {
  box-shadow: 0px 2px 5px 0px #05ddfd;
  background: linear-gradient(to right, #45b2fd, #05ddfd);
}
.chatTime {
  width: 110px;
  margin: 0 auto;
  padding: 2px 0;
  background: rgb(220, 223, 230);
  color: #fff;
  border-radius: 4px;
  margin-bottom: 4px;
}
.sanjiao {
  color: #fff;
  font-size: 16px;
  transform: rotate(90deg);
  position: absolute;
  z-index: 1;
  left: -3px;
  top: 8px;
}
.chatDetail {
  // min-width:100px;
  // max-width: 230px;
  height: auto;
  background: #fff;
  line-height: 18px;
  padding: 8px;
  border-radius: 5px;
}
.fsbtn {
  width: 80px;
  margin-top: 1px;
  // background: #11bbb8;
  background: linear-gradient(to right, #46e3c4, #3cc8c9, #46e3c4);
}
::v-deep .u-primary-hover {
  background: linear-gradient(
    to right bottom,
    #46e3c4,
    #3cc8c9,
    #46e3c4
  ) !important;
}
.chatBox {
  width: 100%;
  height: calc(100vh - 270px);
  background: rgb(241, 242, 246);
  // background:#fffbff;
  padding: 0 14px;
  overflow-y: auto;
  padding-bottom: 10px;
}
::v-deep .uni-input-placeholder {
  padding-left: 10px;
}
::v-deep .uni-input-input {
  padding-left: 10px;
}
.contant{
  box-shadow: 0 2px 2px 0 rgb(241, 242, 246);
}
.chat {
  width: 100%;
  height: 60px;
  background: #fff;
  box-shadow: 0 -2px 2px 0 rgb(241, 242, 246);
  padding: 10px;
  position: fixed;
  bottom: -2px;
}
.chatInput {
  border-radius: 5px;
  border: 1px solid #8699ad;
}
.tabsClass {
  box-shadow: 0 2px 2px 0 rgb(241, 242, 246);
}
.totalview {
  height: 22px;
  line-height: 22px;
  background: #000;
  opacity: 0.5;
  padding: 0 6px;
  border-radius: 10px;
  position: absolute;
  right: 10px;
  top: 12px;
  color: #fff;
  font-size: 12px;
}
.playBack {
  width: 80rpx;
  height: 80rpx;
  position: absolute;
  top: 65px;
  left: 45%;
  background: #000;
  border-radius: 50%;
  opacity: 0.3;
}
.back {
  width: 25px;
  height: 25px;
  line-height: 25px;
  background: #000;
  opacity: 0.5;
  border-radius: 50%;
  color: #fff;
  padding-left: 3px;
  font-size: 16px;
  position: fixed;
  top: 12px;
  left: 8px;
  z-index: 2;
}
</style>
