<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="footer-left">
        <div class="company-info">
          <img src="/img.png" alt="logo" class="logo" />
          <span class="company-name">淘鱼科技</span>
        </div>
        <div class="contact-info">
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
  box-sizing: border-box;
  background: $color-secondary;
  color: #fff;
  font-size: $font-size-text;
  
  .footer-main {
    width: 100%;
    box-sizing: border-box;
    max-width: $main-width;
    margin: 0 auto;
    padding: 64px 16px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    
    @include respond-to(md) {
      flex-direction: column;
      padding: 32px 16px;
      align-items: center;
      text-align: center;
      width: 100%;
    }
    
    .footer-left {
      display: flex;
      flex-direction: column;
      gap: 24px;
      width: 100%;
      
      @include respond-to(md) {
        align-items: center;
        margin-bottom: 32px;
      }
      
      .company-info {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
        
        .logo {
          width: 48px;
          height: 48px;
          margin-right: 12px;
          
          @include respond-to(md) {
            width: 40px;
            height: 40px;
          }
        }
        
        .company-name {
          font-size: $font-size-subtitle;
          font-weight: bold;
          letter-spacing: 2px;
          
          @include respond-to(md) {
            font-size: 20px;
          }
        }
      }
      
      .contact-info {
        display: flex;
        flex-direction: column;
        gap: 16px;
        
        .contact-item {
          display: flex;
          align-items: center;
          font-size: $font-size-text;
          
          @include respond-to(md) {
            font-size: 14px;
            justify-content: center;
          }
          
          .contact-icon {
            margin-right: 8px;
            color: #fff;
            
            @include respond-to(md) {
              font-size: 16px;
            }
          }
        }
      }
    }
    
    .footer-right {
      display: flex;
      gap: 48px;
      
      @include respond-to(md) {
        gap: 24px;
        width: 100%;
        justify-content: center;
      }
      
      .qrcode-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        .qrcode-img {
          width: 120px;
          height: 120px;
          background: #fff;
          border-radius: 4px;
          
          @include respond-to(md) {
            width: 100px;
            height: 100px;
          }
        }
        
        span {
          margin-top: 12px;
          font-size: $font-size-text;
          
          @include respond-to(md) {
            font-size: 14px;
            margin-top: 8px;
          }
        }
      }
    }
  }
  
  .footer-bottom {
    width: 100%;
    box-sizing: border-box;
    background: $color-secondary;
    color: rgba(255, 255, 255, 0.8);
    font-size: $font-size-auxiliary;
    text-align: center;
    padding: 18px 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    
    @include respond-to(md) {
      font-size: 12px;
      padding: 12px 16px;
    }
  }
}
</style>
