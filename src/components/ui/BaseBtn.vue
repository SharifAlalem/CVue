<template>
  <button
    class="normal"
    :class="type"
    :disabled="disabled"
    @click="callback($event)"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from "vue";

const props = defineProps<{
  type: string;
  disabled: boolean;
}>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

const callback = (e: any) => {
  emit("click");
};
</script>

<style lang="scss" scoped>
button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 10px;
  border: none;
  text-transform: uppercase;
  color: #333;
  background-color: #fff;
  font-size: 14px;
  transition: all 0.2s;
  cursor: pointer;
  &[disabled] {
    cursor: not-allowed;
  }
  &.danger {
    background-color: $red;
    color: #fff;
  }
  &.success {
    background-color: $dark-blue;
    color: #fff;
  }
  &.info {
    background-color: $blue;
    color: white;
  }

  &.download {
    height: 40px;
    color: white;
    font-size: 18px;
    border-radius: 10px;
    background-color: $dark-blue;

    &:hover {
      transform: scale(1);
      height: 45px;
      background-color: $dark-blue;
      box-shadow: none;
      color: white;
    }
  }

  &.transparent {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    color: $dark-blue;
    font-size: 25px;

    &:hover {
      transform: scale(1);
      background-color: rgba(255, 255, 255, 1);
      box-shadow: $shadow;
    }
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: $shadow;
  }
}
</style>
