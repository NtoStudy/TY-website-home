<template>
  <Transition name="fade">
    <div class="mobile-nav-wrapper" v-if="isActive">
      <Transition name="fade">
        <div class="mobile-nav-overlay" @click="closeMenu"></div>
      </Transition>
      <Transition name="slide">
        <div class="mobile-nav" v-if="isActive">
          <div class="mobile-nav-header">
            <div class="logo-area">
              <img src="/img.png" alt="logo" class="logo"/>
              <span class="company-name">淘鱼科技</span>
            </div>
            <div class="close-btn" @click="closeMenu">
              <el-icon :size="24"><Close /></el-icon>
            </div>
          </div>
          
          <div class="mobile-nav-content">
            <div class="nav-items">
              <div class="nav-item" v-for="(item, index) in navItems" :key="index">
                {{ item.name }}
                <div class="divider"></div>
              </div>
            </div>
            
            <div class="contact-info">
              <el-icon :size="20"><Phone /></el-icon>
              <span>开发咨询热线：400-808-6367</span>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
import { Close, Phone } from '@element-plus/icons-vue'

const isActive = ref(false)

// 导航菜单项，与Header组件保持一致
const navItems = [
  { name: '首页', path: '/' },
  { name: '服务内容', path: '/' },
  { name: '经典案例', path: '/' },
  { name: '关于我们', path: '/' },
  { name: '联系我们', path: '/' }
]

// 打开菜单
const openMenu = () => {
  isActive.value = true
  document.body.style.overflow = 'hidden' // 防止背景滚动
}

// 关闭菜单
const closeMenu = () => {
  isActive.value = false
  document.body.style.overflow = '' // 恢复背景滚动
}

// 切换菜单
const toggleMenu = () => {
  if (isActive.value) {
    closeMenu()
  } else {
    openMenu()
  }
}

// 暴露方法给父组件
defineExpose({
  openMenu,
  closeMenu,
  toggleMenu
})
</script>

<style lang="scss" scoped>
@use '../../styles/variables.scss' as *;

// 淡入淡出动画
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// 滑动动画
.slide-enter-active {
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.slide-leave-active {
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
}

.mobile-nav-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
}

.mobile-nav-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1001;
}

.mobile-nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
  background-color: white;
  z-index: 1002;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  .mobile-nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #f0f0f0;
    
    .logo-area {
      display: flex;
      align-items: center;
      
      .logo {
        width: 36px;
        height: 36px;
        margin-right: 8px;
      }
      
      .company-name {
        font-size: 18px;
        font-weight: bold;
        color: $color-primary;
      }
    }
    
    .close-btn {
      cursor: pointer;
      color: #666;
    }
  }
  
  .mobile-nav-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    
    .nav-items {
      .nav-item {
        font-size: 18px;
        color: $color-dark;
        padding: 20px 16px;
        cursor: pointer;
        
        &:active {
          background-color: rgba(0, 0, 0, 0.05);
        }
        
        .divider {
          height: 1px;
          background-color: #f0f0f0;
          margin-top: 20px;
        }
      }
    }
    
    .contact-info {
      margin-top: auto;
      padding: 20px 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $color-primary;
      font-size: 16px;
      border-top: 1px solid #f0f0f0;
      
      .el-icon {
        margin-right: 8px;
      }
    }
  }
}

// 只在移动端显示
@media (min-width: $breakpoint-md) {
  .mobile-nav-wrapper {
    display: none;
  }
}
</style>
