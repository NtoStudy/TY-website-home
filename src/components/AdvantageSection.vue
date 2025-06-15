<template>
  <section class="advantage-section">
    <h2 class="section-title">我们的优势</h2>
    <div class="section-en">—— ADVANTAGE ——</div>
    <p class="section-desc">
      淘鱼科技拥有这优秀的开发团队我们提供APP开发的一体化解决方案，让您的项目从构念到产品快速启动，轻松落地！
    </p>

    <!-- 桌面端优势展示 -->
    <div class="advantage-container desktop-view">
      <!-- 中心点 -->
      <div class="center-point"></div>

      <!-- 五个优势点 -->
      <div class="advantage-item top-left">
        <div class="icon-box">
          <img src="/advantage/1.png" alt="技术" />
        </div>
        <p class="advantage-text">以技术为核心，专一专注开发行业</p>
      </div>

      <div class="advantage-item top-right">
        <div class="icon-box">
          <img src="/advantage/1.png" alt="服务" />
        </div>
        <p class="advantage-text">没有套路，技术人员直接对接</p>
      </div>

      <div class="advantage-item bottom-left">
        <div class="icon-box">
          <img src="/advantage/1.png" alt="真诚" />
        </div>
        <p class="advantage-text">真诚服务，不为了开发而开发</p>
      </div>

      <div class="advantage-item bottom-right">
        <div class="icon-box">
          <img src="/advantage/1.png" alt="诚信" />
        </div>
        <p class="advantage-text">诚信无价，不辜负每一份信任</p>
      </div>

      <div class="advantage-item bottom-center">
        <div class="icon-box">
          <img src="/advantage/1.png" alt="共赢" />
        </div>
        <p class="advantage-text">共同发展，与客户共同成长</p>
      </div>
    </div>

    <!-- 移动端优势展示 -->
    <div class="mobile-view">
      <div class="mobile-advantages">
        <!-- 第一行 - 1个 -->
        <div class="advantage-row">
          <div class="mobile-advantage-item">
            <div class="mobile-text">
             
              <p>以技术为核心，专一专注开发行业 </p>
            </div>
          </div>
        </div>
        
        <!-- 第二行 - 2个 -->
        <div class="advantage-row">
          <div class="mobile-advantage-item">
            <div class="mobile-text">
              <p>技术人员一对一对接</p>
            </div>
          </div>
          
          <div class="mobile-advantage-item">
            <div class="mobile-text">
              <p>坚持以诚信为本</p>
            </div>
          </div>
        </div>
        
        <!-- 第三行 - 2个 -->
        <div class="advantage-row">
          <div class="mobile-advantage-item">
            <div class="mobile-text">
              <p>真诚服务，没有套路</p>
            </div>
          </div>
          
          <div class="mobile-advantage-item">
            <div class="mobile-text">
              <p>与顾客共同发展</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;

.advantage-section {
  width: 100%;
  padding: 80px 0;
  background: $home-bg;
  text-align: center;
  box-sizing: border-box;

  @include respond-to(md) {
    padding: 50px 0;
  }

  @include respond-to(sm) {
    padding: 40px 0;
  }

  .section-title {
    font-size: clamp(24px, 5vw, 36px);
    color: $color-secondary;
    font-weight: bold;
    margin-bottom: 14px;
  }

  .section-en {
    font-size: clamp(16px, 3vw, 20px);
    color: $color-secondary;
    opacity: 0.6;
    margin-bottom: 24px;
  }

  .section-desc {
    max-width: 800px;
    margin: 0 auto 60px;
    font-size: $font-size-text;
    line-height: 1.8;
    color: $color-dark;
    opacity: 0.8;
    padding: 0 16px;
    box-sizing: border-box;
    
    @include respond-to(md) {
      display: none; // 在移动端隐藏
    }
  }

  // 桌面端优势展示
  .advantage-container {
    position: relative;
    width: 100%;
    max-width: $main-width;
    height: 600px;
    margin: 0 auto;
    box-sizing: border-box;

    @include respond-to(lg) {
      height: 500px;
    }

    @include respond-to(md) {
      display: none; // 在移动端隐藏
    }

    // 中心点
    .center-point {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 12px;
      height: 12px;
      background: $color-primary;
      border-radius: 50%;
      box-shadow: 0 0 0 8px rgba($color-primary, 0.1);
    }

    // 优势项通用样式
    .advantage-item {
      position: absolute;
      display: flex;
      align-items: center;
      gap: 16px;

      .icon-box {
        width: 80px;
        height: 80px;
        background: $color-primary;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba($color-primary, 0.2);

        @include respond-to(lg) {
          width: 60px;
          height: 60px;
        }

        img {
          width: 40px;
          height: 40px;
          object-fit: contain;

          @include respond-to(lg) {
            width: 30px;
            height: 30px;
          }
        }
      }

      .advantage-text {
        font-size: clamp(14px, 2vw, 18px);
        color: $color-dark;
        text-align: left;
        max-width: 200px;
        line-height: 1.5;
      }
    }

    // 定位每个优势项
    .top-left {
      top: 20%;
      left: 10%;

      @include respond-to(lg) {
        left: 5%;
      }
    }

    .top-right {
      top: 20%;
      right: 10%;

      @include respond-to(lg) {
        right: 5%;
      }
    }

    .bottom-left {
      bottom: 30%;
      left: 5%;
    }

    .bottom-right {
      bottom: 30%;
      right: 5%;
    }

    .bottom-center {
      bottom: 10%;
      left: 50%;
      transform: translateX(-50%);
    }

    // 添加连接线效果
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      height: 90%;
      border: 2px dashed rgba($color-primary, 0.2);
      border-radius: 50%;
    }
  }

  // 移动端样式
  .mobile-view {
    display: none;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 16px;
    box-sizing: border-box;

    @include respond-to(md) {
      display: block;
    }

    .mobile-advantages {
      display: grid;
      grid-template-columns: 1fr;
      gap: 15px;
      
      .advantage-row {
        display: grid;
        gap: 15px;
        
        &:first-child {
          grid-template-columns: 1fr;
        }
        
        &:not(:first-child) {
          grid-template-columns: 1fr 1fr;
        }
      }
      
      .mobile-advantage-item {
        position: relative;
        height: 120px;
        border-radius: 8px;
        overflow: hidden;
        background: url('/bbgg.png') center center/cover no-repeat;
        
        &::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.7));
        }
        
        .mobile-text {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          padding: 15px;
          color: #fff;
          z-index: 1;
          
          h4 {
            font-size: 16px;
            margin-bottom: 5px;
            
            @include respond-to(sm) {
              font-size: 15px;
            }
          }
          
          p {
            font-size: 14px;
            opacity: 0.9;
            
            @include respond-to(sm) {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>
