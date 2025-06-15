<template>
  <div class="home">
    <BannerSection />
    <AboutSection />
    <AdvantageSection />
    <ServiceSection />
<!--    <CaseSection />-->
    <ProcessSection />
    <PartnerSection />
  </div>
</template>

<script setup>
import BannerSection from '../components/BannerSection.vue'
import AboutSection from '../components/AboutSection.vue'
import AdvantageSection from '../components/AdvantageSection.vue'
import ServiceSection from '../components/ServiceSection.vue'
import CaseSection from '../components/CaseSection.vue'
import ProcessSection from '../components/ProcessSection.vue'
import PartnerSection from '../components/PartnerSection.vue'
</script>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;

</style>
