<template>
  <section id="template">
    <div class="title">
      <h4>Templates</h4>
    </div>
    <div class="templates">
      <router-link
        class="templateImage"
        :to="`template_${template.templateId}`"
        v-for="template in templatesInfoData"
        :key="template.templateId"
      >
        <img @click="chooseTemplate(template.templateId)" src="@/assets/templates/template1.png" alt="template" />
      </router-link>
    </div>
  </section>
</template>
<script setup lang="ts">
import { inject } from "vue";

const templatesInfoData: any = inject("templatesInfoData");
const chooseTemplate: any = inject("chooseTemplate");
</script>

<style lang="scss" scoped>
.templates {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;

  .templateImage {
    width: 40%;
    height: 100%;
    padding: 5px;
    border: 2px solid gray;
    border-radius: 10px;
    margin: 5px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.15);
    }
    img {
      width: 100%;
    }
  }
}
</style>
