<template>
  <section class="process-section">
    <h2 class="section-title">合作流程</h2>
    <div class="section-en">PROCESS</div>
    <p class="section-desc">
      淘鱼科技近有专业的项目管理流程，为每个项目保驾护航。保证项目按时，保质的交付
    </p>

    <div class="process-container">
      <svg class="process-path" viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg">
        <!-- 主要蓝色线 - 最粗最显眼 -->
        <path class="main-path"
              d="M20,200 C80,200 120,140 180,140 C240,140 280,200 340,200 C400,200 440,140 500,140 C560,140 600,200 660,200 C720,200 760,140 820,140 C880,140 920,200 980,200 C1040,200 1080,140 1140,140 C1160,140 1180,170 1180,200"
              fill="none" stroke="#4A90E2" stroke-width="4"
              stroke-linecap="round"/>

        <!-- 上方浅蓝色线 -->
        <path class="top-path"
              d="M20,140 C80,140 120,60 180,60 C240,60 280,140 340,140 C400,140 440,60 500,60 C560,60 600,140 660,140 C720,140 760,60 820,60 C880,60 920,140 980,140 C1040,140 1080,60 1140,60 C1160,60 1180,100 1180,140"
              fill="none" stroke="#B3D7FF" stroke-width="2"
              stroke-linecap="round"/>

        <!-- 下方浅蓝色线 -->
        <path class="bottom-path"
              d="M20,260 C80,260 120,340 180,340 C240,340 280,260 340,260 C400,260 440,340 500,340 C560,340 600,260 660,260 C720,260 760,340 820,340 C880,340 920,260 980,260 C1040,260 1080,340 1140,340 C1160,340 1180,300 1180,260"
              fill="none" stroke="#D6EBFF" stroke-width="2"
              stroke-linecap="round"/>

        <!-- 节点圆点 - 主线上的点 -->
        <circle cx="180" cy="140" r="8" fill="white" stroke="#4A90E2" stroke-width="2" class="path-dot"/>
        <circle cx="340" cy="200" r="8" fill="white" stroke="#4A90E2" stroke-width="2" class="path-dot"/>
        <circle cx="500" cy="140" r="8" fill="white" stroke="#4A90E2" stroke-width="2" class="path-dot"/>
        <circle cx="660" cy="200" r="8" fill="white" stroke="#4A90E2" stroke-width="2" class="path-dot"/>
        <circle cx="820" cy="140" r="8" fill="white" stroke="#4A90E2" stroke-width="2" class="path-dot"/>
        <circle cx="980" cy="200" r="8" fill="white" stroke="#4A90E2" stroke-width="2" class="path-dot"/>
        <circle cx="1140" cy="140" r="8" fill="white" stroke="#4A90E2" stroke-width="2" class="path-dot"/>

      </svg>

      <div class="process-steps">
        <div class="process-step">
          <div class="step-icon">
            <span class="icon-placeholder">📋</span>
          </div>
          <div class="step-content">
            <h3>需求分析</h3>
            <p>深入了解需求<br/>制定解决方案</p>
          </div>
        </div>

        <div class="process-step">
          <div class="step-icon">
            <span class="icon-placeholder">📝</span>
          </div>
          <div class="step-content">
            <h3>方案策划</h3>
            <p>项目评估<br/>资源规划</p>
          </div>
        </div>

        <div class="process-step">
          <div class="step-icon">
            <span class="icon-placeholder">🎨</span>
          </div>
          <div class="step-content">
            <h3>界面设计</h3>
            <p>UI/UX设计<br/>交互设计</p>
          </div>
        </div>

        <div class="process-step">
          <div class="step-icon">
            <span class="icon-placeholder">📱</span>
          </div>
          <div class="step-content">
            <h3>前端制作</h3>
            <p>页面开发<br/>功能实现</p>
          </div>
        </div>

        <div class="process-step">
          <div class="step-icon">
            <span class="icon-placeholder">💻</span>
          </div>
          <div class="step-content">
            <h3>程序开发</h3>
            <p>后端开发<br/>接口实现</p>
          </div>
        </div>

        <div class="process-step">
          <div class="step-icon">
            <span class="icon-placeholder">🔍</span>
          </div>
          <div class="step-content">
            <h3>检查测试</h3>
            <p>功能测试<br/>性能优化</p>
          </div>
        </div>

        <div class="process-step">
          <div class="step-icon">
            <span class="icon-placeholder">🚀</span>
          </div>
          <div class="step-content">
            <h3>交付项目</h3>
            <p>部署上线<br/>文档交付</p>
          </div>
        </div>

        <div class="process-step">
          <div class="step-icon">
            <span class="icon-placeholder">🛠️</span>
          </div>
          <div class="step-content">
            <h3>售后服务</h3>
            <p>技术支持<br/>运维保障</p>
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

.process-section {
  width: 100%;
  background: #f5f7fa;
  text-align: center;
  padding: 80px 0;

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

  .process-container {
    width: 100%;
    max-width: $main-width;
    margin: 0 auto;
    position: relative;
    height: 400px;
    overflow: hidden;
  }

  .process-path {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    z-index: 1;

    .main-path {
      stroke-dasharray: 2000;
      stroke-dashoffset: 2000;
      animation: draw-path 3s ease-out forwards;
    }

    .top-path {
      stroke-dasharray: 2000;
      stroke-dashoffset: 2000;
      animation: draw-path 3s ease-out 0.3s forwards;
      opacity: 0.7;
    }

    .bottom-path {
      stroke-dasharray: 2000;
      stroke-dashoffset: 2000;
      animation: draw-path 3s ease-out 0.6s forwards;
      opacity: 0.5;
    }

    .path-dot {
      opacity: 0;
      animation: fade-in 0.5s ease-out forwards;
      filter: drop-shadow(0 0 4px rgba(74, 144, 226, 0.3));

      &:nth-child(4) {
        animation-delay: 0.8s;
      }

      &:nth-child(5) {
        animation-delay: 1.2s;
      }

      &:nth-child(6) {
        animation-delay: 1.6s;
      }

      &:nth-child(7) {
        animation-delay: 2.0s;
      }

      &:nth-child(8) {
        animation-delay: 2.4s;
      }
    }
  }

  .process-steps {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 20px;
    padding: 0 40px;
    margin-top: 30px;

    .process-step {
      display: flex;
      flex-direction: column;
      align-items: center;
      opacity: 0;
      transform: translateY(20px);
      animation: fade-in 0.5s ease-out forwards;

      &:nth-child(1) {
        animation-delay: 0.2s;
        margin-top: 160px;
      }

      &:nth-child(2) {
        animation-delay: 0.4s;
        margin-top: 80px;
      }

      &:nth-child(3) {
        animation-delay: 0.6s;
        margin-top: 160px;
      }

      &:nth-child(4) {
        animation-delay: 0.8s;
        margin-top: 80px;
      }

      &:nth-child(5) {
        animation-delay: 1.0s;
        margin-top: 160px;
      }

      &:nth-child(6) {
        animation-delay: 1.2s;
        margin-top: 80px;
      }

      &:nth-child(7) {
        animation-delay: 1.4s;
        margin-top: 160px;
      }

      &:nth-child(8) {
        animation-delay: 1.6s;
        margin-top: 80px;
      }

      .step-icon {
        width: 80px;
        height: 80px;
        background: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        margin-bottom: 16px;
        transition: transform 0.3s ease;

        .icon-placeholder {
          font-size: 32px;
          line-height: 1;
        }

        &:hover {
          transform: translateY(-5px);
        }
      }

      .step-content {
        h3 {
          font-size: 18px;
          color: $color-secondary;
          margin-bottom: 8px;
          font-weight: 600;
        }

        p {
          font-size: 14px;
          color: $color-dark;
          opacity: 0.8;
          line-height: 1.6;
        }
      }
    }
  }
}

@keyframes move-dash {
  to {
    stroke-dashoffset: -40;
  }
}

@keyframes move-dash-slow {
  to {
    stroke-dashoffset: -26;
  }
}

@keyframes draw-path {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>
