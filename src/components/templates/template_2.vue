<template>
  <template
    ref="pdfContent"
    id="content"
    class="container"
    :style="bgColor"
    contenteditable="true"
  >
    <aside>
      <div class="contact">
        <h1>Contact Me</h1>
        <ul>
          <li>
            <span class="icon"> <i class="fa-location-pin fa-solid"></i> </span
            ><span class="text"
              >{{ findValue(personalInfoData, "streetAndNum") }} ,
              {{ findValue(personalInfoData, "city") }},{{
                findValue(personalInfoData, "country")
              }}
            </span>
          </li>
          <li>
            <span class="icon"> <i class="fa-phone fa-solid"></i> </span
            ><span class="text"
              >{{ findValue(personalInfoData, "phone") }}
            </span>
          </li>
          <li>
            <span class="icon"> <i class="fa-at fa-solid"></i> </span
            ><span class="text"
              >{{ findValue(personalInfoData, "email") }}
            </span>
          </li>
        </ul>
      </div>
      <div class="social">
        <h1>Social Links</h1>
        <ul>
          <li>
            <span class="icon"> <i class="fa-circle fa-solid"></i> </span
            ><span class="text">text text text</span>
          </li>
          <li>
            <span class="icon"> <i class="fa-circle fa-solid"></i> </span
            ><span class="text">text text text</span>
          </li>
          <li>
            <span class="icon"> <i class="fa-circle fa-solid"></i> </span
            ><span class="text">text text text</span>
          </li>
        </ul>
      </div>
      <div class="other">
        <h1>Other Info</h1>
        <div class="skills">
          <h2>skills</h2>
          <ul>
            <li v-for="skill in skillInfoData.forms" :key="skill.id">
              <span class="Title">
                {{ findValue(skill.data, "skillTitle") }}
              </span>

              <div>
                <span
                  v-for="solid in findValue(skill.data, 'rating')"
                  :key="solid"
                >
                  <i class="fa-star star fa-solid"></i>
                </span>

                <span
                  v-for="regular in 5 - findValue(skill.data, 'rating')"
                  :key="regular"
                >
                  <i class="fa-star star fa-regular"></i>
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div class="awards">
          <h2>awards</h2>
        </div>
        <div class="languages">
          <h2>languages</h2>
        </div>
        <div class="interests">
          <h2>interests</h2>
        </div>
      </div>
    </aside>
    <main>
      <div class="personal">
        <h1>
          {{ findValue(personalInfoData, "fname") }}
          {{ findValue(personalInfoData, "lname") }}
        </h1>
        <h3>{{ findValue(personalInfoData, "profession") }}</h3>
      </div>
      <div class="about">
        <h1>about me</h1>
        <p>{{ findValue(personalInfoData, "summary") }}</p>
      </div>
      <div class="work">
        <h1>Experience</h1>
        <ul>
          <li v-for="experience in workInfoData.forms" :key="experience.id">
            <span class="date"
              >{{ findValue(experience.data, "startDate") }} -{{
                findValue(experience.data, "endDate")
              }} </span
            ><span class="companyName"
              >{{ findValue(experience.data, "companyName") }}
            </span>
            <span class="Title"
              >| {{ findValue(experience.data, "jobTitle") }}
            </span>
            <div class="summary">
              {{ findValue(experience.data, "summary") }}
            </div>
          </li>
        </ul>
      </div>
      <div class="education">
        <h1>Eduction</h1>
        <ul>
          <li v-for="education in educationInfoData.forms" :key="education.id">
            <span class="date"
              >{{ findValue(education.data, "startDate") }} -{{
                findValue(education.data, "endDate")
              }}
            </span>
            <span class="degreeTitle">
              {{ findValue(education.data, "degreeTitle") }}</span
            >
            <span class="educationName"
              >| {{ findValue(education.data, "college") }}
            </span>
          </li>
        </ul>
      </div>
      <div class="projects">
        <h1>Projects</h1>
        <ul>
          <li v-for="project in projectInfoData.forms" :key="project.id">
            <span class="date"
              >{{ findValue(project.data, "startDate") }} -
              {{ findValue(project.data, "endDate") }}
            </span>
            <span class="companyName">{{
              findValue(project.data, "companyName")
            }}</span>
            <span class="Title"
              >| {{ findValue(project.data, "projectTitle") }}
            </span>
            <div class="summary">
              {{ findValue(project.data, "description") }}
            </div>
            <a :href="findValue(project.data, 'link')">
              {{ findValue(project.data, "link") }}
            </a>
          </li>
        </ul>
      </div>
    </main>
    <footer>developed by sharif Alalem</footer>
  </template>
</template>
<script setup lang="ts">
import { inject, ref, onMounted } from "vue";

let bgColor: any = inject("bgColor");
let pdfContent: any = ref(null);

const personalImage: any = inject("personalImage");
const personalInfoData: any = inject("personalInfoData");
const skillInfoData: any = inject("skillInfoData");
const educationInfoData: any = inject("educationInfoData");
const workInfoData: any = inject("workInfoData");
const projectInfoData: any = inject("projectInfoData");
const updatepdfContent: any = inject("updatepdfContent");

onMounted(() => {
  updatepdfContent(pdfContent.value);
});

const findValue = (dataArray: any, targetValue: any) => {
  return dataArray.find((input: any) => input.inputName === targetValue)[
    targetValue
  ];
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins";

.actions {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px 0;
}
button {
  z-index: 999999999999;
  cursor: pointer;
}

.container {
  font-family: "Open Sans", sans-serif;
  width: 100%;
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  grid-template-rows: 10fr 0.1fr;
  grid-template-areas:
    "aside main"
    "footer footer";
}

main {
  @include color_scheme(white, black);
  grid-area: main;
  padding: 10%;
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;

  div {
    margin-bottom: 30px;
  }

  .personal {
    h1 {
      font-size: 40px;
      text-decoration: none;
    }

    h3 {
      font-size: 20px;
    }
  }

  h1 {
    color: var(--bg-color);
    text-transform: uppercase;
    font-size: 16px;
    margin: 0;
    text-decoration: underline;
  }
}
aside {
  @include color_scheme(var(--bg-color), var(--font-color));
  grid-area: aside;
  text-align: left;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  div {
    margin-bottom: 30px;
  }

  .image img {
    margin: 20px;
    text-align: center;
    border-radius: 50%;
  }

  h1 {
    text-transform: uppercase;
    text-decoration: underline;
    font-size: 16px;
    margin: 0;
  }

  h2 {
    text-transform: uppercase;
    font-size: 13px;
    margin: 5xp 0;
  }
  ul {
    list-style: none;
    padding: 0 5px;
    margin: 0;

    li {
      margin: 10px 0;
    }
    .icon {
      font-size: 12px;
      margin-right: 5px;
    }
    .text {
      font-size: 12px;
    }
  }

  .rating {
    list-style: none;
    display: inline-flex;
    padding: 0;
    margin: 0;

    .star {
      padding: 10px 5px;
      border-radius: 4px;
      font-size: 20px;
    }
  }
}
footer {
  @include color_scheme(black, white);
  grid-area: footer;
  padding: 5px 0;
  font-size: 10px;
  font-family: "Arial Narrow", Arial, sans-serif;
}
</style>
