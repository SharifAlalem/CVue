<template>
  <div>
    <i
      v-for="(svg, index) in floatingSvgs"
      :key="index"
      class="svg fas"
      :class="svg.icon"
    ></i>
  </div>
  <TheHeader
    :logo="('@/assets/images/logo.png')"
    :type="'transparent'"
    :links="links"
  />
  <router-view />
  <TheFooter :type="'solid'" :social="social" />
</template>

<script setup lang="ts">
import TheHeader from "@/components/layouts/TheHeader.vue";
import TheFooter from "@/components/layouts/TheFooter.vue";
import { reactive, provide, ref, onMounted, watch } from "vue";

let links: { url: string; name: string }[] = [
  { url: "/", name: "Home" },
  { url: "/about", name: "About" },
];

let social: { icon: string; link: string }[] = [
  { icon: "test", link: "Home" },
  { icon: "test", link: "About" },
];

let floatingSvgs = ref([
  { icon: "fa-user" },
  { icon: "fa-graduation-cap" },
  { icon: "fa-briefcase" },
  { icon: "fa-diagram-project" },
  { icon: "fa-medal" },
  { icon: "fa-file-signature" },
  { icon: "fa-user" },
  { icon: "fa-graduation-cap" },
  { icon: "fa-briefcase" },
  { icon: "fa-diagram-project" },
  { icon: "fa-medal" },
  { icon: "fa-file-signature" },
]);

const getFromLocalStorage = (key:any, defaultValue:any) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : defaultValue;
};

//DATA
let personalImage = ref(getFromLocalStorage('personalImage',""));
const changeImage = (newImage: any) => {
  personalImage.value = newImage.value;
};
provide("changeImage", changeImage);
provide("personalMainImage", personalImage);

let personalInfoData = reactive(getFromLocalStorage('personalInfoData',[
  {
    inputName: "fname",
    fname: "",
    type: "string",
    placeholder: " first name ",
    width: "medium",
  },
  {
    inputName: "lname",
    lname: "",
    type: "string",
    placeholder: " last name ",
    width: "medium",
  },
  {
    inputName: "phone",
    phone: "",
    type: "string",
    placeholder: " phone number ",
    width: "full",
  },
  {
    inputName: "email",
    email: "",
    type: "email",
    placeholder: " email address ",
    width: "full",
  },
  {
    inputName: "streetAndNum",
    streetAndNum: "",
    type: "string",
    placeholder: " street name and number ",
    width: "full",
  },
  {
    inputName: "city",
    city: "",
    type: "string",
    placeholder: " city ",
    width: "medium",
  },
  {
    inputName: "country",
    country: "",
    type: "string",
    placeholder: " country ",
    width: "medium",
  },
  {
    inputName: "dateOfBirth",
    dateOfBirth: "",
    type: "date",
    placeholder: "Date of birth",
    width: "full",
  },
  {
    inputName: "profession",
    profession: "",
    type: "string",
    placeholder: " profession ",
    width: "full",
  },
  {
    inputName: "summary",
    summary: "",
    type: "textarea",
    placeholder: "summary",
    width: "full",
  },
]));

let educationInfoData = reactive(getFromLocalStorage('educationInfoData',{
  forms: [
    {
      id: 1,
      data: [
        {
          inputName: "degreeTitle",
          degreeTitle: "",
          type: "string",
          placeholder: " Degree Title",
          width: "full",
        },
        {
          inputName: "college",
          college: "",
          type: "string",
          placeholder: " College / University",
          width: "full",
        },
        {
          inputName: "startDate",
          startDate: "",
          type: "date",
          placeholder: "Start date",
          width: "medium",
        },
        {
          inputName: "endDate",
          endDate: "",
          type: "date",
          placeholder: "End date",
          width: "medium",
        },
      ],
    },
  ],
}));

let workInfoData = reactive(getFromLocalStorage('workInfoData',{
  forms: [
    {
      id: 1,
      data: [
        {
          inputName: "jobTitle",
          jobTitle: "",
          type: "string",
          placeholder: " job Title",
          width: "full",
        },
        {
          inputName: "companyName",
          companyName: "",
          type: "string",
          placeholder: " Company Name",
          width: "full",
        },
        {
          inputName: "startDate",
          startDate: "",
          type: "date",
          placeholder: "Start date",
          width: "medium",
        },
        {
          inputName: "endDate",
          endDate: "",
          type: "date",
          placeholder: "End date",
          width: "medium",
        },
        {
          inputName: "summary",
          summary: "",
          type: "textarea",
          placeholder: " Summary",
          width: "full",
        },
      ],
    },
  ],
}));

let projectInfoData = reactive(getFromLocalStorage('projectInfoData',{
  forms: [
    {
      id: 1,
      data: [
        {
          inputName: "projectTitle",
          projectTitle: "",
          type: "string",
          placeholder: " Project Title",
          width: "full",
        },
        {
          inputName: "companyName",
          companyName: "",
          type: "string",
          placeholder: " Company Name",
          width: "full",
        },
        {
          inputName: "startDate",
          startDate: "",
          type: "date",
          placeholder: "Start date",
          width: "medium",
        },
        {
          inputName: "endDate",
          endDate: "",
          type: "date",
          placeholder: "End date",
          width: "medium",
        },
        {
          inputName: "description",
          description: "",
          type: "textarea",
          placeholder: " Description",
          width: "full",
        },
        {
          inputName: "link",
          link: "",
          type: "url",
          placeholder: " link",
          width: "full",
        },
      ],
    },
  ],
}));

let skillInfoData = reactive(getFromLocalStorage('skillInfoData',{
  forms: [
    {
      id: 1,
      data: [
        {
          inputName: "skillTitle",
          skillTitle: "",
          type: "string",
          placeholder: " Skill Title",
          width: "full",
        },
        {
          inputName: "rating",
          rating: 1,
          type: "rating",
          placeholder: "",
          width: "full",
        },
      ],
    },
  ],
}));

let templatesInfoData = reactive(getFromLocalStorage('templatesInfoData',[
  {
    templateId: 1,
    imageUrl: "skillTitle",
    selected: false,
  },
  {
    templateId: 2,
    imageUrl: "skillTitle",
    selected: false,
  },
]));

const changeRating = (index: number, formId: number) => {
  skillInfoData.forms[formId - 1].data.forEach((input:any) => {
    if (input.rating !== undefined) input.rating = index + 1;
  });
};

const chooseTemplate = (templateId: number) => {
  templatesInfoData.forEach((template:any) => { template.selected = false; });
  templatesInfoData.find((template:any)=>template.templateId == templateId).selected = true
};

const updateFormsData = (newForm: any, formType: string) => {
  if (formType === "education") educationInfoData.forms.push(newForm);
  else if (formType === "work") workInfoData.forms.push(newForm);
  else if (formType === "project") projectInfoData.forms.push(newForm);
  else if (formType === "skill") skillInfoData.forms.push(newForm);
};

const removeFormsData = (id: any, formType: string) => {
  if (formType === "education")
    educationInfoData.forms = educationInfoData.forms.filter(
      (educationBlock:any) => {
        return educationBlock.id !== id;
      }
    );
  else if (formType === "work")
    workInfoData.forms = workInfoData.forms.filter((workBlock:any) => {
      return workBlock.id !== id;
    });
  else if (formType === "project")
    projectInfoData.forms = projectInfoData.forms.filter((projectBlock:any) => {
      return projectBlock.id !== id;
    });
  else if (formType === "skill")
    skillInfoData.forms = skillInfoData.forms.filter((skillBlock:any) => {
      return skillBlock.id !== id;
    });
};

//providing Data
provide("personalImage", personalImage);
provide("personalInfoData", personalInfoData);
provide("educationInfoData", educationInfoData);
provide("workInfoData", workInfoData);
provide("projectInfoData", projectInfoData);
provide("skillInfoData", skillInfoData);
provide("templatesInfoData", templatesInfoData);
//providing Functions
provide("changeRating", changeRating);
provide("chooseTemplate", chooseTemplate);
provide("updateFormsData", updateFormsData);
provide("removeFormsData", removeFormsData);

watch(personalImage, (newValue) => {
  localStorage.setItem('personalImage', JSON.stringify(newValue));
}, { deep: true });
watch(personalInfoData, (newValue) => {
  localStorage.setItem('personalInfoData', JSON.stringify(newValue));
}, { deep: true });
watch(educationInfoData, (newValue) => {
  localStorage.setItem('educationInfoData', JSON.stringify(newValue));
}, { deep: true });
watch(workInfoData, (newValue) => {
  localStorage.setItem('workInfoData', JSON.stringify(newValue));
}, { deep: true });
watch(projectInfoData, (newValue) => {
  localStorage.setItem('projectInfoData', JSON.stringify(newValue));
}, { deep: true });
watch(skillInfoData, (newValue) => {
  localStorage.setItem('skillInfoData', JSON.stringify(newValue));
}, { deep: true });
watch(templatesInfoData, (newValue) => {
  localStorage.setItem('templatesInfoData', JSON.stringify(newValue));
}, { deep: true });

</script>

<style lang="scss">
html,
body {
  margin: 0;
  overflow-x: hidden;
}

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: linear-gradient(-30deg, #002b5b, #2b4865, #256d85, #8fe3cf);
  background-size: 400% 400%;
  animation: gradient 5s ease infinite;
}

.title {
  font-size: $title-font;
  text-transform: uppercase;
}

.svg {
  pointer-events: none;
  width: 100px;
  height: 100px;
  color: rgba(255, 255, 255, 0.2);
  position: absolute;
  bottom: 90vh;
  transform-style: preserve-3d;
  opacity: 0;
}

$total: 10;
@for $i from 1 through $total {
  //$scale: random(1) - 0.9;

  .svg:nth-child(#{$i}) {
    left: $i * 10%-10%;

    animation: raise#{$i} 10 + $i + $i * 0.01 + s linear infinite;

    animation-delay: random(20) - 20 + s;

    z-index: 0;
    //filter: blur($i - 6 + px);

    @keyframes raise#{$i} {
      0% {
        transform: scale(0.9);
      }
      50% {
        opacity: 1;
        transform: scale(1.5);
      }

      100% {
        opacity: 0;
        bottom: 0vh;
        transform: scale(0.9);
      }
    }

    @media (max-width: $breakpoint-tablet) {
      left: $i * 10%-30%;
    }
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
