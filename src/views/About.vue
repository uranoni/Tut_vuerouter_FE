<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link :to="{name:'profile'}">個人履歷</router-link>
    <router-link to="/about/award">得獎經驗</router-link>
    <router-view></router-view>
  </div>
</template>
