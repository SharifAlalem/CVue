<template>
  <section id="personalInfo">
    <h4 class="title">Personal Information</h4>
    <BaseForm :data="personalInfoData" :withImageUpload="true" />
  </section>
</template>

<script setup lang="ts">
import { inject } from "vue";
import BaseForm from "./ui/BaseForm.vue";

const personalInfoData: any = inject("personalInfoData");
</script>
