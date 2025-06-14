<template>
  <section class="service-section">
    <h2 class="section-title">我们的服务</h2>
    <div class="section-en">—— SERVICES ——</div>
    <p class="section-desc">
      淘鱼科技近几年APP外包开发经验，为企业提供专业的APP软件开发、电商平台开发、高端网站制作、小程序商城开发等服务，服务企业超过100家
    </p>

    <div class="service-grid">
      <!-- APP定制开发 -->
      <div class="service-card">
        <div class="icon-wrapper">
          <img src="/service/1.png" alt="APP定制开发" />
        </div>
        <h3 class="card-title">APP定制开发</h3>
        <div class="card-items">
          <p>uni-app开发</p>
          <p>原生iOS\安卓APP开发</p>
          <p>涵盖数十个行业数百个成功案例</p>
        </div>
      </div>

      <!-- 小程序制作 -->
      <div class="service-card">
        <div class="icon-wrapper">
          <img src="/service/1.png" alt="小程序制作" />
        </div>
        <h3 class="card-title">小程序制作</h3>
        <div class="card-items">
          <p>小程序定制开发</p>
          <p>微信公众号定制开发</p>
          <p>基于微信的H5应用定制开发</p>
        </div>
      </div>

      <!-- 高端网页制作 -->
      <div class="service-card">
        <div class="icon-wrapper">
          <img src="/service/1.png" alt="高端网页制作" />
        </div>
        <h3 class="card-title">高端网页制作</h3>
        <div class="card-items">
          <p>电商类网站开发</p>
          <p>高端企业官网设计与制作</p>
          <p>PC端\手机端响应式网站设计</p>
        </div>
      </div>

      <!-- IOT物联网和智能硬件解决方案 -->
      <div class="service-card">
        <div class="icon-wrapper">
          <img src="/service/1.png" alt="IOT物联网" />
        </div>
        <h3 class="card-title">IOT物联网和智能<br/>硬件解决方案</h3>
        <div class="card-items">
          <p>智能电器类开发</p>
          <p>智能校园</p>
        </div>
      </div>

      <!-- 软件定制开发 -->
      <div class="service-card">
        <div class="icon-wrapper">
          <img src="/service/1.png" alt="软件定制开发" />
        </div>
        <h3 class="card-title">软件定制开发</h3>
        <div class="card-items">
          <p>小程序</p>
          <p>H5</p>
          <p>兼容APP</p>
        </div>
      </div>

      <!-- 全渠道电商营销 -->
      <div class="service-card">
        <div class="icon-wrapper">
          <!-- TODO: 电商图标 -->
          <img src="/service/1.png" alt="全渠道电商营销" />
        </div>
        <h3 class="card-title">全渠道电商营销</h3>
        <div class="card-items">
          <p>小程序</p>
          <p>H5</p>
          <p>兼容APP</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;

.service-section {
  width: 100%;
  padding: 80px 0;
  background: #f5f7fa;
  text-align: center;

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

  .service-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .service-card {
    background: #fff;
    border-radius: 8px;
    padding: 30px;
    text-align: left;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    cursor: pointer;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);

      .icon-wrapper {
        img {
          transform: scale(1.1);
        }
      }
    }

    .icon-wrapper {
      width: 60px;
      height: 60px;
      margin-bottom: 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transition: transform 0.3s ease;
      }
    }

    .card-title {
      font-size: 24px;
      color: $color-secondary;
      font-weight: bold;
      margin-bottom: 16px;
    }

    .card-items {
      p {
        font-size: 16px;
        color: $color-dark;
        opacity: 0.8;
        margin-bottom: 8px;
        line-height: 1.6;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}

@media (max-width: 1200px) {
  .service-section {
    .service-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media (max-width: 768px) {
  .service-section {
    .service-grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>
