<template>
  <section id="personalInfo">
    <div class="title">
      <h4>Work Information</h4>
    </div>
    <BaseForm
      v-for="workBlock in workInfoData.forms"
      :key="workBlock.id"
      :id="workBlock.id"
      :data="workBlock.data"
    >
      <BaseBtn
        v-if="workBlock.id !== 1"
        type="danger"
        :disabled="false"
        @click="removeForm(workBlock.id)"
      >
        <i class="fas fa-trash"></i
      ></BaseBtn>
    </BaseForm>
    <BaseBtn type="success" :disabled="false" @click="add"
      ><i class="fas fa-plus"></i
    ></BaseBtn>
  </section>
</template>

<script setup lang="ts">
import { inject } from "vue";
import BaseForm from "./ui/BaseForm.vue";
import BaseBtn from "./ui/BaseBtn.vue";
import useDeepCopy from "../modules/composables/useDeepCopy";

const workInfoData: any = inject("workInfoData");

const updateFormsData: any = inject("updateFormsData");
const removeFormsData: any = inject("removeFormsData");

const add = () => {
  let workBlock = {
    id: workInfoData.forms[workInfoData.forms.length - 1].id + 1,
    data: useDeepCopy(workInfoData.forms[0].data),
  };
  updateFormsData(workBlock, "work");
};

const removeForm = (id: any) => {
  removeFormsData(id, "work");
};
</script>
