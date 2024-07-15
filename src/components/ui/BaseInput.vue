<template>
  <div class="form-group" :class="type !== 'image' ? classtype : 'block'">
    <div class="label" v-if="showLabel !== false">
      <p>{{ label }}</p>
    </div>
    <div class="form-element">
      <BaseRatingInput
        v-if="type === 'rating'"
        :maxNum="5"
        :formId="formId"
        class="block"
        :value="modelValue"
      ></BaseRatingInput>

      <input
        v-else-if="type !== 'textarea'"
        class="full"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="updateValue"
        :disabled="checkedPresent === true"
      />

      <textarea
        v-else
        :type="type"
        class="full"
        :placeholder="placeholder"
        :value="String(modelValue)"
        @input="updateValue"
      ></textarea>

      <div class="checkbox" v-if="label === 'End date'">
        <input class="full" type="checkbox" @change="updateValue" />
        <label for=""> Present</label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref } from "vue";
import BaseRatingInput from "./BaseRatingInput.vue";

const props = defineProps({
  classtype: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
    default: null,
  },
  label: {
    type: String,
    required: false,
    default: null,
  },
  placeholder: {
    type: String,
    required: false,
    default: null,
  },
  modelValue: {
    required: false,
    validator: (v) => true,
    default: null,
  },
  formId: {
    type: Number,
    required: false,
    default: null,
  },
  showLabel: {
    type: Boolean,
    required: false,
    default: null,
  },
});

let checkedPresent = ref(false);
const emit = defineEmits<{
  (e: "update:modelValue", event: Event): void;
}>();

const updateValue = (event: any) => {
  console.log(event);
  if (event.target.type === "checkbox") {
    checkedPresent.value = !checkedPresent.value;
    event.target.value = "present";
  }
  emit("update:modelValue", event.target.value);
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins";
.form-group {
  margin: 10px 2%;
}

.label {
  float: left;
  font-size: 13px;
  padding-left: 8px;
  line-height: 10px;
  text-transform: uppercase;
}
input,
textarea {
  padding: 10px 5px;
  border: 2px solid lightgrey;
  color: #333;
  background-color: #fff;
  border-radius: 4px;
  font-size: 14px;
  resize: none;
  &[disabled] {
    cursor: not-allowed;
  }
  &.danger {
    border-color: $red;
  }
  &.success {
    border-color: $green;
  }
  &.info {
    border-color: $blue;
  }

  &::placeholder {
    text-transform: uppercase;
  }

  &:focus {
    border: 2px solid $blue;
    outline: none;
    @include shadow_color(rgb(80, 191, 255, 0.2));
  }
}

.small {
  width: 29.3%;

  @media (max-width: $breakpoint-tablet) {
    width: 100%;
  }
}

.medium {
  width: 44%;

  @media (max-width: $breakpoint-tablet) {
    width: 95%;
  }
}

.full {
  width: 95%;
}

.block {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.checkbox {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px 5px;
  color: #333;
  background-color: #fff;
  border-radius: 4px;
  font-size: 14px;

  label {
    font-weight: bold;
  }

  input {
    cursor: pointer;
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
}
</style>
