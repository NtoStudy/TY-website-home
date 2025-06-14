<template>
  <section class="advantage-section">
    <h2 class="section-title">我们的优势</h2>
    <div class="section-en">ADVANTAGES</div>
    <div class="advantage-circle">
      <div class="advantage-item" v-for="(item, idx) in advantages" :key="idx">
        <el-icon :size="36" class="advantage-icon">
          <component :is="item.icon" />
        </el-icon>
        <div class="advantage-label">{{ item.label }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { User, Star, Service, Coin, Connection, Finished } from '@element-plus/icons-vue'
const advantages = [
  { icon: User, label: '以客户为核心，一对一专属对接' },
  { icon: Service, label: '高效响应，7x24小时技术支持' },
  { icon: Star, label: '经验丰富，技术人员定期培训' },
  { icon: Coin, label: '安全合规，服务人员层层筛选' },
  { icon: Connection, label: '流程透明，客户全程可视化' },
  { icon: Finished, label: '进度直观，与客户高效协作' },
]
</script>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;
.advantage-section {
  width: 100%;
  background: #f8faff;
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
  .advantage-circle {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 48px 64px;
    max-width: 900px;
    margin: 0 auto;
    .advantage-item {
      width: 180px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .advantage-icon {
        color: $color-primary;
        margin-bottom: 12px;
      }
      .advantage-label {
        font-size: 18px;
        color: $color-dark;
        opacity: 0.85;
        line-height: 1.5;
      }
    }
  }
}
</style> 