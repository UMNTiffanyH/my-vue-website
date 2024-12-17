<script setup>
import character_data from "../../character_data.js";

import {useRouter} from "vue-router";
const router = useRouter()

defineProps( {
  name: {
    type: String,
    required: true
  },
  alias: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: false,
  },
  alignment: {
    type: String,
    required: false,
  },
  cover:{
    type: String,
    required: true,
  }
})

</script>

<template>
  <section class="character">
    <img src="http://dummyimage.com/95x125.png/00f3ff/ffffff" alt="Headshot">
    <section class = "information">
      <div class="name">{{ name }}</div>
      <span class="alias">{{ alias }}</span>
      <div class="age">{{ age }}</div>
      <div class="alignment">{{ alignment }}</div>
    </section>
  </section>
</template>

<style scoped>
section.character {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100px;
  max-width: 160px;
  width: 60%;
  border-radius: 10px;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: #ffcc00;

  section:hover {
    cursor: pointer;
  }
    section.information {
      padding: 0.5rem;
      font-size: 12px;
    }
      .name, .alias {
        font-weight: bold;
      }
      .age {
        font-weight: lighter;
      }
    }
      img {
        width: 100%;
      }

/* tablet */
@media (width >= 600px) {
  section.information {
    font-size: 14px;
  }
}
/*desktop viewports*/
@media (width >= 800px) {
  section.information {
    font-size: 16px;
  }
}


</style>