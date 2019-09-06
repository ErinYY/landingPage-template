<template>
  <div class="hello">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="carousel-container">
            <el-carousel :interval="4000" type="card" class="carousel-wrapper">
              <el-carousel-item v-for="item in carouselSrc" :key="item">
                <div class="img-box"><img :src="item" /></div>
              </el-carousel-item>
            </el-carousel>
            <h3 style="color: rgb(255, 255, 255);">{{ msg }}</h3>
          </div>
          <div class="img-box"><img src="./assets/images/img1.jpg" /></div>
        </div>
        <div class="swiper-slide">
          <div class="title">
            <h3 style="color: rgb(255, 255, 255);">{{ _device }}</h3>
          </div>
          <div class="img-box"><img src="./assets/images/img2.jpg" /></div>
        </div>
        <div class="swiper-slide">
          <div class="title">
            <h3 style="color: rgb(255, 255, 255);">{{ _screenInfo }}</h3>
          </div>
          <div class="img-box"><img src="./assets/images/img3.jpg" /></div>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <!-- <div class="swiper-pagination"></div> -->

      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev"></div> -->
      <!-- <div class="swiper-button-next"></div> -->

      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import { mapGetters } from 'vuex';
  export default {
    name: 'Index',
    data() {
      return {
        msg: 'Welcome to LandingPage!'
      };
    },
    computed: {
      // 设备信息
      _device() {
        return `device: ${this.device}`;
      },
      // 屏幕尺寸信息
      _screenInfo() {
        return `width: ${this.screenInfo.width}`;
      },
      // 轮播图片路径
      carouselSrc() {
        const context = require.context(
          './assets/images/carousel/',
          true,
          /\.jpg$/
        );
        const keys = context.keys();
        return keys.reduce(
          (lastArr, item) => lastArr.concat(context(item)),
          []
        );
      },
      ...mapGetters({
        device: 'getDevice',
        screenInfo: 'getScreenInfo'
      })
    },
    mounted() {
      new Swiper('.swiper-container', {
        direction: 'vertical', // 垂直切换选项
        loop: false, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },

        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar'
        }
      });
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .swiper-container {
    width: 100vw;
    height: 100vh;
    /* min-width: 1400px; */
    background-color: rgb(140, 152, 187);
  }
  .swiper-slide {
    text-align: center;
    width: 100%;
    height: 100%;
    font-size: 18px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .title,
  .carousel-container {
    z-index: 10;
  }
  .carousel-container {
    width: 80%;
  }
  .title,
  .carousel-container h3 {
    font-weight: 700;
    font-size: calc(55px + 54 * ((53vw + 53vh) - 520px) / 820);
    letter-spacing: -1px;
    color: rgba(255, 255, 255, 0);
    -webkit-text-stroke: 2px #fff;
  }
  .img-box {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.9;
    overflow: hidden;
  }
  .img-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
