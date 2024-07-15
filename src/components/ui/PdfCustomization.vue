<template>
  <div>
    <div class="actions">
      <div class="title"><h4>Customization</h4></div>
      <div class="operations">
        <div class="bgColor control-item">
          <input
            id="bgcolor"
            type="color"
            :value="bgColor['--bg-color']"
            @change="changebgColor"
          />
          <label for="bgcolor">Theme Color</label>
        </div>
        <div class="textColor control-item">
          <input
            id="textcolor"
            type="color"
            :value="bgColor['--font-color']"
            @change="changefontColor"
          />
          <label for="textcolor">Text Color</label>
        </div>
      </div>

      <BaseBtnVue
        :disabled="false"
        class="generateBtn"
        type="download"
        @click="generateReport"
      >
        <i class="fa-solid fa-file-arrow-down icon"></i>Generate PDF
      </BaseBtnVue>

      <div class="progress-container">
        <div class="generating-label" v-if="progress !== 0">
          <span class="label-title">
            {{ progress === 100 ? "PDF Generated" : "Generating PDF" }}
          </span>

          <span class="label-progress">
            {{ `${progress} %` }}
          </span>
        </div>
        <div class="progress-bar">
          <div class="progress" :style="`width: ${progress}%;`" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, inject } from "vue";
import BaseBtnVue from "./BaseBtn.vue";

const changefontColor: any = inject("changefontColor");
const changebgColor: any = inject("changebgColor");
const bgColor: any = inject("bgColor");
const progress: any = inject("progress");
const generateReport: any = inject("generateReport");

const isGenerating = () => {
  return progress !== 0 || progress !== 100;
};

const setInput = (e: any, key: any, inputType: any) => {
  let value = e.target.value;

  if (inputType === "checkbox") {
    value = e.target.checked;
  }

  if (inputType === "number") {
    value = e.target.value ? parseFloat(e.target.value) : 0;
  }
};
</script>

<style lang="scss" scoped>
.progress-container {
  width: 100%;
  margin-top: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  .progress-bar {
    width: 100%;
    height: 10px;
    border-radius: 10px 10px 0 0;
    border: 2px solid $light-gray;

    .progress {
      width: 0%;
      height: 100%;
      transition: 0.3s;
      border-radius: 10px 10px 0 0;
      background: $dark-blue;
    }
  }
}
</style>
