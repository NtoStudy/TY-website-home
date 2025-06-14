<template>
  <section class="case-section">
    <h2 class="section-title">案例展示</h2>
    <div class="section-en">CASE PRESENTATION</div>
    <div class="case-list">
      <div class="case-card" v-for="(item, idx) in cases" :key="idx">
        <!-- TODO: 案例图片资源 -->
        <div class="case-title">{{ item.title }}</div>
        <div class="case-desc">{{ item.desc }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
const cases = [
  { title: '空服App', desc: '一站式空乘服务平台' },
  { title: '众收货品', desc: '智能物流管理系统' },
  { title: '众收采品', desc: '供应链协同平台' },
]
</script>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;
.case-section {
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
  .case-list {
    display: flex;
    gap: 32px;
    max-width: $main-width;
    margin: 0 auto;
    overflow-x: auto;
    padding-bottom: 8px;
    .case-card {
      min-width: 320px;
      background: #f8faff;
      border-radius: 12px;
      box-shadow: 0 2px 12px rgba(91,157,248,0.06);
      padding: 32px 16px 24px 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .case-title {
        font-size: 20px;
        color: $color-secondary;
        font-weight: 600;
        margin-bottom: 8px;
      }
      .case-desc {
        font-size: 16px;
        color: $color-dark;
        opacity: 0.8;
        line-height: 1.6;
      }
    }
  }
}
</style> 