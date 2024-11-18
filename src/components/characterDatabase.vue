<script setup>

import Card from "./issuecard/Card.vue";
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
    <div class="content">
      <div class ="explain">
        <h1>Character Database</h1>
        <body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</body>
      </div>

      <h1> Current Arc </h1>
      <div class="cards">
        <card title="Bolt and the Raging Storm"
              genre="Action/ Drama"
              issuenumber="#01"
              summary="summary"/>

        <card title="Iron Maiden"
              genre="Sci Fi/ Cyberpunk"
              issuenumber="#01"
              summary="summary"/>

        <card title="Sketch: Homegrown Hero"
              genre="Modern Fantasy/ Supernatural"
              issuenumber="#01"
              summary="summary"/>
      </div>
    </div>
  </primary-template>
</template>

<style scoped>

</style>