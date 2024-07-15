<template>
  <footer :class="type">
    <div id="text">
      <p>CVueMaker Copyright © 2022 Sharif Alalem - All rights reserved</p>
    </div>
    <div id="social"></div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "transparent",
  },
  social: {
    type: Array as () => Array<any>,
    default: () => [{ url: "/", name: "Home" }],
  },
});
</script>

<style lang="scss" scoped>
footer {
  padding: 10px 0;
  color: white;

  &.transparent {
    background-color: transparent;
  }

  &.solid {
    background-color: $dark-blue;
  }

  #desktop {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  #footer-desktop-nav {
    padding-right: 5px;
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
