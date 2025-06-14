<template>
  <header class="header">
    <div class="header-top">
      <span>欢迎来到淘鱼科技有限公司</span>
      <div class="header-actions">
        <span class="hotline"><i class="iconfont">&#xe63a;</i> 开发咨询热线：400-808-6367</span>
        <button class="login">登录</button>
        <button class="register">注册</button>
      </div>
    </div>
    <nav class="navbar">
      <div class="logo-area">
        <img src="/img.png" alt="logo" class="logo" />
        <span class="company-name">淘鱼科技</span>
      </div>
      <ul class="nav-list">
        <li class="nav-item active">首页</li>
        <li class="nav-item">服务项目</li>
        <li class="nav-item">经典案例</li>
        <li class="nav-item">关于淘鱼</li>
        <li class="nav-item">联系我们</li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
// 可根据需要添加交互逻辑
</script>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;
.header {
  width: 100%;
  .header-top {
    background: $color-secondary;
    color: #fff;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10vw;
    height: 36px;
    .header-actions {
      display: flex;
      align-items: center;
      gap: 16px;
      .hotline {
        i {
          margin-right: 4px;
        }
      }
      .login, .register {
        background: none;
        border: none;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
        margin-left: 8px;
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
