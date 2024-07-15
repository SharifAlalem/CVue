<template>
  <section id="baseCard">
    <slot></slot>
    <div
      class="actions"
      :class="{
        'actions-center': props.currentIndex === 0 || props.currentIndex === 5,
      }"
    >
      <BaseBtn
        id="prev"
        v-if="props.currentIndex !== 0"
        type="transparent"
        :disabled="false"
        @click="prev"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </BaseBtn>
      <BaseBtn
        id="next"
        v-if="props.currentIndex !== 5"
        type="transparent"
        :disabled="false"
        @click="next"
      >
        <i class="fa-solid fa-chevron-right"></i>
      </BaseBtn>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseBtn from "./BaseBtn.vue";
import { defineEmits, defineProps } from "vue";

const props = defineProps<{
  currentIndex: any;
}>();
const emit = defineEmits<{
  (e: "prevComp"): void;
  (e: "nextComp"): void;
}>();

const prev = () => {
  emit("prevComp");
};

const next = () => {
  emit("nextComp");
};
</script>

<style lang="scss">
#baseCard {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.5);
  width: 70%;
  padding: 10px;
  position: relative;
  z-index: 1;
}

#prev {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 18%;
  height: 70%;
  left: -55px;

  @media (max-width: $breakpoint-mobile) {
    height: 20%;
    left: -40px;
    z-index: 0;
  }
}

#next {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 18%;
  height: 70%;
  right: -55px;

  @media (max-width: $breakpoint-mobile) {
    height: 20%;
    right: -40px;
    z-index: 0;
  }
}
.actions {
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
}

.actions-center {
  justify-content: center;
}
</style>
