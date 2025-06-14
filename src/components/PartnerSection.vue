<template>
  <section class="partner-section">
    <h2 class="section-title">合作伙伴</h2>
    <div class="section-en">COOPERATION PARTNERS</div>
    <div class="partner-list">
      <div class="partner-item" v-for="(item, idx) in partners" :key="idx">
        <!-- TODO: 合作伙伴logo图片资源 -->
        <div class="partner-name">{{ item }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
const partners = [
  '百度', '腾讯', '华为', '美团', '京东', '阿里巴巴', '海尔', '中国移动', '中国联通', '中国电信', '招商银行', '工商银行', '建设银行', '农业银行', '平安银行', '广发银行'
]
</script>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;
.partner-section {
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
  .partner-list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 32px 16px;
    max-width: $main-width;
    margin: 0 auto;
    .partner-item {
      background: #f8faff;
      border-radius: 8px;
      padding: 16px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      .partner-name {
        font-size: 16px;
        color: $color-dark;
        opacity: 0.85;
        margin-top: 8px;
      }
    }
  }
}
</style> 