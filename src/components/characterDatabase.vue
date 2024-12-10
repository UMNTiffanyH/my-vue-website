<script setup>
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import Character from "./card/Character.vue";

</script>

<template>
  <primary-template>
    <div class="content">
      <div class ="explain">
        <h1><img src="../assets/superhero.svg" alt="Superhero SVG"/> CHARACTER DATABASE</h1>
        <p>Losing track on who is who? Everyone is the main character in their own story, some more than others. Take a look to take a further in depth look into these characters. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <h1> Golden Collective </h1>
      <div class="Characters">
        <character name="Brandon Harvey"
              alias="Voltage"
              age="16"
              alignment="Hero"/>
        <character name="Adrian Rodriguez"
              alias="Sketch"
              age="17"
              alignment="Hero"/>
        <character name="Alicia Williams"
              alias="Iron Maiden"
              age="16"
              alignment="Hero"/>
      </div>

      <h1> The Summit </h1>
      <div class="Characters">
        <character name="Atlas Cassius"
                   alias="The Typhoon"
                   age="16"
                   alignment="Villain"/>
        <character name="Beatrice Cassius"
                   alias="Beat/Death's Raven"
                   age="16"
                   alignment="Anti-Villain"/>
      </div>

      <h1> New Tomorrow </h1>
      <div class="Characters">
        <character name="Unknown"
                   alias="Morrow "
                   age="43"
                   alignment="Villain"/>
      </div>
    </div>
  </primary-template>
</template>

<style scoped>
div.Characters {
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: white solid 2px;
  margin-bottom: 0.5rem;
}

/* tablet */
@media (width >= 600px) {
  div.Characters {
    display: flex;
    flex-flow: wrap row;
  }
}
/*desktop viewports*/
@media (width >= 800px) {
  div.Characters {
    display: flex;
    flex-flow: wrap row;
  }
}

</style>