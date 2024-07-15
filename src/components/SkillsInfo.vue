<template>
  <section id="personalInfo">
    <div class="title">
      <h4>Skills</h4>
    </div>
    <BaseForm
      v-for="SkillBlock in skillInfoData.forms"
      :key="SkillBlock.id"
      :id="SkillBlock.id"
      :data="SkillBlock.data"
    >
      <BaseBtn
        v-if="SkillBlock.id !== 1"
        type="danger"
        :disabled="false"
        @click="removeForm(SkillBlock.id)"
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

const updateFormsData: any = inject("updateFormsData");
const removeFormsData: any = inject("removeFormsData");

const skillInfoData: any = inject("skillInfoData");

const add = () => {
  let SkillBlock = {
    id: skillInfoData.forms[skillInfoData.forms.length - 1].id + 1,
    data: useDeepCopy(skillInfoData.forms[0].data),
  };
  updateFormsData(SkillBlock, "skill");
};

const removeForm = (id: any) => {
  removeFormsData(id, "skill");
};
</script>
