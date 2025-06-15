<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style lang="scss">
@use './styles/variables.scss' as *;
@import './styles/reset.scss';

// 添加全局盒模型设置
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden; // 防止水平滚动
}

.app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden; // 防止水平滚动
  
  // 主内容区域自动填充剩余空间
  > :nth-child(2) {
    flex: 1;
    width: 100%;
    box-sizing: border-box;
  }
}

.mobile-only {
  display: none;
  
  @include respond-to(md) {
    display: block;
  }
}
</style>
