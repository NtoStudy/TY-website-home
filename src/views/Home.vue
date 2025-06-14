<template>
  <div class="home">
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
    <section class="about">
      <h2 class="about-title">关于我们</h2>
      <div class="about-en">—— ABOUT US ——</div>
    </section>
    <AboutSection />
    <AdvantageSection />
    <ServiceSection />
    <CaseSection />
    <ProcessSection />
    <PartnerSection />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AboutSection from '../components/AboutSection.vue'
import AdvantageSection from '../components/AdvantageSection.vue'
import ServiceSection from '../components/ServiceSection.vue'
import CaseSection from '../components/CaseSection.vue'
import ProcessSection from '../components/ProcessSection.vue'
import PartnerSection from '../components/PartnerSection.vue'

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
.home {
  width: 100%;
  .banner {
    width: 100%;
    background-image: url("/home-bg.png");
    height: 600px;
    position: relative;
    overflow: hidden;

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
        padding: 120px calc((100% - $main-width) / 2);
        color: #fff;

        .main-title {
          font-size: $font-size-title;
          font-weight: bold;
          margin-bottom: 24px;
          letter-spacing: 4px;
          line-height: $line-height-base;
        }

        .slogan {
          font-size: $font-size-subtitle;
          font-weight: 600;
          margin-bottom: 12px;
          line-height: $line-height-base;
        }

        .desc {
          font-size: $font-size-text;
          margin-bottom: 32px;
          line-height: $line-height-base;
          opacity: 0.9;
        }

        .banner-btn {
          color: #ffffff;
          border: none;
          background: rgba(59, 114, 196, 0.8);
          border-radius: 6px;
          font-size: $font-size-subtitle;
          padding: 12px 36px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);

          &:hover {
            background: $color-secondary;
            color: #fff;
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

      span {
        width: 32px;
        height: 4px;
        background: rgba(255,255,255,0.4);
        border-radius: 2px;
        cursor: pointer;
        transition: all 0.3s ease;

        &.active {
          background: #fff;
          width: 48px;
        }

        &:hover {
          background: rgba(255,255,255,0.8);
        }
      }
    }
  }
  .about {
    width: 100%;
    background: #f5f7fa;
    padding: 64px 0 48px 0;
    text-align: center;
    .about-title {
      font-size: 36px;
      color: $color-secondary;
      font-weight: 600;
      margin-bottom: 8px;
      letter-spacing: 2px;
    }
    .about-en {
      font-size: 20px;
      color: $color-secondary;
      letter-spacing: 2px;
      opacity: 0.7;
    }
  }
}
</style>
