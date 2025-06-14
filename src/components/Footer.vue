<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="footer-left">
        <div class="company-info">
          <img src="/img.png" alt="logo" class="logo" />
          <span class="company-name">淘鱼科技</span>
        </div>
        <div class="contact-item">
          <el-icon :size="20" class="contact-icon"><Phone /></el-icon>
          <span>电话：4440000-000</span>
        </div>
        <div class="contact-item">
          <el-icon :size="20" class="contact-icon"><Message /></el-icon>
          <span>邮箱：12038845938@qq.com</span>
        </div>
        <div class="contact-item">
          <el-icon :size="20" class="contact-icon"><Location /></el-icon>
          <span>地址：浙江省杭州市滨江区长河街道南环路1568号</span>
        </div>
      </div>
      <div class="footer-right">
        <div class="qrcode-item">
          <img src="/2wm.png" alt="扫码加客服微信" class="qrcode-img" />
          <span>扫码加客服微信</span>
        </div>
        <div class="qrcode-item">
          <img src="/2wm.png" alt="扫码关注公众号" class="qrcode-img" />
          <span>扫码关注公众号</span>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>Copyright © 2015-2023 杭州市淘鱼科技有限公司 版权所有</span>
    </div>
  </footer>
</template>

<script setup>
import { Phone, Message, Location } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;
.footer {
  width: 100%;
  background: $color-secondary;
  color: #fff;
  font-size: 14px;
  .footer-main {
    max-width: $main-width;
    margin: 0 auto;
    padding: 64px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .footer-left {
      display: flex;
      flex-direction: column;
      gap: 16px;
      .company-info {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
        .logo {
          width: 48px;
          height: 48px;
          margin-right: 12px;
        }
        .company-name {
          font-size: 28px;
          font-weight: bold;
          letter-spacing: 2px;
        }
      }
      .contact-item {
        display: flex;
        align-items: center;
        font-size: 18px;
        .contact-icon {
          margin-right: 8px;
          color: #fff;
        }
      }
    }
    .footer-right {
      display: flex;
      gap: 48px;
      .qrcode-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        span {
          margin-top: 12px;
          font-size: 16px;
        }
        .qrcode-img {
          width: 120px;
          height: 120px;
          background: #fff; // 占位背景色，实际是二维码图片
          border-radius: 4px;
        }
      }
    }
  }
  .footer-bottom {
    background: $color-secondary;
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    text-align: center;
    padding: 18px 0;
  }
}
</style>
