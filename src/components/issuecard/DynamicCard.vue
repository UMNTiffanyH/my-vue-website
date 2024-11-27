<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="dynamic-card">
    <div class="left">
      <img :src="data.cover" />
    </div>

    <div class="right">
      {{ data.title }}
      {{ data.number }}
      {{ data.genre}}
    </div>
  </section>
</template>

<style scoped>
section.dynamic-card {
  display: flex;
  flex-flow: wrap column ;
}


/* tablet viewports */
@media (width >= 600px) {
  section.dynamic-card {
    display: flex;
    flex-flow: wrap row;


  }
}
/*desktop viewports*/
@media (width >= 800px) {
  section.dynamic-card {
    display: flex;
    flex-flow: wrap row;
  }
}
</style>