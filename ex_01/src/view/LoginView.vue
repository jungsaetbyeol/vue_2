<script setup>
import { ref } from 'vue';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const email = ref('');
const password = ref('');
const message = ref('');

const login = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    message.value = '로그인 성공!';
  } catch (error) {
    message.value = error.message;
  }
};
</script>

<template>
  <div class="p-5 max-w-md mx-auto">
    <h1 class="text-2xl font-bold mb-4">로그인</h1>
    <input v-model="email" type="email" placeholder="이메일" class="border p-2 w-full mb-2" />
    <input v-model="password" type="password" placeholder="비밀번호" class="border p-2 w-full mb-2" />
    <button @click="login" class="bg-blue-500 text-white p-2 w-full rounded">로그인</button>
    <p class="mt-2 text-green-500">{{ message }}</p>
  </div>
</template>

<style scoped>
input {
  border-radius: 0.5rem;
}
</style>
