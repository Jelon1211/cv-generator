<script setup lang="ts"></script>
<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/experience">Post Experience</router-link>
  </nav>
  <!-- Where the component of the active route will be rendered: -->
  <router-view></router-view>
</template>
