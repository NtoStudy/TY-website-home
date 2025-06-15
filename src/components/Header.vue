<template>
  <header class="header">
    <div class="header-top" >
      <span class="welcome-text">欢迎来到淘鱼科技有限公司</span>
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
        <img src="/img.png" alt="logo" class="logo"/>
        <span class="company-name">淘鱼科技</span>
      </div>

      <!-- 移动端菜单按钮 -->
      <div class="mobile-menu-toggle" @click="toggleMobileMenu">
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <!-- 导航菜单 -->
      <ul class="nav-list" :class="{ 'mobile-active': mobileMenuVisible }">
        <li v-for="(item, index) in navItems"
            :key="index"
            class="nav-item"
            :class="{ 'active': item.active }">
          {{ item.name }}
        </li>
      </ul>
    </nav>
    <MobileNav ref="mobileNav" />
  </header>
</template>

<script setup>
import { ref } from 'vue'
import MobileNav from './mobile/MobileNav.vue'

// 控制移动端菜单显示
const mobileMenuVisible = ref(false)

const mobileNav = ref(null)

// 切换移动端菜单
const toggleMobileMenu = () => {
  mobileMenuVisible.value = !mobileMenuVisible.value
  mobileNav.value?.toggleMenu()
}

// 导航菜单项
const navItems = [
  { name: '首页', active: true },
  { name: '服务内容', active: false },
  { name: '经典案例', active: false },
  { name: '关于我们', active: false },
  { name: '联系我们', active: false }
]
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
.icon-location:before {
  content: "\e790";
}

.icon-phone:before {
  content: "\e7e3";
}

.icon-user:before {
  content: "\e7ae";
}

.icon-user-plus:before {
  content: "\e7b1";
}

.icon-home:before {
  content: "\e7c6";
}

.icon-service:before {
  content: "\e764";
}

.icon-case:before {
  content: "\e7b2";
}

.icon-info:before {
  content: "\e7ca";
}

.icon-contact:before {
  content: "\e77a";
}

.header {
  width: 100%;
  box-sizing: border-box;

  .header-top {
    background: $color-secondary;
    color: #fff;
    font-size: $font-size-auxiliary;
    display: flex;
    height: 70px;
    justify-content: space-between;
    align-items: center;
    padding: 0 10vw;
    box-sizing: border-box;

    @include respond-to(md) {
      padding: 0 16px;
      height: 50px;
      width: 100%;
    }

    .welcome-text {
      @include respond-to(md) {
        display: none;
      }
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 16px;

      @include respond-to(md) {
        gap: 8px;
        width: 100%;
        justify-content: space-between;
      }

      .hotline {
        display: flex;
        align-items: center;

        @include respond-to(md) {
          font-size: 14px;

          .icon {
            svg {
              width: 16px;
              height: 16px;
            }
          }
        }
      }

      .login, .register {
        background: none;
        border: none;
        color: #fff;
        font-size: $font-size-auxiliary;
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 0;

        &:hover {
          opacity: 0.9;
        }

        @include respond-to(md) {
          font-size: 14px;

          .icon {
            svg {
              width: 16px;
              height: 16px;
            }
          }
        }
      }

      .register {
        border-left: 1px solid rgba(255, 255, 255, 0.3);
        padding-left: 8px;
      }
    }
  }

  .navbar {
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: $nav-height-primary;
    padding: 0 10vw;
    box-sizing: border-box;
    box-shadow: 0 2px 8px rgba(91, 157, 248, 0.04);
    position: relative;
    width: 100%;

    @include respond-to(md) {
      padding: 0 16px;
      height: 56px;
    }

    .logo-area {
      display: flex;
      align-items: center;

      .logo {
        width: 64px;
        height: 64px;
        margin-right: 8px;

        @include respond-to(md) {
          width: 40px;
          height: 40px;
        }
      }

      .company-name {
        font-size: $font-size-subtitle;
        color: $color-secondary;
        font-weight: bold;
        letter-spacing: 2px;

        @include respond-to(md) {
          font-size: 18px;
        }
      }
    }

    // 移动端菜单按钮
    .mobile-menu-toggle {
      display: none;
      cursor: pointer;

      @include respond-to(md) {
        display: block;
        width: 24px;
        height: 24px;
      }

      .hamburger {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        span {
          display: block;
          width: 100%;
          height: 2px;
          background-color: $color-secondary;
          transition: all 0.3s ease;
        }

        &.active {
          span {
            &:first-child {
              transform: rotate(45deg) translate(5px, 5px);
            }

            &:nth-child(2) {
              opacity: 0;
            }

            &:last-child {
              transform: rotate(-45deg) translate(5px, -5px);
            }
          }
        }
      }
    }

    .nav-list {
      display: flex;
      gap: 40px;

      @include respond-to(md) {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: #fff;
        flex-direction: column;
        gap: 0;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;

        &.mobile-active {
          display: flex;
        }
      }

      .nav-item {
        font-size: $font-size-nav;
        color: $color-dark;
        cursor: pointer;
        position: relative;
        display: flex;
        align-items: center;
        padding: 8px 0;

        @include respond-to(md) {
          padding: 16px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
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

          @include respond-to(md) {
            display: none;
          }
        }
      }
    }
  }
}
</style>
