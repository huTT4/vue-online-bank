<template>
  <form class="card" @submit.prevent="onSubmit">
    <h1>Регистрация</h1>

    <div :class="['form-control', { invalid: eError }]">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" @blur="eBlur">
      <small v-if="eError">{{ eError }}</small>
    </div>

    <div :class="['form-control', { invalid: pError }]">
      <label for="password">Пароль</label>
      <input type="text" id="password" v-model="password" @blur="pBlur">
      <small v-if="pError">{{ pError }}</small>
    </div>

    <button class="btn primary" type="submit" :disabled="isSubmitting || isTooManyAttempts || isThereMessage">Зарегистрироваться</button>

    <router-link to="/auth" @click="$store.commit('clearMessage')">Войти</router-link>

    <div class="text-danger" v-if="isTooManyAttempts">
      Вы слишком часто пытаетесь войти в систему попробуйте позже
    </div>

    <div class="text-danger" v-if="isThereMessage">
      Закройте сообщение об ошибке
    </div>
  </form>
</template>

<script>
import { useAuthForm } from '@/use/auth-form'

export default {
  setup() {
    return { ...useAuthForm('register') }
  }
}
</script>

<style>

</style>