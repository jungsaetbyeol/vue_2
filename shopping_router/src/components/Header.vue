<script setup></script>

<template>
  <header class="header">
    <h1>쇼핑몰</h1>
    <nav>
      <router-link to="/">홈</router-link> |
      <router-link to="/about">소개</router-link> |
      <router-link to="/event">이벤트</router-link> |
      <router-link to="/review">이용후기</router-link> |
      <router-link to="/fq">F&Q</router-link> |
      <router-link to="/reservation">예약하기</router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  background: #333;
  color: white;
  padding: 1rem;
  text-align: center;
}
nav a {
  color: #fff;
}
</style>
