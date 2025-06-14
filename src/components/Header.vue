<template>
  <header class="header">
    <div class="header-top">
      <span>欢迎来到淘鱼科技有限公司</span>
      <div class="header-actions">
        <span class="hotline">
          开发咨询热线：400-808-6367
        </span>
        <button class="login">
          登录
        </button>
        <button class="register">
          注册
        </button>
      </div>
    </div>
    <nav class="navbar">
      <div class="logo-area">
        <img src="/img.png" alt="logo" class="logo" />
        <span class="company-name">淘鱼科技</span>
      </div>
      <ul class="nav-list">
        <li class="nav-item active">
          首页
        </li>
        <li class="nav-item">
          服务项目
        </li>
        <li class="nav-item">
          经典案例
        </li>
        <li class="nav-item">
          关于淘鱼
        </li>
        <li class="nav-item">
          联系我们
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>

// 不需要额外引入
// 不需要额外引入
</script>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;

// 图标字体定义
@font-face {
  font-family: 'iconfont';
  src: url('//at.alicdn.com/t/c/font_4423831_ypjzlxzrm1.woff2?t=1714374522949') format('woff2');
}

// 图标基础样式
[class^="icon-"] {
  font-family: "iconfont" !important;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-right: 6px;
}

// 图标定义
.icon-location:before { content: "\e790"; }
.icon-phone:before { content: "\e7e3"; }
.icon-user:before { content: "\e7ae"; }
.icon-user-plus:before { content: "\e7b1"; }
.icon-home:before { content: "\e7c6"; }
.icon-service:before { content: "\e764"; }
.icon-case:before { content: "\e7b2"; }
.icon-info:before { content: "\e7ca"; }
.icon-contact:before { content: "\e77a"; }

.header {
  width: 100%;
  .header-top {
    background: $color-secondary;
    color: #fff;
    font-size: 14px;
    display: flex;
    height: 70px;
    justify-content: space-between;
    align-items: center;
    padding: 0 10vw;

    i {
      vertical-align: middle;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 16px;

      .hotline {
        display: flex;
        align-items: center;
      }

      .login, .register {
        background: none;
        border: none;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
        margin-left: 8px;
        display: flex;
        align-items: center;

        &:hover {
          opacity: 0.9;
        }
      }

      .register {
        border-left: 1px solid rgba(255,255,255,0.3);
        padding-left: 8px;
      }
    }
  }

  .navbar {
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    padding: 0 10vw;
    box-shadow: 0 2px 8px rgba(91,157,248,0.04);

    .logo-area {
      display: flex;
      align-items: center;
      .logo {
        width: 64px;
        height: 64px;
        margin-right: 8px;
      }
      .company-name {
        font-size: 24px;
        color: $color-secondary;
        font-weight: bold;
        letter-spacing: 2px;
      }
    }

    .nav-list {
      display: flex;
      gap: 40px;

      .nav-item {
        font-size: $font-size-nav;
        color: $color-dark;
        cursor: pointer;
        position: relative;
        display: flex;
        align-items: center;

        i {
          font-size: 18px;
        }

        &.active,
        &:hover {
          color: $color-secondary;
        }

        &.active::after {
          content: '';
          display: block;
          width: 60%;
          height: 3px;
          background: $color-secondary;
          border-radius: 2px;
          position: absolute;
          left: 20%;
          bottom: -8px;
        }
      }
    }
  }
}
</style>
