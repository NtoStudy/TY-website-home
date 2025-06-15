<template>
  <section class="service-section">
    <h2 class="section-title">我们的服务</h2>
    <div class="section-en">—— SERVICES ——</div>
    <p class="section-desc">
      淘鱼科技近几年APP外包开发经验，为企业提供专业的APP软件开发、电商平台开发、高端网站制作、小程序商城开发等服务，服务企业超过100家
    </p>

    <!-- 桌面端服务展示 -->
    <div class="service-grid desktop-view">
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
    
    <!-- 移动端服务展示 -->
    <div class="mobile-services mobile-view">
      <div class="mobile-service-row">
        <div class="mobile-service-item">
          <div class="mobile-icon">
            <img src="/service/1.png" alt="APP定制" />
          </div>
          <p class="mobile-title">APP定制</p>
        </div>
        
        <div class="mobile-service-item">
          <div class="mobile-icon">
            <img src="/service/1.png" alt="小程序制作" />
          </div>
          <p class="mobile-title">小程序制作</p>
        </div>
        
        <div class="mobile-service-item">
          <div class="mobile-icon">
            <img src="/service/1.png" alt="高端网页" />
          </div>
          <p class="mobile-title">高端网页</p>
        </div>
      </div>
      
      <div class="mobile-service-row">
        <div class="mobile-service-item">
          <div class="mobile-icon">
            <img src="/service/1.png" alt="智能物联" />
          </div>
          <p class="mobile-title">智能物联</p>
        </div>
        
        <div class="mobile-service-item">
          <div class="mobile-icon">
            <img src="/service/1.png" alt="软件定制" />
          </div>
          <p class="mobile-title">软件定制</p>
        </div>
        
        <div class="mobile-service-item">
          <div class="mobile-icon">
            <img src="/service/1.png" alt="电商营销" />
          </div>
          <p class="mobile-title">电商营销</p>
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
  padding: 100px 0;
  background: #f5f7fa;
  text-align: center;
  box-sizing: border-box;

  @include respond-to(md) {
    padding: 50px 0;
  }

  @include respond-to(sm) {
    padding: 40px 0;
  }

  .section-title {
    font-size: $font-size-title;
    color: $color-dark;
    font-weight: bold;
    margin-bottom: 20px;

    @include respond-to(md) {
      font-size: clamp(24px, 5vw, 36px);
      margin-bottom: 14px;
    }
  }

  .section-en {
    font-size: $font-size-text;
    color: $color-secondary;
    opacity: 0.6;
    margin-bottom: 40px;

    @include respond-to(md) {
      font-size: clamp(16px, 3vw, 20px);
      margin-bottom: 24px;
    }
  }

  .section-desc {
    max-width: 1000px;
    margin: 0 auto 80px;
    font-size: $font-size-text;
    line-height: 1.8;
    color: $color-dark;
    opacity: 0.8;
    padding: 0 16px;
    box-sizing: border-box;

    @include respond-to(md) {
      display: none;
    }
  }

  // 桌面端服务展示
  .desktop-view {
    display: block;
    
    @include respond-to(md) {
      display: none !important;
    }
  }
  
  .service-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    width: 100%;
    max-width: $main-width;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;

    @include respond-to(lg) {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }

  .service-card {
    background: #fff;
    border-radius: 12px;
    padding: 40px;
    text-align: left;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    box-sizing: border-box;

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
      width: 80px;
      height: 80px;
      margin-bottom: 30px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transition: transform 0.3s ease;
      }
    }

    .card-title {
      font-size: $font-size-subtitle;
      color: $color-dark;
      font-weight: bold;
      margin-bottom: 20px;
      line-height: 1.4;
    }

    .card-items {
      p {
        font-size: $font-size-text;
        color: $color-dark;
        opacity: 0.8;
        margin: 12px 0;
        line-height: 1.6;
      }
    }
  }
  
  // 移动端服务展示
  .mobile-view {
    display: none;
    
    @include respond-to(md) {
      display: block;
    }
  }
  
  .mobile-services {
    display: none;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
    
    @include respond-to(md) {
      display: block;
    }
    
    .mobile-service-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
    
    .mobile-service-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 30%;
      
      .mobile-icon {
        width: 70px;
        height: 70px;
        background: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 12px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        
        @include respond-to(sm) {
          width: 60px;
          height: 60px;
        }
        
        img {
          width: 40px;
          height: 40px;
          object-fit: contain;
          
          @include respond-to(sm) {
            width: 35px;
            height: 35px;
          }
        }
      }
      
      .mobile-title {
        font-size: 16px;
        color: $color-secondary;
        font-weight: 500;
        margin: 0;
        
        @include respond-to(sm) {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
