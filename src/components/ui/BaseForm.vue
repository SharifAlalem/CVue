<template>
  <div>
    <slot></slot>
    <div class="form">
      <BaseUploadImage v-if="withImageUpload" class="block" />

      <BaseInput
        :showLabel="input.type === 'date' ? true : false"
        :placeholder="input.placeholder"
        :label="input.placeholder"
        :type="input.type"
        :classtype="input.width"
        :formId="id"
        v-for="input in data"
        :key="input.inputName"
        v-model="input[input.inputName]"
      ></BaseInput>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseInput from "./BaseInput.vue";
import BaseUploadImage from "./BaseUploadImage.vue";

import { defineProps } from "vue";

const props = defineProps({
  data: {
    type: Array as any,
    required: true,
  },
  id: {
    type: Number,
    required: false,
    default: null,
  },
  withImageUpload: {
    type: Boolean,
    required: false,
  },
});
</script>

<style lang="scss">
.form {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.full {
  width: 100%;
}
</style>
