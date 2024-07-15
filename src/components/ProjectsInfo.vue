<template>
  <section id="personalInfo">
    <div class="title">
      <h4>Project Information</h4>
    </div>
    <BaseForm
      v-for="ProjectBlock in projectInfoData.forms"
      :key="ProjectBlock.id"
      :id="ProjectBlock.id"
      :data="ProjectBlock.data"
    >
      <BaseBtn
        v-if="ProjectBlock.id !== 1"
        type="danger"
        :disabled="false"
        @click="removeForm(ProjectBlock.id)"
      >
        <i class="fas fa-trash"></i
      ></BaseBtn>
    </BaseForm>
    <BaseBtn type="success" :disabled="false" @click="add">
      <i class="fas fa-plus"></i
    ></BaseBtn>
  </section>
</template>

<script setup lang="ts">
import { inject, defineEmits } from "vue";
import BaseForm from "./ui/BaseForm.vue";
import BaseBtn from "./ui/BaseBtn.vue";
import useDeepCopy from "../modules/composables/useDeepCopy";

const projectInfoData: any = inject("projectInfoData");
const updateFormsData: any = inject("updateFormsData");
const removeFormsData: any = inject("removeFormsData");

const add = () => {
  let ProjectBlock = {
    id: projectInfoData.forms[projectInfoData.forms.length - 1].id + 1,
    data: useDeepCopy(projectInfoData.forms[0].data),
  };
  updateFormsData(ProjectBlock, "project");
};

const removeForm = (id: any) => {
  removeFormsData(id, "project");
};
</script>
