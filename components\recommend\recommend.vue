<template>
  <view class="content">
    <view class="flexBetween mb15">
      <view class="conName">{{ name }}</view>
    </view>
    <view v-for="(item, index) in recomList" :key="index + 're'" @click="reChange(item)">
      <view class="flexStart poRelative" style="align-items: center">
        <u-image
          :src="item.productlogo"
          width="100%"
          height="170px"
          shape="square"
          border-radius="8rpx"
        ></u-image>
        <u-tag
          v-if="item.recomtype"
          class="ml10"
          style="position:absolute;right:10px;top:7px;"
          :text="item.recomtype"
          mode="dark"
          :type="changeTypeTag('tag1', item.recomtype)"
        ></u-tag>
        <view class="mt5" style="width: calc(100% - 5px)">
          <view class="reTitle textOver1">{{ item.name }}</view>
          <view v-if="item.description" class="textOver2 mt5 color3">{{ item.description }}</view>
        </view>
      </view>
      <view class="flexBetween mt5 mr5">
        <view class="flexCenter color2">{{item.time}}</view>
        <view class="color2 ml20">{{ item.totalview || 0 }}+浏览量</view>
      </view>
      <u-line style="margin: 15px 0"></u-line>
    </view>
    <view @click="$emit('reachBottom')">
      <u-loadmore :status="status" />
    </view>
  </view>
</template>

<script>
export default {
  props: ['name', 'recomList', 'status'],
  data() {
    return {}
  },
  methods: {
    reChange(item) {
      uni.navigateTo({
        url: '/pages/details/details?name=' + item.name
      })
    },
    changeTypeTag(type, name) {
      let x = ''
      if (type == 'tag1') {
        // 爆款.独家.新品.优惠.限时
        switch (name) {
          case '爆款':
            x = 'error'
            break
          case '独家':
            x = 'primary'
            break
          case '新品':
            x = 'success'
            break
          case '优惠':
            x = 'warning'
            break
          case '限时':
            x = 'error'
            break
          default:
            x = 'error'
        }
      } else if (type == 'tag2') {
        // 无隐形费用、全程托管、专家顾问、一对一服务、急速办理、官方保障、银企合作
        switch (name) {
          case '无隐形费用':
            x = 'success'
            break
          case '全程托管':
            x = 'primary'
            break
          case '专家顾问':
            x = 'warning'
            break
          case '一对一服务':
            x = 'warning'
            break
          case '急速办理':
            x = 'error'
            break
          case '官方保障':
            x = 'primary'
            break
          case '银企合作':
            x = 'success'
            break
          default:
            x = 'error'
        }
      }
      return x
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: auto;
  padding: 20px 18px;
  background: #ffffff;
}
.conName {
  font-size: 17px;
  font-weight: 800;
}
.reTitle {
  font-size: 15px;
  font-weight: 600;
}
::v-deep .u-size-default {
  padding: 3px 5px;
}
.ml12 {
  margin-left: 12px;
}
</style>
