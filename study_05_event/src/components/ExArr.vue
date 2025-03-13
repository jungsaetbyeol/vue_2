<script setup>
import { ref } from "vue";
import TodoList from "./TodoList.vue";
import ExArr_ex from "./ExArr_ex.vue";
const showTodoList = ref(false)
const showArr = ref(false)
</script>
<template>
  <div class="wrap">
    <div class="container">
      <h1>TodoList Ex</h1>
      <button @click="showTodoList = !showTodoList">
        {{ showTodoList ? "닫기" : "보기"}}
      </button>
      <TodoList v-if="showTodoList"/>
    </div>
    <hr>
    <div class="container">
      <h1>Array Study</h1>
      <button @click="showArr = !showArr">
        {{ showArr ? "닫기" : "보기"}}
      </button>
      <ExArr_ex v-if="showArr"/>
    </div>
  </div>
</template>
<style scoped>
.wrap{
    background-color: aliceblue;
    display: flex;
    justify-content: center;
}
.container{
    flex: 1;
    text-align: center;
}
</style>
