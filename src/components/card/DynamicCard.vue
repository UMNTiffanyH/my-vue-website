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
    <router-link :to="{name: 'Story', params: { id: data.id }}">
      <img :src="data.cover" :alt="title"/>
     </router-link>
    <h4>{{ data.title }} {{ data.number }}</h4>
  </section>

</template>

<style scoped>
section.dynamic-card {
  /* Mobile first */
  display: flex;
  flex-flow: column;
  h4 {
    display: none;
    margin: 0;
  }
  &:hover {
    cursor: pointer;
  }

  /* tablet viewports */
  @media (width >= 600px) {
    h4 {
      display: unset;
    }
  }
}
</style>