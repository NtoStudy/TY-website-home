<template>
  <div class="home">
    <section class="banner">
      <div class="banner-content">
        <h1 class="main-title">淘鱼科技</h1>
        <p class="slogan">致力于提供互联网一站式技术服务</p>
        <p class="desc">为用户提供专业的产品技术服务</p>
        <button class="banner-btn">查看详情 &gt;</button>
      </div>
      <div class="banner-bg">
        <!-- TODO: 首页 Banner 背景图片资源 -->
      </div>
    </section>
    <section class="about">
      <h2 class="about-title">关于我们</h2>
      <div class="about-en">ABOUT US</div>
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
import AboutSection from '../components/AboutSection.vue'
import AdvantageSection from '../components/AdvantageSection.vue'
import ServiceSection from '../components/ServiceSection.vue'
import CaseSection from '../components/CaseSection.vue'
import ProcessSection from '../components/ProcessSection.vue'
import PartnerSection from '../components/PartnerSection.vue'
</script>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;
.home {
  width: 100%;
  .banner {
    width: 100%;
    min-height: 420px;
    background: linear-gradient(120deg, $color-primary 60%, $color-secondary 100%);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .banner-content {
      position: relative;
      z-index: 2;
      max-width: $main-width;
      margin: 0 auto;
      padding: 60px calc((100% - $main-width) / 2);
      color: #fff;
      text-align: left;
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
      }
      .banner-btn {
        background: #fff;
        color: $color-secondary;
        border: none;
        border-radius: 6px;
        font-size: $font-size-subtitle;
        padding: 8px 32px;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 2px 8px rgba(91,157,248,0.08);
        transition: background 0.2s, color 0.2s;
        &:hover {
          background: $color-secondary;
          color: #fff;
        }
      }
    }
    .banner-bg {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      z-index: 1;
      img {
        height: 100%;
        min-width: 480px;
        object-fit: cover;
        opacity: 0.9;
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
      color: $color-dark;
      letter-spacing: 2px;
      opacity: 0.7;
    }
  }
}
</style>
