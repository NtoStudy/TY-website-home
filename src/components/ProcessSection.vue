<template>
  <section class="process-section">
    <h2 class="section-title">合作流程</h2>
    <div class="section-en">PROCESS</div>
    <div class="process-steps">
      <div class="process-step" v-for="(item, idx) in steps" :key="idx">
        <el-icon :size="28" class="process-icon">
          <component :is="item.icon" />
        </el-icon>
        <div class="process-label">{{ item.label }}</div>
        <div v-if="idx < steps.length - 1" class="process-arrow">→</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Edit, ChatLineRound, DocumentChecked, Money, Goods, Finished } from '@element-plus/icons-vue'
const steps = [
  { icon: Edit, label: '沟通需求' },
  { icon: ChatLineRound, label: '方案定制' },
  { icon: DocumentChecked, label: '签订合同' },
  { icon: Money, label: '支付定金' },
  { icon: Goods, label: '项目开发' },
  { icon: Finished, label: '交付验收' },
]
</script>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;
.process-section {
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
  .process-steps {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    max-width: $main-width;
    margin: 0 auto;
    .process-step {
      display: flex;
      flex-direction: column;
      align-items: center;
      .process-icon {
        color: $color-primary;
        margin-bottom: 8px;
      }
      .process-label {
        font-size: 16px;
        color: $color-dark;
        opacity: 0.85;
        margin-bottom: 4px;
      }
      .process-arrow {
        font-size: 24px;
        color: $color-secondary;
        margin-top: 8px;
      }
    }
  }
}
</style> 