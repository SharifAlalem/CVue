<template>
  <div id="home">
    <Progress
      @selectStep="changeComponent"
      :stepsNum="components.length"
      :currentStep="currentIndex"
      :stepsArr="components"
    ></Progress>

    <BaseCard @prevComp="back" @nextComp="after" :currentIndex="currentIndex">
      <Transition name="slide-fade" mode="out-in">
        <keep-alive>
          <component
            class="component"
            :is="components[currentIndex].component"
          ></component>
        </keep-alive>
      </Transition>
    </BaseCard>
  </div>
</template>

<script setup lang="ts">
import PersonalInfo from "@/components/PersonalInfo.vue";
import EducationInfo from "@/components/EducationInfo.vue";
import WorkInfo from "@/components/WorkInfo.vue";
import ProjectsInfo from "@/components/ProjectsInfo.vue";
import SkillsInfo from "@/components/SkillsInfo.vue";
import TemplateChoose from "@/components/TemplateChoose.vue";
import Progress from "@/components/Progress.vue";
import BaseCard from "@/components/ui/BaseCard.vue";
import { shallowRef } from "vue";

let currentIndex = shallowRef(0);

let components = shallowRef([
  { Icon: "fa-user", component: PersonalInfo },
  { Icon: "fa-graduation-cap", component: EducationInfo },
  { Icon: "fa-briefcase", component: WorkInfo },
  { Icon: "fa-diagram-project", component: ProjectsInfo },
  { Icon: "fa-medal", component: SkillsInfo },
  { Icon: "fa-file-signature", component: TemplateChoose },
]);

const changeComponent = (index: any) => {
  currentIndex.value = index;
};

const back = () => {
  currentIndex.value--;
};

const after = () => {
  currentIndex.value !== components.value.length - 1
    ? currentIndex.value++
    : "";
};
</script>

<style lang="scss">
#home {
  padding: 90px 0;
  min-height: 80vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.slide-fade-enter-active {
  transition: all 0.4s ease-in;
}

.slide-fade-leave-active {
  transition: all 0.4s ease-in;
}

.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.slide-fade-enter-from {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
