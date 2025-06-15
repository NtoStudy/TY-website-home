<template>
  <section class="partner-section">
    <h2 class="section-title">合作伙伴</h2>
    <div class="section-en">COOPERATION PARTNERS</div>
    <p class="section-desc">
      始终坚持以客户为中心，帮助客户成功是我们存在的唯一价值
    </p>

    <div class="partner-container">
      <!-- 第一行 -->
      <div class="partner-row">
        <div class="partner-item">
          <img src="/coo/2.png" alt="百度" />
        </div>
        <div class="partner-item">
          <img src="/coo/2.png" alt="支付宝" />
        </div>
        <div class="partner-item">
          <img src="/coo/2.png" alt="华为" />
        </div>
        <div class="partner-item">
          <img src="/coo/2.png" alt="蓝湖" />
        </div>
        <div class="partner-item">
          <img src="/coo/2.png" alt="腾讯" />
        </div>
      </div>

      <!-- 第二行 -->
      <div class="partner-row">
        <div class="partner-item">
          <img src="/coo/2.png" alt="浙商银行" />
        </div>
        <div class="partner-item">
          <img src="/coo/2.png" alt="新浪微博" />
        </div>
        <div class="partner-item">
          <img src="/coo/2.png" alt="海尔" />
        </div>
        <div class="partner-item">
          <img src="/coo/2.png" alt="中国人寿" />
        </div>
        <div class="partner-item">
          <img src="/coo/2.png" alt="太平洋保险" />
        </div>
      </div>

      <!-- 第三行 -->
      <div class="partner-row">
        <div class="partner-item">
          <img src="/coo/2.png" alt="阿里巴巴" />
        </div>
        <div class="partner-item">
          <img src="/coo/2.png" alt="腾讯云" />
        </div>
        <div class="partner-item">
          <img src="/coo/2.png" alt="中国银行" />
        </div>
        <div class="partner-item">
          <img src="/coo/2.png" alt="易买得" />
        </div>
        <div class="partner-item">
          <img src="/coo/2.png" alt="华熙生物" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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
  }

  .section-en {
    font-size: 20px;
    color: $color-secondary;
    opacity: 0.6;
    margin-bottom: 24px;
  }

  .section-desc {
    max-width: 1000px;
    margin: 0 auto 60px;
    font-size: $font-size-text;
    line-height: 1.8;
    color: $color-dark;
    opacity: 0.8;
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


</style>
