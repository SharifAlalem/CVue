<template>
  <div id="templates">
    <keep-alive>
      <transition name="fade" mode="out-in">
      <BaseTemplateCard/>
      </transition>
    </keep-alive>
  </div>
</template>
<script setup lang="ts">
import BaseTemplateCard from "@/components/ui/BaseTemplateCard.vue";
</script>

<style lang="scss" scoped>
#templates {
  padding: 100px 80px;
  height: 100%;

  @media (max-width: $breakpoint-mobile) {
    padding: 100px 20px;
  }
}
</style>
