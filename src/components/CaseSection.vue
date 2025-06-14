<template>
  <section class="case-section">
    <h2 class="section-title">案例展示</h2>
    <div class="section-en">—— CASE PRESENTATION ——</div>
    <p class="section-desc">
      淘鱼科技近有这优秀的开发团队我们提供APP开发的一体化解决方案，让您的项目从构念到产品快速启动、轻松落地！
    </p>

    <div class="case-container">
      <!-- 查看更多 -->
      <div class="view-more">
        查看更多 >
      </div>

      <!-- 左箭头 -->
      <div class="slider-arrow left" @click="prevSlide">
        <i class="arrow-icon">&#10094;</i>
      </div>

      <!-- 右箭头 -->
      <div class="slider-arrow right" @click="nextSlide">
        <i class="arrow-icon">&#10095;</i>
      </div>

      <!-- 轮播内容 -->
      <div class="case-slider" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div v-for="(item, index) in cases" :key="index" class="case-item">
          <!-- 左侧预览图 -->
          <div class="left-preview" v-if="item.leftPreview">
            <img :src="item.leftPreview" alt="预览图" />
          </div>

          <!-- 中央卡片 -->
          <div class="case-card">
            <div class="card-info">
              <h3 class="card-title">{{ item.title }}</h3>
              <div class="card-content">
                <p class="project-name">项目名称：{{ item.projectName }}</p>
                <p class="project-desc">项目简介：{{ item.description }}</p>
                <button class="detail-btn">了解详情</button>
              </div>
            </div>

            <div class="card-preview">
              <img :src="item.cardPreview" alt="预览图" />
            </div>
          </div>

          <!-- 右侧预览图 -->
          <div class="right-preview">
            <img :src="item.rightPreview" alt="预览图" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const currentSlide = ref(0)

const cases = [
  {
    title: '爱阅读app',
    projectName: '爱阅读',
    description: '爱阅读是一款为用户提供全方位阅读体验的智能阅读平台，我们致力于帮助用户探索、获取和享受阅读的乐趣。',
    leftPreview: '/case/1.png',
    rightPreview: '/case/1.png',
    cardPreview: '/case/1.png'
  },

]

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % cases.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? cases.length - 1 : currentSlide.value - 1
}
</script>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;

.case-section {
  width: 100%;
  background: #f5f7fa;
  padding: 80px 0;
  text-align: center;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  position: relative;

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

  .case-container {
    position: relative;
    background-image: url("/bbgg.png");
    max-width: 1440px;
    margin: 0 auto;
    height: 600px;
    overflow: hidden;

    .slider-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 40px;
      height: 40px;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 10;
      transition: all 0.3s ease;
      border: 1px solid #eee;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

      &:hover {
        background: #f5f5f5;
      }

      .arrow-icon {
        color: $color-primary;
        font-size: 20px;
        font-weight: bold;
      }

      &.left {
        left: calc(50% - 600px + 20px);
      }

      &.right {
        right: calc(50% - 600px + 20px);
      }
    }

    .view-more {
      position: absolute;
      top: 20px;
      right: 40px;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
      z-index: 10;
    }

    .case-slider {
      display: flex;
      transition: transform 0.5s ease;
      height: 100%;
      width: 100%;
    }

    .case-item {
      flex: 0 0 100%;
      display: flex;
      position: relative;
      padding: 0;
      justify-content: center;
      align-items: flex-end;
    }

    .left-preview {
      flex: 0 0 25%;
      height: 200px;
      display: flex;
      justify-content: flex-end;
      padding-right: 20px;
      margin-bottom: 30px;


      img {
        max-width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      }
    }

    .case-card {
      flex: 0 0 40%;
      background: #fff;
      border-radius: 8px 8px 0 0;
      padding: 40px 40px 0 40px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      text-align: left;
      height: 450px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      position: relative;

      .card-info {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;

        .card-title {
          font-size: 32px;
          color: $color-dark;
          margin-bottom: 20px;
          font-weight: bold;
        }

        .card-content {
          display: flex;
          flex-direction: column;
        }

        .project-name {
          font-size: 18px;
          color: $color-dark;
          margin-bottom: 10px;
        }

        .project-desc {
          font-size: 16px;
          color: $color-dark;
          opacity: 0.8;
          line-height: 1.6;
          margin-bottom: 10px;
        }

        .detail-btn {
          align-self: flex-start;
          padding: 12px 30px;
          background-color: $color-primary;
          color: #fff;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s;

          &:hover {
            background-color: darken($color-primary, 10%);
          }
        }
      }

      .card-preview {
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: center;
        margin-bottom: 30px;

        img {
          max-width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }
      }
    }

    .right-preview {
      flex: 0 0 30%;
      height: 200px;
      display: flex;
      justify-content: flex-start;
      padding-left: 20px;
      margin-bottom: 30px;

      img {
        max-width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      }
    }
  }
}


</style>
