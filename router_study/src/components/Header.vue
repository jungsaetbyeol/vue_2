<script setup></script>
<template>
  <header>
    <nav>
      <router-link to="/">홈</router-link> |
      <router-link to="/about">소개</router-link> |
      <router-link to="/pay">결제하기</router-link> |
      <router-link to="/reservation">예약하기</router-link> |
      <router-link to="/login">로그인</router-link> |
      <router-link to="/membership">회원가입</router-link> |
      <router-link to="/review">리뷰</router-link>
    </nav>
  </header>
  <router-view></router-view>
</template>
<style scoped>
header {
  background-color: lightseagreen;
  padding: 10px;
  text-align: center;
}
nav {
  margin: 0 10px;
  font-weight: bold;
  color: #fff;
}
nav a{
    color: #fff;
}
</style>
