<template>
  <section class="service-section">
    <h2 class="section-title">我们的服务</h2>
    <div class="section-en">SERVICES</div>
    <div class="service-list">
      <div class="service-card" v-for="(item, idx) in services" :key="idx">
        <el-icon :size="32" class="service-icon">
          <component :is="item.icon" />
        </el-icon>
        <div class="service-title">{{ item.title }}</div>
        <div class="service-desc">{{ item.desc }}</div>
        <!-- TODO: 服务卡片图片资源 -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { Monitor, Iphone, Cloudy, ShoppingCart, DataAnalysis, Tools } from '@element-plus/icons-vue'
const services = [
  { icon: Monitor, title: '网站建设', desc: '企业官网、品牌网站定制开发' },
  { icon: Iphone, title: '小程序开发', desc: '微信/支付宝/抖音小程序开发' },
  { icon: Cloudy, title: '云服务', desc: '云主机、云存储、云安全等服务' },
  { icon: ShoppingCart, title: '电商平台', desc: 'B2B/B2C/O2O电商平台开发' },
  { icon: DataAnalysis, title: '数据分析', desc: '大数据可视化与分析平台' },
  { icon: Tools, title: '系统集成', desc: '企业信息化系统集成' },
]
</script>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;
.service-section {
  width: 100%;
  background: #fff;
  padding: 64px 0 48px 0;
  text-align: center;
  .section-title {
    font-size: 32px;
    color: $color-secondary;
    font-weight: 700;
    margin-bottom: 8px;
    letter-spacing: 2px;
  }
  .section-en {
    font-size: 18px;
    color: $color-dark;
    opacity: 0.7;
    margin-bottom: 32px;
  }
  .service-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    max-width: $main-width;
    margin: 0 auto;
    .service-card {
      background: #f8faff;
      border-radius: 12px;
      box-shadow: 0 2px 12px rgba(91,157,248,0.06);
      padding: 32px 16px 24px 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: box-shadow 0.2s;
      &:hover {
        box-shadow: 0 4px 24px rgba(91,157,248,0.12);
      }
      .service-icon {
        color: $color-primary;
        margin-bottom: 16px;
      }
      .service-title {
        font-size: 20px;
        color: $color-secondary;
        font-weight: 600;
        margin-bottom: 8px;
      }
      .service-desc {
        font-size: 16px;
        color: $color-dark;
        opacity: 0.8;
        line-height: 1.6;
      }
    }
  }
}
</style> 