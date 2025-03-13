<script setup>
import Event from "./components/Event.vue";
import ExArr from "./components/ExArr.vue";
import { ref } from "vue";
const EventList = ref(false);
</script>

<template>
  <ExArr />
  <div class="Event">
    <button @click="EventList = !EventList">
      {{ EventList ? "닫기" : "Event 예제 보기" }}
    </button>
    <Event v-if="EventList" />
  </div>
</template>

<style scoped>
.Event{
    padding-top: 100px;
    
}
</style>
