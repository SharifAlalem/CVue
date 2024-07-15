<template>
  <div id="progress-bar">
    <ul id="progress-list">
      <li
        class="step"
        :class="{ active: currentStep >= index }"
        v-for="(component, index) in stepsArr"
        :key="component"
        @click="selectStep(index)"
      >
        <i class="fas" :class="component.Icon"></i>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  stepsNum: {
    type: Number,
    required: true,
  },
  currentStep: {
    type: Number,
    required: false,
    default: null,
  },
  stepsArr: {
    type: Array as any,
    required: false,
  },
});

const emits = defineEmits(["selectStep"]);

const selectStep = (index: any) => {
  emits("selectStep", index);
};
</script>

<style lang="scss" scoped>
#progress-bar {
  margin-bottom: 30px;
}

#progress-list {
  padding-left: 0;
  list-style: none;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  gap: 18px;
  font-weight: bold;

  @media (max-width: $breakpoint-mobile) {
    gap: 5px;
  }

  @media (min-width: $breakpoint-mobile) and (max-width: $breakpoint-tablet) {
    gap: 12px;
  }
  .step {
    cursor: pointer;
    text-transform: uppercase;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    background-color: $dark-blue;
    color: white;
    padding: 15px;
    border-radius: 50%;
    transition: ease-in-out all 0.5s;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-size: 28px;
    border: 2px solid white;

    &::after {
      right: -22px;
      position: absolute;
      content: "";
      width: 23px;
      height: 20px;
      z-index: 999;
      border: 2px solid white;
      border-left: 0px solid white;
      border-right: 0px solid white;
      background-color: $dark-blue;
    }

    &.active {
      background-color: white;
      color: $dark-blue;

      &::after {
        background-color: white;
      }
    }

    @media (max-width: $breakpoint-mobile) {
      width: 12px;
      height: 12px;
      font-size: 15px;
      padding: 18px;

      &::after {
        right: -6px;
        width: 7px;
        height: 10px;
      }

      &.active {
        &::after {
          background-color: white;
          width: 8px;
          right: -6px;
        }
      }
    }

    @media (min-width: $breakpoint-mobile) and (max-width: $breakpoint-tablet) {
      width: 22px;
      height: 22px;
      font-size: 18px;
      padding: 20px;

      &::after {
        right: -15px;
        width: 15px;
        height: 10px;
      }

      &.active {
        &::after {
          background-color: white;
          right: -15px;
          width: 16px;
        }
      }
    }

    &:last-child::after {
      content: none;
    }
  }
}
</style>
