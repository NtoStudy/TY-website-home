<template>
  <section class="partner-section">
    <h2 class="section-title">合作伙伴</h2>
    <div class="section-en">—— COOPERATION PARTNERS ——</div>
    <p class="section-desc">
      始终坚持以客户为中心，帮助客户成功是我们存在的唯一价值
    </p>

    <!-- 桌面端展示 -->
    <div class="desktop-view">
      <div class="partner-container">
        <!-- 第一行 -->
        <div class="partner-row">
          <div class="partner-item" v-for="(partner, index) in partners.slice(0, 5)" :key="'row1-'+index">
            <img :src="partner.logo" :alt="partner.name" />
          </div>
        </div>

        <!-- 第二行 -->
        <div class="partner-row">
          <div class="partner-item" v-for="(partner, index) in partners.slice(5, 10)" :key="'row2-'+index">
            <img :src="partner.logo" :alt="partner.name" />
          </div>
        </div>

        <!-- 第三行 -->
        <div class="partner-row">
          <div class="partner-item" v-for="(partner, index) in partners.slice(10, 15)" :key="'row3-'+index">
            <img :src="partner.logo" :alt="partner.name" />
          </div>
        </div>
      </div>
    </div>

    <!-- 移动端展示 -->
    <div class="mobile-view">
      <div class="partner-grid">
        <div class="partner-item" v-for="(partner, index) in partners.slice(0, 6)" :key="'mobile-'+index">
          <img :src="partner.logo" :alt="partner.name" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const partners = [
  { logo: '/coo/2.png', name: '百度' },
  { logo: '/coo/2.png', name: '支付宝' },
  { logo: '/coo/2.png', name: '华为' },
  { logo: '/coo/2.png', name: '蓝湖' },
  { logo: '/coo/2.png', name: '腾讯' },
  { logo: '/coo/2.png', name: '浙商银行' },
  { logo: '/coo/2.png', name: '新浪微博' },
  { logo: '/coo/2.png', name: '海尔' },
  { logo: '/coo/2.png', name: '中国人寿' },
  { logo: '/coo/2.png', name: '太平洋保险' },
  { logo: '/coo/2.png', name: '阿里巴巴' },
  { logo: '/coo/2.png', name: '腾讯云' },
  { logo: '/coo/2.png', name: '中国银行' },
  { logo: '/coo/2.png', name: '易买得' },
  { logo: '/coo/2.png', name: '华熙生物' }
];
</script>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;

.partner-section {
  background-image: url("/bg.png");
  width: 100%;
  padding: 80px 0;
  background: #f5f7fa;
  text-align: center;
  position: relative;

  @include respond-to(md) {
    padding: 40px 0;
  }

  // 背景装饰
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0.05;
    pointer-events: none;
  }

  .section-title {
    font-size: 36px;
    color: $color-secondary;
    font-weight: bold;
    margin-bottom: 14px;

    @include respond-to(md) {
      font-size: 28px;
    }
  }

  .section-en {
    font-size: 20px;
    color: $color-secondary;
    opacity: 0.6;
    margin-bottom: 24px;

    @include respond-to(md) {
      font-size: 16px;
    }
  }

  .section-desc {
    max-width: 1000px;
    margin: 0 auto 60px;
    font-size: $font-size-text;
    line-height: 1.8;
    color: $color-dark;
    opacity: 0.8;
    padding: 0 16px;

    @include respond-to(md) {
      display: none;
    }
  }

  // 桌面端样式
  .desktop-view {
    display: block;

    @include respond-to(md) {
      display: none;
    }

    .partner-container {
      max-width: $main-width;
      margin: 0 auto;
      padding: 0 20px;
    }

    .partner-row {
      display: flex;
      justify-content: center;
      gap: 30px;
      margin-bottom: 30px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .partner-item {
      flex: 1;
      max-width: 200px;
      height: 80px;
      background: #fff;
      border: 1px solid rgba($color-primary, 0.1);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 15px;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        border-color: transparent;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        filter: grayscale(100%);
        opacity: 0.6;
        transition: all 0.3s ease;
      }

      &:hover img {
        filter: grayscale(0%);
        opacity: 1;
      }
    }
  }

  // 移动端样式
  .mobile-view {
    display: none;
    padding: 0 20px;

    @include respond-to(md) {
      display: block;
    }

    .partner-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      max-width: 500px;
      margin: 0 auto;

      @include respond-to(sm) {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
      }
    }

    .partner-item {
      background: #fff;
      border-radius: 8px;
      padding: 15px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      img {
        width: 60px;
        height: 60px;
        object-fit: contain;
      }

      p {
        font-size: 14px;
        color: $color-secondary;
        margin: 0;
      }
    }
  }
}
</style>
