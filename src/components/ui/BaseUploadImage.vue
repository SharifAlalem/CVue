<template>
  <div class="form-group">
    <div class="form-element">
      <label :class="{ active: previewImage !== '' }">
        <img
          v-if="previewImage === ''"
          src="@/assets/images/avatar.png"
          width="100"
        />
        <img class="personal" v-else :src="previewImage" width="100" />
        <input
          class="file-input"
          type="file"
          ref="personalImage"
          @input="updateValue"
          :value="modelValue"
        />
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, inject,onMounted } from "vue";

const personalImage = ref("");
let previewImage = ref("");
const changeImage: any = inject("changeImage");
const personalMainImage: any = inject("personalMainImage");

const props = defineProps({
  classtype: {
    type: String,
    required: false,
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
});

const updateValue = () => {
  let input: any = personalImage.value;
  let file = input.files;
  if (file && file[0]) {
    let reader = new FileReader();
    reader.onload = (e) => {
      previewImage.value = String(e.target!.result);
      changeImage(previewImage);
    };
    reader.readAsDataURL(file[0]);
  }
};

onMounted(() => {
  previewImage.value = personalMainImage.value;
})
</script>

<style lang="scss" scoped>
.form-group {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}

.file-input {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -10;
}

.form-element {
  border-radius: 50%;
  position: relative;
  z-index: 0;

  label {
    border-radius: 50%;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    font-weight: 400;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    z-index: 0;
    background-color: transparent;

    img {
      z-index: -3;
    }

    &.active::after {
      background-color: $green;
    }
    &::after {
      content: "+";
      background-color: gray;
      border-radius: 100%;
      border: 1px solid white;
      position: absolute;
      color: white;
      font-size: 19px;
      text-align: center;
      width: 27px;
      height: 26px;
      bottom: -5px;
      left: 36px;
      z-index: -3;
    }
  }
}
</style>
