<script setup>
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import MainArcs from "../components/mainArcs.vue";
import SoloComics from "../components/soloComics.vue";
import CharacterDatabase from "../components/characterDatabase.vue";

</script>

<template>
  <section class="primary-template">
    <header>XERNO</header>
    <nav>
      <router-link :to="{name: 'Home'}">Home</router-link>
      <router-link :to="{name: 'MainArcs'}">Main Arcs</router-link>
      <router-link :to="{name: 'SoloComics'}">Solo Comics</router-link>
      <router-link :to="{name: 'CharacterDatabase'}">Character Database</router-link>
      <router-link :to="{name: 'About'}">About</router-link>
    </nav>

    <div class="content">
      <div class="explain">
      </div>
    </div>

    <section class="main">
      <slot></slot>
    </section>

  <footer>
    <div class="copyright">XERNO</div>
    <a href="#">Back to top page</a>
  </footer>
  </section>

</template>

<style scoped>
section.primary-template {
  nav {

  }
}
</style>