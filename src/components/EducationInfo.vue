<template>
  <section id="personalInfo">
    <div class="title">
      <h4>Education Information</h4>
    </div>
    <BaseForm
      v-for="educationBlock in educationInfoData.forms"
      :key="educationBlock.id"
      :id="educationBlock.id"
      :data="educationBlock.data"
    >
      <BaseBtn
        v-if="educationBlock.id !== 1"
        type="danger"
        :disabled="false"
        @click="removeForm(educationBlock.id)"
      >
        <i class="fas fa-trash"></i
      ></BaseBtn>
    </BaseForm>
    <BaseBtn class="add" type="info" :disabled="false" @click="add"
      ><i class="fas fa-plus"></i
    ></BaseBtn>
  </section>
</template>

<script setup lang="ts">
import { inject } from "vue";
import BaseForm from "./ui/BaseForm.vue";
import BaseBtn from "./ui/BaseBtn.vue";
import useDeepCopy from "../modules/composables/useDeepCopy";

const educationInfoData: any = inject("educationInfoData");
const updateFormsData: any = inject("updateFormsData");
const removeFormsData: any = inject("removeFormsData");

const add = () => {
  let educationBlock = {
    id: educationInfoData.forms[educationInfoData.forms.length - 1].id + 1,
    data: useDeepCopy(educationInfoData.forms[0].data),
  };
  updateFormsData(educationBlock, "education");
};

const removeForm = (id: any) => {
  removeFormsData(id, "education");
};
</script>
