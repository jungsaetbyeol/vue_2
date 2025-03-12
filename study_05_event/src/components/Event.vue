<script setup>
import { ref } from "vue";
// 1. 버튼 클릭 이벤트
const count = ref(0);
// 2. 입력 이벤트
const message = ref(""); // 입력된 메시지를 저장하는 변수
// 3. 마우스 오버 이벤트
const hover = ref(false);
// 4. 키보드 이벤트
const newMessage = ref(""); // 키보드 이벤트에서 입력된 메시지
const messages = ref([]); // 추가된 메시지를 저장하는 배열
const addMessage = () => {
  if (newMessage.value) {
    messages.value.push(newMessage.value);
    newMessage.value = ""; // 입력창 초기화
  }
};
// 5. 폼 제출 이벤트
const username = ref("");
const saveName = ref("");
// 폼 제출 기능
const submitFrom = () => {
  saveName.value = username.value;
};
// 6. 더블 클릭 이벤트
const color = ref("lightgray");
const toggleColor = () => {
  color.value = color.value === "lightgray" ? "lightblue" : "lightgray";
};
// 7. 마우스 위치
const x = ref(0);
const y = ref(0);
// 마우스 위치 업데이트 함수
const updatePosition = (event) => {
  x.value = event.clientX;
  y.value = event.clientY;
};
// 8. 체크박스
const checked = ref(false);
// 9. 컨텍스트 메뉴
const menuVisible = ref(false);
const menuX = ref(0);
const menuY = ref(0);
const showMenu = (event) => {
  menuVisible.value = true;
  menuX.value = event.clientX;
  menuY.value = event.clientY;
};
const selectOption = (option) => {
  alert(`${option}선택됨`);
  menuVisible.value = false;
};
</script>

<template>
  <div class="container">
    <h1>vue event</h1>
    <!-- 1. 버튼 클릭 이벤트 -->
    <button @click="count++">클릭 {{ count }} 번</button> <br />
    <!-- 2. 입력 이벤트 -->
    <input type="text" placeholder="입력하세요." v-model="message" />
    <p>입력값: {{ message }}</p>
    <!-- 3. 마우스 오버 이벤트 -->
    <button
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :style="{
        backgroundColor: hover ? 'blue' : 'gray',
        color: hover ? 'white' : 'black',
      }">
      마우스를 올려보세요</button
    ><br />
    <!-- 4. 키보드 이벤트 -->
    <input
      type="text"
      v-model="newMessage"
      @keyup.enter="addMessage"
      placeholder="Enter후 입력값 출력" />
    <ul>
      <li v-for="(msg, index) in messages" :key="index">{{ msg }}</li>
    </ul>
    <!-- 5. 폼 제출 -->
    <!-- 폼 제출하면 username 값을 saveName에 저장하고 경고창을 띄움 -->
    <form @submit.prevent="submitFrom">
      <input type="text" v-model="username" placeholder="이름 입력" />
      <button type="submit">제출</button>
    </form>
    <p>입력된 이름: {{ saveName }}</p>
    <!-- 6. 더블 클릭 이벤트 -->
    <div
      class="box"
      :style="{ backgroundColor: color }"
      @dblclick="toggleColor">
      더블 클릭하세요!
    </div>
    <!-- 7. 마우스 위치 추적 -->
    <div class="tracker" @mousemove="updatePosition">
      X:{{ x }} , Y: {{ y }}
    </div>
    <!-- 8. 체크박스 -->
    <label>
      <input type="checkbox" v-model="checked" />
      동의합니다.
    </label>
    <p>{{ checked ? "동의하셨습니다." : "동의가 필요합니다." }}</p>
    <!-- 9. 컨텍스트 메뉴 (우클릭시 메뉴나타남) -->
    <div class="box box1" @contextmenu.prevent="showMenu($event)">
      우클릭하세요!
    </div>
    <ul
      v-if="menuVisible"
      class="context-menu"
      :style="{ top: `${menuY}px`, left: `${menuX}px` }">
      <li @click="selectOption('옵션1')">옵션1</li>
      <li @click="selectOption('옵션2')">옵션2</li>
    </ul>
  </div>
</template>

<style scoped>
.box {
  width: 200px;
  height: 100px;
  border: 1px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 마우스 위치 추적 박스 */
.tracker {
  width: 100%;
  height: 100px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.context-menu {
  position: fixed;
  background-color: #fff;
  border: 1px solid #ccc;
  list-style: none;
  padding: 5px;
}
.context-menu li {
  padding: 5px;
  cursor: pointer;
}
.context-menu li:hover {
  background-color: aliceblue;
}
/* .box1{
    position: relative;
   
} */
</style>
