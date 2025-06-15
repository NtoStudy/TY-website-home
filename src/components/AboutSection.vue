<template>
  <section class="about-section">
    <h2 class="about-title">关于我们</h2>
    <div class="about-en">—— ABOUT US ——</div>

    <!-- 桌面端内容 -->
    <div class="about-content desktop-content">
      <div class="about-info">
        <h2 class="about-title">淘鱼科技有限公司</h2>
        <p class="about-desc">
          淘鱼科技有限公司成立于2018年，是一家以移动互联网开发为主的公司。我们专注于网页开发、小程序开发以及iOS和Android等APP的定制开发。
          <br>
          <br>
          作为一支年轻、热情、积极进取、勇于创新、热爱思考的团队，我们拥有丰富的软件开发经验、高素质的项目管理能力和专业扎实的技术。我们以诚信经营为原则，按照客户需求提供优质的个性化服务，始终将项目负责到底，致力于成为客户的技术团队。紧跟网络时代的发展潮流，我们不断创新，策划出优秀的APP产品，以赢得用户的赞许。
        </p>
        <div class="about-stats">
          <div class="stat-item">
            <span class="stat-num">6+</span>
            <br>
            <span class="stat-label">公司成立</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">3000+</span>
            <br>
            <span class="stat-label">交付项目</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">3000+</span>
            <br>
            <span class="stat-label">服务客户</span>
          </div>
        </div>
      </div>
      <div class="about-img">
        <img src="/home/about.png" alt="公司大楼" class="building-img"/>
      </div>
    </div>

    <!-- 移动端内容 -->
    <div class="about-content mobile-content">
      <div class="about-info">
        <h2 class="about-title">淘鱼科技有限公司</h2>
        <p class="about-slogan">强大自己是解决问题的唯一方式</p>
        <p class="about-desc">
          淘鱼科技有限公司成立于2018年，是一家以移动互联网开发为主的公司。我们专注于网页开发、小程序开发以及iOS和Android等APP的定制开发。我们以诚信经营为原则，始终将项目负责到底，致力于成为客户的技术团队。
        </p>

      </div>
      <div class="about-img">
        <img src="/home/about.png" alt="公司大楼" class="building-img"/>
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
  background: #f5f7fa;
  padding: 64px 0 48px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  @include respond-to(md) {
    padding: 50px 16px 40px;
  }

  @include respond-to(sm) {
    padding: 40px 16px 30px;
  }

  .about-title {
    font-size: 36px;
    color: $color-secondary;
    font-weight: 600;
    margin-bottom: 8px;
    letter-spacing: 2px;
    text-align: center;

    @include respond-to(md) {
      font-size: 30px;
    }

    @include respond-to(sm) {
      font-size: 24px;
      margin-bottom: 6px;
    }
  }

  .about-en {
    font-size: 20px;
    color: $color-secondary;
    letter-spacing: 2px;
    opacity: 0.7;
    margin-bottom: 32px;
    text-align: center;

    @include respond-to(md) {
      font-size: 18px;
      margin-bottom: 24px;
    }

    @include respond-to(sm) {
      font-size: 16px;
      margin-bottom: 20px;
    }
  }

  // 桌面端内容
  .desktop-content {
    display: flex;

    @include respond-to(md) {
      display: none; // 在移动端隐藏
    }
  }

  // 移动端内容
  .mobile-content {
    display: none;

    @include respond-to(md) {
      display: flex; // 在移动端显示
    }
  }

  .about-content {
    width: 100%;
    max-width: $main-width;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    box-sizing: border-box;
    padding: 0 16px;

    @include respond-to(lg) {
      gap: 30px;
    }

    @include respond-to(md) {
      gap: 20px;
    }

    .about-info {
      flex: 3;

      @include respond-to(md) {
        flex: 2;
      }

      .about-title {
        font-size: 32px;
        color: $color-secondary;
        font-weight: 700;
        margin-bottom: 18px;
        text-align: left;

        @include respond-to(md) {
          font-size: 22px;
          margin-bottom: 10px;
        }
      }

      .about-slogan {
        font-size: 18px;
        color: $color-dark;
        margin-bottom: 16px;
        font-weight: 500;

        @include respond-to(md) {
          font-size: 16px;
          margin-bottom: 12px;
        }

        @include respond-to(sm) {
          font-size: 14px;
          margin-bottom: 10px;
        }
      }

      .about-desc {
        color: $color-dark;
        margin-bottom: 32px;
        line-height: 1.6;
        font-size: 16px;

        @include respond-to(md) {
          margin-bottom: 20px;
          font-size: 14px;
          line-height: 1.5;
        }
      }

      .about-stats {
        display: flex;
        gap: 40px;

        @include respond-to(md) {
          gap: 15px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          .stat-num {
            font-size: 32px;
            color: $color-black;
            font-weight: bold;
            margin-bottom: 4px;

            @include respond-to(md) {
              font-size: 20px;
              margin-bottom: 2px;
            }
          }

          .stat-label {
            font-size: 16px;
            color: $color-dark;
            opacity: 0.7;

            @include respond-to(md) {
              font-size: 12px;
            }
          }
        }
      }
    }

    .about-img {
      flex: 2;
      display: flex;
      justify-content: center;

      @include respond-to(md) {
        flex: 1;
      }

      img {
        width: 320px;
        height: 400px;
        object-fit: cover;
        border-radius: 12px;
        box-shadow: 0 4px 24px rgba(91, 157, 248, 0.10);

        @include respond-to(lg) {
          width: 280px;
          height: 350px;
        }

        @include respond-to(md) {
          width: 140px;
          height: 180px;
        }
      }
    }
  }
}
</style>
