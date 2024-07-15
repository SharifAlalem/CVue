<template>
  <header :class="type">
    <div id="desktop">
      <div id="logo-desktop">
        <router-link to="/"> CVue Maker</router-link>
      </div>
      <div id="header-desktop-nav">
        <router-link
          class="nav-item"
          v-for="(link, index) in links"
          :key="index"
          :to="link['url']"
          >{{ link["name"] }}</router-link
        >
      </div>
    </div>
    <div id="mobile">
      <div id="logo-mobile"></div>
      <div id="header-mobile-nav"></div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "transparent",
  },
  links: {
    type: Array as () => Array<any>,
    default: () => [{ url: "/", name: "Home" }],
  },
  logo: {
    type: String,
    default: "../../assets/images/logo.png",
  },
});
</script>

<style lang="scss" scoped>
header {
  padding: 20px 0;

  width: 100%;

  #logo-desktop a {
    color: white;
    text-decoration: none;
    padding-left: 20px;
  }
  &.transparent {
    position: absolute;
    top: 0;
    z-index: 99999999;

    background-color: rgba(255, 255, 255, 0.2);
  }

  &.solid {
    background-color: red;
  }

  #desktop {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  #header-desktop-nav {
    padding-right: 30px;
    display: inline-flex;
    justify-content: space-between;

    .nav-item {
      margin: 0 5px;
      text-decoration: none;
      color: white;
    }
  }
}
</style>
