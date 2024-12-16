<script setup>
import book_data from "../book_data.js";
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import {useRoute, useRouter} from "vue-router";
import {onMounted} from "vue";

const route = useRoute();
const router = useRouter();
const paramId = route.params.id;
const book = book_data.data.filter(book => book.id === paramId)[0]

onMounted(() => {
  if (!book) {
    router.push ({
      name: 'Home'
    })
  }
})
</script>

<template>
<primary-template>
  <div class="content">
    <img src="../assets/openbook.svg" alt="Open Book SVG"/>
    <div class="explain">
      <h1 v-text="book.title"/>
      <p>Issue: {{  book.number }}</p>
      <p>Summary: {{  book.summary }}</p>
    </div>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at posuere est, vitae faucibus nisl. Suspendisse viverra leo nec erat fermentum, ut condimentum eros facilisis. Donec a molestie est. Cras id eleifend sem. Ut laoreet nisl non metus tristique, in consequat nisl varius. Maecenas imperdiet metus ac velit ultricies, vel venenatis dolor ornare. Integer a elementum ex. Vivamus et fringilla erat, in convallis odio. </p>
    <p> Aenean bibendum elit ultricies ipsum varius viverra. Curabitur eu interdum quam. Integer finibus enim id quam varius egestas porta non diam. Mauris sagittis blandit mauris sit amet posuere. Maecenas non diam ullamcorper, tincidunt risus vitae, feugiat erat. Cras rhoncus neque orci, at tempor sem maximus ut. Vivamus nec augue dapibus, pharetra felis vitae, fermentum ligula. Mauris vel fringilla nulla. Suspendisse eget fermentum massa. Vestibulum aliquam condimentum nisi ut aliquam.</p>
    <p> Phasellus maximus enim arcu, vitae scelerisque quam vulputate et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac tempus dui, ac ultricies arcu. Suspendisse a porta ligula. Maecenas ac sodales enim. Donec vehicula suscipit felis. Quisque eleifend suscipit nibh, venenatis vestibulum lorem laoreet quis. Integer rhoncus varius tellus, ac sollicitudin sapien convallis ut.</p>
    <p> Proin facilisis egestas ante, id faucibus lacus maximus a. Etiam a velit velit. Duis placerat quam turpis, quis viverra eros ultricies ac. Donec id consectetur sem, id egestas sapien. Praesent turpis mi, maximus non mauris vitae, faucibus vestibulum eros. Nam vel dictum turpis. Curabitur ultricies tempus risus, a accumsan lectus aliquam vitae.</p>
    <p> Morbi fringilla orci eget erat tincidunt, eu pharetra turpis commodo. Sed placerat scelerisque nunc ut dignissim. Integer rhoncus ex nec tincidunt viverra. Vivamus consequat luctus orci nec venenatis. Mauris vulputate tempor mauris et semper. Quisque faucibus nibh dolor, ac maximus lacus vestibulum vel. Ut scelerisque ut massa elementum convallis.</p>
    <p> Convallis dolor ligula magna molestie nullam libero est. Tortor placerat mollis conubia conubia conubia justo. Luctus vulputate varius aliquet tristique hendrerit ultrices magna urna nisi. Semper eros mi eros enim commodo dapibus. Imperdiet pulvinar luctus rutrum sollicitudin; facilisi maximus. Dictum massa vitae praesent magnis convallis at. Ligula habitasse rhoncus facilisis; molestie consectetur volutpat. Sit maecenas congue facilisis nascetur justo a. Fames egestas etiam ac ante praesent parturient varius magnis sit.</p>
    <p> Parturient pharetra aptent; lacus lacus a himenaeos. Ullamcorper luctus dis at primis cursus pellentesque risus erat ridiculus? Nisi est phasellus maximus felis mus nibh sollicitudin. Interdum leo elit varius sed maximus. Dictum tortor placerat pharetra tempor erat senectus. Dignissim cubilia faucibus sollicitudin iaculis arcu.</p>
    <p> Magnis laoreet velit commodo torquent elit ad primis. Quam congue litora elementum velit volutpat cras. Blandit mattis himenaeos facilisis dolor nisl cras habitasse. Placerat aptent eleifend aliquam vestibulum et proin. Felis eu potenti ac enim curabitur cubilia. Fringilla pretium enim felis aenean aenean ornare praesent montes scelerisque. Natoque habitasse velit dolor pretium sem.</p>
    <p> Nibh sapien lacus eu dolor nisi. Pellentesque dis pellentesque est tempus sollicitudin suspendisse viverra vitae. Pulvinar ullamcorper elit mauris mattis cursus curae. Auctor vitae leo, dis fermentum iaculis lectus interdum facilisi tristique. Ultrices sem eros ligula aptent vel vulputate. Vehicula scelerisque sem netus sem viverra. Lacus quam sociosqu tincidunt purus urna! Platea iaculis curae donec volutpat dolor elementum torquent libero posuere. Adipiscing dapibus urna; ex dignissim egestas nam proin. Lobortis maecenas ut at elementum himenaeos, neque vitae vivamus.</p>
    <p> Metus ipsum consequat tempus vulputate, a sem molestie aliquet fermentum. Fusce proin habitant lacinia accumsan; bibendum etiam duis. Mollis pulvinar pretium faucibus iaculis tempus lorem volutpat at a. Ridiculus vitae accumsan neque massa suspendisse neque erat nec interdum. Pretium semper montes suspendisse inceptos massa cras. Neque sit nascetur laoreet; lacinia lobortis aenean. Laoreet sollicitudin hac vivamus sollicitudin velit mi cursus facilisis auctor.</p>
  </div>
</primary-template>
</template>

<style scoped>
h1{
  margin: 0 0 0.5rem 0;
}

img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 4%;
  }
</style>