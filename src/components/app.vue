<template>
  <div id="contain">
    <h1>速 讯</h1>
    <h2>会有某个人一直存在这里。</h2>
    <div class="btns">
      <router-link to="/home/register" class="btn">注册</router-link>
      <router-link to="/home/login">登陆</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
  @import "../assets/app.css";
</style>
