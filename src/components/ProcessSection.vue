<template>
  <section class="process-section">
    <h2 class="section-title">合作流程</h2>
    <div class="section-en">PROCESS</div>
    <p class="section-desc">
      淘鱼科技近有专业的项目管理流程，为每个项目保驾护航。保证项目按时，保质的交付
    </p>

    <div class="process-container">
      <!-- 流程图主体 -->
      <img src="/coo/bg.png" alt="合作流程" class="process-flow">
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;

.process-section {
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

  .process-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 8px;
    position: relative;
  }

  .process-flow {
    height: 400px;
    position: relative;
    padding: 40px 0;

    // 主流程线
    .main-line {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: $color-primary;
      transform: translateY(-50%);
      z-index: 1;
    }

    // 波浪线
    .wave-line {
      position: absolute;
      left: 0;
      width: 100%;
      height: 40px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      z-index: 1;

      &.top-wave {
        top: 30%;
        background-image: url('//TODO: 上方波浪线图片');
        opacity: 0.3;
      }

      &.bottom-wave {
        bottom: 30%;
        background-image: url('//TODO: 下方波浪线图片');
        opacity: 0.3;
      }
    }

    // 流程节点
    .process-node {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 2;

      .node-point {
        width: 80px;
        height: 80px;
        background: #e8f0fb;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
        position: relative;

        &.active {
          background: $color-primary;

          .node-icon {
            img {
              filter: brightness(10);
            }
          }
        }

        .node-icon {
          width: 40px;
          height: 40px;

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }

      .node-label {
        font-size: 16px;
        color: $color-secondary;
        font-weight: 500;
      }

      // 定位各个节点
      &.node-1 {
        left: 5%;
        top: 50%;
        transform: translateY(-160%);
      }

      &.node-2 {
        left: 18%;
        top: 50%;
        transform: translateY(60%);
      }

      &.node-3 {
        left: 31%;
        top: 50%;
        transform: translateY(-160%);
      }

      &.node-4 {
        left: 44%;
        top: 50%;
        transform: translateY(60%);
      }

      &.node-5 {
        left: 57%;
        top: 50%;
        transform: translateY(-160%);
      }

      &.node-6 {
        left: 70%;
        top: 50%;
        transform: translateY(60%);
      }

      &.node-7 {
        left: 83%;
        top: 50%;
        transform: translateY(-160%);
      }

      &.node-8 {
        left: 95%;
        top: 50%;
        transform: translateY(60%);
      }
    }
  }
}

@media (max-width: 1200px) {
  .process-section {
    .process-flow {
      overflow-x: auto;
      width: 100%;

      .process-node {
        &.node-1 { left: 80px; }
        &.node-2 { left: 240px; }
        &.node-3 { left: 400px; }
        &.node-4 { left: 560px; }
        &.node-5 { left: 720px; }
        &.node-6 { left: 880px; }
        &.node-7 { left: 1040px; }
        &.node-8 { left: 1200px; }
      }
    }
  }
}
</style>
