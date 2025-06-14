<template>
  <section class="about-section">
    <div class="about-content">
      <div class="about-info">
        <h2 class="about-title">淘鱼科技有限公司</h2>
        <p class="about-desc">
          淘鱼科技有限公司成立于2016年，是一家专注于互联网技术研发与服务的高新技术企业。公司致力于为客户提供一站式的互联网解决方案，涵盖网站建设、系统开发、移动应用、云服务等多个领域。
        </p>
        <div class="about-stats">
          <div class="stat-item">
            <span class="stat-num">6+</span>
            <span class="stat-label">年行业经验</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">3000+</span>
            <span class="stat-label">服务客户</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">3000+</span>
            <span class="stat-label">成功案例</span>
          </div>
        </div>
      </div>
      <div class="about-img">
        <!-- TODO: 公司大楼图片资源 -->
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;
.about-section {
  width: 100%;
  background: #fff;
  padding: 64px 0 48px 0;
  display: flex;
  justify-content: center;
  .about-content {
    width: $main-width;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 48px;
    .about-info {
      flex: 1;
      .about-title {
        font-size: 32px;
        color: $color-secondary;
        font-weight: 700;
        margin-bottom: 18px;
      }
      .about-desc {
        color: $color-dark;
        margin-bottom: 32px;
        line-height: 1.8;
      }
      .about-stats {
        display: flex;
        gap: 40px;
        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          .stat-num {
            font-size: 32px;
            color: $color-primary;
            font-weight: bold;
            margin-bottom: 4px;
          }
          .stat-label {
            font-size: 16px;
            color: $color-dark;
            opacity: 0.7;
          }
        }
      }
    }
    .about-img {
      flex: 1;
      display: flex;
      justify-content: center;
      img {
        width: 320px;
        height: 400px;
        object-fit: cover;
        border-radius: 12px;
        box-shadow: 0 4px 24px rgba(91,157,248,0.10);
      }
    }
  }
}
</style>
