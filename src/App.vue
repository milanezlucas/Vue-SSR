<template>
    <div id="app">
        <p>
            <router-link to="/">Go To Home</router-link>
            <router-link to="/about">Go To About</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>
<script>
  export default {
    name: 'App',
    metaInfo: {
        title: 'Default Title'
    }
  }
</script>