<template>
  <section class="banner">
    <div class="banner-slider">
      <div class="banner-slide" v-for="(slide, index) in bannerSlides" :key="index" :class="{ active: currentSlide === index }">
        <div class="banner-bg" :style="{ backgroundImage: `url(${slide.bgImage})` }"></div>
        <div class="banner-content">
          <h1 class="main-title">{{ slide.title }}</h1>
          <p class="slogan">{{ slide.slogan }}</p>
          <p class="desc">{{ slide.desc }}</p>
          <button class="banner-btn">查看详情 &gt;</button>
        </div>
      </div>
    </div>
    <div class="banner-indicators">
      <span
        v-for="(_, index) in bannerSlides"
        :key="index"
        :class="{ active: currentSlide === index }"
        @click="setSlide(index)"
      ></span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const bannerSlides = [
  {
    title: '淘鱼科技',
    slogan: '致力于提供互联网一站式技术服务',
    desc: '为用户提供专业的产品技术服务',
    bgImage: '/home-bg.png'
  },
  {
    title: '专业技术团队',
    slogan: '多年经验的技术专家',
    desc: '提供全方位的技术解决方案',
    bgImage: '/home-bg.png'
  },
  {
    title: '优质服务保障',
    slogan: '7x24小时技术支持',
    desc: '确保您的业务稳定运行',
    bgImage: '/home-bg.png'
  },
  {
    title: '创新科技引领',
    slogan: '紧跟技术发展前沿',
    desc: '助力企业数字化转型',
    bgImage: '/home-bg.png'
  }
]

const currentSlide = ref(0)
let slideInterval

const setSlide = (index) => {
  currentSlide.value = index
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % bannerSlides.length
}

onMounted(() => {
  // 自动轮播，每5秒切换一次
  slideInterval = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  clearInterval(slideInterval)
})
</script>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;

.banner {
  width: 100%;
  background-image: url("/home-bg.png");
  height: 800px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  
  @include respond-to(lg) {
    height: 500px;
  }
  
  @include respond-to(md) {
    height: 400px;
  }
  
  @include respond-to(sm) {
    height: 300px;
  }

  .banner-slider {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .banner-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.8s ease-in-out, visibility 0.8s ease-in-out;

    &.active {
      opacity: 1;
      visibility: visible;
    }

    .banner-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      z-index: 1;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(120deg, $color-primary 0%, $color-secondary 100%);
        opacity: 0.7;
      }
    }

    .banner-content {
      position: relative;
      z-index: 2;
      max-width: $main-width;
      margin: 0 auto;
      padding: 180px 16px;
      color: #fff;
      box-sizing: border-box;
      
      @include respond-to(lg) {
        padding: 100px 16px;
      }
      
      @include respond-to(md) {
        padding: 80px 16px;
      }
      
      @include respond-to(sm) {
        padding: 60px 16px;
      }

      .main-title {
        font-size: 64px;
        font-weight: bold;
        margin-bottom: 30px;
        letter-spacing: 4px;
        line-height: 1.2;
        
        @include respond-to(lg) {
          font-size: 36px;
          margin-bottom: 20px;
        }
        
        @include respond-to(md) {
          font-size: 28px;
          margin-bottom: 16px;
          letter-spacing: 2px;
        }
        
        @include respond-to(sm) {
          font-size: 24px;
          margin-bottom: 12px;
        }
      }

      .slogan {
        font-size: 36px;
        font-weight: 600;
        margin-bottom: 20px;
        line-height: 1.4;
        
        @include respond-to(lg) {
          font-size: 22px;
        }
        
        @include respond-to(md) {
          font-size: 18px;
          margin-bottom: 10px;
        }
        
        @include respond-to(sm) {
          font-size: 16px;
          margin-bottom: 8px;
        }
      }

      .desc {
        font-size: 24px;
        margin-bottom: 40px;
        line-height: 1.6;
        opacity: 0.9;
        
        @include respond-to(lg) {
          font-size: 18px;
          margin-bottom: 28px;
        }
        
        @include respond-to(md) {
          font-size: 16px;
          margin-bottom: 24px;
        }
        
        @include respond-to(sm) {
          font-size: 14px;
          margin-bottom: 20px;
        }
      }

      .banner-btn {
        color: #ffffff;
        border: none;
        background: rgba(59, 114, 196, 0.8);
        border-radius: 8px;
        font-size: 24px;
        padding: 16px 48px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        
        @include respond-to(lg) {
          font-size: 20px;
          padding: 10px 32px;
        }
        
        @include respond-to(md) {
          font-size: 18px;
          padding: 8px 28px;
        }
        
        @include respond-to(sm) {
          font-size: 16px;
          padding: 6px 24px;
        }

        &:hover {
          background: rgba(59, 114, 196, 1);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.15);
        }
      }
    }
  }

  .banner-indicators {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 12px;
    z-index: 3;
    
    @include respond-to(md) {
      bottom: 30px;
      gap: 10px;
    }
    
    @include respond-to(sm) {
      bottom: 20px;
      gap: 8px;
    }

    span {
      width: 32px;
      height: 4px;
      background: rgba(255,255,255,0.4);
      border-radius: 2px;
      cursor: pointer;
      transition: all 0.3s ease;
      
      @include respond-to(md) {
        width: 24px;
        height: 3px;
      }
      
      @include respond-to(sm) {
        width: 20px;
        height: 3px;
      }

      &.active {
        background: #fff;
        width: 48px;
        
        @include respond-to(md) {
          width: 36px;
        }
        
        @include respond-to(sm) {
          width: 30px;
        }
      }

      &:hover {
        background: rgba(255,255,255,0.8);
      }
    }
  }
}
</style>
