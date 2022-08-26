<template>
  <div id="app">
    <Notifications />
    <div class="content">
      <AppHeader />
      <router-view></router-view>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "./components/MainFooter.vue";
import AppHeader from "./components/header/index.vue";
import Notifications from "./components/notifications/index.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    AppFooter,
    AppHeader,
    Notifications,
  },
  computed: {
    ...mapGetters("auth", ["isLoggedIn"]),
  },
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.content {
  flex-grow: 1;
}
</style>



